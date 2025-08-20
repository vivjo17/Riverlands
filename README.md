# Riverlands

This is a website for a new neighborhood in Texas

## Contact Form

The project includes a small Express server that forwards contact form
submissions via email using Nodemailer.

### Environment variables

Create a `.env` file with the following values:

```
SMTP_USER=your_smtp_username
SMTP_PASS=your_smtp_password
SMTP_TO=recipient@example.com
PORT=3000 # optional
```

### Run the server

Install dependencies and start the server:

```
node index.js
```
