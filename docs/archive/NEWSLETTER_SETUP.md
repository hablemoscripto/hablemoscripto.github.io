# Newsletter System Setup Guide

## ✅ Already Implemented

1. **Newsletter Form** - Landing page captures emails
2. **Supabase Storage** - All emails stored in `newsletter_subscribers` table
3. **Admin Dashboard** - View/export emails at `/admin/newsletter`

---

## 🚀 Quick Start

### Step 1: Create Supabase Table

Run this SQL in your Supabase SQL Editor:

```sql
-- Create newsletter_subscribers table
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  is_active BOOLEAN DEFAULT true,
  source TEXT DEFAULT 'landing_page'
);

-- Add index for faster queries
CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);

-- Enable Row Level Security
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (subscribe)
CREATE POLICY "Anyone can subscribe" ON newsletter_subscribers
  FOR INSERT WITH CHECK (true);

-- Policy: Only authenticated users can view
CREATE POLICY "Authenticated users can view" ON newsletter_subscribers
  FOR SELECT USING (auth.role() = 'authenticated');
```

### Step 2: Test the Form

1. Go to your landing page
2. Scroll to "Recursos & Newsletter"
3. Enter an email and click "Suscribirse"
4. You should see "¡Suscripción exitosa!"

### Step 3: Access Admin Dashboard

1. Login to your platform
2. Navigate to: `https://yourdomain.com/admin/newsletter`
3. You'll see all subscribers with:
   - Export CSV button
   - Copy all emails button
   - Full subscriber table

---

## 📧 Sending Bulk Emails (3 Options)

### **Option 1: Resend (Recommended)**

**Why**: Simple API, generous free tier, designed for developers

**Free Tier**: 100 emails/day, 3,000/month
**Paid**: $20/month for 50,000 emails

**Setup**:

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Install: `npm install resend`
4. Create `/api/send-newsletter.ts`:

```typescript
import { Resend } from 'resend';
import { supabase } from '../lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  // Fetch all active subscribers
  const { data: subscribers } = await supabase
    .from('newsletter_subscribers')
    .select('email')
    .eq('is_active', true);

  const emails = subscribers?.map(s => s.email) || [];

  // Send email
  await resend.emails.send({
    from: 'CBas <cbas@hablemoscripto.com>',
    to: emails,
    subject: 'Tu título aquí',
    html: '<h1>Tu contenido aquí</h1>'
  });

  return new Response('Sent!', { status: 200 });
}
```

**Usage**:
```bash
curl -X POST https://yourdomain.com/api/send-newsletter
```

---

### **Option 2: Mailchimp (No-Code)**

**Why**: User-friendly interface, templates, analytics

**Free Tier**: 500 contacts, 1,000 emails/month

**Setup**:

1. Sign up at [mailchimp.com](https://mailchimp.com)
2. Create an audience
3. Go to `/admin/newsletter` and click "Export CSV"
4. In Mailchimp: Audience → Import Contacts → Upload CSV
5. Create campaign with their visual editor

---

### **Option 3: Brevo (formerly Sendinblue)**

**Why**: Generous free tier, SMS support

**Free Tier**: 300 emails/day (9,000/month)

**Setup**:

1. Sign up at [brevo.com](https://brevo.com)
2. Get API key from Settings → SMTP & API
3. Install: `npm install @getbrevo/brevo`
4. Similar to Resend implementation above

---

## 🎯 Recommended Workflow

### For Quick Emails (< 100 subscribers):
1. Go to `/admin/newsletter`
2. Click "Copy Emails"
3. Paste into Gmail/Outlook BCC field
4. Send manually

### For Regular Newsletters (100-1000 subscribers):
1. Use **Mailchimp** for easy templates
2. Export CSV weekly from admin dashboard
3. Import to Mailchimp
4. Schedule campaigns

### For Automated Campaigns (1000+ subscribers):
1. Use **Resend** API
2. Create Vercel serverless function
3. Schedule with Vercel Cron or GitHub Actions
4. Full automation

---

## 📊 Admin Dashboard Features

Visit `/admin/newsletter` to:

- ✅ View total subscribers
- ✅ See active vs inactive
- ✅ Export all emails to CSV
- ✅ Copy emails to clipboard
- ✅ See subscription dates
- ✅ Filter by status

---

## 🔒 Security Notes

- Only authenticated users can access `/admin/newsletter`
- Row Level Security prevents unauthorized database access
- Email validation prevents invalid entries
- Duplicate emails automatically rejected

---

## 🚀 Next Steps (Optional Enhancements)

### Add Double Opt-In (Recommended for compliance):
1. Send confirmation email after signup
2. Add `confirmed` column to table
3. Only send to confirmed emails

### Add Unsubscribe Links:
```typescript
const unsubscribeLink = `https://yourdomain.com/unsubscribe?email=${email}`;
```

### Track Email Opens:
Use Resend's webhook events or Mailchimp analytics

### Segment Your List:
Add tags/categories to subscribers table

---

## 💡 Pro Tips

1. **Start Simple**: Use manual Gmail BCC until you have 50+ subscribers
2. **Test First**: Send to yourself before blasting entire list
3. **Respect Privacy**: Include unsubscribe link in every email
4. **Warm Up**: Don't send to 1000 emails on day 1 (spam filters!)
5. **Track Results**: Monitor open rates, clicks, unsubscribes

---

## 🆘 Troubleshooting

**"Newsletter not working"**
- Check Supabase table exists
- Verify RLS policies are set
- Check browser console for errors

**"Can't access /admin/newsletter"**
- Make sure you're logged in
- Check ProtectedRoute is working

**"Emails going to spam"**
- Use proper email service (Resend/Mailchimp)
- Add SPF/DKIM records (Resend does this automatically)
- Include unsubscribe link
- Don't use spammy subject lines

---

Need help? Check the admin dashboard at `/admin/newsletter` after logging in!
