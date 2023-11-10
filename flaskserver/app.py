# from flask import Flask, request, jsonify
# import pandas as pd
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.metrics.pairwise import linear_kernel
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)
# @app.route('/')
# def hello():
#     return 'Hello, World!'

# @app.route('/users')
# def users():
# 	# users 데이터를 Json 형식으로 반환한다
#     return {"members": [{ "id" : 1, "name" : "yerin" },
#     					{ "id" : 2, "name" : "dalkong" }]}


# # 영화 데이터셋 로드
# data = pd.read_csv('movieDataSet.csv', encoding='utf-8')

# # 필요한 열 선택
# data = data[['movieCode', 'title', 'summary', 'genres']]

# # 'overview' 열의 NaN 값을 빈 문자열로 대체
# data['summary'] = data['summary'].fillna('')

# # 'genres' 열의 NaN 값을 빈 문자열로 대체
# data['genres'] = data['genres'].fillna('')

# # TF-IDF 벡터 생성
# tfidf_vectorizer = TfidfVectorizer(stop_words='english')
# tfidf_matrix = tfidf_vectorizer.fit_transform(data['summary'])

# # 코사인 유사도 계산 (요약 내용에 대한 유사도)
# cosine_sim_summary = linear_kernel(tfidf_matrix, tfidf_matrix)

# # 'title' 열을 인덱스로 설정
# data = data.set_index('title')

# @app.route('/recommend-movies', methods=['GET'])
# def recommend_movies():
#     # 예시 데이터로 '기생충' 사용
#     title = '기생충'

#     if title in data.index:
#         combined_similarity_scores = get_combined_similarity_scores(title)

#         if len(combined_similarity_scores) > 0:
#             recommended_movies = []
#             for movie_idx, score in combined_similarity_scores:
#                 movie_name = data.iloc[movie_idx].name
#                 recommended_movies.append({'title': movie_name, 'score': score})
#             return jsonify(recommended_movies)
#         else:
#             return jsonify({'message': '유사한 영화를 찾을 수 없습니다.'})
#     else:
#         return jsonify({'message': '해당 영화를 찾을 수 없습니다.'})

# def get_combined_similarity_scores(title, cosine_sim_summary=cosine_sim_summary):
#     # 해당 영화의 요약 내용 가져오기
#     indices = pd.Series(data.index, index=data.index).to_dict()

#         # 해당 영화의 요약 내용 가져오기
#     movie_summary = data.loc[title]['summary']  # data[data['title'] == title]['summary'].values[0] 대신 사용

#     # 해당 영화의 장르 정보 가져오기
#     movie_genres = data.loc[title]['genres']  # data[data['title'] == title]['genres'].values[0] 대신 사용

#     # 요약 내용을 기반으로 유사한 영화 찾기
#     summary_sim_scores = list(enumerate(cosine_sim_summary[index_for_title]))
#     summary_sim_scores = sorted(summary_sim_scores, key=lambda x: x[1], reverse=True)
#     summary_sim_scores = summary_sim_scores[1:11]  # 상위 10개 유사한 요약 내용의 영화 선택

#     # 장르를 고려하여 요약 내용 유사도에 가중치 부여
#     combined_sim_scores = []
#     for i in range(len(summary_sim_scores)):
#         sim_movie = summary_sim_scores[i][0]
#         sim_score = summary_sim_scores[i][1]

#         # 요약 내용과 장르 유사도를 결합한 종합 유사도 계산
#         combined_score = sim_score + 0.1 * len(set(movie_genres) & set(data['genres'][sim_movie])) / len(set(movie_genres) | set(data['genres'][sim_movie]))
#         combined_sim_scores.append((sim_movie, combined_score))

#     # 종합 유사도 기준으로 정렬
#     combined_sim_scores = sorted(combined_sim_scores, key=lambda x: x[1], reverse=True)

#     return combined_sim_scores


# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, request, jsonify
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
# CSV 파일 로드
df = pd.read_csv('movieDataSet.csv')

# NaN 값을 빈 문자열로 변환
df['summary'] = df['summary'].fillna('')

# TF-IDF Vectorizer 초기화
tfidf = TfidfVectorizer(stop_words='english')

# 데이터셋의 'summary' 칼럼에 대해 TF-IDF 행렬을 계산
tfidf_matrix = tfidf.fit_transform(df['summary'])

# 코사인 유사도 매트릭스 계산
cosine_sim = linear_kernel(tfidf_matrix, tfidf_matrix)

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
# @app.route('/recommend-movies', methods=['POST'])
# def recommend_movies():
#     data = request.get_json()
#     selected_movies = data.get('selectedMovies', [])

#     if len(selected_movies) == 3:
#         # 여기에서 선택한 영화 목록을 기반으로 추천을 생성합니다.
#         # 추천 생성 코드를 작성하세요.
#         recommendations = generate_recommendations(selected_movies)
#         return jsonify(recommendations=recommendations)
#     else:
#         return jsonify({"error": "최소 세 개의 영화를 선택해야 합니다."}), 400

# # 선택한 영화 목록을 기반으로 추천을 생성하는 함수
# def generate_recommendations(selected_movies):
#     # 여기에서 선택한 영화 목록을 기반으로 추천을 생성하는 코드를 작성하세요.
#     # 선택한 영화 목록은 selected_movies 변수에 있습니다.
#     # 추천 결과를 리스트 형태로 반환하세요.
#     recommendations = []
#     # 추천을 생성하는 코드 작성
#     # 예시: 선택한 영화 목록에서 유사한 영화를 찾아서 반환
#     for movie in selected_movies:
#         # 각 영화별로 추천을 생성하는 코드 작성
#         # 예시: 선택한 영화와 유사한 영화를 찾아서 recommendations 리스트에 추가
#         recommended_movies = get_recommendations(movie)
#         recommendations.extend(recommended_movies)

#     return recommendations

if __name__ == '__main__':
    app.run(debug=True)
