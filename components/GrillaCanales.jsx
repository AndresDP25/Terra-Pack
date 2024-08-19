import Image from "next/image"

const GrillaCanales = ({ titulo, imageGrilla, imageGrillaM}) => {

   const esMusica = imageGrilla === '/canales/07_musica.png';

  return (
    <section className='w-full bg-text gap-[9px] pb-[18px] flex flex-col'>
        <div className="container mx-auto flex flex-col gap-[20px]">
            <div className="flex justify-between items-center bg-green px-[10px] lg:px-[30px]">
                <div className="lg:text-[32px] leading-[45px] text-text font-medium uppercase">{titulo}</div>
            </div>
        </div>
        <div className="container mx-auto">
                <Image 
                    src={imageGrilla} 
                    width={1105} 
                    height={328} 
                    alt="" 
                    className={`hidden lg:block ${esMusica ? 'w-1/3 float-left' : 'w-full'}`} 
                /> 
                <Image 
                    src={imageGrillaM} 
                    width={336} 
                    height={133} 
                    alt="" 
                    className={`block lg:hidden ${esMusica ? 'w-1/3 float-left' : 'w-full'}`} 
                />
            </div>
        
    </section>
  )
}

export default GrillaCanales




