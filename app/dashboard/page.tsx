import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { BriefcaseBusiness, Gauge, MapPin, Sparkles, UserCircle2 } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

import { calculateProfileCompletion, getUserAndProfile } from "@/lib/profile";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const { user, profile } = await getUserAndProfile(userId);

  if (!profile) {
    redirect("/onboarding");
  }

  const completion = calculateProfileCompletion(profile);
  const resumeStatus = user?.resume_status ?? "Not Uploaded";

  return (
    <main className="min-h-screen bg-background px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-medium text-primary">PlaceOn Dashboard</p>
            <h1 className="mt-1 text-3xl font-semibold tracking-tight">From Learning to Landing Offers</h1>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/onboarding"
              className="inline-flex items-center rounded-md border px-3 py-2 text-sm font-medium hover:bg-accent"
            >
              Edit Profile
            </Link>
            <UserButton />
          </div>
        </header>

        <section className="mb-6 rounded-2xl border bg-card p-5 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Profile Completion</p>
              <p className="text-2xl font-semibold">{completion}%</p>
            </div>
            <Gauge className="h-8 w-8 text-primary" />
          </div>
          <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${completion}%` }} />
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <DashboardCard icon={<BriefcaseBusiness className="h-5 w-5" />} label="Target Role" value={profile.target_role} />
          <DashboardCard icon={<MapPin className="h-5 w-5" />} label="Preferred Location" value={profile.preferred_location} />
          <DashboardCard icon={<Sparkles className="h-5 w-5" />} label="Skills" value={profile.skills.join(", ")} />
          <DashboardCard icon={<UserCircle2 className="h-5 w-5" />} label="Resume Status" value={resumeStatus} />
        </section>
      </div>
    </main>
  );
}

type DashboardCardProps = {
  icon: ReactNode;
  label: string;
  value: string;
};

function DashboardCard({ icon, label, value }: DashboardCardProps) {
  return (
    <article className="rounded-xl border bg-card p-4 shadow-sm">
      <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
        <span className="text-primary">{icon}</span>
        <span>{label}</span>
      </div>
      <p className="text-base font-medium text-foreground">{value}</p>
    </article>
  );
}
