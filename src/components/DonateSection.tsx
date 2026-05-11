"use client";

import { useMemo, useState } from "react";
import {
  FaBuildingColumns,
  FaCopy,
  FaEnvelope,
  FaHandHoldingHeart,
  FaQrcode,
  FaWhatsapp
} from "react-icons/fa6";
import { Modal } from "@/components/Modal";
import { Reveal } from "@/components/Reveal";
import { donationConfig } from "@/data/site";

const copyLabels = {
  upi: "UPI ID copied",
  bank: "Bank details copied",
  account: "Account number copied",
  ifsc: "IFSC copied"
};

type CopyKey = keyof typeof copyLabels;

export function DonateSection() {
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [copied, setCopied] = useState<CopyKey | null>(null);

  const bankDetailsText = useMemo(
    () =>
      [
        `Account Name: ${donationConfig.bank.accountName}`,
        `Bank Name: ${donationConfig.bank.bankName}`,
        `Account Number: ${donationConfig.bank.accountNumber}`,
        `IFSC: ${donationConfig.bank.ifsc}`,
        `Branch: ${donationConfig.bank.branch}`,
        `Account Type: ${donationConfig.bank.accountType}`
      ].join("\n"),
    []
  );

  const receiptWhatsappUrl = `https://wa.me/${
    donationConfig.receipt.whatsappNumber
  }?text=${encodeURIComponent(
    "Hello Church of Glory and Grace Foundation, I have made a donation and would like to share payment details for confirmation."
  )}`;

  const copyToClipboard = async (key: CopyKey, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(key);
    window.setTimeout(() => setCopied(null), 1800);
  };

  const handlePrimaryDonate = () => {
    if (donationConfig.paymentLink) {
      window.open(donationConfig.paymentLink, "_blank", "noopener,noreferrer");
      return;
    }

    setIsDonationOpen(true);
  };

  return (
    <section id="donate" className="px-5 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[8px] border border-gold/[0.28] bg-[linear-gradient(135deg,rgba(217,162,58,0.3),rgba(255,242,223,0.08)_42%,rgba(42,17,25,0.88))] p-7 shadow-[0_26px_90px_rgba(0,0,0,0.26)] sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_25rem] lg:items-center">
            <div>
              <p className="section-eyebrow">Support the Mission</p>
              <h2 className="text-[clamp(2.25rem,4vw,4.4rem)] font-semibold leading-[1.08] text-cream">
                Give with love. Help us serve with grace.
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-text-muted">
                {donationConfig.message}
              </p>

              <div className="mt-9 grid gap-3 sm:flex">
                <button
                  type="button"
                  onClick={handlePrimaryDonate}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-gold px-7 py-4 text-base font-semibold text-[#201404] transition hover:bg-gold-soft focus:outline-none focus:ring-2 focus:ring-gold-soft"
                >
                  <FaHandHoldingHeart aria-hidden="true" />
                  Donate Now
                </button>
                <a
                  href="#contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-gold/[0.45] bg-white/[0.08] px-7 py-4 text-base font-semibold text-cream transition hover:border-gold hover:bg-gold/[0.10] focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <FaEnvelope aria-hidden="true" />
                  Contact Us
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsDonationOpen(true)}
              className="group rounded-[8px] border border-white/[0.14] bg-[#120d16]/[0.62] p-5 text-left transition hover:border-gold/[0.62] focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <span className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-gold-soft">
                <FaQrcode aria-hidden="true" />
                Scan to Give
              </span>
              <span className="mt-5 block rounded-[8px] bg-cream p-3">
                <img
                  src={donationConfig.qrImage.src}
                  alt={donationConfig.qrImage.alt}
                  className="h-auto w-full rounded-[6px]"
                />
              </span>
              <span className="mt-4 block text-base font-semibold text-cream">
                UPI: {donationConfig.upiId}
              </span>
              <span className="mt-2 block text-sm leading-6 text-text-muted">
                Tap to view all donation details.
              </span>
            </button>
          </div>
        </div>
      </Reveal>

      <Modal
        isOpen={isDonationOpen}
        title="Donation Details"
        onClose={() => setIsDonationOpen(false)}
      >
        <div className="grid gap-6 lg:grid-cols-[17rem_1fr]">
          <div>
            <div className="rounded-[8px] bg-cream p-3">
              <img
                src={donationConfig.qrImage.src}
                alt={donationConfig.qrImage.alt}
                className="h-auto w-full rounded-[6px]"
              />
            </div>
            <button
              type="button"
              onClick={() => copyToClipboard("upi", donationConfig.upiId)}
              className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-[#201404] transition hover:bg-gold-soft focus:outline-none focus:ring-2 focus:ring-gold-soft"
            >
              <FaCopy aria-hidden="true" />
              {copied === "upi" ? copyLabels.upi : "Copy UPI ID"}
            </button>
          </div>

          <div className="space-y-5">
            <div>
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-gold-soft">
                <FaBuildingColumns aria-hidden="true" />
                Bank Transfer
              </p>
              <div className="grid gap-3 text-sm">
                <DetailRow label="Account Name" value={donationConfig.bank.accountName} />
                <DetailRow label="Bank Name" value={donationConfig.bank.bankName} />
                <DetailRow label="Account Number" value={donationConfig.bank.accountNumber} />
                <DetailRow label="IFSC" value={donationConfig.bank.ifsc} />
                <DetailRow label="Branch" value={donationConfig.bank.branch} />
                <DetailRow label="Account Type" value={donationConfig.bank.accountType} />
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => copyToClipboard("bank", bankDetailsText)}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-gold/[0.45] bg-white/[0.08] px-5 py-3 text-sm font-semibold text-cream transition hover:border-gold hover:bg-gold/[0.10] focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <FaCopy aria-hidden="true" />
                {copied === "bank" ? copyLabels.bank : "Copy Bank Details"}
              </button>
              <a
                href={receiptWhatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#25D366]/60 bg-[#25D366]/10 px-5 py-3 text-sm font-semibold text-cream transition hover:bg-[#25D366]/20 focus:outline-none focus:ring-2 focus:ring-[#25D366]"
              >
                <FaWhatsapp aria-hidden="true" />
                Share Receipt
              </a>
            </div>

            <p className="rounded-[8px] border border-white/[0.13] bg-white/[0.08] p-4 text-sm leading-6 text-text-muted">
              {donationConfig.receipt.note} You can also email details to{" "}
              <a className="text-gold-soft" href={`mailto:${donationConfig.receipt.email}`}>
                {donationConfig.receipt.email}
              </a>
              .
            </p>
          </div>
        </div>
      </Modal>
    </section>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[8px] border border-white/[0.13] bg-white/[0.08] p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-muted">{label}</p>
      <p className="mt-2 break-words text-base font-semibold text-cream">{value}</p>
    </div>
  );
}
