import express from "express";
import path from "path";
import fs from "fs";
import nodemailer from "nodemailer";
import { createServer as createViteServer } from "vite";

const app = express();
const PORT = 3000;

app.use(express.json());

// Helper function to save backups locally
function saveToBackup(fileName: string, data: any) {
  try {
    const filePath = path.join(process.cwd(), fileName);
    let currentData: any[] = [];
    if (fs.existsSync(filePath)) {
      currentData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    }
    currentData.push({ ...data, timestamp: new Date().toISOString() });
    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2), "utf-8");
    console.log(`Saved entry to local file: ${fileName}`);
  } catch (error) {
    console.error(`Error writing backup to ${fileName}:`, error);
  }
}

// Low-level high-reliability SMTP email sender utilizing nodemailer
function sendSMTPFallback(
  toEmail: string,
  subject: string,
  htmlContent: string,
  onComplete: (err: Error | null) => void
) {
  const USER = process.env.EMAIL_USER;
  const PASS = process.env.EMAIL_PASS;

  if (!USER || !PASS) {
    console.warn("SMTP email variables (EMAIL_USER, EMAIL_PASS) are not configured.");
    return onComplete(new Error("SMTP credentials missing"));
  }

  // Create transporter for Gmail using SSL direct connection on port 465
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use True for 465
    auth: {
      user: USER,
      pass: PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  const mailOptions = {
    from: `"Ajay Taxi Services" <${USER}>`,
    to: toEmail,
    subject: subject,
    html: htmlContent,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Nodemailer SMTP Dispatch Error:", error);
      onComplete(error);
    } else {
      console.log("Email successfully dispatched via Nodemailer:", info.response);
      onComplete(null);
    }
  });
}

// API Routes
app.post("/api/booking", (req, res) => {
  const { name, phone, pickup, drop, date, time, vehicle } = req.body;

  if (!name || !phone || !pickup || !drop || !date || !time || !vehicle) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Save the booking locally so the data is saved in our workspace
  saveToBackup("bookings.json", req.body);

  const htmlContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 30px auto; border-radius: 12px; box-shadow: 0 6px 18px rgba(0,0,0,0.15); overflow: hidden; border: 1px solid #e0e0e0;">
      <div style="background: linear-gradient(135deg, #0A2540, #1D4ED8); color: #fff; text-align: center; padding: 25px 15px;">
        <h1 style="margin: 0; font-size: 24px;">🚖 New Taxi Booking</h1>
        <p style="margin: 5px 0 0; font-size: 14px;">Booking Details Received (Express Backend)</p>
      </div>
      <div style="background-color: #ffffff; padding: 25px;">
        <table style="width: 100%; border-collapse: separate; border-spacing: 0 10px;">
          <tr>
            <td style="width: 35%; font-weight: bold; color: #1D4ED8; padding: 8px;">Name</td>
            <td style="padding: 8px; color: #333;">${name}</td>
          </tr>
          <tr style="background-color: #f5f7ff;">
            <td style="font-weight: bold; color: #1D4ED8; padding: 8px;">Phone</td>
            <td style="padding: 8px; color: #333;">${phone}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #1D4ED8; padding: 8px;">Pickup</td>
            <td style="padding: 8px; color: #333;">${pickup}</td>
          </tr>
          <tr style="background-color: #f5f7ff;">
            <td style="font-weight: bold; color: #1D4ED8; padding: 8px;">Drop</td>
            <td style="padding: 8px; color: #333;">${drop}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #1D4ED8; padding: 8px;">Date</td>
            <td style="padding: 8px; color: #333;">${date}</td>
          </tr>
          <tr style="background-color: #f5f7ff;">
            <td style="font-weight: bold; color: #1D4ED8; padding: 8px;">Time</td>
            <td style="padding: 8px; color: #333;">${time}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #1D4ED8; padding: 8px;">Vehicle</td>
            <td style="padding: 8px; color: #333;">${vehicle}</td>
          </tr>
        </table>
        <p style="text-align: center; margin-top: 30px; color: #555; font-size: 14px;">
          Thank you for choosing our taxi service! <br/>
          <span style="color: #1D4ED8;">We have processed your booking inquiry successfully.</span>
        </p>
      </div>
      <div style="background-color: #f0f4ff; text-align: center; padding: 15px; font-size: 12px; color: #555;">
        &copy; 2026 Ajay Taxi Services. All rights reserved.
      </div>
    </div>
  `;

  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    sendSMTPFallback("ajjubannaofficial@gmail.com", `🚖 New Taxi Booking from ${name}`, htmlContent, (err) => {
      if (err) {
        return res.status(200).json({
          message: "Booking received and saved! (Email dispatch failed but inquiry was successfully logged offline).",
        });
      }
      return res.status(200).json({ message: "Booking received! Confirmation email sent." });
    });
  } else {
    // Graceful success response
    return res.status(200).json({
      message: "Booking received! (Offline developer mode: Saved successfully to bookings.json)",
    });
  }
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Save the contact inquiry locally
  saveToBackup("contacts.json", req.body);

  const htmlContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 30px auto; border-radius: 12px; box-shadow: 0 6px 18px rgba(0,0,0,0.15); overflow: hidden; border: 1px solid #e0e0e0;">
      <div style="background: linear-gradient(135deg, #0A2540, #1D4ED8); color: #fff; text-align: center; padding: 25px 15px;">
        <h1 style="margin: 0; font-size: 24px;">📩 New Contact Message</h1>
        <p style="margin: 5px 0 0; font-size: 14px;">Message Details Received (Express Backend)</p>
      </div>
      <div style="background-color: #ffffff; padding: 25px;">
        <table style="width: 100%; border-collapse: separate; border-spacing: 0 10px;">
          <tr>
            <td style="width: 30%; font-weight: bold; color: #1D4ED8; padding: 8px;">Name</td>
            <td style="padding: 8px; color: #333;">${name}</td>
          </tr>
          <tr style="background-color: #f5f7ff;">
            <td style="font-weight: bold; color: #1D4ED8; padding: 8px;">Email</td>
            <td style="padding: 8px; color: #333;">${email}</td>
          </tr>
          <tr>
            <td style="font-weight: bold; color: #1D4ED8; padding: 8px;">Message</td>
            <td style="padding: 8px; color: #333;">${message}</td>
          </tr>
        </table>
        <p style="text-align: center; margin-top: 30px; color: #555; font-size: 14px;">
          Thank you for reaching out! <br/>
          <span style="color: #1D4ED8;">We value your message and will respond as soon as we can.</span>
        </p>
      </div>
      <div style="background-color: #f0f4ff; text-align: center; padding: 15px; font-size: 12px; color: #555;">
        &copy; 2026 Ajay Taxi Services. All rights reserved.
      </div>
    </div>
  `;

  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    sendSMTPFallback("ajjubannaofficial@gmail.com", `📩 New Contact Message from ${name}`, htmlContent, (err) => {
      if (err) {
        return res.status(200).json({
          message: "Message received and saved! (Email dispatch failed but inquiry was successfully logged offline).",
        });
      }
      return res.status(200).json({ message: "Message received! Contact email sent." });
    });
  } else {
    // Graceful success response
    return res.status(200).json({
      message: "Message received! (Offline developer mode: Saved successfully to contacts.json)",
    });
  }
});

// Start integration with Vite standard dev/prod environment
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    // Standard Vite Dev server as Express middleware
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production static serving
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Ajay Taxi Service server running at http://0.0.0.0:${PORT}`);
  });
}

startServer();
