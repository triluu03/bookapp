from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse

from .models import Book, User

# Create your views here.


def index(request):
    return HttpResponse('This is for testing!')


#------ Handle Requests for Books ------
def get_all_books(request):
    return JsonResponse(list(Book.objects.all().values()), safe=False)

def get_book_by_id(request, book_id):
    book = get_object_or_404(Book, pk=book_id)
    return JsonResponse(book.to_dict())



#------ Handle Requests for Users ------
def get_all_users(request):
    return JsonResponse(list(User.objects.all().values()), safe=False)

def create_user(request):
    return HttpResponse('This is for creating user!')


#------ Handle Requests for Login ------
def login(request):
    return HttpResponse('This is for login!')