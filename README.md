# Ustaad (E-Mazdoor) — AI-Powered Recruitment & Service Marketplace

> Pakistan's first full-circle recruitment platform connecting daily-wage laborers, skilled professionals, freelancers, businesses, and households through a hybrid AI matching engine — addressing the fragmentation in Pakistan's **$80B+ informal labor market**.

[![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)](https://redis.io/)
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)

---

## The Problem

Pakistan's informal labor market is **fragmented, opaque, and trust-poor**:

- Daily-wage laborers rely on physical "ustaad mandis" (labor stands) with no digital presence or reputation
- Skilled professionals have no centralized way to reach employers beyond word-of-mouth
- Households can't verify who they're letting into their homes
- Businesses lose hours coordinating one-off hires across WhatsApp, phone calls, and middlemen

Ustaad is a single digital surface for the entire stack — laborers → freelancers → skilled pros → companies → households — with **verified profiles, escrow payments, and AI-driven matching** sitting underneath.

---

## What's actually engineered

### Hybrid AI Matching Engine

The matcher combines **two complementary techniques** rather than picking one:

| Approach | Method | What it captures |
|---|---|---|
| **Content-based** | TF-IDF over skill / job-title / location vectors + cosine similarity | New users / new jobs (no interaction history yet) |
| **Collaborative filtering** | Matrix factorization over historical hire / rating data | Latent preferences that don't show up in job text |

Both rankings are blended; output is benchmarked on:
- **Hit-Rate@5** — fraction of test users where a known-good match appears in top-5 recommendations
- **MRR** (Mean Reciprocal Rank) — how high in the ranking the true match lands

Measurable lift over both single-strategy baselines.

### Backend performance work

| Optimization | Result |
|---|---|
| **Redis cache-aside** for hot reads (user profiles, recent listings, match candidates) | Avoids repeated PG round-trips on every list view |
| **PostgreSQL indexing** — B-tree on FK / lookup columns, **GIN** on full-text and array columns (skills, tags, locations) | Sub-linear search on text + array queries |
| **Connection pooling + async query batching** in the FastAPI layer | Higher throughput per worker |

**Net result: p95 API latency reduced from ~800ms → under 200ms.**

### 11 design patterns, actually applied

Not pattern-name graffiti — these solve concrete problems in the codebase:

- **Strategy** — swappable matching algorithms (TF-IDF vs. matrix factorization vs. hybrid)
- **Repository** — DB access isolated from business logic; trivially mockable in tests
- **Observer** — notification fan-out on job-posted / application-received events
- **Decorator** — auth, rate-limiting, audit-logging wrapped around handler chains
- **Adapter** — unified payment interface over Easypaisa / JazzCash / Stripe
- Factory · Singleton · Builder · Command · Facade · Chain-of-Responsibility — applied across services and request pipelines

---

## User Surfaces

Ustaad serves **five distinct user types** through one platform:

| User | Core features |
|---|---|
| **Daily Laborers** | Verified digital profile, location-based job matching, transparent pricing, rating-based reputation |
| **Skilled Professionals** | Portfolio + certification showcase, project bidding, client management |
| **Freelancers** | Gig marketplace, milestone-based escrow payments, real-time chat |
| **Companies** | Talent pool search, job posting, applicant tracking, hiring analytics |
| **Households** | Vetted service-provider directory, background checks, emergency-response options |

Plus: AI-powered job/talent matching · secure escrow via **Easypaisa / JazzCash / Stripe** · real-time messaging · multi-language support (Urdu / English).

---

## Stack

| Layer | Tech |
|---|---|
| **Frontend** | Next.js 16 · React 19 · TypeScript 5 · Tailwind CSS 4 · Turbopack |
| **Backend** | FastAPI · Python 3.11+ |
| **Database** | PostgreSQL (GIN + B-tree indexes) |
| **Cache** | Redis (cache-aside) |
| **ML** | scikit-learn · TF-IDF · matrix factorization |
| **Payments** | Easypaisa · JazzCash · Stripe |
| **Tooling** | ESLint · Turbopack · pytest |

---

## Quick Start

```bash
# Clone
git clone https://github.com/taha-zaidii/Ustaad-E-Mazdoor.git
cd Ustaad-E-Mazdoor

# Frontend
npm install
npm run dev                  # http://localhost:3000

# Backend (separate terminal)
cd backend
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000

# Local infra
docker compose up postgres redis
```

Copy `.env.example` to `.env` and fill in DB credentials, payment-gateway keys, and a `JWT_SECRET`.

---

## Repository Layout

```
Ustaad-E-Mazdoor/
├── app/                  ← Next.js 16 app router (frontend routes + RSC)
├── components/           ← reusable React + shadcn/ui components
├── hooks/                ← custom React hooks
├── lib/                  ← client utilities, fetchers, formatters
├── public/               ← static assets
├── backend/              ← FastAPI service
│   ├── api/              ← REST routes
│   ├── matching/         ← TF-IDF + matrix-factorization engine
│   ├── repositories/     ← repository pattern over PG
│   ├── services/         ← business logic (Strategy, Observer, Decorator)
│   ├── payments/         ← Easypaisa / JazzCash / Stripe adapters
│   └── tests/
├── MIGRATION_SUMMARY.md  ← schema + indexing migration history
└── tailwind.config.ts
```

---

## Why this matters

Pakistan's informal labor sector is one of the largest economic surfaces in the country — and one of the most under-served by software. The same engineering primitives that power Upwork, Indeed, and TaskRabbit can be adapted to a market with very different trust, payment, and discovery dynamics. Ustaad is an attempt at that adaptation, built from the ground up for the Pakistani context.

---

## License

See LICENSE.
