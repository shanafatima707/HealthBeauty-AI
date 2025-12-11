# High-Level Design (HLD) - HealthBeauty AI

## System Overview
Monorepo architecture with clear separation of concerns

## Core Components
- Frontend → React + Vite + Tailwind → Vercel
- Backend API → Node.js + Express → Railway
- Database
   ├── PlanetScale MySQL (users, appointments, orders)
   └── MongoDB Atlas (prescriptions, images)
- AI Service → Hugging Face Inference API
- Cache → Redis (sessions + recommendations)
- Auth → JWT + HttpOnly cookies
- Payment → Razorpay test mode

## Data Flow
User → CDN → React → API Gateway → Node Backend → DB/AI → Response

## Scalability & Security
- Horizontal scaling ready
- Read replicas + Redis cache
- HTTPS + rate limiting + input sanitization
- All secrets in environment variables

Status: HLD completed – 11 Dec 2025
