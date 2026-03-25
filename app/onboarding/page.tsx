import { AppShell } from "@/shared/ui/app-shell";
import { PageHeader } from "@/shared/ui/page-header";

export default function OnboardingPage() {
  return (
    <AppShell>
      <PageHeader
        title="Onboarding"
        description="Set your baseline goals and routine preferences."
      />
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm text-slate-300">
          MVP0 placeholder. Multi-step onboarding flow will live here.
        </p>
      </section>
    </AppShell>
  );
}