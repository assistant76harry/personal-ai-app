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

## Completed ✅

### Repo Created
- GitHub: https://github.com/assistant76harry/personal-ai-app
- React + Vite + Tailwind setup

### Frontend Built
- Dashboard with balance display
- Budget tracking with progress bars
- Bills view with due dates
- AI Chat interface (mock)
- Settings with account connections

### What's Working (Mock)
- All UI components render
- Tab navigation
- Chat with simulated AI responses

---

## To Do - For Tomorrow (8AM)

### P0 - Critical
1. [ ] Connect to Vercel for deployment
2. [ ] Set up Plaid (sandbox) for bank connection
3. [ ] Set up Supabase for database

### P1 - Important
4. [ ] Add real Plaid Link integration
5. [ ] Connect OpenClaw API for AI chat
6. [ ] Add transaction fetching from Plaid

### P2 - Nice
7. [ ] Add email parsing for bill detection
8. [ ] Add Telegram/Discord notifications

---

## Credentials Needed

| Service | Status | Action |
|---------|--------|--------|
| Plaid Client ID | ❌ | Sign up at plaid.com |
| Plaid Secret | ❌ | Get from Plaid dashboard |
| Supabase URL | ❌ | Sign up at supabase.com |
| Supabase Key | ❌ | Get from Supabase |
| Vercel Account | ❌ | Connect GitHub |

---

## Quick Start (When Ready)

```bash
# Clone and run locally
git clone https://github.com/assistant76harry/personal-ai-app.git
cd personal-ai-app
npm install
npm run dev
```

---

## Next Steps Summary

1. **Ravi needs to do:** 
   - Sign up for Plaid (sandbox)
   - Sign up for Supabase
   - Connect GitHub to Vercel

2. **Harry needs to do:**
   - Add Plaid integration code
   - Connect Supabase database
   - Connect OpenClaw for real AI chat

---

*In progress...*
