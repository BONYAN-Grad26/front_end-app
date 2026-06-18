'use client';
import { Button } from '../ui/button'
import { Edit2,} from 'lucide-react'
import Link from 'next/link';

interface EditProfileProps {
  id:number
}

export const EditForm = ({id}:EditProfileProps) => {
  return (
    <Link href={`/profile/${id}`}>
        <Button  className="bg-primary hover:bg-primary/90 text-white">
            <Edit2 className="w-5 h-5 mr-2" />
            Edit Profile
        </Button>
    </Link>
  )
}
