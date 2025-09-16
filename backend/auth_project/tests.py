from django.test import TestCase, Client
from django.contrib.auth import get_user_model

User = get_user_model()

class AuthenticationTestCase(TestCase):
    def setUp(self):
        self.client = Client()
        self.test_user = User.objects.create_user(
            email="testuser@example.com",
            full_name="Test User",
            password="testpass123"
        )

    def test_user_creation(self):
        self.assertEqual(self.test_user.email, "testuser@example.com")
        self.assertTrue(self.test_user.check_password("testpass123"))

    def test_user_login(self):
        response = self.client.login(
            email="testuser@example.com",
            password="testpass123"
        )
        self.assertTrue(response)
