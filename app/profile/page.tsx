import { AppShell } from "@/shared/ui/app-shell";
import { PageHeader } from "@/shared/ui/page-header";

export default function ProfilePage() {
  return (
    <AppShell>
      <PageHeader
        title="Profile"
        description="Manage your identity, goals and weekly stats."
      />
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm text-slate-300">
          MVP0 placeholder. User profile and goals editor belongs here.
        </p>
      </section>
    </AppShell>
  );
}