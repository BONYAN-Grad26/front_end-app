'use client';
import React from 'react'
import { Button } from '../ui/button'

export const PrivacySettings = () => {
  return (
    <div className="space-y-2">
        <Button variant="outline" className="w-full justify-start">
            Change Password
        </Button>
        <Button variant="outline" className="w-full justify-start">
        Two-Factor Auth
        </Button>
        <Button variant="outline" className="w-full justify-start">
                Connected Devices
        </Button>
    </div>
  )
}
