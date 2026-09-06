# CWD Technologies Platform

Welcome to the official repository for **CWD Technologies** — a scalable, modern technology agency platform designed for high conversion, lead generation, and digital growth.

## 🏗 Architecture Overview

This repository is structured as a **Monorepo**, cleanly separating the frontend user interface from the backend API services to allow for flexible, independent deployments.

```text
CWD Technologies/
├── frontend/                 # Next.js App (React, Tailwind, Shadcn UI)
└── backend/                  # Node.js/Express API (Lead Management, Webhooks)
```

## ✨ Key Features

### Frontend (`/frontend`)
* **Interactive Quotation Generator:** A step-by-step tool allowing users to build a custom quote, view dynamic pricing, export as a clean PDF, and send directly via WhatsApp.
* **Aggressive Startup Pricing Strategy:** Built-in tiered pricing structures specifically designed to attract both fresh startups and enterprise clients.
* **Centralized Configuration:** Zero hardcoded data. All services, pricing, FAQs, legal terms, and payment details are centrally managed in `src/config/*.ts` files for instant updates.
* **Dynamic Service Pages:** Auto-generated pages for every service offering (Website Dev, Custom Software, AI Integration, etc.) complete with localized "Discuss on WhatsApp" CTAs.
* **Modern Aesthetic:** Dark mode, glassmorphism, smooth animations, and premium typography.

### Backend (`/backend`)
* **Lead Management API:** An Express server foundation ready to handle incoming leads from the frontend.
* **Integration Ready:** Pre-architected with placeholders to connect to Hubspot/Salesforce CRMs, SendGrid emails, and Zapier Webhooks.

---

## 🚀 Getting Started Locally

### Running the Frontend
```bash
cd frontend
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the website.

### Running the Backend
```bash
cd backend
npm install
npm start
```
The backend API will run on port 5000 by default.

---

## 🌍 Deployment Guide

### Deploying Frontend (Vercel)
The frontend is optimized for **Vercel**.
1. Import this GitHub repository into Vercel.
2. In the project configuration, change the **Root Directory** to `frontend`.
3. Deploy. Vercel will automatically detect Next.js and build it.

### Deploying Backend (Render)
The backend is optimized for services like **Render** or Heroku.
1. Create a new Web Service on Render and connect this repository.
2. Change the **Root Directory** to `backend`.
3. Build Command: `npm install`
4. Start Command: `npm start`

---

*Designed and Developed by Dhiraj Kumar Singh for CWD Technologies (2026).*
