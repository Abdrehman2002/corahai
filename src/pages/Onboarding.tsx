import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  legal_business_name: string;
  dba_name: string;
  industry_type: string;
  website_url: string;
  instagram_handle: string;
  primary_contact_name: string;
  primary_contact_email: string;
  primary_contact_phone: string;
  best_contact_method: string;
  phone_setup_preference: string;
  current_phone_provider: string;
  existing_business_number: string;
  forward_to_number: string;
  package_interest: string;
  estimated_call_volume: string;
  offers_appointments: string;
  scheduling_platform: string;
  schedule_access_instructions: string;
  top_services: string;
  deposit_policy: string;
  cancellation_policy_summary: string;
  voice_style: string;
  voice_style_custom: string;
  custom_greeting: string;
  escalation_rules: string;
  sms_reminders_enabled: string;
  sms_message_types: string;
  corah_package: string;
  acknowledge_setup_fee: string;
  acknowledge_monthly_billing: string;
  signature_full_name: string;
  calendly_scheduled: string;
}

export default function Onboarding() {
  const [formData, setFormData] = useState<FormData>({
    legal_business_name: "",
    dba_name: "",
    industry_type: "",
    website_url: "",
    instagram_handle: "",
    primary_contact_name: "",
    primary_contact_email: "",
    primary_contact_phone: "",
    best_contact_method: "",
    phone_setup_preference: "",
    current_phone_provider: "",
    existing_business_number: "",
    forward_to_number: "",
    package_interest: "",
    estimated_call_volume: "",
    offers_appointments: "",
    scheduling_platform: "",
    schedule_access_instructions: "",
    top_services: "",
    deposit_policy: "",
    cancellation_policy_summary: "",
    voice_style: "",
    voice_style_custom: "",
    custom_greeting: "",
    escalation_rules: "",
    sms_reminders_enabled: "no",
    sms_message_types: "",
    corah_package: "",
    acknowledge_setup_fee: "no",
    acknowledge_monthly_billing: "no",
    signature_full_name: "",
    calendly_scheduled: "no",
  });

  const [smsTypes, setSmsTypes] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setSmsTypes((prev) => {
      const updated = checked
        ? [...prev, value]
        : prev.filter((v) => v !== value);

      setFormData((prevForm) => ({
        ...prevForm,
        sms_message_types: updated.join(", "),
      }));

      return updated;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3001/api/submit-onboarding", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit form");
      }

      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md w-full bg-card border border-border rounded-3xl p-8 text-center shadow-card"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
          </motion.div>
          <h2 className="text-3xl font-bold text-foreground mb-3">
            Thank You!
          </h2>
          <p className="text-foreground/70 text-lg mb-6">
            Our team will reach out shortly to finalize your setup.
          </p>
          <a
            href="/"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Back to Home
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <a href="/" className="inline-block text-3xl font-black text-foreground mb-6">
            CORAH
          </a>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Welcome to CORAH
          </h1>
          <p className="text-lg text-foreground/70">
            Let's get your AI receptionist set up in just a few minutes
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="bg-card border border-border rounded-3xl p-6 md:p-10 shadow-card space-y-8"
        >
          {/* Business & Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Business & Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Legal Business Name *
                </label>
                <input
                  type="text"
                  name="legal_business_name"
                  value={formData.legal_business_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  DBA Name (if different)
                </label>
                <input
                  type="text"
                  name="dba_name"
                  value={formData.dba_name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Industry Type *
                </label>
                <input
                  type="text"
                  name="industry_type"
                  value={formData.industry_type}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Real Estate, Medical, Legal"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  name="website_url"
                  value={formData.website_url}
                  onChange={handleChange}
                  placeholder="https://example.com"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Instagram Handle
                </label>
                <input
                  type="text"
                  name="instagram_handle"
                  value={formData.instagram_handle}
                  onChange={handleChange}
                  placeholder="@yourhandle"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Primary Contact Name *
                </label>
                <input
                  type="text"
                  name="primary_contact_name"
                  value={formData.primary_contact_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Primary Contact Email *
                </label>
                <input
                  type="email"
                  name="primary_contact_email"
                  value={formData.primary_contact_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Primary Contact Phone *
                </label>
                <input
                  type="tel"
                  name="primary_contact_phone"
                  value={formData.primary_contact_phone}
                  onChange={handleChange}
                  required
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Best Contact Method *
                </label>
                <select
                  name="best_contact_method"
                  value={formData.best_contact_method}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors appearance-none"
                >
                  <option value="">Select...</option>
                  <option value="Call">Call</option>
                  <option value="Text">Text</option>
                  <option value="Email">Email</option>
                </select>
              </div>
            </div>
          </section>

          {/* Phone System Setup */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Phone System Setup
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Setup Preference *
                </label>
                <select
                  name="phone_setup_preference"
                  value={formData.phone_setup_preference}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors appearance-none"
                >
                  <option value="">Select...</option>
                  <option value="new_number">Get a new CORAH phone number</option>
                  <option value="port_existing">Port my existing business number</option>
                  <option value="forward_existing">Forward my existing number to CORAH</option>
                </select>
              </div>

              {(formData.phone_setup_preference === "port_existing" ||
                formData.phone_setup_preference === "forward_existing") && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Current Phone Provider
                    </label>
                    <input
                      type="text"
                      name="current_phone_provider"
                      value={formData.current_phone_provider}
                      onChange={handleChange}
                      placeholder="e.g., Verizon, AT&T"
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Existing Business Number
                    </label>
                    <input
                      type="tel"
                      name="existing_business_number"
                      value={formData.existing_business_number}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors"
                    />
                  </div>
                </>
              )}

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Forward to Number (for missed/escalated calls) *
                </label>
                <input
                  type="tel"
                  name="forward_to_number"
                  value={formData.forward_to_number}
                  onChange={handleChange}
                  required
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors"
                />
              </div>
            </div>
          </section>

          {/* Package Interest & Call Volume */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Package Interest & Call Volume
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Which CORAH package are you interested in? *
                </label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer p-4 rounded-xl border-2 border-border hover:border-primary transition-colors">
                    <input
                      type="radio"
                      name="package_interest"
                      value="Inbound"
                      checked={formData.package_interest === "Inbound"}
                      onChange={handleChange}
                      required
                      className="w-4 h-4"
                    />
                    <span className="text-foreground font-medium">Inbound Voice Agent</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer p-4 rounded-xl border-2 border-border hover:border-primary transition-colors">
                    <input
                      type="radio"
                      name="package_interest"
                      value="Outbound"
                      checked={formData.package_interest === "Outbound"}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span className="text-foreground font-medium">Outbound Voice Agent</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer p-4 rounded-xl border-2 border-border hover:border-primary transition-colors">
                    <input
                      type="radio"
                      name="package_interest"
                      value="Not sure yet"
                      checked={formData.package_interest === "Not sure yet"}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span className="text-foreground font-medium">Not sure yet</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Estimated call volume per day *
                </label>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer p-4 rounded-xl border-2 border-border hover:border-primary transition-colors">
                    <input
                      type="radio"
                      name="estimated_call_volume"
                      value="< 15"
                      checked={formData.estimated_call_volume === "< 15"}
                      onChange={handleChange}
                      required
                      className="w-4 h-4"
                    />
                    <span className="text-foreground font-medium">&lt; 15 calls/day</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer p-4 rounded-xl border-2 border-border hover:border-primary transition-colors">
                    <input
                      type="radio"
                      name="estimated_call_volume"
                      value="15-40"
                      checked={formData.estimated_call_volume === "15-40"}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span className="text-foreground font-medium">15–40 calls/day</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer p-4 rounded-xl border-2 border-border hover:border-primary transition-colors">
                    <input
                      type="radio"
                      name="estimated_call_volume"
                      value="40-80"
                      checked={formData.estimated_call_volume === "40-80"}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span className="text-foreground font-medium">40–80 calls/day</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer p-4 rounded-xl border-2 border-border hover:border-primary transition-colors">
                    <input
                      type="radio"
                      name="estimated_call_volume"
                      value="80+"
                      checked={formData.estimated_call_volume === "80+"}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span className="text-foreground font-medium">80+ calls/day</span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* Scheduling & Services */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Scheduling & Services
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Do you offer appointments? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="offers_appointments"
                      value="yes"
                      checked={formData.offers_appointments === "yes"}
                      onChange={handleChange}
                      required
                      className="w-4 h-4"
                    />
                    <span className="text-foreground">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="offers_appointments"
                      value="no"
                      checked={formData.offers_appointments === "no"}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span className="text-foreground">No</span>
                  </label>
                </div>
              </div>

              {formData.offers_appointments === "yes" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Scheduling Platform
                    </label>
                    <input
                      type="text"
                      name="scheduling_platform"
                      value={formData.scheduling_platform}
                      onChange={handleChange}
                      placeholder="e.g., Calendly, Acuity, Google Calendar"
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Schedule Access Instructions
                    </label>
                    <textarea
                      name="schedule_access_instructions"
                      value={formData.schedule_access_instructions}
                      onChange={handleChange}
                      rows={3}
                      placeholder="How should we access your calendar? (link, credentials, etc.)"
                      className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors resize-none"
                    />
                  </div>
                </>
              )}

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Top Services Offered
                </label>
                <textarea
                  name="top_services"
                  value={formData.top_services}
                  onChange={handleChange}
                  rows={3}
                  placeholder="List your main services (comma separated)"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Deposit Policy
                </label>
                <input
                  type="text"
                  name="deposit_policy"
                  value={formData.deposit_policy}
                  onChange={handleChange}
                  placeholder="e.g., $50 deposit required"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Cancellation Policy Summary
                </label>
                <textarea
                  name="cancellation_policy_summary"
                  value={formData.cancellation_policy_summary}
                  onChange={handleChange}
                  rows={2}
                  placeholder="e.g., 24-hour notice required"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors resize-none"
                />
              </div>
            </div>
          </section>

          {/* Voice Agent & SMS */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Voice Agent & SMS Settings
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Voice Style *
                </label>
                <select
                  name="voice_style"
                  value={formData.voice_style}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors appearance-none"
                >
                  <option value="">Select...</option>
                  <option value="Professional">Professional</option>
                  <option value="Friendly">Friendly</option>
                  <option value="Casual">Casual</option>
                  <option value="Formal">Formal</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>

              {formData.voice_style === "Custom" && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Custom Voice Style Description
                  </label>
                  <textarea
                    name="voice_style_custom"
                    value={formData.voice_style_custom}
                    onChange={handleChange}
                    rows={2}
                    placeholder="Describe how you want the AI to sound..."
                    className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors resize-none"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Custom Greeting
                </label>
                <textarea
                  name="custom_greeting"
                  value={formData.custom_greeting}
                  onChange={handleChange}
                  rows={2}
                  placeholder='e.g., "Thank you for calling ABC Company, how may I help you today?"'
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Escalation Rules
                </label>
                <textarea
                  name="escalation_rules"
                  value={formData.escalation_rules}
                  onChange={handleChange}
                  rows={3}
                  placeholder="When should the AI transfer to a human? (e.g., emergencies, complex issues)"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Enable SMS Reminders? *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="sms_reminders_enabled"
                      value="yes"
                      checked={formData.sms_reminders_enabled === "yes"}
                      onChange={handleChange}
                      required
                      className="w-4 h-4"
                    />
                    <span className="text-foreground">Yes</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="sms_reminders_enabled"
                      value="no"
                      checked={formData.sms_reminders_enabled === "no"}
                      onChange={handleChange}
                      className="w-4 h-4"
                    />
                    <span className="text-foreground">No</span>
                  </label>
                </div>
              </div>

              {formData.sms_reminders_enabled === "yes" && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    SMS Message Types
                  </label>
                  <div className="space-y-2">
                    {[
                      "Appointment Reminders",
                      "Appointment Confirmations",
                      "Follow-ups",
                      "Promotions",
                    ].map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={smsTypes.includes(type)}
                          onChange={(e) =>
                            handleCheckboxChange(type, e.target.checked)
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-foreground">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Package & Billing */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Package & Billing
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  CORAH Package *
                </label>
                <select
                  name="corah_package"
                  value={formData.corah_package}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors appearance-none"
                >
                  <option value="">Select...</option>
                  <option value="Micro">Micro</option>
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="High Volume">High Volume</option>
                  <option value="Enterprise">Enterprise</option>
                </select>
              </div>

              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="acknowledge_setup_fee"
                    checked={formData.acknowledge_setup_fee === "yes"}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        acknowledge_setup_fee: e.target.checked ? "yes" : "no",
                      }))
                    }
                    required
                    className="w-5 h-5 mt-0.5"
                  />
                  <span className="text-foreground">
                    I acknowledge the one-time setup fee *
                  </span>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="acknowledge_monthly_billing"
                    checked={formData.acknowledge_monthly_billing === "yes"}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        acknowledge_monthly_billing: e.target.checked
                          ? "yes"
                          : "no",
                      }))
                    }
                    required
                    className="w-5 h-5 mt-0.5"
                  />
                  <span className="text-foreground">
                    I acknowledge monthly billing for the selected package *
                  </span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name (Digital Signature) *
                </label>
                <input
                  type="text"
                  name="signature_full_name"
                  value={formData.signature_full_name}
                  onChange={handleChange}
                  required
                  placeholder="Type your full name"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-background text-foreground focus:border-primary outline-none transition-colors"
                />
                <p className="text-xs text-foreground/60 mt-2">
                  By typing your name, you agree to our terms and conditions
                </p>
              </div>
            </div>
          </section>

          {/* Schedule Onboarding Call */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Schedule Your Onboarding Call
            </h2>
            <div className="bg-secondary/30 rounded-2xl p-6">
              <p className="text-foreground/70 mb-4">
                Schedule a call with our team to finalize your setup and answer any questions.
              </p>
              <div className="rounded-xl overflow-hidden border-2 border-border">
                <iframe
                  src="https://calendly.com/corahai/30min"
                  width="100%"
                  height="700"
                  title="Schedule Onboarding Call"
                  className="bg-background border-0"
                ></iframe>
              </div>
              <p className="text-xs text-foreground/60 mt-4">
                * You can also schedule this call after submitting the form
              </p>
            </div>
          </section>

          {/* Error Message */}
          {error && (
            <div className="p-4 rounded-xl bg-red-50 border-2 border-red-200 text-red-700">
              {error}
            </div>
          )}

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "w-full px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-3",
                isSubmitting
                  ? "bg-secondary text-muted-foreground cursor-not-allowed"
                  : "bg-primary text-primary-foreground shadow-medium hover:opacity-90"
              )}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit Onboarding Form"
              )}
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
}
