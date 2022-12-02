from django.urls import path 

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.get_all_books, name='all_books'),
    path('books/<int:book_id>/', views.get_book_by_id, name='book'),
    path('users/', views.get_all_users, name='all_users'),
    path('login/', views.login, name='login'),
]