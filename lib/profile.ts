import { getSupabaseAdmin } from "@/lib/supabase";

export type UserRow = {
  id: string;
  clerk_user_id: string;
  email: string | null;
  full_name: string | null;
  resume_status: string | null;
};

export type ProfileRow = {
  id: string;
  user_id: string;
  college: string;
  degree: string;
  branch: string;
  graduation_year: number;
  target_role: string;
  preferred_location: string;
  skills: string[];
  experience_level: string;
  github_url: string;
  linkedin_url: string;
  created_at: string;
};

export function calculateProfileCompletion(profile: ProfileRow | null) {
  if (!profile) {
    return 0;
  }

  const fields = [
    profile.college,
    profile.degree,
    profile.branch,
    profile.graduation_year,
    profile.target_role,
    profile.preferred_location,
    profile.skills?.length,
    profile.experience_level,
    profile.github_url,
    profile.linkedin_url,
  ];

  const completedFields = fields.filter(Boolean).length;
  return Math.round((completedFields / fields.length) * 100);
}

export function parseSkills(skillsInput: string) {
  return skillsInput
    .split(",")
    .map((skill) => skill.trim())
    .filter(Boolean);
}

export async function getUserAndProfile(clerkUserId: string) {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return { user: null, profile: null };
  }

  const usersTable = supabase.from("users") as any;
  const profilesTable = supabase.from("profiles") as any;

  const { data: user } = await usersTable
    .select("id, clerk_user_id, email, full_name, resume_status")
    .eq("clerk_user_id", clerkUserId)
    .maybeSingle();

  if (!user) {
    return { user: null, profile: null };
  }

  const { data: profile } = await profilesTable
    .select(
      "id, user_id, college, degree, branch, graduation_year, target_role, preferred_location, skills, experience_level, github_url, linkedin_url, created_at",
    )
    .eq("user_id", user.id)
    .maybeSingle();

  return { user: user as UserRow | null, profile: profile as ProfileRow | null };
}

type UpsertProfileInput = {
  clerkUserId: string;
  email: string | null;
  fullName: string;
  college: string;
  degree: string;
  branch: string;
  graduationYear: number;
  targetRole: string;
  preferredLocation: string;
  skills: string[];
  experienceLevel: string;
  githubUrl: string;
  linkedinUrl: string;
};

export async function upsertUserAndProfile(input: UpsertProfileInput) {
  const supabase = getSupabaseAdmin();

  if (!supabase) {
    return { ok: false, message: "Supabase environment variables are missing." };
  }

  const usersTable = supabase.from("users") as any;
  const profilesTable = supabase.from("profiles") as any;

  const { data: user, error: userError } = await usersTable
    .upsert(
      {
        clerk_user_id: input.clerkUserId,
        email: input.email,
        full_name: input.fullName,
      },
      { onConflict: "clerk_user_id" },
    )
    .select("id")
    .single();

  if (userError || !user) {
    return { ok: false, message: userError?.message ?? "Unable to create user row." };
  }

  const { error: profileError } = await profilesTable.upsert(
    {
      user_id: (user as { id: string }).id,
      college: input.college,
      degree: input.degree,
      branch: input.branch,
      graduation_year: input.graduationYear,
      target_role: input.targetRole,
      preferred_location: input.preferredLocation,
      skills: input.skills,
      experience_level: input.experienceLevel,
      github_url: input.githubUrl,
      linkedin_url: input.linkedinUrl,
    },
    { onConflict: "user_id" },
  );

  if (profileError) {
    return { ok: false, message: profileError.message };
  }

  return { ok: true as const };
}
