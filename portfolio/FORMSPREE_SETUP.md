# 📧 Contact Form Setup Guide (Formspree)

This guide will help you set up the contact form to actually send emails.

## Step-by-Step Instructions

### 1. Create a Formspree Account

1. Go to [https://formspree.io/](https://formspree.io/)
2. Click "Get Started" or "Sign Up"
3. Create a free account (allows 50 submissions/month)

### 2. Create a New Form

1. After logging in, click "New Form" or "+"
2. Give your form a name (e.g., "Portfolio Contact Form")
3. Click "Create Form"

### 3. Get Your Form Endpoint

After creating the form, you'll see a form endpoint that looks like:
```
https://formspree.io/f/xyzabc123
```

Copy this URL!

### 4. Update Your HTML

1. Open `index.html`
2. Find this line (around line 200):
   ```html
   <form class="contact-form" id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
3. Replace `YOUR_FORM_ID` with your actual form ID
4. Example:
   ```html
   <form class="contact-form" id="contact-form" action="https://formspree.io/f/xyzabc123" method="POST">
   ```

### 5. Test Your Form

1. Open `index.html` in your browser
2. Scroll to the Contact section
3. Fill out the form and click "Send Message"
4. Check your email - you should receive the message!

## Alternative: EmailJS Setup

If you prefer EmailJS instead of Formspree:

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for free account

### 2. Set Up Email Service
1. Add an email service (Gmail, Outlook, etc.)
2. Create an email template
3. Get your Service ID, Template ID, and Public Key

### 3. Update JavaScript

Replace the form submission code in `script.js` with:

```javascript
// Add EmailJS SDK to index.html first:
// <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  submitBtn.disabled = true;
  submitBtn.querySelector('.btn-text').textContent = 'Sending...';
  
  // Initialize EmailJS (do this once when page loads)
  emailjs.init('YOUR_PUBLIC_KEY');
  
  // Send email
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
    .then(() => {
      formMessage.textContent = 'Message sent successfully!';
      formMessage.className = 'form-message success';
      form.reset();
    })
    .catch(() => {
      formMessage.textContent = 'Oops! Something went wrong.';
      formMessage.className = 'form-message error';
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.querySelector('.btn-text').textContent = 'Send Message';
    });
});
```

## Troubleshooting

### Form not sending?
- Check that you replaced `YOUR_FORM_ID` with actual ID
- Make sure you're connected to the internet
- Check browser console for errors (F12)

### Not receiving emails?
- Check your spam folder
- Verify email address in Formspree settings
- Make sure form is not in test mode

### "Form submission failed" error?
- Verify the Formspree endpoint URL is correct
- Check if you've exceeded free tier limit (50/month)
- Try refreshing the page and submitting again

## Free Tier Limits

**Formspree Free:**
- 50 submissions per month
- Email notifications
- Spam filtering
- File uploads (up to 10MB)

**EmailJS Free:**
- 200 emails per month
- 2 email templates
- Email tracking

## Need Help?

If you're still having issues:
1. Check Formspree documentation: https://help.formspree.io/
2. Check EmailJS documentation: https://www.emailjs.com/docs/
3. Contact me: medesetbefkad5@gmail.com

---

**Note**: The form will work perfectly once you complete step 4 above. Don't forget to test it!
