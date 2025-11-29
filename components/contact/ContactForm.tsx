"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { useRef, useState } from "react";

export function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    goals: "",
    timeline: "",
  });

  const budgetOptions = [
    "Under $25K",
    "$25K - $50K",
    "$50K - $100K",
    "$100K - $250K",
    "$250K+",
    "Retainer Discussion",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <Section>
      <Container size="narrow">
        <motion.form
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="space-y-12"
        >
          {/* Personal Info Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="peer w-full bg-transparent border-b border-soft-gray/30 py-4 text-lg focus:border-accent-gold focus:outline-none transition-colors duration-300"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-4 text-soft-gray transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent-gold peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Your Name *
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="peer w-full bg-transparent border-b border-soft-gray/30 py-4 text-lg focus:border-accent-gold focus:outline-none transition-colors duration-300"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-4 text-soft-gray transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent-gold peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Email Address *
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="peer w-full bg-transparent border-b border-soft-gray/30 py-4 text-lg focus:border-accent-gold focus:outline-none transition-colors duration-300"
                  placeholder=" "
                />
                <label
                  htmlFor="company"
                  className="absolute left-0 top-4 text-soft-gray transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent-gold peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Company Name
                </label>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm text-soft-gray mb-3">
                  Investment Range *
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  required
                  className="w-full bg-transparent border border-soft-gray/30 py-4 px-4 text-lg focus:border-accent-gold focus:outline-none transition-colors duration-300"
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option} className="bg-onyx">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Strategic Questions Column */}
            <div className="space-y-8">
              <div className="relative">
                <textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  required
                  rows={4}
                  className="peer w-full bg-transparent border-b border-soft-gray/30 py-4 text-lg focus:border-accent-gold focus:outline-none transition-colors duration-300 resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="goals"
                  className="absolute left-0 top-4 text-soft-gray transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent-gold peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  What are your primary goals for this project? *
                </label>
              </div>

              <div className="relative">
                <textarea
                  id="timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  required
                  rows={4}
                  className="peer w-full bg-transparent border-b border-soft-gray/30 py-4 text-lg focus:border-accent-gold focus:outline-none transition-colors duration-300 resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="timeline"
                  className="absolute left-0 top-4 text-soft-gray transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-accent-gold peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  What's your ideal timeline? *
                </label>
              </div>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="border-t border-soft-gray/20 pt-8">
            <div className="grid grid-cols-3 gap-6 text-center mb-8">
              <div>
                <p className="text-2xl font-display text-accent-gold mb-1">24h</p>
                <p className="text-xs text-soft-gray">Response Time</p>
              </div>
              <div>
                <p className="text-2xl font-display text-accent-gold mb-1">NDA</p>
                <p className="text-xs text-soft-gray">Available</p>
              </div>
              <div>
                <p className="text-2xl font-display text-accent-gold mb-1">Free</p>
                <p className="text-xs text-soft-gray">Initial Consultation</p>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="px-12 py-5 bg-accent-gold text-onyx text-lg font-medium hover:bg-opacity-90 transition-all duration-300 hover:translate-y-[-2px]"
            >
              Send Inquiry
            </button>
            <p className="mt-6 text-sm text-soft-gray/60">
              Prefer email?{" "}
              <a href="mailto:hello@gt-media.com" className="text-accent-gold hover:underline">
                hello@gt-media.com
              </a>
            </p>
          </div>
        </motion.form>

        {/* Secondary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="/GT-Media-Capabilities.pdf"
            className="text-soft-gray hover:text-accent-gold transition-colors duration-300 underline"
          >
            Download Capability Deck (PDF)
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}
