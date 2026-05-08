from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import EmailMessage
from .models import Contact
import json


@csrf_exempt 
def contact_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)

            name = data.get('name')
            email = data.get('email')
            message = data.get('message')

            if not name or not email or not message:
                return JsonResponse({'error': 'All fields required'}, status=400)

            Contact.objects.create(
                name=name,
                email=email,
                message=message
            )

            try:
                email_obj = EmailMessage(
                    subject=f"New Contact Message from {name}",
                    body=f"Name: {name}\nEmail: {email}\n\nMessage:\n{message}",
                    from_email=os.getenv("EMAIL_HOST_USER"),
                    to=[os.getenv("EMAIL_HOST_USER")],
                    reply_to=[email]
                )
                email_obj.send(fail_silently=True)
            except:
                pass

            return JsonResponse({'message': 'Message stored successfully'})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request'}, status=405)