FROM python:3.7.3
MAINTAINER Taehyun Kim <sskl600@naver.com>

COPY . .
RUN pip3 install django
RUN pip install django djangorestframework
RUN pip install mysqlclient
RUN pip install django-cors-headers
RUN pip install scikit-learn
RUN pip install pandas

CMD ["python", "manage.py", "makemigrations"]
CMD ["python", "manage.py", "migrate"]
CMD ["python3", "manage.py", "runserver", "0:8000"]
EXPOSE 8000