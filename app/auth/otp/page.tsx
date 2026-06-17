import { OtpForm } from '@/components/auth/otp-form'
import React from 'react'

export default function page()   {
  return (
    <>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Verify Your Email</h1>
        <p className="text-foreground/60">Enter the code sent to your email</p>
      </div>
      <OtpForm />
    </>
  )
}
