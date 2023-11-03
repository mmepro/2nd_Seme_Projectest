from flask import Flask, request, jsonify
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

# 영화 데이터셋 로드
data = pd.read_csv('movieDataSet.csv', encoding='utf-8')

# 'overview' 열의 NaN 값을 빈 문자열로 대체
data['summary'] = data['summary'].fillna('')

# 'genres' 열의 NaN 값을 빈 문자열로 대체
data['genres'] = data['genres'].fillna('')

# TF-IDF 벡터 생성
tfidf_vectorizer = TfidfVectorizer(stop_words='english')
tfidf_matrix = tfidf_vectorizer.fit_transform(data['summary'])

# 코사인 유사도 계산 (요약 내용에 대한 유사도)
cosine_sim_summary = linear_kernel(tfidf_matrix, tfidf_matrix)

# 'title' 열을 인덱스로 설정
data = data.set_index('title')

@app.route('/recommend-movies', methods=['POST'])
def recommend_movies():
    data = request.get_json()
    title = data['title']
    overview = data['overview']
    genres = data['genres']

    # 선택한 영화와 데이터베이스의 영화 간의 유사성을 계산
    recommended_movies = get_combined_similarity_scores(title, overview, genres)

    return jsonify(recommended_movies)
def get_combined_similarity_scores(title, overview, genres):
    # 요약 내용 유사도 계산
    summary_sim_scores = list(enumerate(cosine_sim_summary[data.index.get_loc(title)]))
    summary_sim_scores = sorted(summary_sim_scores, key=lambda x: x[1], reverse=True)
    summary_sim_scores = summary_sim_scores[1:11]  # 상위 10개 유사한 요약 내용의 영화 선택

    # 장르 유사도 계산
    genre_sim_scores = []
    for index, row in data.iterrows():
        common_genres = set(row['genres']).intersection(set(genres))
        genre_sim_scores.append((index, len(common_genres) / len(set(row['genres']) | set(genres))))

    genre_sim_scores = sorted(genre_sim_scores, key=lambda x: x[1], reverse=True)
    genre_sim_scores = genre_sim_scores[1:11]  # 상위 10개 유사한 장르의 영화 선택

    # 종합 유사도 계산
    combined_sim_scores = {}
    for index, _ in summary_sim_scores:
        if index in combined_sim_scores:
            combined_sim_scores[index] += 1

    for index, _ in genre_sim_scores:
        if index in combined_sim_scores:
            combined_sim_scores[index] += 1
        else:
            combined_sim_scores[index] = 1

    combined_sim_scores = [(index, score) for index, score in combined_sim_scores.items()]
    combined_sim_scores = sorted(combined_sim_scores, key=lambda x: x[1], reverse=True)
    combined_sim_scores = combined_sim_scores[:10]  # 상위 10개 종합 유사도의 영화 선택

    return [{'title': data.index[i], 'overview': data['summary'][i]} for i, _ in combined_sim_scores]

if __name__ == '__main__':
    app.run()
