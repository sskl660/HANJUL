from parse_book import load_dataframes
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import time
import random

data = load_dataframes()

sentence = input()
start = time.time()

data.loc[0, 'description'] = sentence
data.loc[0, 'title'] = sentence
# 불용어 : 유의미하지 않은 단어 토큰을 제거
tfidf = TfidfVectorizer(stop_words='english')

# description에 대해서 TF-IDF 수행
tfidf_matrix = tfidf.fit_transform(data['description'])
title_tfidf_matrix = tfidf.fit_transform(data['title'])

# 코사인 매트릭스, 0번과 전체의 비교
cosine_matrix = cosine_similarity(tfidf_matrix[0], tfidf_matrix)
print('걸린 시간: ', time.time() - start)
np.round(cosine_matrix, 4) # 반올림해서 소수점 4번째 자리까지 사용

book2id = {}
for i, c in enumerate(data['title']):
    book2id[i] = c

id2book = {}
for i, c in book2id.items(): id2book[c] = i

# print(cosine_matrix[0]) # 0번 영화의 유사도 및 인덱스를 추출

# 자기 자신을 제외한 영화들의 유사도 및 인덱스를 추출
sim_scores = [(i, c) for i, c in enumerate(cosine_matrix[0]) if i != 0]
# 유사도가 높은 순서대로 정렬
sim_scores = sorted(sim_scores, key = lambda x: x[1], reverse=True)
# idx 기준으로 TF-IDF를 정렬한 결과(상위 10개)

sim_scores = [(book2id[i], score) for i, score in sim_scores[0:5]]
while len(sim_scores) < 5:
    sim_scores.append((book2id[random.randint(1, len(sim_scores))], 0))

print(sim_scores) # 확인