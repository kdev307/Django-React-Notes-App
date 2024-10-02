from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Note(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    # auto_now_add helps in automatically populating a particular data rather than filling it
    # created_at = models.DateTimeField(auto_now_add=True)
    # auto_now helps in automatically populating a particular data rather than filling it everytime it is updated
    created_at = models.DateTimeField(auto_now=True)
    # models.CASCADE says that we should also delete all of the notes this user when we are deleting the data source (User in this case) using on_delete
    # related_name tells the name which will be the references to the notes (helps in accessing as .notes)
    author = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="notes")

    def __str__(self):
        return self.title
