# Resend DNS Setup for Namecheap - Step by Step

## 🎯 Complete Setup Guide for hablemoscripto.com on Namecheap

---

## Step 1: Get Your DNS Records from Resend

1. Go to [Resend Dashboard](https://resend.com/domains)
2. Click on your domain (e.g., `hablemoscripto.com`)
3. You'll see 3 DNS records. **Keep this page open** - you'll need to copy these values

They should look like:

```
Record 1: DKIM (TXT)
Name: resend._domainkey
Value: v=DKIM1; k=rsa; p=MIGfMA0GCSq... (long string)

Record 2: SPF (TXT)
Name: @
Value: v=spf1 include:amazonses.com ~all

Record 3: MX (Mail Server)
Name: @
Value: feedback-smtp.us-east-1.amazonses.com
Priority: 10
```

---

## Step 2: Login to Namecheap

1. Go to [namecheap.com](https://www.namecheap.com)
2. Click **"Sign In"** (top right)
3. Enter your credentials

---

## Step 3: Access DNS Settings

1. Click **"Domain List"** in left sidebar
2. Find `hablemoscripto.com` (or your domain)
3. Click **"Manage"** button next to it
4. Click **"Advanced DNS"** tab

You should now see a table with your current DNS records.

---

## Step 4: Add Record 1 - DKIM (TXT Record)

1. Click **"Add New Record"** button
2. Fill in:
   ```
   Type: TXT Record
   Host: resend._domainkey
   Value: [Paste the DKIM value from Resend - starts with v=DKIM1]
   TTL: Automatic (or 300 if manual)
   ```
3. Click the **green checkmark** ✓ to save

**Important:**
- Do NOT include quotes around the value
- Do NOT include your domain name in Host (just `resend._domainkey`)
- Copy the ENTIRE value including the long string

---

## Step 5: Add Record 2 - SPF (TXT Record)

1. Click **"Add New Record"** again
2. Fill in:
   ```
   Type: TXT Record
   Host: @
   Value: v=spf1 include:amazonses.com ~all
   TTL: Automatic (or 300)
   ```
3. Click the **green checkmark** ✓ to save

**Note:** If you already have an SPF record (starts with `v=spf1`), you need to EDIT it instead:
- Find existing SPF record
- Add `include:amazonses.com` before the `~all` part
- Example: `v=spf1 include:_spf.google.com include:amazonses.com ~all`

---

## Step 6: Add Record 3 - MX (Mail Server)

1. Click **"Add New Record"** again
2. Fill in:
   ```
   Type: MX Record
   Host: @
   Value: feedback-smtp.us-east-1.amazonses.com
   Priority: 10
   TTL: Automatic (or 300)
   ```
3. Click the **green checkmark** ✓ to save

**Important:**
- Priority must be 10
- Value should NOT have a period at the end

---

## Step 7: Verify Your Records

After adding all 3 records, your Advanced DNS page should show:

```
Type        Host                    Value                                   TTL
----------- ----------------------- --------------------------------------- --------
TXT Record  resend._domainkey      v=DKIM1; k=rsa; p=MIGfMA...           Automatic
TXT Record  @                      v=spf1 include:amazonses.com ~all      Automatic
MX Record   @                      feedback-smtp.us-east-1.amazonses.com  Automatic
                                   (Priority: 10)
```

---

## Step 8: Wait for DNS Propagation

**This is critical!** DNS changes take time to spread globally.

**Wait:** 10-30 minutes (sometimes up to 2 hours)

During this time:
- ☕ Grab a coffee
- 🚶 Take a walk
- 🎮 Do something else

**Do NOT click "Verify" in Resend immediately!**

---

## Step 9: Check if Records Are Live

After waiting 15-20 minutes, verify your records are live:

### Option A: Use My Script
```bash
cd /home/cbas/Documents/Programming/hablemoscripto.github.io
./scripts/check-dns.sh
# Enter: hablemoscripto.com
```

### Option B: Use Online Tool
Go to: https://mxtoolbox.com/SuperTool.aspx

Check each record:
1. Type: `resend._domainkey.hablemoscripto.com` → Click TXT Lookup
2. Type: `hablemoscripto.com` → Click TXT Lookup (should see SPF)
3. Type: `hablemoscripto.com` → Click MX Lookup

### Option C: Use Command Line
```bash
# Check DKIM
dig TXT resend._domainkey.hablemoscripto.com +short

# Check SPF
dig TXT hablemoscripto.com +short | grep spf

# Check MX
dig MX hablemoscripto.com +short
```

---

## Step 10: Verify in Resend

Once your DNS records are live:

1. Go back to [Resend Dashboard](https://resend.com/domains)
2. Click on your domain
3. Click the **"Verify DNS"** button
4. If successful, you'll see: ✅ **"Verified"**

**If it fails:**
- Wait another 15 minutes
- Clear your DNS cache: `sudo systemd-resolve --flush-caches` (Linux) or `ipconfig /flushdns` (Windows)
- Try verifying again

---

## Step 11: Update Your Code

Once verified, update your newsletter code:

**File:** `api/send-newsletter.ts` (line 56)

**Change from:**
```typescript
from: 'Hablemos Cripto <onboarding@resend.dev>'
```

**Change to:**
```typescript
from: 'Hablemos Cripto <newsletter@hablemoscripto.com>'
```

Or use any email prefix you want:
- `hola@hablemoscripto.com`
- `info@hablemoscripto.com`
- `updates@hablemoscripto.com`

---

## Step 12: Test Your Newsletter

1. Commit and push your code changes
2. Go to `/admin/newsletter` on your live site
3. Add your personal email as a test subscriber
4. Send a test newsletter
5. Check your inbox (and spam folder)
6. Email should now come from `@hablemoscripto.com` ✅

---

## 🚨 Common Namecheap Issues & Fixes

### Issue 1: "Record already exists"
**Problem:** You already have a TXT or MX record for `@`
**Solution:** Edit the existing record instead of adding a new one

For SPF, combine both:
```
Old: v=spf1 include:_spf.google.com ~all
New: v=spf1 include:_spf.google.com include:amazonses.com ~all
```

### Issue 2: "Invalid host name"
**Problem:** You typed `resend._domainkey.hablemoscripto.com`
**Solution:** Just use `resend._domainkey` (Namecheap adds the domain automatically)

### Issue 3: Verification still fails after 1 hour
**Problem:** DNS cache or wrong records
**Solutions:**
1. Double-check values match EXACTLY what Resend shows
2. Remove any extra spaces or quotes
3. Wait another hour (some ISPs cache DNS longer)
4. Contact Resend support - they can check from their end

### Issue 4: Have existing email setup (Gmail, etc.)
**Problem:** You're already using Gmail or another email provider
**Solution:**

**Option A:** Use email subdomain for newsletters
- In Resend, verify `mail.hablemoscripto.com` instead
- Send from `newsletter@mail.hablemoscripto.com`
- Keep Gmail for `hello@hablemoscripto.com`

**Option B:** Combine SPF records
```
v=spf1 include:_spf.google.com include:amazonses.com ~all
```

---

## 📸 Visual Guide (What You'll See)

### Namecheap Advanced DNS Page:
```
┌─────────────────────────────────────────────────────────┐
│  Domain: hablemoscripto.com                             │
│                                                          │
│  [+ Add New Record]                                     │
│                                                          │
│  Type ▼    Host ▼           Value ▼          TTL ▼  ⚙️  │
│  ────────────────────────────────────────────────────    │
│  TXT       resend._domainkey  v=DKIM1...     Auto   ✓   │
│  TXT       @                  v=spf1...      Auto   ✓   │
│  MX (10)   @                  feedback-...   Auto   ✓   │
│  A          @                 185.199.108... Auto   ✓   │
│  A          @                 185.199.109... Auto   ✓   │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## ⏱️ Timeline

| Time | Action |
|------|--------|
| **Now** | Add DNS records in Namecheap |
| **+5 min** | Records saved in Namecheap |
| **+15 min** | Records start propagating |
| **+20 min** | Check if records are live |
| **+25 min** | Try verifying in Resend |
| **+30 min** | Should be verified! |

---

## ✅ Checklist

Before clicking "Verify" in Resend:

- [ ] All 3 records added to Namecheap Advanced DNS
- [ ] No typos in record values
- [ ] Host names correct (`resend._domainkey` and `@`)
- [ ] Waited at least 15-20 minutes
- [ ] Verified records are live using dig or online tool
- [ ] Cleared DNS cache if needed

---

## 🆘 Need Help?

### If verification keeps failing:

**Option 1: Screenshot Your Settings**
- Take screenshot of Namecheap Advanced DNS page
- Take screenshot of Resend domain page
- Compare them carefully

**Option 2: Contact Resend Support**
- Email: support@resend.com
- They respond quickly and can verify from their end
- Tell them: "DNS records added in Namecheap but verification failing"

**Option 3: Use Default Domain**
- Keep using `onboarding@resend.dev` (already works!)
- Fix custom domain later when you have time

---

## 💡 Pro Tips

1. **Set TTL to 300** (5 minutes) for faster propagation
2. **Don't have trailing dots** in MX record value
3. **Copy-paste carefully** - one typo breaks everything
4. **Verify one record at a time** using dig commands
5. **Clear browser cache** before clicking "Verify" in Resend

---

## 📊 What Success Looks Like

### In Namecheap:
✅ 3 new records visible in Advanced DNS
✅ Green checkmarks next to each record
✅ No error messages

### In Terminal (after 20 min):
```bash
$ dig TXT resend._domainkey.hablemoscripto.com +short
"v=DKIM1; k=rsa; p=MIGfMA0G..."
```

### In Resend Dashboard:
✅ Domain shows: **"Verified"** with green checkmark
✅ Can now send emails from `@hablemoscripto.com`

---

## 🎯 Final Notes

- **First time?** Allow 30-60 minutes total
- **Urgent?** Use `onboarding@resend.dev` while you wait
- **Having issues?** Run `./scripts/check-dns.sh` to debug

**You've got this!** 🚀
