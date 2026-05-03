from .views import contact_view
from django.urls import path

urlpatterns = [
  path('contact/', contact_view, name='contact'),
]