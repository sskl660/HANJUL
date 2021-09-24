FROM adoptopenjdk/openjdk11:ubi
MAINTAINER Taehyun Kim <sskl600@naver.com>

COPY ./build/libs/HANJUL-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
