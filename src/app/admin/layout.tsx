// app/admin/layout.tsx
import AdminSidebar from "./components/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <AdminSidebar />
      <main className="flex-1 bg-gray-100 p-8 overflow-y-auto text-black">
        {children}
      </main>
    </div>
  );
}
