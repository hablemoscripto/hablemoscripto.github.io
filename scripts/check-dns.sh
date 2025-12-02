#!/bin/bash
# DNS Verification Script for Resend Email Setup

echo "🔍 Checking DNS records for email verification..."
echo "================================================"
echo ""

# Ask for domain
read -p "Enter your domain (e.g., hablemoscripto.com): " DOMAIN

if [ -z "$DOMAIN" ]; then
    echo "❌ Error: Domain is required"
    exit 1
fi

echo ""
echo "Checking DNS records for: $DOMAIN"
echo "================================================"
echo ""

# Check nameservers
echo "📡 1. NAMESERVERS (shows where DNS is hosted):"
echo "------------------------------------------------"
dig NS +short "$DOMAIN" || nslookup -type=NS "$DOMAIN"
echo ""

# Check SPF record
echo "📧 2. SPF RECORD (for email sending):"
echo "------------------------------------------------"
echo "Looking for: v=spf1 include:amazonses.com ~all"
dig TXT +short "$DOMAIN" | grep "spf" || echo "❌ SPF record not found"
echo ""

# Check DKIM record
echo "🔐 3. DKIM RECORD (for email authentication):"
echo "------------------------------------------------"
echo "Looking for: v=DKIM1; k=rsa; p=..."
dig TXT +short "resend._domainkey.$DOMAIN" || echo "❌ DKIM record not found"
echo ""

# Check MX record
echo "📬 4. MX RECORD (mail server):"
echo "------------------------------------------------"
echo "Looking for: feedback-smtp.us-east-1.amazonses.com"
dig MX +short "$DOMAIN" || echo "❌ MX record not found"
echo ""

echo "================================================"
echo "✅ DNS Check Complete!"
echo ""
echo "📝 NEXT STEPS:"
echo "1. If records are missing, add them in your DNS provider"
echo "2. Wait 5-10 minutes for DNS propagation"
echo "3. Run this script again to verify"
echo "4. Click 'Verify DNS' in Resend dashboard"
echo ""
echo "💡 TIP: If using Cloudflare, make sure proxy is OFF (grey cloud)"
echo "================================================"
