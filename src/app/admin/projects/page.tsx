"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/db";

type Project = {
  id: string;
  name: string;
  description: string;
  status: string;
  created_at: string;
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState({
    name: "",
    description: "",
    status: "active",
  });
  const [submitting, setSubmitting] = useState(false);

  // Fetch all projects
  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching projects:", error.message);
      } else {
        setProjects(data || []);
      }

      console.log(projects);

      setLoading(false);
    }

    fetchProjects();
  }, []);

  // Handle form input
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Submit form to API
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const res = await fetch("/api/admin/create-project", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const result = await res.json();
    setSubmitting(false);

    if (result.success) {
      setProjects([result.project, ...projects]);
      setForm({ name: "", description: "", status: "active" });
    } else {
      alert("Failed to create project: " + result.error);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Projects</h1>

      {/* Create Form */}
      <form
        onSubmit={handleSubmit}
        className="mb-8 space-y-4 bg-white p-4 rounded shadow max-w-md"
      >
        <div>
          <label className="block font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Description</label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Status</label>
          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {submitting ? "Creating..." : "Create Project"}
        </button>
      </form>

      {/* Project List */}
      {loading ? (
        <p>Loading projects...</p>
      ) : projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <ul className="space-y-4">
          {projects.map((project) =>
            project ? (
              <li key={project.id} className="bg-white p-4 rounded shadow">
                <h2 className="text-lg font-semibold">{project.name}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Status: {project.status}
                </p>
              </li>
            ) : null
          )}
        </ul>
      )}
    </div>
  );
}
