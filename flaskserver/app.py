from flask import Flask, request, jsonify
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from flask_cors import CORS
from collections import Counter

app = Flask(__name__)
CORS(app)
# 기존의 영화 데이터셋 로드
df = pd.read_csv('movieDataSet.csv')
df['genres'] = df['genres'].fillna('')
# NaN 값을 빈 문자열로 변환
df['summary'] = df['summary'].fillna('')

# 현재 상영 중인 영화 데이터셋 로드
now_playing_df = pd.read_csv('nowPlaying.csv')
now_playing_df['genres'] = now_playing_df['genres'].fillna('')

# TF-IDF Vectorizer 초기화
tfidf = TfidfVectorizer(stop_words='english')

# 데이터셋의 'summary' 칼럼에 대해 TF-IDF 행렬을 계산
tfidf_matrix_summary = tfidf.fit_transform(df['summary'])

# 데이터셋의 'genres' 칼럼에 대해 TF-IDF 행렬을 계산
tfidf_matrix_genres = tfidf.fit_transform(df['genres']) 

# 각 행렬을 합치거나 연결하여 하나의 TF-IDF 행렬로 만듦 (예를 들어 scipy의 hstack 사용)
from scipy.sparse import hstack
tfidf_matrix_combined = hstack((tfidf_matrix_summary, tfidf_matrix_genres))

# 코사인 유사도 매트릭스 계산
cosine_sim = linear_kernel(tfidf_matrix_combined, tfidf_matrix_combined)

# 영화의 타이틀과 DataFrame 인덱스를 매핑할 딕셔너리를 생성
indices = pd.Series(df.index, index=df['title']).to_dict()

# 제목을 기반으로 추천을 받는 함수
def get_recommendations(title, cosine_sim=cosine_sim):
    # 선택한 영화에 대한 인덱스 가져오기
    idx = indices[title]

    # 해당 영화의 유사도 점수를 가져오기
    sim_scores = list(enumerate(cosine_sim[idx]))

    # 유사도에 따라 영화들을 정렬
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # 가장 유사한 10개의 영화를 가져오기
    sim_scores = sim_scores[1:11]

    # 영화의 인덱스를 가져오기
    movie_indices = [i[0] for i in sim_scores]

    # 가장 유사한 10개의 영화 제목을 반환
    return df['title'].iloc[movie_indices]

@app.route('/movies', methods=['GET'])

def recommend_movies():
    # 쿼리 매개변수로 'title' 가져오기
    title = request.args.get('title', '')
    if title:
        try:
            recommendations = get_recommendations(title)
            # JSON 형태로 추천 영화 목록 반환
            return jsonify(recommendations=recommendations.tolist())
        except KeyError:
            # 입력된 제목이 데이터셋에 없는 경우
            return jsonify({"error": "Movie not found in the dataset"}), 404
    else:
        # 제목이 제공되지 않은 경우
        return jsonify({"error": "No title provided"}), 400

@app.route('/nowplaying', methods=['GET'])

def recommend_playing_movies():
    # 사용자의 관람 이력에서 장르 가져오기
    user_history = request.args.getlist('watched_genres')
    if not user_history:
        return jsonify({"error": "No watched genres provided"}), 400

    # 장르 별 빈도수 계산
    genre_counts = Counter(user_history)
    
    # 가장 많이 본 상위 장르들 추출 (예: 상위 3개)
    top_genres = [genre for genre, _ in genre_counts.most_common(3)]

    # 현재 상영 중인 영화 중 상위 장르들 중 하나라도 포함하는 영화 추천
    recommended_movies = now_playing_df[now_playing_df['genres'].apply(lambda genres: any(genre in genres for genre in top_genres))]
    
    if recommended_movies.empty:
        return jsonify({"error": "No movies found for the most watched genres"}), 404

    return jsonify(recommendations=recommended_movies['title'].tolist())

if __name__ == '__main__':
    app.run(debug=True)
