from django.urls import path 

from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('books/', views.handle_books, name='all_books'),
    path('books/<int:book_id>/', views.get_book_by_id, name='book'),
    path('users/', views.handle_users, name='handling_users'),
    path('login/', views.login, name='login'),
]