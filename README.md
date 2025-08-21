# Riverlands

This is a website for a new neighborhood in Texas

## Contact Form

The site now uses a Firebase Cloud Function that forwards contact form
submissions via email using Nodemailer.

### Firebase setup

1. Install the Firebase CLI: `npm install -g firebase-tools`.
2. Authenticate and initialize the project: `firebase login` and
   `firebase init` (enable Hosting and Functions, use `static` as the
   public directory).
3. Configure SMTP credentials for the Cloud Function:

```
  firebase functions:config:set \
    smtp.user="your_smtp_username" \
    smtp.pass="your_smtp_password" \
    smtp.host="smtp.example.com" \
    smtp.port="465" \
    smtp.secure="true" \
    smtp.to="recipient@example.com"
```

4. Deploy the site and function: `firebase deploy`.

### Local development

Use the Firebase emulator to test locally:

```
firebase emulators:start
```
