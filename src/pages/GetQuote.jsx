import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import { submitLead } from "@/lib/submitLead";

export default function GetQuote() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await submitLead("Get Quote", form);
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero
        breadcrumb="Get a Quote"
        label="Request a Free Quote"
        title={<>Let's build something <em className="italic font-serif font-light">great together</em></>}
        subtitle="Share a few details about your project and our team will get back to you within one business day with a free estimate."
        image="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1600&q=80"
      />

      <section className="py-24 bg-brand-cream">
        <div className="max-w-3xl mx-auto px-6">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-card rounded-lg p-12 border border-border text-center flex flex-col items-center justify-center"
            >
              <CheckCircle className="w-16 h-16 text-primary mb-6" />
              <h3 className="font-heading text-2xl font-bold mb-3">Thanks — your request is in.</h3>
              <p className="text-foreground/60 max-w-sm">
                A member of our team will follow up within one business day with your free estimate.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 md:p-10 border border-border shadow-sm">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-primary mb-2">Full Name</label>
                  <input
                    name="full_name"
                    value={form.full_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-primary mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-primary mb-2">Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-primary mb-2">Company (optional)</label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label className="block text-xs font-semibold uppercase tracking-wide text-primary mb-2">Project Details</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
                />
              </div>

              {error && (
                <p className="mt-5 text-sm text-red-600" role="alert">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 bg-primary text-primary-foreground px-6 py-4 rounded-md font-semibold tracking-wide uppercase text-sm hover:bg-primary/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {loading ? "Sending..." : "Get My Free Quote"}
                {!loading && <Send className="w-4 h-4" />}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}