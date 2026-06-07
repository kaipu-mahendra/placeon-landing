"use server";

import { currentUser, auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { parseSkills, upsertUserAndProfile } from "@/lib/profile";

function redirectWithError(message: string) {
  const encodedMessage = encodeURIComponent(message);
  redirect(`/onboarding?error=${encodedMessage}`);
}

export async function completeOnboarding(formData: FormData) {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const user = await currentUser();
  const fullName = String(formData.get("fullName") ?? "").trim();
  const college = String(formData.get("college") ?? "").trim();
  const degree = String(formData.get("degree") ?? "").trim();
  const branch = String(formData.get("branch") ?? "").trim();
  const graduationYear = Number(formData.get("graduationYear") ?? 0);
  const targetRole = String(formData.get("targetRole") ?? "").trim();
  const preferredLocation = String(formData.get("preferredLocation") ?? "").trim();
  const currentSkills = String(formData.get("currentSkills") ?? "").trim();
  const experienceLevel = String(formData.get("experienceLevel") ?? "").trim();
  const githubUrl = String(formData.get("githubUrl") ?? "").trim();
  const linkedinUrl = String(formData.get("linkedinUrl") ?? "").trim();

  if (
    !fullName ||
    !college ||
    !degree ||
    !branch ||
    !graduationYear ||
    !targetRole ||
    !preferredLocation ||
    !currentSkills ||
    !experienceLevel ||
    !githubUrl ||
    !linkedinUrl
  ) {
    redirectWithError("Please fill all profile fields.");
  }

  const result = await upsertUserAndProfile({
    clerkUserId: userId,
    email: user?.emailAddresses?.[0]?.emailAddress ?? null,
    fullName,
    college,
    degree,
    branch,
    graduationYear,
    targetRole,
    preferredLocation,
    skills: parseSkills(currentSkills),
    experienceLevel,
    githubUrl,
    linkedinUrl,
  });

  if (!result.ok) {
    redirectWithError(result.message);
  }

  revalidatePath("/dashboard");
  redirect("/dashboard");
}
