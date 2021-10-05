from django.urls import path, include
from .views import content_based, recommend

urlpatterns = [
    path("line/", content_based),
    path("recommend/", recommend)
]