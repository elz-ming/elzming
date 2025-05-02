import Link from "next/link";

export default function SidebarItem({
  label,
  href,
}: {
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="block text-left w-full px-3 py-2 rounded hover:bg-gray-800 text-sm"
    >
      {label}
    </Link>
  );
}
