# SMS Estimate Form Setup Guide

## What's Been Implemented

✅ **"Text for a Free Estimate"** button on homepage
✅ **Modal form** with fields: Name, Address, Phone, Email, Job Description
✅ **Submit/Cancel** functionality
✅ **Form validation** (all fields required)
✅ **Success message** after submission
✅ **Mobile-responsive** design

## How to Receive Submissions via SMS

You have **2 options** to get text notifications when someone submits the form:

---

## Option 1: Formspree (Recommended - Easiest)

**Cost:** Free for up to 50 submissions/month, then $10/month

### Setup Steps:

1. **Create Formspree Account**
   - Go to https://formspree.io
   - Sign up with your email

2. **Create a New Form**
   - Click "New Form"
   - Name it "Estimate Requests"
   - Copy your form endpoint (looks like `https://formspree.io/f/xyzabc123`)

3. **Enable SMS Notifications** (Paid feature)
   - In your form settings, go to "Notifications"
   - Add SMS notification to: **904-408-2450**
   - Formspree will text you when forms are submitted

4. **Update Your Website**
   - Edit `/root/projects/smj_site/src/pages/index.astro`
   - Line 276: Replace `YOUR_FORM_ID` with your actual form ID
   ```html
   <form id="estimate-form" action="https://formspree.io/f/YOUR_ACTUAL_ID" method="POST">
   ```

5. **Email Notifications (Free)**
   - Even on free plan, you'll get email notifications
   - Emails go to: stumpmastersjax@gmail.com (already configured)

---

## Option 2: Zapier + Twilio (More Control)

**Cost:** Zapier free tier (100 tasks/month) + Twilio (~$0.0075 per SMS)

### Setup Steps:

1. **Create Zapier Account**
   - Go to https://zapier.com
   - Sign up for free

2. **Create Twilio Account**
   - Go to https://www.twilio.com
   - Sign up and verify your phone: 904-408-2450
   - Get a Twilio phone number (free trial includes one)
   - Note your Account SID and Auth Token

3. **Create Formspree Form** (as in Option 1, steps 1-2)

4. **Create Zapier Automation**
   - Trigger: "Formspree - New Submission"
   - Action: "Twilio - Send SMS"
   - Configure SMS to send to: 904-408-2450
   - Message template:
   ```
   New Estimate Request!
   Name: {{name}}
   Phone: {{phone}}
   Address: {{address}}
   Description: {{description}}
   ```

5. **Update Website** (same as Option 1, step 4)

---

## Option 3: Email-to-SMS (Simplest)

**Cost:** Free (if your carrier supports it)

### Setup:

Most carriers allow you to text via email. Send to:
- **Verizon:** 9044082450@vtext.com
- **AT&T:** 9044082450@txt.att.net
- **T-Mobile:** 9044082450@tmomail.net
- **Sprint:** 9044082450@messaging.sprintpcs.com

1. Use Formspree (Option 1, steps 1-2)
2. In Formspree settings, add email notification to your carrier's email-to-SMS address
3. You'll receive texts when forms are submitted!

---

## Current Configuration

The form is already set up to:
- ✅ Send to: stumpmastersjax@gmail.com (via `_cc` field)
- ✅ Subject: "New Estimate Request - StumpMasters Jax"
- ⚠️ **Action Required:** Replace `YOUR_FORM_ID` on line 276

---

## Testing the Form

1. Start dev server: `npm run dev`
2. Click "Text for a Free Estimate" button
3. Fill out the form with test data
4. Submit and verify you receive the notification

---

## Form Features

- **Required fields:** All fields must be filled
- **Phone validation:** Accepts formats like 904-408-2450 or 9044082450
- **Email validation:** Must be valid email format
- **Large text area:** For detailed job descriptions
- **Mobile-friendly:** Works on all devices
- **Keyboard shortcuts:** Press ESC to close modal
- **Click outside:** Click background to close
- **Success message:** Shows confirmation after submission
- **Auto-close:** Modal closes 3 seconds after success

---

## Recommended Setup

**For immediate use:**
1. Use Option 3 (Email-to-SMS) - Free and instant
2. Add your carrier's email-to-SMS address to Formspree

**For professional use:**
1. Start with Formspree free tier (email notifications)
2. Upgrade to paid plan for SMS notifications ($10/month)
3. Or use Zapier + Twilio for more customization

---

## Need Help?

All form submissions will be sent to stumpmastersjax@gmail.com by default, so you won't miss any requests even if SMS isn't set up yet!
