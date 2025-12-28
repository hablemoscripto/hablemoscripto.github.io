# DNS Verification Instructions for hablemoscripto.io

## ✅ You've Added the 3 Records - Great!

Now we need to wait for DNS propagation and verify they're live.

---

## 🕐 Current Status: DNS Propagating...

**Typical wait time:** 10-30 minutes (sometimes up to 2 hours)

**What's happening right now:**
Your DNS changes are spreading across the internet. Namecheap's servers are telling other DNS servers about your new records.

---

## 🔍 How to Check if Records Are Live

### **Option 1: Online Tool (Easiest)**

Go to this website: **https://mxtoolbox.com/SuperTool.aspx**

Check each record:

#### 1. Check DKIM Record:
- Enter: `resend._domainkey.hablemoscripto.io`
- Click: **"TXT Lookup"**
- **Look for:** Text starting with `v=DKIM1; k=rsa; p=`
- ✅ If found: DKIM is working!
- ⏳ If not: Wait 10 more minutes

#### 2. Check SPF Record:
- Enter: `hablemoscripto.io`
- Click: **"TXT Lookup"**
- **Look for:** `v=spf1 include:amazonses.com ~all`
- ✅ If found: SPF is working!
- ⏳ If not: Wait 10 more minutes

#### 3. Check MX Record:
- Enter: `hablemoscripto.io`
- Click: **"MX Lookup"**
- **Look for:** `feedback-smtp.us-east-1.amazonses.com` with priority 10
- ✅ If found: MX is working!
- ⏳ If not: Wait 10 more minutes

---

### **Option 2: Alternative Checker**

Go to: **https://dnschecker.org/**

1. Enter: `resend._domainkey.hablemoscripto.io`
2. Select: **"TXT"** from dropdown
3. Click **"Search"**
4. You should see the DKIM record from multiple locations worldwide

Repeat for `hablemoscripto.io` with TXT and MX types.

---

## ⏱️ Timeline & Next Steps

### **Right Now (Minute 0):**
- ✅ Records added in Namecheap
- ⏳ DNS propagating...

### **In 10 Minutes:**
- Check using mxtoolbox.com
- If not live yet, wait another 10 minutes

### **In 20-30 Minutes:**
- Records should be fully propagated
- All 3 checks should show ✅

### **Once All 3 Records Show ✅:**
1. Go to [Resend Dashboard](https://resend.com/domains)
2. Click on `hablemoscripto.io`
3. Click the **"Verify DNS"** button
4. Should see: ✅ **"Verified"**

---

## 🎯 What Each Record Does

### DKIM (resend._domainkey.hablemoscripto.io)
- **Purpose:** Proves emails really come from you
- **Prevents:** Email spoofing/phishing
- **Record type:** TXT
- **Looks like:** `v=DKIM1; k=rsa; p=MIGfMA0GCSq...` (very long)

### SPF (hablemoscripto.io)
- **Purpose:** Lists servers allowed to send email for your domain
- **Prevents:** Spam/spoofing
- **Record type:** TXT
- **Looks like:** `v=spf1 include:amazonses.com ~all`

### MX (hablemoscripto.io)
- **Purpose:** Tells where to send emails for your domain
- **Used for:** Receiving bounce notifications
- **Record type:** MX
- **Looks like:** `10 feedback-smtp.us-east-1.amazonses.com`

---

## 📋 Your Namecheap DNS Should Show:

In Namecheap → Domain List → Manage → Advanced DNS:

```
Type        Host                      Value                                   Priority
----------- ------------------------- --------------------------------------- --------
TXT Record  resend._domainkey        v=DKIM1; k=rsa; p=MIGfMA...            -
TXT Record  @                        v=spf1 include:amazonses.com ~all      -
MX Record   @                        feedback-smtp.us-east-1.amazonses.com  10
```

**Double-check these are exactly right!**

---

## 🚨 Troubleshooting

### If records don't show up after 1 hour:

#### Issue 1: Typo in Namecheap
- Go back to Namecheap Advanced DNS
- Verify Host names are EXACTLY:
  - `resend._domainkey` (NOT `resend._domainkey.hablemoscripto.io`)
  - `@` (for both SPF and MX)
- Verify values match EXACTLY what Resend shows
- No extra spaces, quotes, or characters

#### Issue 2: Wrong Priority for MX
- MX record Priority must be **10**
- Check in Namecheap

#### Issue 3: DNS Cache
- Your computer might be caching old DNS
- Try checking from different tool/device
- Use mobile data instead of WiFi

#### Issue 4: Need More Time
- Some DNS providers are slower
- Wait another hour
- Check again

---

## 💡 While You Wait...

**Your current setup already works!**

You can send newsletters RIGHT NOW using:
```typescript
from: 'Hablemos Cripto <onboarding@resend.dev>'
```

To test:
1. Go to `https://hablemoscripto.io/admin/newsletter`
2. Add your email as subscriber
3. Send a test newsletter
4. Check your inbox

This works immediately while you wait for custom domain verification!

---

## ✅ Once Verified, You'll Update Code To:

**File:** `api/send-newsletter.ts` (line 56)

**Change from:**
```typescript
from: 'Hablemos Cripto <onboarding@resend.dev>'
```

**Change to:**
```typescript
from: 'Hablemos Cripto <newsletter@hablemoscripto.io>'
```

Or any email address you want:
- `hola@hablemoscripto.io`
- `info@hablemoscripto.io`
- `updates@hablemoscripto.io`

---

## 📞 Need Help?

### If verification fails after 2 hours:

**Contact Resend Support:**
- Email: support@resend.com
- In Dashboard: Click "Help" button
- Tell them: "Added DNS records to Namecheap for hablemoscripto.io but verification failing"

They're very responsive and can check from their end!

### Or Keep Using Default:
`onboarding@resend.dev` works perfectly fine! Many successful platforms use it.

---

## 🎯 Summary

**What you did:** ✅ Added 3 DNS records to Namecheap
**What's happening:** ⏳ DNS propagating (10-30 min)
**What to do:**
1. Wait 15-20 minutes
2. Check records at https://mxtoolbox.com/SuperTool.aspx
3. Once all 3 show up, verify in Resend
4. Update code with `newsletter@hablemoscripto.io`

**Questions?** Let me know and I'll help troubleshoot!
