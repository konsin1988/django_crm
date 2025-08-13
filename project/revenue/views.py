from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import *

from django.db.models import Max, F
from django.utils.timezone import now
from django.db.models.functions import ExtractYear, ExtractMonth
from django.db.models import OuterRef, Subquery



def get_latest_per_month(dept):
    current_year = now().year
    # Фильтруем по текущему году и по dept
    qs = RevenueEst2025.objects.filter(
        estimate_date__year=current_year,
        frc=dept,
    )
    
    # Аннотируем максимальное date_dt для каждого года-месяца
    # Группируем по году и месяцу estimate_date
    # Промежуточная агрегация для нахождения максимального date_dt в месяце

    # Аннотации для года и месяца
    qs = qs.annotate(
        year=ExtractYear('estimate_date'),
        month=ExtractMonth('estimate_date')
    )

    # Подзапрос - для каждого года и месяца находим максимальное date_dt
    subquery = RevenueEst2025.objects.filter(
        estimate_date__year=current_year,
        frc=dept,
        estimate_date__year=OuterRef('year'),
        estimate_date__month=OuterRef('month'),
    ).values('estimate_date__year', 'estimate_date__month').annotate(
        max_date_dt=Max('date_dt')
    ).values('max_date_dt')

    # Теперь фильтруем записи, чтобы date_dt == max_date_dt из подзапроса
    qs = qs.annotate(
        max_date_dt=Subquery(subquery[:1])
    ).filter(date_dt=F('max_date_dt'))

    return qs.order_by('estimate_date')

@api_view(['GET', 'POST'])
def get_est(request):
    if request.method == 'GET':
        # dept = request.POST.get('dept')
        dept = 'Центр качества поставок'
        data = get_latest_per_month(dept)
        serializer = RevenueEst2025Serializer(data, context={'request': request}, many=True)
        # data = RevenueEst2025.filter().using('fin')
        # serializer = RevenueEst2025Serializer(data, context={'request': request}, many=True)
        
        return Response(serializer.data)
    

    
    # elif request.method == 'POST':
    #     print('post')
    #     serializer = RevenueEst2025Serializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET'])
def frc_unique(request):
    dept_list = [x['frc'] for x in RevenueEst2025.objects.values('frc').distinct().using('fin')]
    return Response(dept_list)


    


