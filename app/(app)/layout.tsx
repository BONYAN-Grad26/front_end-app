import { AppSidebar } from '@/components/layout/app-sidebar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-stretch min-h-screen bg-background">
      <AppSidebar />
      <main className="flex-1 md:pl-0">{children}</main>
    </div>
  );
}
