import { Sidebar } from '@/components/sidebar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 to-gray-600 text-white">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
