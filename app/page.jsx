"use client"

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Productos from "@/components/Productos";
import Bioplasticos from "@/components/Bioplasticos";
import Carbono from "@/components/Carbono";
import Cuidado from "@/components/Cuidado";
import Sumate from "@/components/Sumate";

export default function Home() {
   
  return (
    <main className="w-full bg-white overflow-hidden">
      <Header />
      <Hero />
      <Productos />
      <Bioplasticos />
      <Carbono />
      <Cuidado />
      <Sumate />
      <Footer />
    </main>
  );
}
