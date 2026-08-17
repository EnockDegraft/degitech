'use client';

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from './ui/badge';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaArrowRight,
  FaSeedling,
} from 'react-icons/fa';

interface ContactInfo {
  email: string;
  phone: string;
}

interface ServiceOption {
  value: string;
  label: string;
}

interface ContactFormProps {
  badge?: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  contactInfo: ContactInfo;
  serviceOptions: ServiceOption[];
  ctaLabel: string;
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

const defaultProps: ContactFormProps = {
  badge: 'Sustainable Futures',
  headline: 'Grow Your',
  headlineAccent: 'Green Business',
  subheadline:
    'We partner with founders and enterprises to design eco-forward strategies that drive measurable impact.',
  contactInfo: {
    email: 'hello@watermelon.studio',
    phone: '+91 98765 43210',
  },
  serviceOptions: [
    { value: 'strategy', label: 'Sustainability Strategy' },
    { value: 'audit', label: 'Carbon Audit & Reporting' },
    { value: 'supply', label: 'Supply Chain Consulting' },
    { value: 'branding', label: 'Green Branding' },
    { value: 'other', label: 'Something Else' },
  ],
  ctaLabel: 'Send My Request',
  onSubmit: (data) => console.log('Submitted:', data),
};

export default function ContactSolutionForm(
  props: ContactFormProps = defaultProps,
) {
  const {
    badge,
    headline,
    headlineAccent,
    subheadline,
    contactInfo,
    serviceOptions,
    ctaLabel,
    onSubmit,
  } = { ...defaultProps, ...props };

  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name.trim()) {
      setError('Full name is required');
      return;
    }
    if (!form.email.trim()) {
      setError('Email is required');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email');
      return;
    }
    if (!form.service) {
      setError('Please select a service');
      return;
    }
    if (!form.message.trim()) {
      setError('Message is required');
      return;
    }

    setLoading(true);

    try {
      // Call onSubmit callback if provided
      if (onSubmit) {
        onSubmit(form);
      }

      // Send email to the specified address
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          recipientEmail: 'enocksarpong64@gmail.com',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', service: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch (err) {
      console.error('Error sending email:', err);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-background flex h-full items-center justify-center px-4 py-16">
      <div className="grid w-full max-w-5xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          {badge && (
            <Badge>
              <FaSeedling className="text-primary-foreground" />
              {badge}
            </Badge>
          )}

          <h1 className="text-foreground text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl">
            {headline}{' '}
            <span className="text-primary block">{headlineAccent}</span>
          </h1>

          <p className="text-muted-foreground max-w-sm text-base leading-relaxed">
            {subheadline}
          </p>

          <Separator className="border-primary/40 my-2 w-16" />

          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="bg-muted flex items-center gap-3 rounded-2xl p-1">
              <div className="bg-card flex size-12 shrink-0 items-center justify-center rounded-xl">
                <FaEnvelope className="text-primary text-sm" />
              </div>
              <div>
                <p className="text-muted-foreground dark:text-foreground/80 text-sm font-medium tracking-wider">
                  Email
                </p>
                <p className="text-foreground text-md pr-2 font-semibold">
                  {contactInfo.email}
                </p>
              </div>
            </div>

            <div className="bg-muted flex items-center gap-3 rounded-2xl p-1">
              <div className="bg-card flex size-12 shrink-0 items-center justify-center rounded-xl">
                <FaPhoneAlt className="text-primary text-sm" />
              </div>
              <div>
                <p className="text-muted-foreground dark:text-foreground/80 text-sm font-medium tracking-wider">
                  Phone
                </p>
                <p className="text-foreground text-md pr-2 font-semibold">
                  {contactInfo.phone}
                </p>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-muted rounded-4xl shadow-sm ring-0">
          <CardContent className="flex flex-col gap-5 p-8">
            <div className="flex flex-col gap-0.5">
              <Label
                htmlFor="fullName"
                className="text-foreground text-sm font-medium"
              >
                Full Name
              </Label>
              <Input
                id="fullName"
                placeholder="Alex Rivera"
                value={form.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="bg-input focus-visible:ring-primary rounded-xl border-0 text-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,1)] focus-visible:ring-1 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <Label
                htmlFor="email"
                className="text-foreground text-sm font-medium"
              >
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="alex@company.com"
                value={form.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="bg-input focus-visible:ring-primary rounded-xl border-0 text-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,1)] focus-visible:ring-1 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
              />
            </div>

            <div className="flex flex-col gap-0.5">
              <Label
                htmlFor="service"
                className="text-foreground text-sm font-medium"
              >
                Area of Interest
              </Label>
              <Select
                value={form.service}
                onValueChange={(val) => handleChange('service', val)}
              >
                <SelectTrigger
                  id="service"
                  className="bg-input focus:ring-primary text-muted-foreground rounded-xl border-0 text-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,1)] focus:ring-1 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
                >
                  <SelectValue placeholder="Choose a service…" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  {serviceOptions.map((opt) => (
                    <SelectItem
                      key={opt.value}
                      value={opt.value}
                      className="text-sm"
                    >
                      {opt.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col gap-0.5">
              <Label
                htmlFor="message"
                className="text-foreground text-sm font-medium"
              >
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Tell us about your goals or challenges…"
                rows={4}
                value={form.message}
                onChange={(e) => handleChange('message', e.target.value)}
                className="bg-input focus-visible:ring-primary resize-none rounded-xl border-0 text-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,1)] focus-visible:ring-1 dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]"
              />
            </div>

            {error && (
              <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-600 text-sm font-medium">
                {error}
              </div>
            )}

            <Button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-primary text-primary-foreground hover:bg-primary/90 group mt-1 w-full rounded-xl py-5 text-sm font-semibold shadow-[inset_0_2px_0_0_rgba(255,255,255,0.5),inset_0_-2px_0_0_rgba(0,0,0,0.2)] transition-all dark:shadow-[inset_0_2px_0_0_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : ctaLabel}
              <FaArrowRight className="ml-2 text-xs transition-transform group-hover:translate-x-1" />
            </Button>

            {submitted && (
              <div className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-700">
                Thank you! We'll get back to you soon.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}