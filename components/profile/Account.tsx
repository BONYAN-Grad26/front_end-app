'use client';
import React from 'react'
import { Button } from '../ui/button';

export const Account = () => {
  return (
        <div className="glass rounded-2xl p-6 space-y-3">
          <h3 className="font-bold text-foreground">Account</h3>
          <Button variant="outline" className="w-full">
            Download My Data
          </Button>
          <Button
            variant="outline"
            className="w-full text-red-600 hover:text-red-700 border-red-200 hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-900/20"
          >
            Delete Account
          </Button>
        </div>  
    )
}
