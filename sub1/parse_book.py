import pandas as pd
import os

# DATA_FILE = os.path.join("book_202106.csv")
DATA_FILE = pd.read_csv("book_202106.csv", low_memory=False)
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
    data = data[data['description'].notnull()].reset_index(drop=True)
    data = data[data['img_url'].notnull()].reset_index(drop=True)
    data = data[book_columns]

    return data


def dump_dataframes(dataframes):
    pd.to_pickle(dataframes, DUMP_FILE)


def load_dataframes():
    return pd.read_pickle(DUMP_FILE)


def main():
    data = import_data()
    dump_dataframes(data)
    data = load_dataframes()
    print(data)

if __name__ == "__main__":
    main()