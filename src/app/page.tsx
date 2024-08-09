"use client";
import Brands from "@/components/organism/Brands";
import Header from "@/components/organism/Header";
import Hero from "@/components/organism/Hero";
import Service from "@/components/organism/Service";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Custom IT solutions tailored for all industries."
        />
        <meta
          name="description"
          content="Discover tailored IT software solutions designed to meet the unique challenges of businesses across all industries. From custom software development to robust cybersecurity and cloud solutions, we provide end-to-end services to enhance productivity, security, and efficiency. Partner with us to transform your technology landscape."
        />

        <meta
          name="keywords"
          content="IT solutions, ATM software development, Custom IT Software Solutions, Tailored Software Development,Custom IT Services in Nigeria, End-to-End IT Services, IT Solutions for Businesses, Enterprise Software Development, Business Software Solutions, Localhost Tech IT Solutions, Localhost Tech Software Development, Localhost Tech Custom Software, Localhost Tech Business IT Services,"
        />
        <link rel="icon.svg" href="https://localhosttechnology.ng/" />
      </Head>
      <main className="relative grid">
        <Header />
        <Hero />
        <Service />
        <Brands />
      </main>
    </>
  );
}
