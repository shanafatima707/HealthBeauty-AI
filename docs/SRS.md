# Software Requirements Specification (SRS) - HealthBeauty AI

**Functional Requirements**
1. User Registration & Login (Patient, Doctor, Admin roles)
2. AI Symptom Checker (text input → instant disease probability)
3. AI Skin-Tone Analyzer (upload photo → product suggestions)
4. Appointment booking with real-time slots
5. Doctor dashboard — view patients, write prescriptions
6. E-commerce store with personalized recommendations
7. Payment integration (Razorpay test mode)
8. Responsive mobile + desktop design

**Non-Functional Requirements**
- Handle 1000+ concurrent users
- AI response < 3 seconds
- JWT secure authentication
- Data encryption
- 99.9% uptime target

**Tech Stack**
- Frontend: React + Vite + Tailwind
- Backend: Node.js + Express
- Database: MySQL + MongoDB
- AI: Hugging Face API
- Deploy: Vercel + Railway

Status: Draft ready – 11 Dec 2025
