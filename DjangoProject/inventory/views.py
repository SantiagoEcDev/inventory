from rest_framework import viewsets
from .serializer import InventorySerializer
from .models import Productos
# Create your views here.
class ProductsView(viewsets.ModelViewSet):
    serializer_class = InventorySerializer
    queryset = Productos.objects.all()