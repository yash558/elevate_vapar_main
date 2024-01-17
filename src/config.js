require('dotenv').config({ path: `${__dirname}/../.env` });

module.exports = {
  env: process.env.NODE_ENV || 'production',
  port: process.env.PORT,
  mongourl: process.env.MONGODB_URL,

  otp: {
    accessExpirationMinutes: process.env.OTP_EXPIRY_MINUTES,
  },

  jwt: {
    secret: process.env.JWT_SECRET,
  },

  email: {
    smtp: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    },
    from: process.env.EMAIL_FROM,
    secure: false,
  },
  twilio: {
    accountSid: "AC8707866cacb23152a51d31c5399e4c6b",
    authToken: "231ba82fc81b1c34f57ebf1f9470c84e",
    phoneNumber: "+91-8920304337",
  },
};