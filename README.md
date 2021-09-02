# SSAFY Bigdata project

## How to Run

### Sub1

```sh
cd sub1
pip install -r requirements.txt
python parse.py
python analyze.py
python visualize.py
```

### Sub 2

**Backend**

```sh
cd sub2/backend
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py initialize
python manage.py runserver
```

**Frontend**

```sh
cd sub2/frontend
npm install
npm run serve
```

### data file
  - 기본 제공 데이터: 맛집 데이터
    - 스켈레톤 폴더 내 포함
    - PW: ssafy2021!@#$ - 확인 후 본 문서에서 PW 삭제 요망
  - 추가 제공 데이터: 카드사 데이터
    - 다운로드 링크: https://lab.ssafy.com/s05-bigdata-rec/card-data/-/blob/master/card-data.zip
    - PW: ssafy2021!@#$ - 확인 후 본 문서에서 PW 삭제
  - ** SSAFY에서 제공하는 기업 데이터는 다른 목적으로 사용할 수 없으며, 데이터 원본의 외부 반출을 금합니다.**



## Pandas

### DataFrame과 Series

```python
import pandas as pd

# 데이터 불러오기 : pandas.read_csv
data_frame = pd.read_csv('data/friend_list.csv')
data_frame # 데이터 프레임 전체 내용 확인

data_frame.head() # 앞에서 5개 확인
data_frame.head(2) # 앞에서 2개 확인
data_frame.tail() # 뒤에서 5개 확인
data_frame.tail(2) # 뒤에서 2개 확인
data_frame[1:3] # 1, 2번 확인

type(data_frame) # 혹은 data_frame.age 등 모두 같은 타입을 가진다
# Out[] : pandas.core.series.Series

s1 = pd.core.series.Series( [1, 2, 3] )
s2 = pd.core.series.Series( ['one', 'two', 'three'] )
pd.Dataframe[data=dict(num=s1, word=s2)]

'''
	   num   word
   -----------------
	0	1	 one
	1	2	 two
	2	3	 three
'''
```



### 파일에서 데이터 불러오기

```python
import pandas as pd

df = pd.read_csv('data/friend_list.csv')
# csv와 같이 데이터가 쉼표로 구분되어 있다면 read_csv 사용 가능
df = pd.read_csv('data/friend_list.txt')
# tab으로 구분되어 있다면 delimiter 속성으로 알려줘야 한다
df = pd.read_scv('data/friend_list_tab.txt', delimiter = '\t')
# header이 없는 파일 읽기 1
df = pd.read_csv('data/friend_list_no_head.csv', header = None)
df.columns = ['name', 'age', 'job']
# header이 없는 파일 읽기 2
df = pd.read_csv('data/friend_list_no_head.csv', header=None, names=['name', 'age', 'job'])
```



### 데이터프레임 생성하기

```python
import pandas as pd

friend_dict_list = [
    {'name': 'John', 'age': 25, 'job': 'student'},
    {'name': 'Nate', 'age': 30, 'job': 'teacher'}
]
df = pd.DataFrame(friend_dict_list)
# 테이블 보기(key 순서 보장 X)
df.head()

# 앞에서부터 head의 key 순서 정하기
df = df[['name', 'age', 'job']]
df.head()


# 위처럼 key 순서 보장해서 만들기
from collections import OrderedDict
friend_ordered_dict = OrderedDict(
	[
        ('name', ['John', 'Nate']),
        ('age', [25, 30]),
        ('job', ['student', 'teacher'])
    ]
)
df = [d.DataFrame.from_dict(friend_ordered_dict)]
df.head()


# list 사용해 만들어보기
friend_list = [
    ['John', 25, 'student'],
    ['Nate', 30, 'teacher']
]
column_name = ['name', 'age', 'job']

df = pd.DataFrame.from_records(friend_list, columns = column_name)


# list를 다른 방식으로 사용해보기
friend_list = [
    ['name', ['John', 'Nate']],
    ['age', [25, 30]],
    ['job', ['student', 'teacher']]
]
df = pd.DataFrame.from_items(friend_list)
```



### 데이터프레임 저장하기

```python
friends = [
    {'name': 'Jone', 'age': 20, 'job': 'student'},
    {'name': 'Jenny', 'age': 30, 'job': None},
    {'name': 'Nate', 'age': 30, 'job': 'teacher'}
]
# index와 header 설정, 없애고 싶으면 False
df.to_csv('friends.csv', index = True, header = True)
# 빈 데이터를 '-'로 채워주고 싶다면
df.to_csv('friends.csv', index = True, header = True, na_rep = '-')
```



### 데이터프레임 행, 열 선택 및 필터

```python
friend_list = [
    {'name': 'Jone', 'age': 20, 'job': 'student'},
    {'name': 'Jenny', 'age': 30, 'job': None},
    {'name': 'Nate', 'age': 30, 'job': 'teacher'}
]
df = pd.DataFrame.from_items(friend_list)

# 0번, 2번 선택하기
df = df.loc[ [0, 2] ]


# by column condition
## 나이가 25살 이상인 사람만 선택 1
df[df.age > 25]
## 나이가 25살 이상인 사람만 선택 2
df.query('age>25')
## 이름이 'Nate'이고 나이가 25살 이상
df[ (df.age>25) & (df.name == 'Nate') ]

# Filter Column
friend_list = [
    ['John', 20, 'student'],
    ['Jenny', 30, 'developer'],
    ['Nate', 30, 'teacher'],
]
## column name을 index로 나타내주기
df = pd.DataFrame.from_records(friend_list)
## index로 선택
## 모든 행(row), 0~1열(column)
df.iloc[:,0:2]

# by Column name
df = pd.read_csv('data/friend_list_no_head.csv', header = None, names=['name', 'age', 'job'])
## 1번
df_filtered = df[['name', 'age']]
## 2번
df_filtered = df.filter(items=['name', 'age'])
## column name에 a가 들어간 것
## column name은 axis가 1이다.
df_filtered = df.filter(like='a', axis=1)
## regex: 정규식
## 'axis=1' 인 곳의 value가 b로 끝나는 것을 갖고 싶다
df_filtered = df.filter(regex='b$', axis=1)
```



### 데이터프레임 행, 열 삭제

```python
import pandas as pd

friends = [{'age': 15, 'job': 'student'},
          {'age': 25, 'job': 'developer'},
          {'age': 30, 'job': 'teacher'}]

df = pd.DataFrame(friends,
                 index = ['John', 'Jenny', 'Nate'],
                 columns = ['age', 'job'])

# John과 Nate를 제거
df = df.drop(['John', 'Nate'])
# df에 다시 넣지 않고 바로 저장
df.drop(['John', 'Nate'], inplace=True)


friends = [{'name': 'John', 'age': 15, 'job': 'student'},
          {'name': 'Ben', 'age': 25, 'job': 'developer'},
          {'name': 'Jenny', 'age': 30, 'job': 'teacher'}]
df = pd.DataFrame(friends, columns = ['name', 'age', 'job'])

# 0, 2번 index를 drop
df = df.drop(df.index[[0,2]])

# 조건으로 drop
df = df[df.age > 20]

# age라는 column을 제거
df = df.drop('age', axis=1)

# 바로 제거
df.drop('age', axis=1, inplace = True)
```



### 행, 열 생성 및 수정

```python
import pandas as pd

friends_list_dict = [{'name': 'Jone', 'age': 15, 'job': 'student'},
          {'name': 'Jenny', 'age': 30, 'job': 'developer'},
          {'name': 'Nate', 'age': 30, 'job': 'teacher'}]
df = pd.DataFrame(friend_dict_list, columns = ['name', 'age', 'job'])

# column을 추가
df['salary'] = 0

import numpy as np
# numpy를 사용한 조건문
df['salary'] = np.where(df['job'] != 'student', 'yes', 'no')
'''
	name	age		job			salary
0	Jone	15		student		no
1	Jenny	30		developer	yes
2	Nate	30		teacher		yes
'''


friends_list_dict = [{'name': 'Jone', 'midterm': 95, 'final': 85},
          {'name': 'Jenny', 'midterm': 85, 'final': 80},
          {'name': 'Nate', 'midterm': 30, 'final': 10}]
df = pd.DataFrame(friend_dict_list, columns = ['name', 'midterm', 'final'])

# 두개를 합친 column 추가하기
df['total'] = df['midterm'] + df['final']
# total을 계산하여 새로운 column 추가하기
df['average'] = df['total'] / 2

# 배열과 for문을 이용해 column 추가하기
grades = []
for row in df['average']:
    if row >= 90:
        grade.append('A')
    elif row >= 80:
        grade.append('B')
	else:
        grade.append('F')
df['grade'] = grades

# 함수를 만들어 해결 1
def pass_or_fail(row):
    if row != 'F':
        return "Pass"
    else:
        return "Fail"
    
df.grade = df.grade.apply(pass_or_fail)
date_list = [
    {
        'yyyy-mm-dd' : '2000-06-27'
    },
    {
        'yyyy-mm-dd' : '2007-10-27'
    },
]

df = pd.DataFrame(date_list, columns = ['yyyy-mm-dd'])

# 함수를 만들어 해결 2
def extract_year(row):
    return row.split('-')[0]
df['year'] = df['yyyy-mm-dd'].apply(extract_year)

# 함수 append
df = pd.DataFrame(friend_dict_list, columns = ['name', 'midterm', 'final'])
# append 사용
df2 = pd.DataFrame([
    ['Ben', 50, 50]
], columns = ['name', 'midterm', 'final'])
# 두 테이블의 index가 겹치므로
df.append(df2, ignore_index = True)
```



### 데이터 그룹 만들기

```python
# group 전체 출력
groupby_major.groups

# major이라는 column name으로 grouping하기
groupby_major = df.groupby('major')
# print group visualize
for name, group in groupby_major:
    print(name + " : " + str(len(group)))
    print(group)
    print()
    
# group을 이용해 DataFrame으로 만들기
df_major_cnt = pd.DataFrame( {'count' : groupby_major.size()} ).reset_index()
'''
        major	count
0    Computer	4
1    Economics	3
2    Physics	1
3    Psychology	3
'''
```



### 중복 데이터 삭제

```python
# index 기준으로 위에서 한 번이라도 나온 데이터는 'True'로 나옴
df.duplicated()
# 중복된 내용을 삭제
df.drop_duplicates()

# 특정 column(열)에서 중복된 내용을 확인하고 제거
# 행이 많을 때 이렇게 사용하면 전체가 같은 내용이 없는 경우, False를 return한다
df.duplicated()
# name을 기준으로 확인
df.dupicated(['name'])

# 앞에 있는 내용만 keep하고 제거(default)
df.drop_duplicates(['name', keep = 'first'])
# 나중에 있는 내용만 keep하고 제거
df.drop_duplicates(['name', keep = 'last'])
```



### NaN(None) 찾아서 다른 값으로 변경

```python
# row와 column 확인
df.shape

# 자세한 none 여부 확인
df.info()

# True와 False로 표현 1
df.isna()
# True와 False로 표현 2
df.isnull()

# age라는 column에서 null값을 발견하면 0으로 바꾸기
df.age = df.age.fillna(0)

# 다른 column의 값이 같은 경우를 이용해 0이 아닌 유효한 값 가져오기
df['age'].fillna(df.groupby('job')['age'].transform('median'), inplace = True)
```



### apply 함수

```python
import pandas as pd
date_list = [{'yyyy-mm-dd' : '2000-06-27'},
             {'yyyy-mm-dd' : '2002-09-24'},
             {'yyyy-mm-dd' : '2005-12-20'}]
df = pd.DataFrame(date_list, columns = ['yyyy-mm-dd'])

# 연도 만들기
def extract_year(column):
    return column.split("-")[0]

# 모든 row의 column을 하나씩 추가해줄 수 있다
df['year'] = df['yyyy-mm-dd'].apply(extract_year)


# 나이 만들기
def get_age(year, current_year):
    return current_year - int(year)

# 각 row에 age 넣어주기
df['age'] = df['year'].apply(get_age, current_year=2018)


# 소개 만들기
def get_introduce(age, prefix, suffix):
	return prefix + str(age) + suffix

# 소개 넣어주기
df['introduce'] = df['age'].apply(get_introduce, prefix = "I am ", suffix = " years old")


# 여러 개의 column을 apply function에 적용
def get_introduce_2(row):
    return "I was born in " + str(row.year) + " my age is " + str(row.age)

# row의 모든 내용 사용하기
# df['introduce'] == df.introduce
df.introduce = df.apply(get_introduce_2, axis=1)
```



### map, applymap 함수

```python
import pandas as pd
date_list = [{'date': '2000-06-27'},
             {'date': '2000-06-27'},
             {'date': '2000-06-27'}]
df = pd.DataFrame(date_list, columns = ['date'])

# 날짜 형식에서 year만 받아오기
def extract_year(column):
    return column.split("-")[0]

## map year만 받아오기
df['year'] = df['date'].map(extract_year)


# object로 map 함수 사용
job_list = [{'age': 20, 'job': 'student'},
           {'age': 20, 'job': 'student'},
           {'age': 20, 'job': 'student'}]
df = pd.DataFrame(job_list)

## job에 따라 value를 숫자로 변경해주기
df.job = df.job.map({'student': 1, 'developer': 2, 'teacher': 3})


# applymap 사용
x_y = [{'x': 5.5, 'y': -5.6, 'z': -1.1},
      {'x': -5.2, 'y': 5.5, 'z': -2.2},
      {'x': -1.6, 'y': -4.5, 'z': -3.3}]
df = pd.DataFrame(x_y)

import numpy as np
df = df.applymap(np.around)
'''
값은 자동으로 반올림된다
	x		y		z
0	6.0		-6.0	-1.0
1	-5.0	6.0		-2.0
2	-2.0	-4.0	-3.0
'''
```



### unique, value_counts

> 컬럼 내 유니크한 값 뽑아내고 갯수 확인하기

```python
job_list = [{'name': 'John', 'job': "teacher"},
                {'name': 'Nate', 'job': "teacher"},
                {'name': 'Fred', 'job': "teacher"},
                {'name': 'Abraham', 'job': "student"},
                {'name': 'Brian', 'job': "student"},
                {'name': 'Janny', 'job': "developer"},
                {'name': 'Nate', 'job': "teacher"},
                {'name': 'Obrian', 'job': "dentist"},
                {'name': 'Yuna', 'job': "teacher"},
                {'name': 'Rob', 'job': "lawyer"},
                {'name': 'Brian', 'job': "student"},
                {'name': 'Matt', 'job': "student"},
                {'name': 'Wendy', 'job': "banker"},
                {'name': 'Edward', 'job': "teacher"},
                {'name': 'Ian', 'job': "teacher"},
                {'name': 'Chris', 'job': "banker"},
                {'name': 'Philip', 'job': "lawyer"},
                {'name': 'Janny', 'job': "basketball player"},
                {'name': 'Gwen', 'job': "teacher"},
                {'name': 'Jessy', 'job': "student"}
         ]
df = pd.DataFrame(job_list, columns = ['name', 'job'])

# 각 값의 나열
df.job.unique()

# 각 값이 몇 개씩 있는지 확인
df.job.value_counts()
```



### 데이터프레임 합치기

```python
l1 = [{'name': 'John', 'job': "teacher"},
      {'name': 'Nate', 'job': "student"},
      {'name': 'Fred', 'job': "developer"}]

l2 = [{'name': 'Ed', 'job': "dentist"},
      {'name': 'Jack', 'job': "farmer"},
      {'name': 'Ted', 'job': "designer"}]

df1 = pd.DataFrame(l1, columns = ['name', 'job'])
df2 = pd.DataFrame(l2, columns = ['name', 'job'])

# 합치기
result = pd.concat([df1, df2])
# index가 겹치는 경우를 해결
result = pd.concat([df1, df2], ignore_index = True)

# append 함수 사용(concat과 같은 결과)
result = df1.append(df2)
# index가 겹치는 경우를 해결
result = df1.append(df2, ignore_index = True)


# row로 합치기
l3 = [{'name': 'John', 'job': "teacher"},
      {'name': 'Nate', 'job': "student"},
      {'name': 'Jack', 'job': "developer"}]

l4 = [{'age': 25, 'country': "U.S"},
      {'age': 30, 'country': "U.K"},
      {'age': 45, 'country': "Korea"}]
df1 = pd.DataFrame(l3, columns = ['name', 'job'])
df2 = pd.DataFrame(l4, columns = ['age', 'country'])

# axis => 열로 넣어라
result = pd.concat([df1, df2], axis = 1, ignore_index = True)


# list 합치기
label = [1, 2, 3, 4, 5]
prediction = [1, 2, 2, 4, 5]

comparison = pd.DataFrame({'label': label, 'prediction': prediction})
```





## 명세

### Req. 1-1. 데이터 전처리(parse.py)

```python
store_columns = (
    "id",  # 음식점 고유번호
    "store_name",  # 음식점 이름
    "branch",  # 음식점 지점 여부
    "area",  # 음식점 위치
    "tel",  # 음식점 번호
    "address",  # 음식점 주소
    "latitude",  # 음식점 위도
    "longitude",  # 음식점 경도
    "category",  # 음식점 카테고리
)

review_columns = (
    "id",  # 리뷰 고유번호
    "store",  # 음식점 고유번호
    "user",  # 유저 고유번호
    "score",  # 평점
    "content",  # 리뷰 내용
    "reg_time",  # 리뷰 등록 시간
)

user_columns = (
    "id",  # 유저 고유번호
    "gender",  # 유저 성별
    "age",  # 유저 나이
)

menu_columns = (
    "id",  # 메뉴 고유번호
    "store",  # 음식점 고유번호
    "menu_name",  # 메뉴 이름
    "price",  # 메뉴 가격
)

def import_data(data_path=DATA_FILE):
    """
    Req. 1-1-1 음식점 데이터 파일을 읽어서 Pandas DataFrame 형태로 저장합니다
    """

    try:
        with open(data_path, encoding="utf-8") as f:
            data = json.loads(f.read())
    except FileNotFoundError as e:
        print(f"`{data_path}` 가 존재하지 않습니다.")
        exit(1)

    stores = []  # 음식점 테이블
    reviews = []  # 리뷰 테이블
    # 메뉴에 아이디가 없다?
    menus = [] # 메뉴 테이블
    # 유저가 겹치면 어떻게 처리하나?
    users = [] # 유저 테이블

    for d in data:

        categories = [c["category"] for c in d["category_list"]]
        stores.append(
            [
                d["id"],
                d["name"],
                d["branch"],
                d["area"],
                d["tel"],
                d["address"],
                d["latitude"],
                d["longitude"],
                "|".join(categories),
            ]
        )

        for review in d["review_list"]:
            r = review["review_info"]
            u = review["writer_info"]

            reviews.append(
                [r["id"], d["id"], u["id"], r["score"], r["content"], r["reg_time"]]
            )
            users.append(
                [u["id"], u["gender"], u["age"]]
            )

        menu_id = 0
        for menu in d["menu_list"]:
            menus.append(
                [menu_id, d["id"], menu["menu"], menu["price"]]
            )
            menu_id += 1

    store_frame = pd.DataFrame(data=stores, columns=store_columns)
    review_frame = pd.DataFrame(data=reviews, columns=review_columns)
    user_frame = pd.DataFrame(data=users, columns=user_columns)
    menu_frame = pd.DataFrame(data=menus, columns=menu_columns)

    return {
        "stores": store_frame, 
        "reviews": review_frame, 
        "users": user_frame, 
        "menus": menu_frame
        }
```

