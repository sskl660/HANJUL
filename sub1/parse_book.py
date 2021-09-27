import pandas as pd
import os
import re

# DATA_FILE = os.path.join("book_202106.csv")
DATA_FILE = pd.read_csv("book_202012-1.csv", low_memory=False) # 경로
DUMP_FILE = os.path.join("dump.pkl")

book_columns = [
    "isbn13",
    "title",
    "author",
    "publisher",
    "pub_date",
    "img_url",
    'description',
    'is_coll_aladin',
    'is_coll_naver',
    'isbn_origin'
]


def import_data(data=DATA_FILE):
    # 전처리
    # description과 img_url이 없는 항목은 모두 제거
    data = data[:50000] # 책 데이터 범위
    data = data[data['description'].notnull()].reset_index(drop=True)
    data = data[data['img_url'].notnull()].reset_index(drop=True)
    data = data[book_columns]
    for i, c in enumerate(data['description']):
        hasCount = len(re.findall(u'[\u3130-\u318F\uAC00-\uD7A3]+', c))
        if not hasCount:
            data = data.drop(index=i, axis=0)
    return data


def dump_dataframes(dataframes):
    pd.to_pickle(dataframes, DUMP_FILE)
    


def load_dataframes():
    return pd.read_pickle(DUMP_FILE)


def main():
    data = import_data()
    pd.DataFrame(data).to_csv('output.csv', index=False, header=False, mode='w', encoding='utf-8')
    dump_dataframes(data)
    data = load_dataframes()
    print(data)

if __name__ == "__main__":
    main()