# Make Dashboard & Support Form Fully Functional

You picked **Dashboard** first and **Support form: store in DB + email me**. Here's the focused plan.

## Phase 1 — Database

Two new tables:

**`transactions`** (per-user expenses/income that powers the dashboard)
- `user_id`, `amount`, `type` (`expense` | `income`), `category`, `description`, `occurred_at`
- RLS: each user can only CRUD their own rows

**`contact_messages`** (Support form submissions)
- `user_id` (nullable), `name`, `email`, `subject`, `message`, `status`
- RLS: anyone can insert; only the submitter (or admin later) can read

## Phase 2 — Dashboard becomes live

Replace mocked data in `DashboardCards`, `AnalyticsCharts`, and `ExpenseTracker` with real queries against `transactions`:

- **Stat cards** — total income, total expenses, savings, monthly delta
- **Add Transaction dialog** — working form (amount, type, category, description, date)
- **Analytics charts** — built from the user's actual transactions (monthly trend + category breakdown)
- **Recent transactions list** — live, with delete action
- Empty states + loading skeletons everywhere
- Auto-seed a few demo transactions on first login so the dashboard isn't empty

## Phase 3 — Support form

- Form posts to `contact_messages` with zod validation
- Toast confirmation on success
- For the **"email me"** part: this needs a verified sender domain first. After Phase 1–2 I'll prompt you to set up your email domain through the in-app dialog, then I'll wire the email notification automatically (no extra work for you).

## Phase 4 — Out of scope for this round

Goals CRUD, Budget Alerts auto-triggers, and AI Insights stay as polished mock UI for now. We can tackle those in the next round once the dashboard foundation is solid.

## Technical notes

- All data queries scoped via `auth.uid()` — no profile leakage
- Tables get explicit `GRANT`s for `authenticated` role
- `contact_messages` also grants `INSERT` to `anon` so logged-out visitors can still contact you
- A `seed_demo_transactions` trigger fires once per new user
- Realtime not enabled in this phase (can add later if you want live updates across tabs)

Approve and I'll start with the migration.
