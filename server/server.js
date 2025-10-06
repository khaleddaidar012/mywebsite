import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

dotenv.config();
const app = express();

// إعداد Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Multer باستخدام مجلد /tmp
const tempDir = '/tmp/uploads';
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tempDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

app.use(cors());
app.use(express.json());

// الاتصال بقاعدة البيانات
mongoose.connect(process.env.Mongo_url)
  .then(() => console.log("Connected to DB"))
  .catch(err => console.error(err));

// تعريف schema
const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  demoUrl: String,
  githubUrl: String,
  tags: [String],
  image: String,
});

const Project = mongoose.model("Project", ProjectSchema);

// رفع المشروع + الصورة على Cloudinary
app.post("/api/projects", upload.single('image'), async (req, res) => {
  const { token } = req.headers;
  if (token !== "MY_SECRET_TOKEN") return res.status(403).send("Forbidden");

  try {
    const { title, description, demoUrl, githubUrl, tags } = req.body;

    let imageUrl = "";
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path, { folder: "projects" });
      imageUrl = result.secure_url;
      fs.unlinkSync(req.file.path); // حذف الصورة المؤقتة بعد الرفع
    }

    const parsedTags = tags ? JSON.parse(tags) : [];

    const project = new Project({
      title,
      description,
      demoUrl,
      githubUrl,
      tags: parsedTags,
      image: imageUrl
    });

    await project.save();
    res.status(201).json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Could not add project" });
  }
});

// API لجلب المشاريع
app.get("/api/projects", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: "Could not fetch projects" });
  }
});

// حذف مشروع
app.delete("/api/projects/:id", async (req, res) => {
  const { token } = req.headers;
  if (token !== "MY_SECRET_TOKEN") return res.status(403).send("Forbidden");

  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });

    res.json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Could not delete project" });
  }
});


import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "../dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

/*const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});*/



// ✅ التصدير لفِرسال
export default app;

