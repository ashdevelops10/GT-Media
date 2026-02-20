"use client";

import { motion, useInView } from "framer-motion";
import { Container, Section } from "@/components/layout";
import { useRef, useState } from "react";

export function ContactForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    budget: "",
    goals: "",
    timeline: "",
  });

  const budgetOptions = [
    "Under ₹2L",
    "₹2L – ₹5L",
    "₹5L – ₹10L",
    "₹10L – ₹25L",
    "₹25L – ₹50L",
    "₹50L+",
    "Retainer Discussion",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <Section>
      <Container>
        <motion.form
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto space-y-8 sm:space-y-12 px-4 sm:px-0"
        >
          {/* Personal Info Column */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-6 sm:space-y-8">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="peer w-full bg-transparent border-b border-white/20/30 py-3 sm:py-4 text-base sm:text-lg focus:border-burgundy focus:outline-none transition-colors duration-300"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-3 sm:top-4 text-sm sm:text-base text-white/50 transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-burgundy peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Your Name *
                </label>
              </div>

              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="peer w-full bg-transparent border-b border-white/20/30 py-3 sm:py-4 text-base sm:text-lg focus:border-burgundy focus:outline-none transition-colors duration-300"
                  placeholder=" "
                />
                <label
                  htmlFor="phone"
                  className="absolute left-0 top-3 sm:top-4 text-sm sm:text-base text-white/50 transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-burgundy peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Phone / WhatsApp *
                </label>
              </div>

              <div className="relative">
                <input
                  type="text"
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="peer w-full bg-transparent border-b border-white/20/30 py-3 sm:py-4 text-base sm:text-lg focus:border-burgundy focus:outline-none transition-colors duration-300"
                  placeholder=" "
                />
                <label
                  htmlFor="company"
                  className="absolute left-0 top-3 sm:top-4 text-sm sm:text-base text-white/50 transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-burgundy peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  Company Name
                </label>
              </div>

              <div>
                <label htmlFor="budget" className="block text-xs sm:text-sm text-white/50 mb-2 sm:mb-3">
                  Investment Range *
                </label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  required
                  className="w-full bg-transparent border border-white/20/30 py-3 sm:py-4 px-3 sm:px-4 text-base sm:text-lg focus:border-burgundy focus:outline-none transition-colors duration-300"
                >
                  <option value="" disabled>
                    Select a range
                  </option>
                  {budgetOptions.map((option) => (
                    <option key={option} value={option} className="bg-black">
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Strategic Questions Column */}
            <div className="space-y-6 sm:space-y-8">
              <div className="relative">
                <textarea
                  id="goals"
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                  required
                  rows={4}
                  className="peer w-full bg-transparent border-b border-white/20/30 py-3 sm:py-4 text-base sm:text-lg focus:border-burgundy focus:outline-none transition-colors duration-300 resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="goals"
                  className="absolute left-0 top-3 sm:top-4 text-sm sm:text-base text-white/50 transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-burgundy peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
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
                  className="peer w-full bg-transparent border-b border-white/20/30 py-3 sm:py-4 text-base sm:text-lg focus:border-burgundy focus:outline-none transition-colors duration-300 resize-none"
                  placeholder=" "
                />
                <label
                  htmlFor="timeline"
                  className="absolute left-0 top-3 sm:top-4 text-sm sm:text-base text-white/50 transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-burgundy peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
                >
                  What&apos;s your ideal timeline? *
                </label>
              </div>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="border-t border-white/20/20 pt-6 sm:pt-8">
            <div className="grid grid-cols-3 gap-4 sm:gap-6 text-center mb-6 sm:mb-8">
              <div className="group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-full border border-burgundy/30 flex items-center justify-center group-hover:bg-burgundy/10 transition-colors duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-burgundy" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-lg sm:text-2xl font-display text-burgundy mb-0.5 sm:mb-1">24h</p>
                <p className="text-[10px] sm:text-xs text-white/50">Response Time</p>
              </div>
              <div className="group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-full border border-burgundy/30 flex items-center justify-center group-hover:bg-burgundy/10 transition-colors duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-burgundy" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M12 11V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="12" cy="8" r="1" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-lg sm:text-2xl font-display text-burgundy mb-0.5 sm:mb-1">NDA</p>
                <p className="text-[10px] sm:text-xs text-white/50">Available</p>
              </div>
              <div className="group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-2 rounded-full border border-burgundy/30 flex items-center justify-center group-hover:bg-burgundy/10 transition-colors duration-300">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-burgundy" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <p className="text-lg sm:text-2xl font-display text-burgundy mb-0.5 sm:mb-1">Free</p>
                <p className="text-[10px] sm:text-xs text-white/50">Initial Consultation</p>
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 bg-burgundy text-white text-base sm:text-lg font-medium hover:bg-opacity-90 transition-all duration-300 hover:translate-y-[-2px] group inline-flex items-center justify-center"
            >
              Send Inquiry
              <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-white/50">
              Prefer WhatsApp?{" "}
              <a href="https://wa.me/919996884533" target="_blank" rel="noopener noreferrer" className="text-burgundy hover:underline">
                +91 99968 84533
              </a>
            </p>
          </div>
        </motion.form>

        {/* Secondary CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 text-center"
        >
          <a
            href="/GT-Media-Capabilities.pdf"
            className="text-sm sm:text-base text-white/50 hover:text-burgundy transition-colors duration-300 underline"
          >
            Download Capability Deck (PDF)
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}
