'use client';
import React from 'react'
import { Button } from '../ui/button'
import { Edit2 } from 'lucide-react'

export const EditForm = () => {
  return (
    <form>
        <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
            <Edit2 className="w-5 h-5 mr-2" />
            Edit Profile
        </Button>
    </form>
  )
}
