from django.db import models

# Create your models here.
class Productos(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    image = models.ImageField(upload_to='products/', null=True, blank=True)
    sold = models.BooleanField(default=False)

    def __str__(self):
        return self.name