from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.

#------ Validators ------
def not_empty(value):
    if value == '':
        raise ValidationError('This field cannot be empty!')
    
def publish_year_validator(value):
    if value <= 0:
        raise ValidationError('Publish year is not valid!')


#------ Models ------
class User(models.Model):
    name = models.CharField(max_length=100, validators=[not_empty])
    birthDate = models.DateField()
    username = models.CharField(max_length=100, validators=[not_empty])
    password = models.CharField(max_length=100, validators=[not_empty])

    def __str__(self):
        return self.name

class Book(models.Model):
    name = models.CharField(max_length=200, validators=[not_empty])
    published = models.IntegerField(validators=[publish_year_validator])
    author = models.CharField(max_length=200, validators=[not_empty])
    likes = models.IntegerField(default=0)
    dislikes = models.IntegerField(default=0)
    addedBy = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
    
    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'published': self.published,
            'author': self.author,
            'likes': self.likes,
            'dislikes': self.dislikes,
            'addedBy': self.addedBy.name
        }

class Comment(models.Model):
    comment_text = models.CharField(max_length=500, validators=[not_empty])
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.comment_text
    