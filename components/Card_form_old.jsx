import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { userSchema } from "@/validations/userSchema";

const Card_form = ({internetPlan}) => {

  const { register, handleSubmit, watch, formState: { errors} } = useForm({ 
    resolver: zodResolver(userSchema),
  });

  console.log(errors)

  const [empresaChecked, setEmpresaChecked] = useState(false);
  const [whatsappChecked, setWhatsappChecked] = useState(false);
  const [llamadoChecked, setLlamadoChecked] = useState(false);
  const [correoChecked, setCorreoChecked] = useState(false);

  const handleEmpresaChange = (e) => {
    setEmpresaChecked(e.target.checked);
  };

  const handleWhatsappChange = (e) => {
    setWhatsappChecked(e.target.checked);
  };

  const handleLlamadoChange = (e) => {
    setLlamadoChecked(e.target.checked);
  };

  const handleCorreoChange = (e) => {
    setCorreoChecked(e.target.checked);
  };

  return (
    <Card className="pt-[45px] md:pt-[50px] pb-[35px] md:pb-[50px] relative w-[320px] md:w-[929px] rounded-ss-3xl rounded-se-3xl rounded-ee-3xl rounded-es-3xl" style={{ borderTopRightRadius: '60px', borderBottomLeftRadius: '60px',  boxShadow: '0 0 10px 0 #6A16CB' }}>
      <form onSubmit={handleSubmit(data => { console.log(data)})}>
        <div className="flex flex-col px-8 lg:px-[70px]">
          <div className="flex flex-col lg:flex-row lg:gap-[46px]">
            <div className="flex flex-col lg:w-1/2">
              <input
                type="text"
                className="px-2 text-sm pt-1 pb-1 focus:outline-none focus:shadow-none"
                id="name"
                pattern="[A-Za-z\s]+"
                placeholder="Nombre"
                {... register('name')}
              />
              <hr className="w-full my-1 border-green" />
            </div>
            <div className="flex flex-col lg:w-1/2">
              <input
                type="email"
                id="email"
                className="px-2 text-sm pt-8 lg:pt-1 pb-1 focus:outline-none focus:shadow-none"
                placeholder="Correo electrónico"
                {... register('email')}
              />
              <hr className="w-full my-1 border-green" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-[46px]">
            <div className="flex flex-col lg:w-1/2">
                <input
                  type="text"
                  id="apellido"
                  className="px-2 text-sm pt-8 focus:outline-none focus:shadow-none"
                  placeholder="Apellido"
                  {... register('apellido')}
                />
                <hr className="w-full my-1 border-green" />
            </div>
            <div className="flex pt-8 lg:w-1/2">
              <div className="flex flex-col w-[100px]">
                <input
                  type="number"
                  id="area"
                  className="px-2 text-sm focus:outline-none focus:shadow-none"
                  placeholder="Cod. Área"
                  {... register('area')}
                />
                <hr className=" my-1 border-green" />
              </div>
              <div className="flex flex-col ml-4 w-[140px] lg:w-full" >
                <input
                  type="number"
                  id="tel"
                  className="px-2 text-sm focus:outline-none focus:shadow-none"
                  placeholder="Teléfono (sin el 15)"
                  {... register('tel')}
                />
                <hr className="w-full my-1 border-green" />
              </div>
            </div>
          </div>
          <div className="flex gap-4 px-2 items-center pt-7">
            <label
              htmlFor="empresa"
              className="text-black text-sm cursor-pointer normal-case font-bold text-[12px] pt-1"
            >
              ¿Sos empresa?
            </label>
            <input
              type="checkbox"
              id="empresa"
              checked={empresaChecked}
              onChange={handleEmpresaChange}
              className="h-4 w-4"
              {... register('empresa')}
            />
          </div>
          {empresaChecked && (
            <div className="flex flex-col lg:flex-row lg:lg:gap-[46px]">
                <div className="lg:w-1/2">
                    <input
                      type="number"
                      id="cuit"
                      className="px-2 pt-7 text-sm focus:outline-none focus:shadow-none lg:w-full"
                      placeholder="CUIT"
                      {... register('cuit')}
                    />
                    <hr className="w-full my-1 border-green" />
                </div>
                <div className="lg:w-1/2">
                    <input
                      type="number"
                      id="razon"
                      className="px-2 pt-7 text-sm focus:outline-none focus:shadow-none lg:w-full"
                      placeholder="Razón social"
                      {... register('razon')}
                    />
                    <hr className="w-full my-1 border-green" />
                </div>
            </div>
          )}
          <div className="flex flex-col lg:flex-row lg:lg:gap-[46px]">
              <h2 className="text-black cursor-pointer normal-case font-bold text-[12px] leading-5 pt-4 lg:w-1/2 lg:pt-7">
                ¿Por cual medio querés que te contactemos?
              </h2>
              <div className="flex gap-3 pt-5">
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="whatsapp"
                    checked={whatsappChecked}
                    onChange={handleWhatsappChange}
                    className="h-4 w-4"
                    {... register('whatsapp')}
                  />
                  <label
                    htmlFor="whatsapp"
                    className="text-black cursor-pointer normal-case font-bold text-[12px] pt-2"
                  >
                    Whatsapp
                  </label>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="llamado"
                    checked={llamadoChecked}
                    onChange={handleLlamadoChange}
                    className="h-4 w-4"
                    {... register('llamado')}
                  />
                  <label
                    htmlFor="llamado"
                    className="text-black cursor-pointer normal-case font-bold text-[12px] pt-2"
                  >
                    Llamado
                  </label>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="checkbox"
                    id="correo"
                    checked={correoChecked}
                    onChange={handleCorreoChange}
                    className="h-4 w-4"
                    {... register('correo')}
                  />
                  <label
                    htmlFor="correo"
                    className="text-black cursor-pointer normal-case font-bold text-[12px] pt-2"
                  >
                    Correo
                  </label>
                </div>
              </div>
          </div>
        </div>
        {/* <div className="hidden">
          <input type="text" id="planinternet" {... register('planinternet')}/>
          <input type="text" id="plantelevision" {... register('plantelevision')} />
          <input type="text" id="plantelevisionpropio" {... register('plantelevisionpropio')} />
          <input type="text" id="plancombo" {... register('plancombo')} />
          <input type="text" id="planempresa" {... register('planempresa')} />
        </div> */}
        <div className="flex justify-center pt-[30px]">
          <Button type="submit" className="capitalize w-auto lg:w-auto text-[15px] md:text-[21px] font-normal">
            Enviar
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Card_form;
