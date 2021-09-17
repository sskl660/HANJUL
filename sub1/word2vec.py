import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import TfidfVectorizer
import gensim
from gensim.models import Word2Vec
import warnings

# pandas 등이 자주 업그레이드되기 때문에 나오는 경고 메시지 숨기기
warnings.filterwarnings(action='ignore')

# 경로의 경우 각자의 환경에 맞게 설정
book = pd.read_csv('book.csv', low_memory=False) #  각 열의 dtype을 추측하는 것이 메모리를 많이 요구하기 때문에 발생하는 low_memory 경고 없애줌

book = book[book['description'].notnull()].reset_index(drop=True)
print(book.shape)

# 