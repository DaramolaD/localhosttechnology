"use client";
import Header from "@/components/organism/Header";
import Hero from "@/components/organism/Hero";
import Service from "@/components/organism/Service";

export default function Home() {
  return (
    <main className="relative grid">
      <Header />
      <Hero />
      <Service />
    </main>
  );
}
