from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("", include("raaznotes.urls")),
    path("rajgopal/", admin.site.urls),
]