import Image from 'next/image'
import Link from 'next/link'

const TituloGrilla = ({ titulo }) => {
  return (
    <div className="w-full bg-text pt-[150px] pb-[20px]">
          <div className='container mx-auto'>
              <div className='flex justify-between items-center bg-green px-[10px] lg:px-[30px] py-1'>
                  {/* logo */}
                  <Link href='/'>
                    <div className="hidden lg:block pt-[12px] pb-[20px]">
                      <Image src='/logo.svg' width={131} height={54} alt="" />
                    </div>
                    <div className='block lg:hidden'>
                      <Image src='/logo.svg' width={96} height={40} alt="" />
                    </div>
                  </Link>
                  <div className="lg:text-[38px] leading-[45px] text-text font-semibold">{titulo}</div>
              </div>
          </div>
      </div>
  )
}

export default TituloGrilla