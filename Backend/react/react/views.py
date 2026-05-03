from django.shortcuts import render
from django.http import Httpresponse

def home(request):
    return HttpResponse("Backend is running")