FROM python:3.11-slim

WORKDIR /app

COPY ./docker/django/requirements.txt /tmp/requirements.txt

RUN apt-get update && \
    apt-get install -y build-essential && \
    rm -rf /var/lib/apt/lists/*

RUN pip install -r /tmp/requirements.txt

# CMD ["python3", "manage.py", "runserver"]
