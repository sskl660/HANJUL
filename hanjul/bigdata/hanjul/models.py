from django.db import models

# Create your models here.
class Book(models.Model):
    review_id = models.BigIntegerField(primary_key=True)
    review_comment = models.CharField(max_length=255, blank=True, null=True)
    review_date = models.DateTimeField(blank=True, null=True)
    review_isbn = models.CharField(max_length=255, blank=True, null=True)
    review_star = models.IntegerField()
    review_fk_user = models.ForeignKey('User', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'book'


class HibernateSequence(models.Model):
    next_val = models.BigIntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'hibernate_sequence'


class History(models.Model):
    history_id = models.BigIntegerField(primary_key=True)
    history_date = models.DateTimeField(blank=True, null=True)
    history_oneline = models.CharField(max_length=255, blank=True, null=True)
    history_fk_user = models.ForeignKey('User', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'history'


class HistoryBooksImgurl(models.Model):
    history_books_imgurl = models.ForeignKey(History, models.DO_NOTHING)
    history_books_imgurl_0 = models.CharField(db_column='history_books_imgurl', max_length=255, blank=True, null=True)
    # Field renamed because of name conflict.

    class Meta:
        managed = False
        db_table = 'history_books_imgurl'


class HistoryBooksIsbn(models.Model):
    history_books = models.ForeignKey(History, models.DO_NOTHING)
    history_books_isbns = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'history_books_isbn'


class Library(models.Model):
    library_id = models.BigIntegerField(primary_key=True)
    mybook_author = models.CharField(max_length=255, blank=True, null=True)
    mybook_date = models.DateTimeField(blank=True, null=True)
    mybook_desc = models.CharField(max_length=255, blank=True, null=True)
    mybook_imgurl = models.CharField(max_length=255, blank=True, null=True)
    mybook_isbn = models.CharField(max_length=255, blank=True, null=True)
    mybook_published = models.CharField(max_length=255, blank=True, null=True)
    mybook_publisher = models.CharField(max_length=255, blank=True, null=True)
    mybook_title = models.CharField(max_length=255, blank=True, null=True)
    library_fk_user = models.ForeignKey('User', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'library'


class Review(models.Model):
    review_id = models.BigIntegerField(primary_key=True)
    review_comment = models.CharField(max_length=255, blank=True, null=True)
    review_date = models.DateTimeField(blank=True, null=True)
    review_isbn = models.CharField(max_length=255, blank=True, null=True)
    review_star = models.IntegerField()
    review_fk_user = models.ForeignKey('User', models.DO_NOTHING, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'review'


class Tmpbooks(models.Model):
    isbn = models.CharField(max_length=255, blank=True, null=True)
    title = models.CharField(max_length=1000, blank=True, null=True)
    author = models.CharField(max_length=500, blank=True, null=True)
    publisher = models.CharField(max_length=255, blank=True, null=True)
    img_url = models.CharField(max_length=300, blank=True, null=True)
    description = models.CharField(max_length=1000, blank=True, null=True)
    is_coll_aladin = models.CharField(max_length=255, blank=True, null=True)
    is_coll_naver = models.CharField(max_length=255, blank=True, null=True)
    isbn_origin = models.CharField(max_length=255, blank=True, null=True)
    avg_star = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'tmpbooks'


class User(models.Model):
    user_id = models.CharField(primary_key=True, max_length=255)
    user_name = models.CharField(max_length=255, blank=True, null=True)
    user_pw = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'user'