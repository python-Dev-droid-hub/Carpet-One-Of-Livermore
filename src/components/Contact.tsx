"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { contact, site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Motif } from "@/components/ui/Motif";
import { Section, SectionHeader } from "@/components/ui/Section";

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const initial: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  } else if (values.phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!values.service) errors.service = "Please select a service interest.";
  if (!values.message.trim()) errors.message = "Please add a short message.";
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<FormState>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function onChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormState];
        return next;
      });
    }
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    // TODO: Connect to Formspree or a backend endpoint
    console.log("Quote form submission (stub):", values);
    setSubmitted(true);
  }

  const fieldClass =
    "w-full rounded-[var(--radius-sm)] border border-bg/20 bg-bg/5 px-4 py-3 text-sm text-bg placeholder:text-bg/40 focus:border-clay focus:outline-none focus:ring-2 focus:ring-clay/40";

  return (
    <Section id="contact" dark className="overflow-hidden">
      <Motif variant="tile-on-dark" opacity={0.55} />
      <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
        <FadeIn className="lg:col-span-5">
          <SectionHeader
            title={contact.title}
            subtitle={contact.subtitle}
            onDark
          />

          <ul className="space-y-4 text-sm md:text-base">
            <li>
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-3 text-bg/90 transition-colors hover:text-bg"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] bg-bg/10 text-clay">
                  <Phone className="size-4" aria-hidden="true" />
                </span>
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.emailHref}
                className="inline-flex items-center gap-3 text-bg/90 transition-colors hover:text-bg"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] bg-bg/10 text-clay">
                  <Mail className="size-4" aria-hidden="true" />
                </span>
                {site.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-3 text-bg/75">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-sm)] bg-bg/10 text-sage">
                <MapPin className="size-4" aria-hidden="true" />
              </span>
              <span>
                {site.address}
                <br />
                {site.location}
              </span>
            </li>
            <li className="inline-flex items-center gap-3 text-bg/75">
              <span className="inline-flex size-10 items-center justify-center rounded-[var(--radius-sm)] bg-bg/10 text-sage">
                <Clock className="size-4" aria-hidden="true" />
              </span>
              {site.hours}
            </li>
          </ul>

          {/* Map placeholder */}
          <div
            className="mt-8 flex aspect-[16/10] items-center justify-center rounded-[var(--radius-md)] border border-bg/15 bg-bg/5 motif-tile-on-dark"
            role="img"
            aria-label="Map placeholder — add embed when address is available"
          >
            <p className="px-4 text-center text-sm text-bg/55">
              [Add map embed]
              <span className="mt-1 block text-xs">Replace with Google Maps when address is set</span>
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="lg:col-span-7">
          <div className="rounded-[var(--radius-md)] border border-bg/12 bg-bg/[0.04] p-6 shadow-soft md:p-8">
            {submitted ? (
              <div role="status" aria-live="polite" className="py-8 text-center">
                <h3 className="font-serif text-2xl text-bg">
                  {contact.form.successTitle}
                </h3>
                <p className="mx-auto mt-3 max-w-md text-bg/75">
                  {contact.form.successMessage}
                </p>
                <Button
                  variant="onDark"
                  className="mt-8"
                  onClick={() => {
                    setSubmitted(false);
                    setValues(initial);
                  }}
                >
                  Send another request
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="quote-name" className="mb-1.5 block text-sm text-bg/80">
                    Name
                  </label>
                  <input
                    id="quote-name"
                    name="name"
                    autoComplete="name"
                    value={values.name}
                    onChange={onChange}
                    className={fieldClass}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "quote-name-error" : undefined}
                  />
                  {errors.name ? (
                    <p id="quote-name-error" className="mt-1.5 text-sm text-clay" role="alert">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quote-email" className="mb-1.5 block text-sm text-bg/80">
                      Email
                    </label>
                    <input
                      id="quote-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={onChange}
                      className={fieldClass}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "quote-email-error" : undefined}
                    />
                    {errors.email ? (
                      <p id="quote-email-error" className="mt-1.5 text-sm text-clay" role="alert">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                  <div>
                    <label htmlFor="quote-phone" className="mb-1.5 block text-sm text-bg/80">
                      Phone
                    </label>
                    <input
                      id="quote-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={values.phone}
                      onChange={onChange}
                      className={fieldClass}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "quote-phone-error" : undefined}
                    />
                    {errors.phone ? (
                      <p id="quote-phone-error" className="mt-1.5 text-sm text-clay" role="alert">
                        {errors.phone}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="quote-service" className="mb-1.5 block text-sm text-bg/80">
                    Service interest
                  </label>
                  <select
                    id="quote-service"
                    name="service"
                    value={values.service}
                    onChange={onChange}
                    className={`${fieldClass} appearance-none`}
                    aria-invalid={!!errors.service}
                    aria-describedby={errors.service ? "quote-service-error" : undefined}
                  >
                    {contact.form.serviceOptions.map((opt) => (
                      <option key={opt.value || "empty"} value={opt.value} className="bg-ink text-bg">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  {errors.service ? (
                    <p id="quote-service-error" className="mt-1.5 text-sm text-clay" role="alert">
                      {errors.service}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="quote-message" className="mb-1.5 block text-sm text-bg/80">
                    Message
                  </label>
                  <textarea
                    id="quote-message"
                    name="message"
                    rows={4}
                    value={values.message}
                    onChange={onChange}
                    className={`${fieldClass} resize-y`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "quote-message-error" : undefined}
                  />
                  {errors.message ? (
                    <p id="quote-message-error" className="mt-1.5 text-sm text-clay" role="alert">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <Button type="submit" variant="onDark" className="w-full sm:w-auto">
                  Submit quote request
                </Button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
