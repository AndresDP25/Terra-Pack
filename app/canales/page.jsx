import Contacto from "@/components/Contacto"
import Footer from "@/components/Footer"
import Header from "@/components/HeaderLegales"
import GrillaCanales from "@/components/GrillaCanales"
import TituloGrilla from "@/components/TituloGrilla"

const Canales = () => {
  // const general = 'Interés General';
  // const deportes = 'Deportes'
  const imageGeneral = '/canales/01_general.png';
  const imageGeneralM = '/canales/01_generalM.png';
  const imageDeportes = '/canales/02_deportes.png';
  const imageDeportesM = '/canales/02_deportesM.png';
  const infantiles = '/canales/03_infantiles.png';
  const infantilesM = '/canales/03_infantilesM.png';
  const series = '/canales/04_series.png';
  const seriesM = '/canales/04_seriesM.png';
  const internacionales = '/canales/05_internacionales.png';
  const internacionalesM = '/canales/05_internacionalesM.png';
  const documentales = '/canales/06_documentales.png';
  const documentalesM = '/canales/06_documentalesM.png';
  const musica = '/canales/07_musica.png';
  const musicaM = '/canales/07_musicaM.png';
  const federales = '/canales/08_federales.png';
  const federalesM = '/canales/08_federalesM.png';

  
  return (
    <main className="w-full bg-text overflow-hidden">
      <Header />
      <TituloGrilla titulo='Grilla de canales' />
      <GrillaCanales titulo={'Interés General'} imageGrilla={imageGeneral} imageGrillaM={imageGeneralM} /> 
      <GrillaCanales titulo={'Deportes'} imageGrilla={imageDeportes} imageGrillaM={imageDeportesM} /> 
      <GrillaCanales titulo={'Infantiles'} imageGrilla={infantiles} imageGrillaM={infantilesM} /> 
      <GrillaCanales titulo={'Series y películas'} imageGrilla={series} imageGrillaM={seriesM} /> 
      <GrillaCanales titulo={'Internacionales'} imageGrilla={internacionales} imageGrillaM={internacionalesM} /> 
      <GrillaCanales titulo={'Documentales'} imageGrilla={documentales} imageGrillaM={documentalesM} /> 
      <GrillaCanales titulo={'Música'} imageGrilla={musica} imageGrillaM={musicaM} /> 
      <GrillaCanales titulo={'Federales'} imageGrilla={federales} imageGrillaM={federalesM} /> 
      <Contacto /> 
      <Footer />
    </main>
  )
}

export default Canales;