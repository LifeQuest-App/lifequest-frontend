import { AppShell } from "@/shared/ui/app-shell";
import { PageHeader } from "@/shared/ui/page-header";

export default function LoginPage() {
  return (
    <AppShell>
      <PageHeader
        title="Login"
        description="Sign in to continue tracking your routines."
      />
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm text-slate-300">
          MVP0 placeholder. Auth forms with React Hook Form + Zod go here.
        </p>
      </section>
    </AppShell>
  );
}