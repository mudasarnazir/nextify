"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, CalendarDays, Shield, Settings, Wrench } from "lucide-react";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/employees", label: "Employees", icon: Users },
  { href: "/roster", label: "Roster", icon: CalendarDays },
  { href: "/roles", label: "Roles", icon: Shield },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/dev", label: "Dev", icon: Wrench },
];

export function Sidebar() {
  const path = usePathname();
  return (
    <aside className="hidden md:flex w-64 shrink-0 flex-col border-r bg-white">
      <div className="p-4 text-base font-semibold">Attendify Vision</div>
      <nav className="px-2 space-y-1">
        {items.map(({ href, label, icon: Icon }) => {
          const active = path?.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm ${
                active ? "bg-gray-100 font-medium" : "hover:bg-gray-50"
              }`}
            >
              <Icon size={18} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
