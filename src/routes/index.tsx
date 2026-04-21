import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { CountdownBar } from "@/components/CountdownBar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { ExamDossiers } from "@/components/ExamDossiers";
import { ResourceGrid } from "@/components/ResourceGrid";
import { StudyMethod } from "@/components/StudyMethod";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "ExamWaliSite — A library disguised as a website" },
      {
        name: "description",
        content:
          "Curated study notes, mock tests, PYQs and toppers' annotations for NEET, JEE, CUET and CBSE. No fluff. No ads. Just the stuff that actually moves your rank.",
      },
      { property: "og:title", content: "ExamWaliSite — A library disguised as a website" },
      {
        property: "og:description",
        content: "Pass the exam. Not just the syllabus.",
      },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <Nav />
      <CountdownBar />
      <Hero />
      <Marquee
        items={[
          "JEE Main Session 2 opens in 14 days",
          "NEET '26 syllabus update — Biology Ch.7 reduced",
          "New: 412 annotated PYQs added this week",
          "Topper interview drop: AIR 28 NEET '25",
          "CUET registrations close March 22",
          "Mock test #84 — live tonight, 8 PM IST",
        ]}
      />
      <ExamDossiers />
      <ResourceGrid />
      <StudyMethod />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
