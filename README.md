# NoteFlow# NoteFlow

Full-stack notes app with **Django REST Framework** backend and **React (CRA)** frontend. Supports JWT auth, tags, search, pagination, and theme toggle. Deployed via **Docker** on **Render**.

**Live:**

- Frontend: https://noteflow-frontend-latest.onrender.com
- Backend: https://noteflow-backend-latest.onrender.com

## Features

- JWT authentication (register/login/logout)
- Notes CRUD with tags & search
- Light/Dark theme
- Protected routes (frontend)
- Auto static serving (WhiteNoise)
- Dockerized frontend & backend

## Tech Stack

**Backend:** Django, DRF, Gunicorn, WhiteNoise  
**Frontend:** React (CRA), Axios, Bootstrap, Toastify  
**Infra:** Docker (linux/amd64), Nginx SPA, Render

## Local Setup

**Backend**

```bash
cd backend
pip install -r requirements.txt
cp .env.example .env   # set SECRET_KEY, DEBUG, ALLOWED_HOSTS
python manage.py migrate
python manage.py runserver
```

**Frontend**

```bash
cd frontend
npm install
cp .env.example .env   # set API URLs
npm start
```

## Docker (Prod-style)

**Backend**

```bash
docker buildx build --platform linux/amd64 -t rayyanportfolio/noteflow-backend:latest .
docker run -p 8000:8000 --env-file .env rayyanportfolio/noteflow-backend:latest
```

**Frontend**

```bash
docker buildx build --platform linux/amd64 -t rayyanportfolio/noteflow-frontend:latest .
docker run -p 8080:80 rayyanportfolio/noteflow-frontend:latest
```

## Deployment (Render)

- **Backend**: Docker image, Port `8000`, Gunicorn start cmd, set env vars & CORS
- **Frontend**: Docker image, Port `80`, Nginx SPA routing
