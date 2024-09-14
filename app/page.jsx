"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { useState } from "react";
import Productos from "@/components/Productos";
import Bioplasticos from "@/components/Bioplasticos";
import Carbono from "@/components/Carbono";
import Cuidado from "@/components/Cuidado";
import Sumate from "@/components/Sumate";

export default function Home() {
  const [internetPlan, setInternetPlan] = useState(null);
  const [televisionPlan, setTelevisionPlan] = useState(null);
  const [empresaPlan, setEmpresaPlan] = useState(null);
  const [televisionPlanPropio, setTelevisionPlanPropio] = useState(null);
  const [comboPlanPropio, setComboPlanPropio] = useState(null);
  console.log(comboPlanPropio)
  const handleContratarClickI = (plan) => {
    setInternetPlan(plan); 
  };

  const handleContratarClickT = (plan) => {
    setTelevisionPlan(plan); 
  };

  const handleContratarClickE = (plan) => {
    setEmpresaPlan(plan); 
  };

  const handleSelectionsChange = (newSelections) => { 
    setTelevisionPlanPropio(newSelections);
  };

  const handleSelectionsChangeC = (newSelections) => { 
    setComboPlanPropio(newSelections);
  };
  
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
