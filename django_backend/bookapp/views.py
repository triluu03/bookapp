from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse

from django.views.decorators.csrf import csrf_exempt

import json

from .models import Book, User

# Create your views here.


def index(request):
    return HttpResponse('This is for testing!')


#------ Handle Requests for Books ------
def handle_books(request):
    return JsonResponse(list(Book.objects.all().values()), safe=False)

def get_book_by_id(request, book_id):
    book = get_object_or_404(Book, pk=book_id)
    return JsonResponse(book.to_dict())



#------ Handle Requests for Users ------
@csrf_exempt
def handle_users(request):
    if request.method == 'GET':
        return JsonResponse(list(User.objects.all().values()), safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
    
        try:
            User.objects.get(username=data['username'])
            return HttpResponse('User already exists!')
        except:
            pass
    
        new_user = User(
            name=data['name'],
            birthDate=data['birthDate'],
            username=data['username'],
            password=data['password']
        )
        try:
            new_user.save()
            return HttpResponse('New user created!')
        except:
            return HttpResponse('Something happened! Cannot create new user!')
        


#------ Handle Requests for Login ------
def login(request):
    return HttpResponse('This is for login!')