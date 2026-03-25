import { AppShell } from "@/shared/ui/app-shell";
import { PageHeader } from "@/shared/ui/page-header";

export default function RegisterPage() {
  return (
    <AppShell>
      <PageHeader
        title="Register"
        description="Create your account to start using LifeQuest."
      />
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm text-slate-300">
          MVP0 placeholder. Registration form will be connected to /auth/register.
        </p>
      </section>
    </AppShell>
  );
}