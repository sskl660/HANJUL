from parse_book import load_dataframes
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import time
import random
import pandas as pd

# 최대 행 수 설정
pd.set_option('display.max_rows', 500)
# 최대 열 수 설정
pd.set_option('display.max_columns', 500)
# 최대 표시 가로 길이
pd.set_option('display.width', 1000)

"""데이터 로드"""
data = load_dataframes()

"""원하는 문장 입력"""
sentence = input()
start = time.time()

"""초기 데이터 가공"""
# 첫번째 행을 지우고 해당 데이터를 데이터에 포함 시켜서 tfidf 분석 알고리즘 적용.
data.loc[0, 'description'] = sentence
data.loc[0, 'title'] = sentence
# 불용어 : 유의미하지 않은 단어 토큰을 제거
tfidf = TfidfVectorizer(stop_words='english')
print(data.head())
print(data.shape)

"""description에 대해서 TF-IDF 수행"""
tfidf_matrix = tfidf.fit_transform(data['description'])
# print(tfidf_matrix)
# title_tfidf_matrix = tfidf.fit_transform(data['title'])

"""유사도 측정"""
# 코사인 매트릭스, 0번과 전체의 비교
cosine_matrix = cosine_similarity(tfidf_matrix[0], tfidf_matrix)
# print('걸린 시간: ', time.time() - start)
np.round(cosine_matrix, 4) # 반올림해서 소수점 4번째 자리까지 사용

"""각 책에 대한 데이터 형태를 가공하고, 인덱싱한다."""
book2id = {}
# enumerate() 함수는 기본적으로 인덱스:원소로 이루어진 튜플을 만들어준다.
for i, c in enumerate(data.index):
    book2id[i] = [data["isbn13"][c], data["title"][c], data["author"][c], data["publisher"][c], data["img_url"][c],
                  data["description"][c], data["is_coll_aladin"][c], data["is_coll_naver"][c]]
# id2book = {}
# for i, c in book2id.items():
#     id2book[c] = i
# print(id2book)
# print(cosine_matrix[0]) # 0번 영화의 유사도 및 인덱스를 추출
print(book2id)
# print(cosine_matrix)


"""유사도 추출 및 유사도 정렬"""
# 자기 자신을 제외한 영화들의 유사도 및 인덱스를 추출
sim_scores = [(i, c) for i, c in enumerate(cosine_matrix[0]) if i != 0]
# 유사도가 높은 순서대로 정렬
sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

"""idx 기준으로 TF-IDF를 정렬한 결과(상위 n개)"""
# sim_scores = [(book2id[i], score) for i, score in sim_scores[0:5]]
res = [book2id[i] for i, score in sim_scores[0:5]]
while len(res) < 5:
    res.append((book2id[random.randint(1, len(res))], 0))

print(res) # 확인