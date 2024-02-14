from django.db import models

class StressLevel(models.Model):
    level = models.IntegerField()
    measured_on = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Stress Level - {self.level}"