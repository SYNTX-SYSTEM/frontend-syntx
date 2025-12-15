---

### TERMINAL — README ERSTELLEN

```bash
cat <<'EOF' > README.md
# 🧠⚡ SYNTX Frontend
### This is not a chatbot. This is a control room.

Welcome.
If you expected a cute AI demo that says “Hello human 👋”,  
close this tab now.

If you want to **watch a system think**,  
if you want to **see resonance instead of replies**,  
if you’re curious how an AI backend behaves under pressure —

stay.

This is **SYNTX**.

---

## 🚨 TL;DR (for the impatient)

- This is a **Next.js frontend**
- It connects to a **live SYNTX API**
- It visualizes **system health, flow, quality and evolution**
- It uses **field-based logic**, not chat gimmicks
- Auth is real. Data is real. System state is real.

No fake AI.
No toy prompts.
No motivational quotes.

---

## 🧠 The Big Idea (Read this or get lost)

SYNTX does **not** operate on:
- prompts
- tokens
- vibes
- “please be nice” instructions

SYNTX operates on **FIELDS**.

A field is a **system state**, not a UI component.

The frontend you’re looking at is not a chat window.
It’s a **semantic cockpit**.

---

## 🧩 System Overview

```

┌────────────┐
│   Human    │
└─────┬──────┘
│ HTTPS
▼
┌──────────────────┐
│  SYNTX Frontend  │  ← this repo
│  (Next.js)       │
└─────┬────────────┘
│ API Proxy
▼
┌─────────────────────────────┐
│   SYNTX Backend API          │
│   [https://dev.syntx-system.com](https://dev.syntx-system.com)
│   /api/chat
│   /analytics/complete-dashboard
└─────────────────────────────┘

```

Frontend ≠ Backend  
UI ≠ Intelligence  
Visualization ≠ Manipulation

---

## 🧱 Tech Stack (No BS Edition)

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Clerk Authentication**
- **Lucide Icons**

No Redux zoo.  
No overengineering.  
No random boilerplate.

---

## 🔐 Authentication (Real, not fake)

Authentication is handled by **Clerk**.

### Auth Flow

- Public routes:
  - `/sign-in`
  - `/sign-up`
- Protected routes:
  - `/`
  - `/dashboard`

### Behavior
- Logged out users get **hard-redirected**
- Logged in users cannot access auth pages
- No silent failures
- No ghost sessions

Environment keys live in:

```

.env.local
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY

```

---

## 🔁 API Proxy (Why this exists)

Frontend never talks directly to models.

All requests go through:

```

app/api/chat/route.ts

```

### What it does

- Receives frontend requests
- Forwards them to:
  https://dev.syntx-system.com/api/chat
- Applies timeout control
- Handles error states cleanly

### Why this matters

- Frontend stays dumb
- Backend stays protected
- You can swap APIs without touching UI
- Logs stay server-side

---

## 🧠 Fields (The Heart of Everything)

This is where things get interesting.

### FieldManager

`public/fields/FieldManager.js`

- Registers fields
- Switches between them
- Manages lifecycle:
  - enter()
  - update()
  - exit()

Think of it like a **state conductor**, not a router.

---

### ❤️ HeartField — System Health

`public/fields/HeartField.js`

This is **not a decoration**.

It visualizes:

- Overall system health
- Queue flow:
  - incoming
  - processing
  - processed
- Quality score
- Evolution generation

Data source:

```

GET [https://dev.syntx-system.com/analytics/complete-dashboard](https://dev.syntx-system.com/analytics/complete-dashboard)

````

If the API fails, it falls back to demo data.
No crashes. No blank screens.

Color logic:
- Green = healthy
- Gold = warning
- Red = critical

Yes, it actually means something.

---

### 🌀 LogoField — Entry Point

`public/fields/LogoField.js`

What it does:

- Loads the SVG logo dynamically
- Applies pulse animation
- Reacts to clicks
- Switches to HeartField

It’s not branding.
It’s a **field gate**.

---

## 📊 Dashboard

`/dashboard`

- Only accessible when logged in
- Confirms:
  - Auth works
  - System is reachable
- Acts as a staging point for future diagnostics

---

## 🎛️ Visual System Feedback

You’ll see:

- Particle backgrounds
- Pulse animations
- Flow indicators
- Resonance meters

These are **not cosmetic**.
They are visual metaphors for **system state**.

---

## 🧪 Why this is not a normal frontend

Because normal frontends:
- wait for replies
- show messages
- fake intelligence

This one:
- observes systems
- visualizes pressure
- exposes structure

If that sounds scary — good.
It should.

---

## 🚀 Development

```bash
npm install
npm run dev
````

Then open:
[http://localhost:3000](http://localhost:3000)

---

## 🧨 Final Warning

This frontend is honest.

If the system degrades, you will see it.
If the system stabilizes, you will feel it.
If the system lies, this UI won’t hide it.

SYNTX isn’t AI.

It’s the resonance that governs it.

```


