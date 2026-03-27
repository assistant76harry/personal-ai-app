# Personal AI Assistant App - Specification

## Vision
An all-in-one AI assistant app (like Alipay/WeChat meets ChatGPT) that manages:
- Finances (bank connections, budgeting, bill tracking)
- Calendar & Email
- Tasks & Automations
- Community features

## Version 1 Focus (Ravi Only)
Personal finance management + AI assistant for ONE user.

---

## Technical Stack

### Core AI
- **OpenClaw** - Already running, has all skills
- **Model:** MiniMax M2.5 (configured)

### Backend
- **Database:** SQLite (local) or Supabase (cloud)
- **APIs:** Plaid (bank), SendGrid (email), Stripe (future billing)
- **Auth:** Custom JWT or Supabase Auth

### Frontend
- **Framework:** React + Vite
- **Styling:** TailwindCSS
- **Deployment:** Vercel (free tier)

---

## Features v1 (Priority Order)

### P0 - Must Have
1. **Bank Connection**
   - Plaid Link integration
   - Transaction sync (daily)
   - Balance display

2. **Budget Management**
   - Category budgets (set by user)
   - Spending tracking
   - Overspend alerts

3. **Bill Detection**
   - Email parsing for bill due dates
   - Calendar reminders
   - Payment reminders

4. **AI Chat Interface**
   - Chat with your AI
   - Ask financial questions
   - Command parsing ("pay bills", "show spending")

### P1 - Should Have
5. **Dashboard**
   - Net worth overview
   - Monthly spending chart
   - Upcoming bills list

6. **Email Integration**
   - Read inbox for financial context
   - Auto-categorize bills

7. **Notification System**
   - Telegram/Discord alerts
   - Budget warnings
   - Bill due reminders

### P2 - Nice to Have
8. **Investment Tracking**
   - Manual portfolio entry
   - Crypto prices via API

9. **Calendar Integration**
   - Sync events
   - Meeting reminders

---

## Implementation Plan

### Hour 1-2: Setup & Research
- [x] Project structure created
- [ ] Research Plaid setup (sandbox vs production)
- [ ] Research Supabase for database + auth
- [ ] Research React dashboard templates

### Hour 3-4: Account Setup
- [ ] Create GitHub repo for app
- [ ] Sign up for Plaid (sandbox)
- [ ] Sign up for Supabase (free tier)
- [ ] Set up Vercel project

### Hour 5-6: Core Development
- [ ] Initialize React + Vite project
- [ ] Set up Plaid Link component
- [ ] Create database schema
- [ ] Build basic dashboard UI

### Hour 7-8: AI Integration
- [ ] Connect OpenClaw API to app
- [ ] Create chat interface
- [ ] Build command parser

### Hour 9-10: Testing
- [ ] Test bank connection (sandbox)
- [ ] Test transaction sync
- [ ] Test AI commands

### Hour 11-12: Polish
- [ ] Finalize UI
- [ ] Create user guide
- [ ] Document setup for Ravi

---

## Dependencies Needed

### External Services
1. **Plaid** - Bank API
   - Sign up: https://plaid.com/
   - Use sandbox for testing
   
2. **Supabase** - DB + Auth
   - Sign up: https://supabase.com/
   - Free tier sufficient

3. **Vercel** - Hosting
   - Sign up: https://vercel.com/

### npm Packages
```json
{
  "plaid": "^23.0.0",
  "@supabase/supabase-js": "^2.39.0",
  "react-plaid-link": "^3.5.0",
  "recharts": "^2.10.0",
  "lucide-react": "^0.300.0"
}
```

---

## File Structure

```
personal-ai-app/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── PlaidLink.jsx
│   │   ├── ChatInterface.jsx
│   │   ├── BudgetCard.jsx
│   │   └── TransactionList.jsx
│   ├── lib/
│   │   ├── plaid.js
│   │   ├── supabase.js
│   │   └── ai.js
│   ├── App.jsx
│   └── main.jsx
├── supabase/
│   └── schema.sql
├── package.json
└── SPEC.md
```

---

## API Keys Needed

| Service | Key | Status |
|---------|-----|--------|
| Plaid | Client ID + Secret | Need to sign up |
| Supabase | URL + Key | Need to sign up |
| OpenRouter | Already configured | ✅ Ready |

---

## Success Criteria

By 8AM March 27th:
- [ ] Project repo created and pushed
- [ ] Plaid sandbox connected
- [ ] Basic dashboard showing
- [ ] Can ask AI about finances via chat
- [ ] Ready for Ravi to test with real bank (production)

---

*Let's build.*