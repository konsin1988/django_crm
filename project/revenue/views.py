from django.shortcuts import render
from django.db.models import Q

from .models import RevenueEst2025

def home(request):
    months = [
        "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ]
    rows = ["Выручка", "Контракт", "ВСК", "Прогноз"]
    return render(request, "home.html", {"months": months, "rows": rows})

def todos(request):
    items = RevenueEst2025.objects.filter(date_dt__year=2025).using('fin')
    return render(request, "todos.html", {"items": items})
