from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from inventory import views
#Api versioning
router = routers.DefaultRouter()
router.register(r'general', views.ProductsView, 'dashboard' )
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="Inventory Api"))
]