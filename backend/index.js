import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Use CORS
app.use(cors());

// Multer setup (store file in memory)
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "application/pdf") {
      return cb(new Error("Only PDF files are allowed"), false);
    }
    cb(null, true);
  },
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Route to accept form data + file
app.post("/api/apply", upload.single("resume"), async (req, res) => {
  const { name, email, number, job } = req.body;
  const resumeFile = req.file;

  if (!name || !email || !number || !job || !resumeFile) {
    return res.status(400).json({ error: "Missing fields or resume file" });
  }

  try {
    await transporter.sendMail({
      from: `"Job Application" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER, // your email to receive applications
      subject: `New Application for ${job}`,
      html: `
        <h3>Application Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${number}</p>
        <p><strong>Job Applied For:</strong> ${job}</p>
      `,
      attachments: [
        {
          filename: resumeFile.originalname,
          content: resumeFile.buffer,
          contentType: resumeFile.mimetype,
        },
      ],
    });

    res.json({ message: "Application sent with resume!" });
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).json({ error: "Failed to send application" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
