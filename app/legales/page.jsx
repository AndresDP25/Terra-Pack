import Contacto from "@/components/Contacto"
import Footer from "@/components/Footer"
import Header from "@/components/HeaderLegales"
import TituloGrilla from "@/components/TituloGrilla"
import Scroll from "@/components/Scroll"

const Legales = () => {
  
  return (
    <main className="w-full bg-text overflow-hidden">
      <Header />
      <TituloGrilla titulo='Legales' />
      <Scroll />
      <Contacto /> 
      <Footer />
    </main>
  )
}

export default Legales;