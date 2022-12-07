from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse

from django.views.decorators.csrf import csrf_exempt

import json, jwt

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
    # Handle GET requests
    if request.method == 'GET':
        response = list(User.objects.all().values())
        for user in response:
            del user['password']
        return JsonResponse(response, safe=False, status=200)
    
    # Handle POST requests
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
            return HttpResponse('New user created!', status=201)
        except:
            return HttpResponse('Something happened! Cannot create new user!', status=400)
        


#------ Handle Requests for Login ------
def login(request):
    data = json.loads(request.body)
    username = data['username']
    password = data['password']
    try:
        user = User.objects.get(username=username, password=password)
        payload = {
            'id': user.id,
            'username': user.username,
            'password': user.password
        }
        token = jwt.encode(payload, 'secret', algorithm='HS256')
        return JsonResponse({'token': token}, status=200)
    except:
        return HttpResponse('Invalid username or password!', status=400)