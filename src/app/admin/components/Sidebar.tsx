// components/AdminSidebar.tsx
import SidebarItem from "./SidebarItem";

export default function AdminSidebar() {
  return (
    <aside className="h-screen w-64 bg-gray-900 flex flex-col justify-between">
      {/* Top Section */}
      <div className="p-4 space-y-4">
        <SidebarItem label="Dashboard" href="/admin/dashboard" />
        <SidebarItem label="Projects" href="/admin/projects" />
        <SidebarItem label="Messages" href="/admin/messages" />
      </div>

      {/* Bottom Section */}
      <div className="p-4 space-y-4">
        <SidebarItem label="Settings" href="/admin/settings" />
        <SidebarItem label="Log Out" href="/" />
      </div>
    </aside>
  );
}
