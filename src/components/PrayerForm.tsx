"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import type { InputHTMLAttributes } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa6";
import { z } from "zod";
import { Reveal } from "@/components/Reveal";
import {
  PRAYER_REQUEST_STORAGE_KEY,
  type PrayerRequest
} from "@/data/prayer";

const prayerRequestSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Please share a little more about your prayer request."),
  isPrivate: z.boolean().default(false)
});

type PrayerRequestFormValues = z.infer<typeof prayerRequestSchema>;

const defaultValues: PrayerRequestFormValues = {
  name: "",
  phone: "",
  email: "",
  message: "",
  isPrivate: false
};

export function PrayerForm() {
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<PrayerRequestFormValues>({
    resolver: zodResolver(prayerRequestSchema),
    defaultValues
  });

  const onSubmit = (values: PrayerRequestFormValues) => {
    const request: PrayerRequest = {
      id:
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : String(Date.now()),
      ...values,
      createdAt: new Date().toISOString()
    };

    const existing = window.localStorage.getItem(PRAYER_REQUEST_STORAGE_KEY);
    const parsed = existing ? (JSON.parse(existing) as PrayerRequest[]) : [];
    window.localStorage.setItem(
      PRAYER_REQUEST_STORAGE_KEY,
      JSON.stringify([request, ...parsed])
    );

    setSuccessMessage(
      "Thank you. Your prayer request has been received. Our prayer team will pray with you."
    );
    reset(defaultValues);
  };

  return (
    <section id="prayer" className="relative overflow-hidden px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <p className="section-eyebrow">Prayer Request</p>
            <h2 className="section-title">No prayer is too small. No burden is too heavy.</h2>
            <p className="section-copy">
              Share your request with us, and our prayer team will pray with you.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="warm-panel rounded-[8px] p-6 sm:p-8"
            noValidate
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                label="Full Name"
                id="name"
                error={errors.name?.message}
                inputProps={{
                  ...register("name"),
                  autoComplete: "name",
                  placeholder: "Your name"
                }}
              />
              <FormField
                label="Phone Number"
                id="phone"
                error={errors.phone?.message}
                inputProps={{
                  ...register("phone"),
                  autoComplete: "tel",
                  placeholder: "+91 ..."
                }}
              />
              <FormField
                label="Email Address"
                id="email"
                error={errors.email?.message}
                inputProps={{
                  ...register("email"),
                  autoComplete: "email",
                  placeholder: "you@example.com",
                  type: "email"
                }}
              />
              <label className="flex min-h-[4.7rem] items-center gap-3 rounded-[8px] border border-white/[0.14] bg-[#120d16]/[0.64] px-4 py-3 text-sm font-medium text-cream">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-white/[0.30] bg-transparent text-gold focus:ring-gold"
                  {...register("isPrivate")}
                />
                Keep my prayer request private
              </label>
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="form-label">
                Prayer Request Message
              </label>
              <textarea
                id="message"
                rows={7}
                className="form-input resize-none"
                placeholder="Share your request..."
                {...register("message")}
              />
              {errors.message?.message ? (
                <p className="form-error">{errors.message.message}</p>
              ) : null}
            </div>

            {successMessage ? (
              <p
                className="mt-6 rounded-[8px] border border-gold/[0.30] bg-gold/[0.10] p-4 text-sm font-medium leading-6 text-gold-soft"
                role="status"
              >
                {successMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-[#201404] shadow-glow transition hover:bg-gold-soft focus:outline-none focus:ring-2 focus:ring-gold-soft disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              <FaPaperPlane aria-hidden="true" />
              Submit Request
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

type FormFieldProps = {
  label: string;
  id: keyof PrayerRequestFormValues;
  error?: string;
  inputProps: InputHTMLAttributes<HTMLInputElement>;
};

function FormField({ label, id, error, inputProps }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input id={id} className="form-input" {...inputProps} />
      {error ? <p className="form-error">{error}</p> : null}
    </div>
  );
}
