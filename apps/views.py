from django.shortcuts import render

def my_view(request):
    return render(request, 'myapp/your_template.html')
