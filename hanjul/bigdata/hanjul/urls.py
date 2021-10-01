from django.urls import path, include
from .views import user_view
from .views import content_based

urlpatterns = [
    path("hello/", user_view),
    path("line/", content_based),
]