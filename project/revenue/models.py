from django.db import models


class RevenueEst2025(models.Model):
    company = models.CharField(blank=True, 
                                # null=True,
                                primary_key=True,
                                unique=False,
                                default=None
                                )
    date_dt = models.DateField(blank=True, null=True)
    estimate_date = models.DateField(blank=True, null=True)
    frc = models.CharField(blank=True, null=True)
    est_amount = models.DecimalField(max_digits=40, decimal_places=3, blank=True, null=True)  # max_digits and decimal_places have been guessed, as this database handles decimal fields as float
    hcl_amount = models.DecimalField(max_digits=40, decimal_places=3, blank=True, null=True)  # max_digits and decimal_places have been guessed, as this database handles decimal fields as float
    contr_amount = models.DecimalField(max_digits=40, decimal_places=3, blank=True, null=True)  # max_digits and decimal_places have been guessed, as this database handles decimal fields as float

    def __str__(self):
        return self.company

    class Meta:
        managed = False
        db_table = 'revenue_est_2025'


class RevenueFact(models.Model):
    date_dt = models.DateTimeField(blank=True, null=True)
    c_agent = models.CharField(blank=True, null=True)
    contract = models.CharField(blank=True, null=True)
    doc = models.CharField(blank=True, null=True)
    division = models.CharField(blank=True, null=True)
    frc = models.CharField(blank=True, null=True)
    nom_g = models.CharField(blank=True, null=True)
    div_frc = models.CharField(blank=True, null=True)
    nom_frc = models.CharField(blank=True, null=True)
    amount = models.DecimalField(max_digits=10, decimal_places=5, blank=True, null=True)  # max_digits and decimal_places have been guessed, as this database handles decimal fields as float

    def __str__(self):
        return self.doc

    class Meta:
        managed = False
        db_table = 'revenue_fact'


class RevenuePlan2025(models.Model):
    company = models.CharField(blank=True, null=True)
    date_dt = models.DateField(blank=True, null=True)
    frc = models.CharField(blank=True, null=True)
    amount = models.DecimalField(max_digits=10, decimal_places=5, blank=True, null=True)  # max_digits and decimal_places have been guessed, as this database handles decimal fields as float

    def __str__(self):
        return self.company    

    class Meta:
        managed = False
        db_table = 'revenue_plan_2025'
