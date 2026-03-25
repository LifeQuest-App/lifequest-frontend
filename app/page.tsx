import Link from "next/link";
import { ROUTES } from "@/shared/config/routes";
import { AppShell } from "@/shared/ui/app-shell";

export default function Home() {
  return (
    <AppShell>
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <h1 className="text-2xl font-semibold text-white">
          LifeQuest MVP0 Frontend
        </h1>
        <p className="mt-3 text-sm text-slate-300">
          PWA-ready foundation with authentication, profile, today routines and
          history modules.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={ROUTES.login}
            className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 transition hover:bg-emerald-400"
          >
            Login
          </Link>
          <Link
            href={ROUTES.register}
            className="rounded-md border border-slate-700 px-4 py-2 text-sm text-slate-200 transition hover:border-slate-500"
          >
            Register
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
