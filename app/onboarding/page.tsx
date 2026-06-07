import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { completeOnboarding } from "@/app/onboarding/actions";
import { calculateProfileCompletion, getUserAndProfile } from "@/lib/profile";

type OnboardingPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function OnboardingPage({ searchParams }: OnboardingPageProps) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const [{ user, profile }, clerkUser, params] = await Promise.all([
    getUserAndProfile(userId),
    currentUser(),
    searchParams,
  ]);

  if (calculateProfileCompletion(profile) === 100) {
    redirect("/dashboard");
  }

  const formDefaults = {
    fullName: user?.full_name ?? clerkUser?.fullName ?? "",
    college: profile?.college ?? "",
    degree: profile?.degree ?? "",
    branch: profile?.branch ?? "",
    graduationYear: profile?.graduation_year ?? new Date().getFullYear(),
    targetRole: profile?.target_role ?? "",
    preferredLocation: profile?.preferred_location ?? "",
    currentSkills: profile?.skills?.join(", ") ?? "",
    experienceLevel: profile?.experience_level ?? "Fresher",
    githubUrl: profile?.github_url ?? "",
    linkedinUrl: profile?.linkedin_url ?? "",
  };

  return (
    <main className="min-h-screen bg-background px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-3xl rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
        <div className="mb-8">
          <p className="text-sm font-medium text-primary">PlaceOn Onboarding</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Build your profile to unlock your dashboard
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            From Learning to Landing Offers. Fill these details once and we will personalize your
            placement roadmap.
          </p>
        </div>

        {params.error ? (
          <p className="mb-6 rounded-md border border-destructive/40 bg-destructive/10 px-3 py-2 text-sm text-destructive">
            {decodeURIComponent(params.error)}
          </p>
        ) : null}

        <form action={completeOnboarding} className="space-y-7">
          <section className="space-y-4">
            <h2 className="text-base font-semibold">Personal Information</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="fullName" defaultValue={formDefaults.fullName} required />
              <Field label="College Name" name="college" defaultValue={formDefaults.college} required />
              <Field label="Degree" name="degree" defaultValue={formDefaults.degree} required />
              <Field label="Branch" name="branch" defaultValue={formDefaults.branch} required />
              <Field
                label="Graduation Year"
                name="graduationYear"
                type="number"
                defaultValue={String(formDefaults.graduationYear)}
                required
              />
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-base font-semibold">Career Information</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Target Role" name="targetRole" defaultValue={formDefaults.targetRole} required />
              <Field
                label="Preferred Location"
                name="preferredLocation"
                defaultValue={formDefaults.preferredLocation}
                required
              />
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-sm font-medium" htmlFor="currentSkills">
                  Current Skills
                </label>
                <input
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-offset-background transition placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                  id="currentSkills"
                  name="currentSkills"
                  placeholder="React, TypeScript, SQL, Data Structures"
                  defaultValue={formDefaults.currentSkills}
                  required
                />
                <p className="mt-1 text-xs text-muted-foreground">Use comma-separated skills.</p>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium" htmlFor="experienceLevel">
                  Experience Level
                </label>
                <select
                  id="experienceLevel"
                  name="experienceLevel"
                  className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-offset-background transition focus-visible:ring-2 focus-visible:ring-ring"
                  defaultValue={formDefaults.experienceLevel}
                  required
                >
                  <option value="Fresher">Fresher</option>
                  <option value="Internship">Internship Experience</option>
                  <option value="0-1 years">0-1 years</option>
                  <option value="1-3 years">1-3 years</option>
                </select>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-base font-semibold">Professional Links</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="GitHub URL" name="githubUrl" type="url" defaultValue={formDefaults.githubUrl} required />
              <Field
                label="LinkedIn URL"
                name="linkedinUrl"
                type="url"
                defaultValue={formDefaults.linkedinUrl}
                required
              />
            </div>
          </section>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90 sm:w-auto"
          >
            Save Profile and Continue
          </button>
        </form>
      </div>
    </main>
  );
}

type FieldProps = {
  label: string;
  name: string;
  defaultValue: string;
  type?: string;
  required?: boolean;
};

function Field({ label, name, defaultValue, type = "text", required = false }: FieldProps) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        required={required}
        className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-offset-background transition placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  );
}
