import { AppShell } from "@/shared/ui/app-shell";
import { PageHeader } from "@/shared/ui/page-header";

const mockRoutines = [
  { id: "1", title: "Morning walk", progress: "0/10000 steps" },
  { id: "2", title: "Hydration", progress: "0/8 glasses" },
];

export default function TodayPage() {
  return (
    <AppShell>
      <PageHeader
        title="Today"
        description="Focus on your daily routines and mark progress quickly."
      />
      <section className="grid gap-3">
        {mockRoutines.map((routine) => (
          <article
            key={routine.id}
            className="rounded-xl border border-slate-800 bg-slate-900 p-4"
          >
            <h2 className="font-medium text-white">{routine.title}</h2>
            <p className="mt-1 text-sm text-slate-300">{routine.progress}</p>
            <button
              type="button"
              className="mt-3 rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-medium text-slate-950 hover:bg-emerald-400"
            >
              Complete
            </button>
          </article>
        ))}
      </section>
    </AppShell>
  );
}