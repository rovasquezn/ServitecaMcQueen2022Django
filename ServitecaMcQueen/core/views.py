from django.shortcuts import render

# Create your views here.

def home(reuest):
    return render (reuest, 'core/index.html') 