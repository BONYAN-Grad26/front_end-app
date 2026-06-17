import { LoginForm } from '@/components/auth/login-form';

export const metadata = {
  title: 'Sign In - Bonyan',
  description: 'Sign in to your Bonyan health account',
};

export default function LoginPage() {
  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
        <p className="text-foreground/60">Sign in to your Bonyan account</p>
      </div>
      <LoginForm />
    </>
  );
}
