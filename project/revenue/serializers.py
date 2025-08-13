from rest_framework import serializers
from .models import RevenueEst2025

class RevenueEst2025Serializer(serializers.ModelSerializer):

    class Meta:
        model = RevenueEst2025
        fields = ('company', 'date_dt', 'estimate_date', 'frc', 'est_amount', 'hcl_amount', 'contr_amount')