import { useState } from "react";
import { useParams } from "react-router-dom";

const ApplyForm = () => {
  const { jobTitle } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [resume, setResume] = useState(null); // for file
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !number || !resume) {
      alert("Please fill all fields and upload a resume.");
      return;
    }

    setSubmitting(true);

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("number", number);
    formData.append("job", jobTitle);
    formData.append("resume", resume);

    try {
      const res = await fetch("https://mezconsbackend.onrender.com/api/apply", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Something went wrong");
      }

      const data = await res.json();
      alert(data.message || "Application submitted!");
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Failed to submit. Try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#003049] text-white py-10 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Apply for: {jobTitle}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-[#780000] p-8 rounded-xl shadow-md"
        encType="multipart/form-data"
      >
        {/* Name */}
        <div className="mb-4">
          <label className="block mb-2">Name</label>
          <input
            className="w-full px-4 py-2 rounded text-black"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-2">Email</label>
          <input
            className="w-full px-4 py-2 rounded text-black"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block mb-2">Phone Number</label>
          <input
            className="w-full px-4 py-2 rounded text-black"
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            required
          />
        </div>

        {/* Resume Upload */}
        <div className="mb-6">
          <label className="block mb-2">Upload Resume (PDF only)</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={(e) => setResume(e.target.files[0])}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-[#fdf0d5] text-[#780000] px-6 py-2 rounded-lg font-bold hover:bg-[#ffbdbd] transition"
          disabled={submitting}
        >
          {submitting ? "Submitting..." : "Submit Application"}
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
