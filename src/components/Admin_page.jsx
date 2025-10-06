import { useEffect, useState } from "react";
import { AddProjectForm } from "../components/AddProject";

const AdminPage = () => {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleLogin = () => {
    if (password === "1234") {
      setAuthenticated(true);
    } else {
      alert("كلمة السر غلط!");
    }
  };

  // جلب المشاريع
  useEffect(() => {
    if (authenticated) {
      fetch("http://localhost:5000/api/projects")
        .then(res => res.json())
        .then(data => setProjects(data))
        .catch(err => console.error(err));
    }
  }, [authenticated]);
    const handleDelete = async (id) => {
    try {
      const token = "MY_SECRET_TOKEN";
      const res = await fetch(`http://localhost:5000/api/projects/${id}`, {
        method: "DELETE",
        headers: { token }
      });
      if (res.ok) {
        setProjects(prev => prev.filter(p => p._id !== id));
        alert("تم حذف المشروع!");
      } else {
        alert("حدث خطأ أثناء الحذف");
      }
    } catch (err) {
      console.error(err);
      alert("حدث خطأ أثناء الحذف");
    }
  };
  return (
    <div className="p-8">
      {!authenticated ? (
        <div className="space-y-4">
          <h1 className="text-2xl font-bold mb-4">أدخل كلمة السر</h1>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded"
          />
          <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
            دخول
          </button>
        </div>
      ) : (
        <div>
          <AddProjectForm />
          <h2 className="text-xl font-bold mt-8 mb-4">قائمة المشاريع</h2>
<ul className="space-y-4">
  {projects.map(project => (
    <li key={project._id} className="flex justify-between items-center border p-4 rounded">
      <div className="flex items-center gap-4">
        {/* صورة المشروع */}
        {project.image && (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-16 h-16 object-cover rounded"
          />
        )}
        <span>{project.title}</span>
      </div>
      <button
        onClick={() => handleDelete(project._id)}
        className="text-red-500 hover:text-red-700"
      >
        حذف
      </button>
    </li>
  ))}
</ul>

        </div>
      )}
    </div>
  );
};

export default AdminPage;

