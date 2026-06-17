"use client"
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { toast } from 'react-hot-toast';
import { Mail } from 'lucide-react';
import { sendOtp } from '@/serverActions/auth';
import { useRouter } from 'next/navigation';

export const OtpForm = () => {
    const [otp, setOtp] = useState('');
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (otp.trim().length !== 6) {
        toast.error('Please enter a valid 6-digit OTP');
        return ;
    } 
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        toast.error('Please enter a valid email address');
        return ;
    }
    setIsLoading(true);
    try {
        await sendOtp(otp.trim(), email.trim());
        toast.success('OTP sent successfully');
        router.refresh();
        router.replace('/onboarding'); // Redirect to dashboard after successful OTP submission


    } catch (error:any) { 
        
        toast.error(error?.message || 'Failed to send OTP');
    } finally { 
        setIsLoading(false);
    }

    }


    
    
    return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">Email Address</label>
        <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-muted-foreground mb-5" />
            <Input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-11"
            required
            />
        </div>
        </div>
        <div className="space-y-2">
        <label className="text-sm font-medium text-foreground">OTP</label>
        <div className="relative">
            <Input 
            type="text"
            placeholder="Enter OTP"
            className="mb-4 h-11"
            required
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
        />
        </div>
        </div>


    <Button disabled={isLoading} type="submit" className="w-full h-11 bg-primary hover:bg-primary/90 text-white">
        Send OTP
    </Button>
    </form>
    
    )
}
