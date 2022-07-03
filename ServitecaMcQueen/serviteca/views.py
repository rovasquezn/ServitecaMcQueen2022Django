from django.shortcuts import render

# Create your views here.
def serviteca_list(request):
    return render(request, 'serviteca/index.html', {})