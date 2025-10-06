
import { useEffect, useState } from "react";
export const AddProjectForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [demoUrl, setDemoUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [tags, setTags] = useState("");
  const [file, setFile] = useState(null);

  const handleUploadProject = async () => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("demoUrl", demoUrl);
    formData.append("githubUrl", githubUrl);
    // حولنا النص لمصفوفة
    formData.append("tags", JSON.stringify(tags.split(",").map(tag => tag.trim())));

    const token = "MY_SECRET_TOKEN";
    const res = await fetch("http://localhost:5000/api/projects", {
      method: "POST",
      headers: { token },
      body: formData,
    });

    if (res.ok) {
      alert("تم إضافة المشروع!");
      // إعادة تعيين الحقول أو تحديث القائمة
    } else {
      alert("فشل رفع المشروع");
    }
  };

  return (
    <div className="space-y-4">
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
      <input type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
      <input type="text" placeholder="Demo URL" value={demoUrl} onChange={e => setDemoUrl(e.target.value)} />
      <input type="text" placeholder="GitHub URL" value={githubUrl} onChange={e => setGithubUrl(e.target.value)} />
      <input type="text" placeholder="Tags (comma separated)" value={tags} onChange={e => setTags(e.target.value)} />
      <input type="file" onChange={e => setFile(e.target.files[0])} />
      <button onClick={handleUploadProject}>رفع المشروع</button>
    </div>
  );
};
