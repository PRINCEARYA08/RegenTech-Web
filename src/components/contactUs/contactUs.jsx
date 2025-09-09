import React, { useState } from "react";

// A clean, accessible Contact Us page (single-file React component)
// - Tailwind CSS classes for styling
// - Client-side validation (name, email, phone, message)
// - Disable button while submitting, success & error states
// - Replace the fetch URL with your backend endpoint

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", msg: "" });
  const [submitting, setSubmitting] = useState(false);

  const validate = (values) => {
    const e = {};
    if (!values.name.trim()) e.name = "Name is required";
    if (!values.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(values.email)) e.email = "Enter a valid email";
    if (!values.phone.trim()) e.phone = "Contact number is required";
    else if (!/^[0-9\s+\-()]{7,15}$/.test(values.phone)) e.phone = "Enter a valid phone number";
    if (!values.message.trim()) e.message = "Message can't be empty";
    else if (values.message.trim().length < 10) e.message = "Message should be at least 10 characters";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    const v = validate({ ...form, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: v[name] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "idle", msg: "" });
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;
    try {
      setSubmitting(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to send. Try again.");
      setStatus({ type: "success", msg: "Thanks! Your message has been sent." });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", msg: err.message || "Something went wrong." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-400 via-purple-400 to-purple-600 p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden">
        <br/>
        <br/>
        {/* Gradient Header */}
        <div className="relative h-30 bg-gradient-to-tr from-blue-400 via-purple-500 to-purple-400 flex flex-col items-center justify-center">
          {/* Logo Placeholder */}
          
            <div className="mb-2">
            <img
              src="images/logo/logo.png"
              alt="RegenTech Logo"
              width={60}
              height={60}
              className="mx-auto"
              style={{ objectFit: "contain" }}
            />
          </div>
          <h2 className="text-white text-2xl font-bold tracking-wide drop-shadow">RegenTech</h2>
        </div>
        {/* Card Content */}
        <div className="px-8 py-8">
          <h1 className="text-2xl font-semibold text-center mb-2 text-gray-800">Welcome!</h1>
          <p className="text-center text-gray-400 mb-6 text-sm">We'd love to hear from you. Fill out the form and we'll get back to you soon.</p>
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              className={`rounded-full px-5 py-3 border-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-700 bg-gray-50 ${errors.name ? "border-red-400" : "border-gray-200"}`}
              placeholder="Name"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && <p id="name-error" className="text-xs text-red-500 px-2">{errors.name}</p>}
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              className={`rounded-full px-5 py-3 border-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-700 bg-gray-50 ${errors.email ? "border-red-400" : "border-gray-200"}`}
              placeholder="Email"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && <p id="email-error" className="text-xs text-red-500 px-2">{errors.email}</p>}
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              className={`rounded-full px-5 py-3 border-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-700 bg-gray-50 ${errors.phone ? "border-red-400" : "border-gray-200"}`}
              placeholder="Contact Number"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && <p id="phone-error" className="text-xs text-red-500 px-2">{errors.phone}</p>}
            <textarea
              id="message"
              name="message"
              rows={3}
              value={form.message}
              onChange={handleChange}
              className={`rounded-2xl px-5 py-3 border-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition text-gray-700 bg-gray-50 resize-none ${errors.message ? "border-red-400" : "border-gray-200"}`}
              placeholder="Message"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && <p id="message-error" className="text-xs text-red-500 px-2">{errors.message}</p>}
            {status.type !== "idle" && (
              <div
                className={`rounded-xl border px-4 py-3 text-sm mt-2 ${
                  status.type === "success"
                    ? "border-green-200 bg-green-50 text-green-700"
                    : "border-red-200 bg-red-50 text-red-700"
                }`}
                role="status"
              >
                {status.msg}
              </div>
            )}
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 font-semibold shadow-lg transition hover:from-blue-600 hover:to-purple-600 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </form>
          <div className="mt-8 text-center text-xs text-gray-400">
            <p>Prefer email? <a href="mailto:hello@example.com" className="underline">hello@example.com</a></p>
          </div>
        </div>
      </div>
    </main>
  );
}
