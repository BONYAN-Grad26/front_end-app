'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { loginUser } from '@/serverActions/auth';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    if(!password.trim()) {
      toast.error('Please enter your password');
      return;
    }
    setLoading(true);
    try { 

      const message :string = await loginUser(email.trim(), password);
      toast.success(message || 'Login successful!'); // Show success message
      router.refresh(); // Refresh the page to update the state
      router.replace('/dashboard'); // Redirect to dashboard after successful OTP submission




    } catch (error:any) {

      console.error('Error during login:', error);
      toast.error(error?.message || 'Login failed. Please try again.');
      

    } finally {
      setLoading(false);
    }
    
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email Field */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            disabled={loading}
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-11"
            required
          />
        </div>
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-foreground">Password</label>
          <Link href="/auth/forgot-password" className="text-xs text-primary hover:text-primary/90">
            Forgot password?
          </Link>
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            disabled={loading}
            type={showPassword ? 'text' : 'password'}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 pr-10 h-11"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Remember Me */}
      <div className="flex items-center gap-2">
        <input type="checkbox" id="remember" className="w-4 h-4 rounded border-border" />
        <label htmlFor="remember" className="text-sm text-foreground/70 cursor-pointer">
          Remember me
        </label>
      </div>

      {/* Sign In Button */}
      <Button disabled={loading} type="submit" className="w-full h-11 bg-primary hover:bg-primary/90 text-white">
        Sign In
      </Button>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-background text-muted-foreground">Or continue with</span>
        </div>
      </div>

      {/* OAuth Buttons */}
      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-11">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032 c0-3.331,2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C15.503,1.607,13.811,0.915,12.545,0.915 c-6.302,0-11.4,5.098-11.4,11.4c0,6.302,5.098,11.4,11.4,11.4c6.302,0,11.4-5.098,11.4-11.4C23.945,11.619,23.589,10.879,23.045,10.239z"/>
          </svg>
          Google
        </Button>
        <Button variant="outline" className="h-11">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.6915026,3.99226679 L3.50612381,3.99226679 C3.19218622,3.99226679 3,4.18741924 3,4.40540377 L3,19.5946039 C3,19.8126062 3.19218622,20.0077479 3.50612381,20.0077479 L10.4744692,20.0077479 L10.4744692,14.0152755 L8.32205323,14.0152755 L8.32205323,11.2639505 L10.4744692,11.2639505 L10.4744692,9.32394659 C10.4744692,7.25339235 11.6872608,6.04126679 13.5180365,6.04126679 C14.4506984,6.04126679 15.2215769,6.10720414 15.4408363,6.13950414 L15.4408363,8.61722156 L14.1415141,8.61722156 C13.1115365,8.61722156 12.9206531,9.09787326 12.9206531,9.84309114 L12.9206531,11.2639505 L15.3510949,11.2639505 L15.0151557,14.0152755 L12.9206531,14.0152755 L12.9206531,20.0077479 L19.6915026,20.0077479 C20.0054402,20.0077479 20.1976264,19.8126062 20.1976264,19.5946039 L20.1976264,4.40540377 C20.1976264,4.18741924 20.0054402,3.99226679 19.6915026,3.99226679"/>
          </svg>
          Facebook
        </Button>
      </div>

      {/* Sign Up Link */}
      <div className="text-center text-sm text-foreground/70">
        Don&apos;t have an account?{' '}
        <Link href="/auth/register" className="text-primary hover:text-primary/90 font-semibold">
          Sign up
        </Link>
      </div>
    </form>
  );
}
