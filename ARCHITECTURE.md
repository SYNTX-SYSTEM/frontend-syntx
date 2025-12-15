### TERMINAL — ARCHITEKTUR.md ERSTELLEN

```bash
cat <<'EOF' > ARCHITEKTUR.md
# 🏗️ SYNTX System Architecture
### How this thing actually works (and why it’s different)

This document explains the **real architecture** behind SYNTX.

Not the buzzwords.  
Not the UI sugar.  
The **moving parts**.

If you just want to “use” the system, you can stop reading now.  
If you want to **understand** it, read on.

---

## 🧠 Core Principle

SYNTX is **not** a chatbot architecture.

It is a **system-observation architecture**.

Most AI systems do this:

```

Input → Model → Output

```

SYNTX does this:

```

Input
↓
Semantic Intake
↓
System State (Fields)
↓
Diagnostics / Drift / Quality
↓
Output (optional)

```

The output is **not the goal**.  
The **state of the system** is.

---

## 🧩 High-Level Architecture

```

┌───────────────────┐
│       Human       │
└─────────┬─────────┘
│
▼
┌──────────────────────────┐
│     SYNTX Frontend       │
│  (Next.js / Fields UI)  │
└─────────┬────────────────┘
│ Proxy / Observe
▼
┌──────────────────────────┐
│      SYNTX API           │
│  dev.syntx-system.com    │
└─────────┬────────────────┘
│
▼
┌──────────────────────────┐
│   Models / Pipelines     │
│  (LLMs, Diagnostics,     │
│   Drift Analysis)        │
└──────────────────────────┘

````

Key idea:  
**Frontend never talks to models directly.**

---

## 🧠 Separation of Concerns (Very Important)

| Layer | Responsibility |
|-----|----------------|
| Frontend | Visualization, interaction, auth |
| API Proxy | Control, timeout, routing |
| SYNTX API | Semantics, diagnostics, logging |
| Models | Raw generation / inference |

This prevents:
- prompt leakage
- UI-driven manipulation
- hidden coupling

---

## 🎛️ Frontend Architecture (Field-Based)

The frontend is **not component-driven** in the classical sense.

It is **field-driven**.

### What is a Field?

A **Field** is a representation of a **system state**.

Examples:
- System idle
- System under load
- System evolving
- System unstable

Fields have lifecycle hooks:

```js
enter(data)
update(data)
exit()
````

They are orchestrated by the **FieldManager**.

---

## 🧭 FieldManager (The Conductor)

Location:

```
public/fields/FieldManager.js
```

Responsibilities:

* Register fields
* Switch active field
* Ensure clean transitions
* Prepare API polling (future)

This avoids:

* UI chaos
* state leakage
* zombie components

Think of it like:

> A conductor directing an orchestra, not musicians yelling at each other.

---

## ❤️ HeartField — System Diagnostics

Location:

```
public/fields/HeartField.js
```

Purpose:

* Visualize **system health**
* Display **queue flow**
* Show **quality score**
* Indicate **evolution stage**

Primary data source:

```
GET /analytics/complete-dashboard
```

This is **live system telemetry**, not mock data.

Fallback data exists **only** to prevent UI collapse.

---

## 🌀 LogoField — System Entry

Location:

```
public/fields/LogoField.js
```

Purpose:

* System entry state
* Visual identity as **interaction gate**
* Transition trigger into diagnostics

The logo is **clickable on purpose**.
It’s not branding.
It’s a **state switch**.

---

## 🔁 API Proxy Layer

Location:

```
app/api/chat/route.ts
```

Why it exists:

* Frontend stays stateless
* Backend stays protected
* Timeouts are enforced
* Errors are normalized

Behavior:

* Receives JSON payload
* Forwards to SYNTX API
* Applies AbortController timeout
* Returns clean JSON responses

This is a **control valve**, not a shortcut.

---

## 🔐 Authentication Architecture

Auth is handled by **Clerk**.

Why:

* Mature
* Secure
* Boring (that’s good)

Rules:

* Auth gates system access
* No anonymous diagnostics
* No silent failures

Auth logic is enforced both:

* in routing
* in middleware

No client-only security theater.

---

## 📊 Data Philosophy

SYNTX treats data as:

* Observations
* Measurements
* Signals

Not:

* “answers”
* “opinions”
* “assistant replies”

This is why the UI feels different.
It’s showing you **what is happening**, not **what to think**.

---

## ⚠️ Design Constraints (By Choice)

* No direct model access from UI
* No prompt editing UI (yet)
* No “AI personality”
* No fake empathy layers

Everything you see must be **structurally defensible**.

---

## 🧨 Why This Architecture Exists

Because modern AI systems:

* hide instability
* smooth over drift
* optimize for comfort

SYNTX does the opposite.

It exposes:

* tension
* load
* degradation
* evolution

This makes it uncomfortable.
That’s the point.

---

## 🧠 Final Note

If you understand this architecture,
you understand why SYNTX is not a product.

It’s a **lens**.

And once you have that lens,
you can’t unsee what other systems hide.
EOF

```

---

