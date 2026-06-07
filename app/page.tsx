import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Building2,
  Check,
  ChevronRight,
  ClipboardCheck,
  FileText,
  GraduationCap,
  LineChart,
  MessageSquareText,
  Sparkles,
  Upload,
  Zap,
} from "lucide-react";

import { MobileNav } from "@/components/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

const features = [
  {
    title: "Resume Analyzer",
    description:
      "Scan resumes for structure, keywords, impact, and role fit with AI-backed recommendations.",
    icon: FileText,
    accent: "text-cyan-600 dark:text-cyan-300",
  },
  {
    title: "Company Readiness Checker",
    description:
      "Compare your profile against target companies and know what to strengthen before applying.",
    icon: Building2,
    accent: "text-emerald-600 dark:text-emerald-300",
  },
  {
    title: "AI Roadmap Generator",
    description:
      "Turn gaps into weekly learning plans, projects, certifications, and interview practice.",
    icon: BrainCircuit,
    accent: "text-violet-600 dark:text-violet-300",
  },
  {
    title: "Mock Interviews",
    description:
      "Practice role-specific questions and receive structured feedback on clarity and depth.",
    icon: MessageSquareText,
    accent: "text-amber-600 dark:text-amber-300",
  },
];

const whyUsePlaceOn = [
  {
    title: "Resume Analysis",
    description:
      "Improve resume structure, keywords, project impact, and ATS readability before applying.",
  },
  {
    title: "AI Career Guidance",
    description:
      "Get focused suggestions for skills, projects, certifications, and role-specific preparation.",
  },
  {
    title: "Company Readiness Assessment",
    description:
      "Understand how prepared you are for target companies, job roles, and campus placement rounds.",
  },
  {
    title: "Mock Interview Preparation",
    description:
      "Practice technical, HR, and behavioral interview questions with clear feedback.",
  },
];

const steps = [
  {
    title: "Upload Resume",
    description: "Add your current resume and the roles you are targeting.",
    icon: Upload,
  },
  {
    title: "Analyze Skills",
    description: "PlaceOn maps your strengths, gaps, and role readiness.",
    icon: LineChart,
  },
  {
    title: "Get Personalized Roadmap",
    description: "Receive a practical plan with projects, prep, and milestones.",
    icon: ClipboardCheck,
  },
  {
    title: "Land Your Dream Offer",
    description: "Track progress and walk into interviews with confidence.",
    icon: GraduationCap,
  },
];

const testimonials = [
  {
    quote:
      "PlaceOn helped me understand why my resume was not converting. The roadmap made my final semester prep feel focused.",
    name: "Aarav Mehta",
    role: "Computer Science student",
  },
  {
    quote:
      "The company readiness score gave our training team a clearer way to support students before placement season.",
    name: "Neha Iyer",
    role: "Placement coordinator",
  },
  {
    quote:
      "Mock interview feedback was specific enough to act on. I fixed weak answers in a week instead of guessing.",
    name: "Riya Sharma",
    role: "Placed at a fintech startup",
  },
];

const pricing = [
  {
    name: "Monthly",
    price: "₹99",
    period: "month",
    description: "For students who want focused placement prep month by month.",
    features: [
      "Deep resume analysis",
      "Company readiness tracking",
      "AI roadmap generation",
      "Mock interview practice",
    ],
    cta: "Get Monthly Access",
    featured: false,
  },
  {
    name: "Yearly",
    price: "₹999",
    period: "year",
    description: "Best value for full placement season preparation.",
    features: [
      "Deep resume analysis",
      "Company readiness tracking",
      "Unlimited AI roadmaps",
      "Mock interviews with feedback",
      "Priority early access features",
    ],
    cta: "Get Yearly Access",
    featured: true,
  },
];

const faqs = [
  {
    question: "How does PlaceOn analyze resumes?",
    answer:
      "PlaceOn reviews resume structure, role relevance, skills, project descriptions, impact statements, and job-readiness signals to suggest practical improvements.",
  },
  {
    question: "Is PlaceOn free for students?",
    answer:
      "PlaceOn offers affordable monthly and yearly plans for students who want structured placement preparation, resume feedback, company readiness checks, roadmaps, and mock interview practice.",
  },
  {
    question: "Which companies are supported?",
    answer:
      "PlaceOn is designed to support preparation for campus placement and entry-level roles across product companies, service companies, startups, and role-specific job descriptions.",
  },
  {
    question: "Who is PlaceOn built for?",
    answer:
      "PlaceOn is built for college students, recent graduates, placement cells, and training teams preparing for campus or entry-level hiring.",
  },
  {
    question: "Does PlaceOn replace mentors or placement teams?",
    answer:
      "No. It gives students always-on analysis, structure, and practice while helping mentors focus on higher-value guidance.",
  },
  {
    question: "Can I target specific companies?",
    answer:
      "Yes. The readiness checker is designed to compare your resume and skills against company expectations, job descriptions, and role patterns.",
  },
  {
    question: "When will early access open?",
    answer:
      "PlaceOn is designed for early access cohorts. Join the waitlist to be notified when the next student batch opens.",
  },
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "PlaceOn",
    url: "https://placeon.in",
    slogan: "From Learning to Landing Offers",
    description:
      "PlaceOn is an AI-powered placement preparation platform that helps students analyze resumes, identify skill gaps, prepare for interviews, and build personalized career roadmaps.",
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "PlaceOn",
    url: "https://placeon.in",
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-2 font-semibold tracking-normal">
      <span className="grid h-8 w-8 place-items-center rounded-md border bg-foreground text-sm font-bold text-background shadow-sm dark:bg-primary dark:text-primary-foreground">
        P
      </span>
      <span>PlaceOn</span>
    </a>
  );
}

function DashboardPreview() {
  return (
    <div className="relative mx-auto w-full max-w-xl animate-float lg:max-w-none">
      <div className="absolute inset-x-8 -top-5 h-10 rounded-full bg-primary/20 blur-2xl" />
      <div className="dashboard-sheen relative overflow-hidden rounded-lg border shadow-soft-glow">
        <div className="flex items-center justify-between border-b bg-background/70 px-4 py-3 backdrop-blur">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          </div>
          <Badge variant="success">Placement-ready AI</Badge>
        </div>

        <div className="grid gap-4 p-4 sm:grid-cols-[1.05fr_0.95fr] sm:p-5">
          <div className="space-y-4">
            <div className="rounded-lg border bg-background/75 p-4 backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-muted-foreground">Resume Score</p>
                  <p className="text-3xl font-semibold">84%</p>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-md bg-primary/12 text-primary">
                  <BadgeCheck className="h-6 w-6" />
                </div>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full w-[84%] rounded-full bg-primary" />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
                {["ATS", "Impact", "Fit"].map((item) => (
                  <div key={item} className="rounded-md border bg-background/70 p-2">
                    <p className="font-medium">{item}</p>
                    <p className="text-muted-foreground">Strong</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border bg-background/75 p-4 backdrop-blur">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-medium">Skill Gaps</p>
                <Sparkles className="h-4 w-4 text-amber-500" />
              </div>
              <div className="space-y-3">
                {[
                  ["System design", "64%"],
                  ["SQL analytics", "72%"],
                  ["Behavioral prep", "58%"],
                ].map(([skill, width]) => (
                  <div key={skill}>
                    <div className="mb-1 flex justify-between text-xs">
                      <span>{skill}</span>
                      <span className="text-muted-foreground">{width}</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-cyan-500"
                        style={{ width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border bg-background/75 p-4 backdrop-blur">
              <p className="mb-4 text-sm font-medium">Roadmap</p>
              <div className="space-y-3">
                {["Polish resume bullets", "Build API project", "Mock interview"].map(
                  (item, index) => (
                    <div key={item} className="flex gap-3">
                      <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-md bg-primary/12 text-xs font-semibold text-primary">
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-sm font-medium">{item}</p>
                        <p className="text-xs text-muted-foreground">
                          Week {index + 1}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="rounded-lg border bg-foreground p-4 text-background dark:bg-primary dark:text-primary-foreground">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs opacity-75">Mock Interview</p>
                  <p className="text-lg font-semibold">Today, 7:00 PM</p>
                </div>
                <Zap className="h-5 w-5" />
              </div>
              <div className="mt-5 h-1.5 origin-left animate-pulse-line rounded-full bg-background/55 dark:bg-primary-foreground/55" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <ModeToggle />
            <Button variant="ghost" asChild>
              <a href="#login">Login</a>
            </Button>
          </div>
          <MobileNav />
        </div>
      </header>

      <section className="relative border-b">
        <div className="absolute inset-0 bg-grid opacity-70" />
        <div className="container relative grid min-h-[calc(100vh-4rem)] items-center gap-12 py-16 md:py-20 lg:grid-cols-[0.92fr_1.08fr] lg:py-24">
          <div className="max-w-2xl animate-fade-up">
            <Badge variant="outline" className="mb-5 bg-background/70 backdrop-blur">
              AI placement coach for students
            </Badge>
            <h1 className="text-balance text-5xl font-semibold tracking-normal sm:text-6xl lg:text-7xl">
              From Learning to Landing Offers
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Your AI-powered placement coach helping students prepare smarter
              and land better opportunities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" variant="glow" asChild>
                <a href="#pricing">
                  Get Early Access <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#features">
                  Learn More <ChevronRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <div className="mt-9 grid max-w-md grid-cols-3 gap-4 text-sm">
              {["Resume", "Roadmap", "Interview"].map((item) => (
                <div key={item}>
                  <p className="font-semibold">{item}</p>
                  <p className="text-muted-foreground">AI assisted</p>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-fade-up [animation-delay:160ms]">
            <DashboardPreview />
          </div>
        </div>
      </section>

      <section id="what-is-placeon" className="border-b py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <Badge variant="secondary" className="mb-4">
              What is PlaceOn?
            </Badge>
            <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
              AI-powered placement preparation for students.
            </h2>
            <p className="mt-5 leading-8 text-muted-foreground">
              PlaceOn is an AI-powered placement preparation platform that helps
              students analyze resumes, identify skill gaps, prepare for
              interviews, and build personalized career roadmaps. It is designed
              for campus placements, job readiness, interview preparation, and
              early-career career planning.
            </p>
            <p className="mt-4 leading-8 text-muted-foreground">
              Students can use PlaceOn to move from scattered learning to a
              structured plan for landing offers, with resume feedback, company
              readiness insights, mock interview practice, and AI career
              guidance in one workflow.
            </p>
          </div>
          <div>
            <Badge variant="outline" className="mb-4 bg-background">
              Why Use PlaceOn?
            </Badge>
            <div className="grid gap-4 sm:grid-cols-2">
              {whyUsePlaceOn.map((item) => (
                <div key={item.title} className="rounded-lg border bg-card p-5">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="border-b py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Features
            </Badge>
            <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
              Everything students need to become placement-ready.
            </h2>
            <p className="mt-4 text-muted-foreground">
              PlaceOn turns scattered preparation into a clear feedback loop:
              analyze, improve, practice, and apply with confidence.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card
                key={feature.title}
                className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-glow"
              >
                <CardHeader>
                  <feature.icon className={`mb-3 h-7 w-7 ${feature.accent}`} />
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription className="leading-6">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-b bg-secondary/45 py-20 md:py-24">
        <div className="container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <Badge variant="outline" className="mb-4 bg-background">
              How It Works
            </Badge>
            <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
              A placement prep workflow that keeps momentum visible.
            </h2>
            <p className="mt-4 text-muted-foreground">
              PlaceOn gives each student a personal readiness system, while
              keeping the experience simple enough to use every week.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-lg border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-sm"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/12 text-primary">
                    <step.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
              Built for students, useful for placement teams.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <CardContent className="pt-6">
                  <p className="leading-7 text-muted-foreground">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-b bg-secondary/45 py-20 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 bg-background">
              Pricing
            </Badge>
            <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
              Simple pricing for serious placement prep.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Choose monthly access or save with the yearly plan built for a
              complete placement season.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-2">
            {pricing.map((plan) => (
              <Card
                key={plan.name}
                className={
                  plan.featured
                    ? "border-primary shadow-soft-glow"
                    : "bg-background"
                }
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>{plan.name}</CardTitle>
                    {plan.featured ? <Badge variant="success">Popular</Badge> : null}
                  </div>
                  <div className="pt-4">
                    <span className="text-4xl font-semibold">{plan.price}</span>
                    <span className="text-muted-foreground">
                      {" "}
                      / {plan.period}
                    </span>
                  </div>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((item) => (
                      <li key={item} className="flex gap-3 text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="mt-7 w-full"
                    variant={plan.featured ? "glow" : "outline"}
                    asChild
                  >
                    <a href="#login">{plan.cta}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b py-20 md:py-24">
        <div className="container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Badge variant="secondary" className="mb-4">
              FAQ
            </Badge>
            <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
              Questions students ask before getting started.
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="py-10">
        <div className="container flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Logo />
            <p className="mt-3 max-w-md text-sm text-muted-foreground">
              AI-powered placement coaching for students moving from learning
              to landing offers.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a href="#features" className="hover:text-foreground">
              Features
            </a>
            <a href="#pricing" className="hover:text-foreground">
              Pricing
            </a>
            <a href="#about" className="hover:text-foreground">
              About
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
