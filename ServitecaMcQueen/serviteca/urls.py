from django.urls import path
from . import views

urlpatterns = [
    path('', views.serviteca_list, name='serviteca_list'),
]