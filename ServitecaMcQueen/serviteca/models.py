from django.conf import settings
from django.db import models


class Trabajadores(models.Model):
    publicado_por = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=15)
    apellido = models.CharField(max_length=20)
    experiencia = models.CharField(max_length=2)
    cargo = models.TextField()
    foto = models.ImageField()





    def __str__(self):
        return self.nombre
