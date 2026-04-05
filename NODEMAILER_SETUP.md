# Nodemailer Setup Instructions

## 1. Install Server Dependencies

```bash
cd server
npm install
```

## 2. Configure Email Settings

Create a `.env` file in the root directory:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
RECIPIENT_EMAIL=aarovan.ai@gmail.com
PORT=3001
```

### Getting Gmail App Password:

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security > 2-Step Verification > App passwords
4. Generate a new app password for "Mail"
5. Copy the 16-character password to `.env` as `EMAIL_PASS`

## 3. Start the Server

```bash
cd server
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

## 4. Start the React App

In a separate terminal:

```bash
npm run dev
```

## 5. Test the Form

1. Navigate to the Contact page
2. Fill out the form
3. Submit and check the recipient email

## Production Deployment

For production, create a `.env.production` file:

```env
VITE_API_URL=https://your-api-domain.com
```

Or set the environment variable on your hosting platform:
- Vercel: Add `VITE_API_URL` in Project Settings > Environment Variables
- Netlify: Add in Site Settings > Environment Variables
- Other platforms: Set `VITE_API_URL` environment variable

Deploy the server to a hosting service like:
- Heroku
- Railway
- Render
- AWS EC2
- DigitalOcean

Make sure to set server environment variables on your hosting platform.
