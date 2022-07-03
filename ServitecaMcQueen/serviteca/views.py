from django.shortcuts import render
from .models import Trabajadores

def home(request):
    return render (request, 'core/index.html') 

# Create your views here.
def serviteca_list(request):
    trabajadores = Trabajadores.objects.all
    return render(request, 'serviteca/index.html', {'trabajadores': trabajadores})