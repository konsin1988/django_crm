from django.urls import path
from . import views

urlpatterns = [
    path("api/get_est/", views.get_est, name="home"),
    path("api/frc_unique/", views.frc_unique, name="frc_unique")
]
