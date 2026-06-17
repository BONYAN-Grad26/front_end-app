import { ForgotPasswordForm } from '@/components/auth/forgot-password-form';

export const metadata = {
  title: 'Forgot Password - Bonyan',
  description: 'Reset your Bonyan account password',
};

export default function ForgotPasswordPage() {
  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Forgot Password?</h1>
        <p className="text-foreground/60">We&apos;ll help you reset it</p>
      </div>
      <ForgotPasswordForm />
    </>
  );
}
