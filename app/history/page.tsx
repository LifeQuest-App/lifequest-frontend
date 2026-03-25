import { AppShell } from "@/shared/ui/app-shell";
import { PageHeader } from "@/shared/ui/page-header";

export default function HistoryPage() {
  return (
    <AppShell>
      <PageHeader
        title="History"
        description="Review completion activity by date."
      />
      <section className="rounded-xl border border-slate-800 bg-slate-900 p-6">
        <p className="text-sm text-slate-300">
          MVP0 placeholder. Calendar/list history and charts are rendered here.
        </p>
      </section>
    </AppShell>
  );
}