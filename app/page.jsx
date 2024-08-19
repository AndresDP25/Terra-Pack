"use client"
import Combos from "@/components/Combos";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Internet from "@/components/Internet";
import Contacto from "@/components/Contacto";
import Empresas from "@/components/Empresas";
import Television from "@/components/Television";
import Cel from "@/components/Cel";
import { useState } from "react";

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
      {/* <Combos handleSelectionsChangeC={handleSelectionsChangeC} /> */}
      {/* <Internet handleContratarClickI={handleContratarClickI} /> */}
      {/* <Television handleContratarClickT={handleContratarClickT} handleSelectionsChange={handleSelectionsChange} /> */}
      {/* <Empresas handleContratarClickE={handleContratarClickE} /> */}
      {/* <Cel /> */}
      {/* <Contacto internetPlan={internetPlan} televisionPlan={televisionPlan} empresaPlan={empresaPlan} televisionPlanPropio={televisionPlanPropio} comboPlanPropio={comboPlanPropio} /> */}
      <Footer />
    </main>
  );
}
