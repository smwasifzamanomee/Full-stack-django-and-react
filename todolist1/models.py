from django.db import models
from django.forms import ModelForm

# Create your models here.

class TodoList1(models.Model):
    text = models.CharField(max_length=200)
    date = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.text
    
class TodoForm(ModelForm):
    class Meta:
        model = TodoList1
        fields = ['text']
    
