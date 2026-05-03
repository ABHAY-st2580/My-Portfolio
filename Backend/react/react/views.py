from django.shortcuts import render
from django.http import httpresponse

def home(request):
    return HttpResponse("Backend is running")