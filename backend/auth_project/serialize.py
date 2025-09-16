# serializers.py
from rest_framework import serializers
from .contactmodel import Contact

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'
        read_only_fields = ('created_at',)
