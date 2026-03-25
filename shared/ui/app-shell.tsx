import Link from "next/link";
import { ReactNode } from "react";
import { ROUTES } from "../config/routes";

type AppShellProps = {
  children: ReactNode;
};

const navigationItems = [
  { href: ROUTES.today, label: "Today" },
  { href: ROUTES.history, label: "History" },
  { href: ROUTES.profile, label: "Profile" },
];

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-4 py-6">
      <header className="mb-8 flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
        <Link href={ROUTES.home} className="text-lg font-semibold text-emerald-400">
          LifeQuest
        </Link>
        <nav className="flex items-center gap-4">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
};
