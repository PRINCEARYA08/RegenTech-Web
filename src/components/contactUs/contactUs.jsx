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

    // live-validate a single field
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
      // TODO: replace '/api/contact' with your actual backend route
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
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">Contact Us</h1>
          <p className="mt-2 text-gray-600">We'd love to hear from you. Fill out the form and we'll get back to you soon.</p>
        </header>

        <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              className={`mt-1 w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2 focus:ring-black/20 ${errors.name ? "border-red-500" : "border-gray-300"}`}
              placeholder="John Doe"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              className={`mt-1 w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2 focus:ring-black/20 ${errors.email ? "border-red-500" : "border-gray-300"}`}
              placeholder="you@example.com"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={handleChange}
              className={`mt-1 w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2 focus:ring-black/20 ${errors.phone ? "border-red-500" : "border-gray-300"}`}
              placeholder="+91 98765 43210"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            {errors.phone && (
              <p id="phone-error" className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className={`mt-1 w-full rounded-xl border px-4 py-3 outline-none transition focus:ring-2 focus:ring-black/20 ${errors.message ? "border-red-500" : "border-gray-300"}`}
              placeholder="How can we help you?"
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>
            )}
          </div>

          {/* Status */}
          {status.type !== "idle" && (
            <div
              className={`rounded-xl border px-4 py-3 text-sm ${
                status.type === "success"
                  ? "border-green-200 bg-green-50 text-green-700"
                  : "border-red-200 bg-red-50 text-red-700"
              }`}
              role="status"
            >
              {status.msg}
            </div>
          )}

          {/* Submit */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-2xl bg-black text-white px-6 py-3 font-medium shadow-lg transition hover:bg-black/90 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {/* Contact Info / Footer */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Prefer email? Reach us at <a href="mailto:hello@example.com" className="underline">hello@example.com</a></p>
        </div>
      </div>
    </main>
  );
}
