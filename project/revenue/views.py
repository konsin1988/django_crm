from django.shortcuts import render
from django.db.models import Q

from .models import RevenueEst2025
# Create your views here.

# def home(request):
#     items = RevenueEst2025.objects.all().using('fin')
#     return render(request, "todos.html", {"items": items})

def home(request):
    return render(request, "base.html")

def todos(request):
    items = RevenueEst2025.objects.all().using('fin')
    return render(request, "todos.html", {"items": items})
