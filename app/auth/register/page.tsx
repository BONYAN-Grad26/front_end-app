import { RegisterForm } from '@/components/auth/register-form';

export const metadata = {
  title: 'Sign Up - Bonyan',
  description: 'Create your Bonyan health account',
};

export default function RegisterPage() {
  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Get Started</h1>
        <p className="text-foreground/60">Create your Bonyan account</p>
      </div>
      <RegisterForm />
    </>
  );
}
