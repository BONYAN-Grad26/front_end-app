'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Lock, User, Eye, EyeOff, CheckCircle2, AlertCircle } from 'lucide-react';
import {  toast } from 'react-hot-toast';
import { apiClient } from '@/configs/Axios';
import { registerUser } from '@/serverActions/auth';
import { ResponseData } from '@/lib/interfaces';

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  //const [errors, setErrors] = useState<Record<string, string>>({});

  const validatePassword = (password: string) => {
    const hasMinLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    return { hasMinLength, hasUpperCase, hasLowerCase, hasNumber };
  };

  const passwordStrength = validatePassword(formData.password);
  const passwordsMatch = formData.password === formData.confirmPassword;
  const strengthScore = Object.values(passwordStrength).filter(Boolean).length;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!passwordsMatch) {
      toast.error('Passwords do not match');  
      return;
    }
    if(strengthScore < 4) {
      toast.error('Password does not meet the required criteria');
      return;
    }
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
      toast.error('Please fill in all required fields');
      return;
    }
    setIsSubmitting(true);
    try {
      const data : ResponseData= await registerUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });
      router.push('/auth/otp');

      toast.success(data.data?.message || 'Account created successfully!');

      


    } catch (error:any) {
      console.error("Registration error:", error);

      toast.error(error?.message || 'Failed to create account. Please try again.');


    } finally {
      setIsSubmitting(false);
    }



  }

  
  


  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* firstName Field */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">First Name</label>
        <div className="relative">
          <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            disabled={isSubmitting}
            name="firstName"
            placeholder="John"
            value={formData.firstName }
            onChange={handleChange}
            className="pl-10 h-11"
            required
          />
        </div>
      </div>
      {/* firstName Field */}

      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Last Name</label>
        <div className="relative">
          <User className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            disabled={isSubmitting}
            type="text"
            name="lastName"
            placeholder="Doe"
            value={formData.lastName }
            onChange={handleChange}
            className="pl-10 h-11"
            required
          />
        </div>
      </div>
      {/* Email Field */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Email Address</label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            type="email"
            disabled={isSubmitting}
            name="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={handleChange}
            className="pl-10 h-11"
            required
          />
        </div>
      </div>

      {/* Password Field */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className="pl-10 pr-10 h-11"
            disabled={isSubmitting}
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

        {/* Password Strength Indicator */}
        {formData.password && (
          <div className="space-y-2">
            <div className="flex gap-1">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 flex-1 rounded-full transition-colors ${
                    i < strengthScore
                      ? strengthScore <= 2
                        ? 'bg-red-500'
                        : strengthScore === 3
                          ? 'bg-yellow-500'
                          : 'bg-emerald-500'
                      : 'bg-border'
                  }`}
                />
              ))}
            </div>
            <ul className="text-xs space-y-1 text-foreground/60">
              <li className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${passwordStrength.hasMinLength ? 'text-emerald-500' : 'text-border'}`} />
                At least 8 characters
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${passwordStrength.hasUpperCase ? 'text-emerald-500' : 'text-border'}`} />
                One uppercase letter
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${passwordStrength.hasLowerCase ? 'text-emerald-500' : 'text-border'}`} />
                One lowercase letter
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className={`w-4 h-4 ${passwordStrength.hasNumber ? 'text-emerald-500' : 'text-border'}`} />
                One number
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Confirm Password Field */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Confirm Password</label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            disabled={isSubmitting}
            type={showConfirmPassword ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={`pl-10 pr-10 h-11 ${
              formData.confirmPassword && !passwordsMatch ? 'border-red-500' : ''
            }`}
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
          </button>
        </div>
        {formData.confirmPassword && !passwordsMatch && (
          <div className="flex items-center gap-2 text-sm text-red-500">
            <AlertCircle className="w-4 h-4" />
            Passwords do not match
          </div>
        )}
      </div>

      {/* Terms & Conditions */}
      <div className="flex items-start gap-2">
        <input type="checkbox" id="terms" className="w-4 h-4 rounded border-border mt-1" required />
        <label htmlFor="terms" className="text-sm text-foreground/70">
          I agree to the{' '}
          <Link href="#" className="text-primary hover:text-primary/90 font-semibold">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="#" className="text-primary hover:text-primary/90 font-semibold">
            Privacy Policy
          </Link>
        </label>
      </div>

      {/* Sign Up Button */}
      <Button

        type="submit"
        disabled={!passwordsMatch || strengthScore < 4 || isSubmitting}
        className="w-full h-11 bg-primary hover:bg-primary/90 text-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Creating Account...' : 'Create Account'}
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

      {/* Sign In Link */}
      <div className="text-center text-sm text-foreground/70">
        Already have an account?{' '}
        <Link href="/auth/login" className="text-primary hover:text-primary/90 font-semibold">
          Sign in
        </Link>
      </div>
    </form>
  );
}
