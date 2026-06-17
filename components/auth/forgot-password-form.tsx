'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // TODO: Handle forgot password
  };

  if (submitted) {
    return (
      <div className="space-y-6 text-center">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Check Your Email</h2>
          <p className="text-foreground/60">
            We&apos;ve sent a password reset link to {email}. Click the link in the email to reset your password.
          </p>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900 rounded-lg p-4">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            <strong>Tip:</strong> The link will expire in 24 hours. If you don&apos;t receive the email, check your spam folder.
          </p>
        </div>
        <Button
          onClick={() => {
            setSubmitted(false);
            setEmail('');
          }}
          variant="outline"
          className="w-full"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Login
        </Button>
        <Link href="/auth/login" className="text-primary hover:text-primary/90 font-medium text-sm">
          Return to sign in
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email Field */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-11"
            required
          />
        </div>
        <p className="text-sm text-foreground/60">
          Enter the email address associated with your account and we&apos;ll send you a link to reset your password.
        </p>
      </div>

      {/* Submit Button */}
      <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90 text-white">
        Send Reset Link
      </Button>

      {/* Back to Login */}
      <Link
        href="/auth/login"
        className="flex items-center justify-center gap-2 text-primary hover:text-primary/90 font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Login
      </Link>
    </form>
  );
}
