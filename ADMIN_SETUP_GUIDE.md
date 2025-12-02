# Admin Access Control - Setup Guide

## 🔒 Security Update

Your newsletter admin panel now requires **admin privileges** to access. Regular authenticated users can no longer send emails to all subscribers.

---

## 📋 Quick Setup (5 Minutes)

### Step 1: Run SQL in Supabase

1. Go to your Supabase project: https://supabase.com/dashboard
2. Navigate to **SQL Editor** (left sidebar)
3. Click **New Query**
4. Copy and paste the entire contents of `supabase/admin-setup.sql`
5. Click **Run** (or press Ctrl/Cmd + Enter)

You should see: `Success. No rows returned`

### Step 2: Make Your Account Admin

Still in the SQL Editor, run this query (replace with your actual email):

```sql
UPDATE public.profiles
SET is_admin = true
WHERE email = 'hablemoscrypto.es@gmail.com';
```

You should see: `Success. 1 rows affected`

### Step 3: Verify It Works

1. Log out of your platform
2. Log back in with your admin email
3. Navigate to: https://hablemoscripto.io/admin/newsletter
4. You should see the dashboard ✅

### Step 4: Test Access Control

1. Create a test student account (or have a friend sign up)
2. Try to access `/admin/newsletter` with that account
3. You should see: **"Acceso denegado. Solo administradores pueden acceder a esta página."**
4. User gets redirected to `/education` after 3 seconds ✅

---

## 🔐 How It Works Now

### **Before (Insecure)**
```
User logged in? → Yes → Access granted ❌
                → No  → Redirect to login
```

### **After (Secure)**
```
User logged in? → No  → Redirect to login
                ↓
               Yes
                ↓
     Is user admin? → No  → "Acceso denegado" + redirect
                    ↓
                   Yes
                    ↓
           Access granted ✅
```

---

## 🛡️ Security Layers

### 1. **Frontend Check** ([NewsletterAdmin.tsx:36-62](components/NewsletterAdmin.tsx#L36-L62))
- Queries `profiles` table to check `is_admin` status
- Redirects non-admins to `/education` with error message
- Shows "Verificando permisos..." during check

### 2. **API Endpoint Check** ([send-newsletter.ts:32-41](api/send-newsletter.ts#L32-L41))
- Verifies Bearer token is valid
- Checks user has `is_admin = true` in database
- Returns `403 Forbidden` if not admin
- Prevents API abuse even if someone bypasses frontend

### 3. **Database RLS Policies** ([admin-setup.sql:29-36](supabase/admin-setup.sql#L29-L36))
- Only admins can SELECT from `newsletter_subscribers`
- Blocks direct database access for non-admins
- Works even if someone uses Supabase client directly

---

## 👥 Managing Admins

### Make Someone Admin
```sql
UPDATE public.profiles
SET is_admin = true
WHERE email = 'newadmin@example.com';
```

### Remove Admin Access
```sql
UPDATE public.profiles
SET is_admin = false
WHERE email = 'oldadmin@example.com';
```

### List All Admins
```sql
SELECT email, created_at
FROM public.profiles
WHERE is_admin = true;
```

### Check If Specific User Is Admin
```sql
SELECT email, is_admin
FROM public.profiles
WHERE email = 'user@example.com';
```

---

## 🎯 What Changed in Your Code

### 1. **New Table: `profiles`**
- Stores user roles and metadata
- Automatically created when users sign up (via trigger)
- Links to Supabase `auth.users` table

### 2. **Updated Component: `NewsletterAdmin.tsx`**
- Added `checkAdminStatus()` function
- Queries profiles table on mount
- Shows error + redirects non-admins
- Added loading state: "Verificando permisos..."

### 3. **Updated API: `send-newsletter.ts`**
- Queries `profiles` table after authentication
- Returns `403 Forbidden` if `is_admin = false`
- Prevents unauthorized email sending

### 4. **Updated RLS Policies**
- Changed `newsletter_subscribers` SELECT policy
- Now requires admin status instead of just authentication

---

## 🧪 Testing Checklist

- [ ] Admin user can access `/admin/newsletter`
- [ ] Admin user can send emails successfully
- [ ] Regular user gets "Acceso denegado" message
- [ ] Regular user redirected to `/education` after 3 seconds
- [ ] API returns 403 if non-admin tries to call `/api/send-newsletter`
- [ ] New signups automatically get `is_admin = false`
- [ ] Profile automatically created when user signs up

---

## 🆘 Troubleshooting

### "Error verificando permisos de administrador"
**Cause**: Profile doesn't exist for your user

**Fix**:
```sql
-- Check if profile exists
SELECT * FROM public.profiles WHERE email = 'your@email.com';

-- If no results, create it manually:
INSERT INTO public.profiles (id, email, is_admin)
SELECT id, email, true
FROM auth.users
WHERE email = 'your@email.com';
```

### "Acceso denegado" even though I'm admin
**Cause**: `is_admin` is set to `false`

**Fix**:
```sql
UPDATE public.profiles
SET is_admin = true
WHERE email = 'your@email.com';
```

### Subscribers table shows empty
**Cause**: RLS policy blocking access

**Fix**: Make sure you ran Step 2 to set your account as admin

### API returns 403 even for admin
**Cause**: Profile not synced or RLS blocking query

**Fix**:
```sql
-- Grant admin access to profiles table
GRANT SELECT ON public.profiles TO authenticated;

-- Verify your admin status
SELECT email, is_admin FROM public.profiles WHERE email = 'your@email.com';
```

---

## 📊 Database Schema

```
┌─────────────────┐         ┌──────────────────────┐
│  auth.users     │         │  public.profiles     │
├─────────────────┤         ├──────────────────────┤
│ id (UUID) ──────┼────────→│ id (UUID) [FK]       │
│ email           │         │ email                │
│ created_at      │         │ is_admin (BOOLEAN)   │
└─────────────────┘         │ created_at           │
                            │ updated_at           │
                            └──────────────────────┘
                                      ↓
                            Checked by API and Component
```

---

## 🚀 Future Enhancements (Optional)

### Add More Admin Controls
- Delete subscribers from admin panel
- Edit subscriber status (active/inactive)
- View email send history
- Admin activity logs

### Role-Based Permissions
```sql
-- Add role column for multiple permission levels
ALTER TABLE public.profiles ADD COLUMN role TEXT DEFAULT 'user';
-- Roles: 'user', 'editor', 'admin', 'super_admin'
```

### Admin Dashboard
- Create `/admin/dashboard` with stats
- User management interface
- Email campaign analytics

---

## ✅ You're All Set!

Your newsletter system now has proper access control:
- ✅ Only admins can view subscribers
- ✅ Only admins can send emails
- ✅ Protected at frontend, API, and database level
- ✅ Non-admins see clear error message

**Next**: Once your Resend DNS propagates, update the `from` address in [send-newsletter.ts:46](api/send-newsletter.ts#L46) from `onboarding@resend.dev` to `newsletter@hablemoscripto.io`
