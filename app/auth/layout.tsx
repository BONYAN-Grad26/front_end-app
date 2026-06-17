import { Leaf } from 'lucide-react';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-card to-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center transition-transform group-hover:scale-110">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:block">Bonyan</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="glass rounded-2xl p-8 sm:p-10 space-y-2 mb-8">
            {children}
          </div>

          {/* Trust Badges */}
          <div className="flex items-center justify-center gap-6 text-sm text-foreground/60">
            <div className="text-center">
              <p className="font-semibold text-foreground">256-bit SSL</p>
              <p>Encrypted</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground">HIPAA</p>
              <p>Compliant</p>
            </div>
            <div className="text-center">
              <p className="font-semibold text-foreground">2FA</p>
              <p>Available</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
