from django.db import models

# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    details = models.CharField(max_length=500)
    start_date = models.DateField()
    
    def __str__(self):
        return self.title
