# 한 줄

> 2021.08.21 ~ 2021.10.08

**서비스 개요**

'한 줄'은 사용자의 한 문장을 받아 국립중앙도서관 도서 데이터를 기반으로 책을 추천해주는 서비스입니다.

**[서비스 바로가기](http://j5a301.p.ssafy.io/)**, **[유튜브](https://youtu.be/f_21cImpouk)**

<img src="md-images/hanjulie.jpg" alt="hanjulie" style="zoom:20%;" />

<img src=https://img.shields.io/badge/react-17.0.2-blue /> <img src="https://img.shields.io/badge/redux-4.1.1-blue" /><img src="https://img.shields.io/badge/node.js-14.16.0-blue" />

<img src="https://img.shields.io/badge/springboot-2.5.3-green" /><img src="https://img.shields.io/badge/gradle-7.1.1-green" /><img src="https://img.shields.io/badge/java-11.0.1-green" /><img src="https://img.shields.io/badge/mariadb-15.1-green" />

<img src="https://img.shields.io/badge/python-3.8.7-yellow" /><img src="https://img.shields.io/badge/django-3.1.7-yellow" /><img src="https://img.shields.io/badge/pandas-1.3.2-yellow" /><img src="https://img.shields.io/badge/numpy-1.21.2-yellow" />

<img src="https://img.shields.io/badge/ubuntu_lts-15.4-red" /><img src="https://img.shields.io/badge/docker-20.10.7-red" /><img src="https://img.shields.io/badge/jenkins-2.304-red" /><img src="https://img.shields.io/badge/aws-ec2-red" />






## 목차

**[1. 기획](# 기획)**

**[2. 서비스 이미지](#서비스 이미지)**

**[3. 기술 스택](#기술 스택)**

**[4. 팀원 소개](#팀원 소개)**

**[5. Getting Started](#Getting Started)**

**[6. ETC](#ETC)**



## 기획

### 주제 선정

> [Google Jamboard](https://jamboard.google.com/d/1kRIxICsBSVMsb5uYEP9tDMYCeKyvlRgQcNkyqWhg9xE/viewer?f=1)

<img src="md-images/image-20211007160501659.png" alt="image-20211007160501659" style="zoom: 25%;" />



### 기획 배경

현대 사회에 무수히 많은 책이 존재하고, 정보의 호수 속에서 적절한 책을 찾는 일은 결코 쉬운일이 아닙니다. 이러한 물음에서 출발하여 사용자가 원하는 문장만 입력하면 유사한 책을 추천해주는 서비스를 개발하였습니다.



### 와이어프레임 및 프로토타입

> [Figma](https://www.figma.com/file/afEKV3pu1AIR3NbokgLfDk/Untitled?node-id=106%3A3)

* 와이어 프레임

<img src="md-images/image-20211007155134547.png" alt="image-20211007155134547" style="zoom: 33%;" />



* 프로토 타입

<img src="md-images/image-20211007155304602.png" alt="image-20211007155304602" style="zoom:33%;" />



### API 설계

> [Swagger-ui]()

<img src="md-images/image-20211007232524477.png" alt="image-20211007232524477" style="zoom: 25%;" />





### 빅데이터

* CBF 알고리즘

<img src="md-images/image-20211007232053691.png" alt="image-20211007232053691" style="zoom: 30%;" />





## 서비스 이미지

* **메인 페이지**

책을 추천받기 위한 '한 줄'을 입력하는 페이지입니다.

![한줄메인](md-images/%ED%95%9C%EC%A4%84%EB%A9%94%EC%9D%B8.gif)



* **'한 줄' 입력과 추천 페이지**

'한 줄'을 입력하면 컨텐츠 기반 필터링을 통해 국립중앙도서관 데이터 중 유사도가 높은 도서를 추천해줍니다.

![한줄검색](md-images/%ED%95%9C%EC%A4%84%EA%B2%80%EC%83%89.gif)



* **추천 페이지**

우측 하단에서 다른 사용자들이 입력한 '한 줄'을 확인할 수 있습니다.
5권의 책이 추천되며, 원하는 책을 클릭해 상세 페이지로 이동할 수 있습니다.

![추천페이지_책선택](md-images/%EC%B6%94%EC%B2%9C%ED%8E%98%EC%9D%B4%EC%A7%80_%EC%B1%85%EC%84%A0%ED%83%9D.gif)



* **도서 상세 페이지**

도서 즐겨찾기, 책과 연관된 도서, 책 리뷰를 확인할 수 있는 페이지입니다.

![책_상세](md-images/%EC%B1%85_%EC%83%81%EC%84%B8.gif)



* **로그인/회원가입**

로그인과 회원가입 페이지를 한 곳에서 보여줄 수 있도록 제작했습니다.

![유저](md-images/%EC%9C%A0%EC%A0%80.gif)



* **나의 서재**

sidebar를 통해 나의 서재에 접근할 수 있습니다.
즐겨찾기된 책을 모아서 보여줍니다.

![사이드바_나의서재](md-images/%EC%82%AC%EC%9D%B4%EB%93%9C%EB%B0%94_%EB%82%98%EC%9D%98%EC%84%9C%EC%9E%AC.gif)



* **발자취**

'한줄' 페이지에서 검색했던 기록을 남겨 나중에 찾아볼 수 있도록 만들었습니다.

![발자취](md-images/%EB%B0%9C%EC%9E%90%EC%B7%A8.gif)



## 기술 스택

![image-20211008114653511](md-images/image-20211008114653511.png)



### 기술 표

![image-20211008141948873](md-images/image-20211008141948873.png)





### ERD

<img src="md-images/image-20211007172528232.png" alt="image-20211007172528232" style="zoom:40%;" />





## 팀 구성 및 역할

![image-20211008101858145](md-images/image-20211008101858145.png)



## Getting Started

**Frontend**

```sh
cd hanjul/frontend
yarn install
yarn start
```

**Backend**

```sh
cd hanjul/backend
./gradlew build
cd build/libs
java -jar HANJUL-0.0.1-SNAPSHOT.jar
```

**Bigdata**

```sh
cd hanjul/bigdata
pip install django
pip install django djangorestframework
pip install mysqlclient
pip install django-cors-headers
pip install scikit-learn
pip install pandas

python manage.py makemigrations
python manage.py migrate
python manage.py runserver 0:8000
```





## ETC

* [Git Convention](./git_convention.md)

