from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import EmailMessage
# from .models import Contact
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

            # Contact.objects.create(
            #     name=name,
            #     email=email,
            #     message=message
            # )
            email_obj = EmailMessage(
                subject=f"New Contact Message via Portfolio from {name}",
                
                body=f"""
            New message received from your portfolio:

            Name: {name}
            Email: {email}

            Message:
            {message}
            """,

                from_email="abhaysinghtomar835@gmail.com",   
                to=["abhaysinghtomar835@gmail.com"],        
                reply_to=[email]                             
            )

            email_obj.send(fail_silently=False)

            return JsonResponse({'message': 'Message sent successfully'})

        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)

    return JsonResponse({'error': 'Invalid request'}, status=405)