import { Card } from "@/components/ui/card";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Toaster, toast } from 'sonner'
import { BiCheck} from 'react-icons/bi'


const Card_form = ({internetPlan, televisionPlan, empresaPlan, televisionPlanPropio, comboPlanPropio }) => {

  const {register, handleSubmit, watch, reset, setValue} = useForm({ defaultValues: { empresa: false, whatsapp: false, llamado: false, 
    correo: false, internetPlan: internetPlan || "", televisionPlan: televisionPlan || "", empresaPlan: empresaPlan || "", televisionPlanPropio: televisionPlanPropio || "", comboPlanPropio: comboPlanPropio || "" } 
  });
  const empresa = watch('empresa');

  const onSubmit = async data => {

  // Construir una cadena HTML para representar una lista
  let listHTML = '';
  // Verificar cada campo y agregarlo a la lista si tiene un valor
  if (data.name) listHTML += `Nombre: ${data.name} - `;
  if (data.apellido) listHTML += `Apellido: ${data.apellido} - `;
  if (data.email) listHTML += `Correo electrónico: ${data.email} - `;
  if (data.area) listHTML += `Cod. Área: ${data.area} -  `;
  if (data.tel) listHTML += `Teléfono: ${data.tel} - `;
  listHTML += `Empresa: ${data.empresa ? 'Sí' : 'No'} - `;
  if (data.empresa) {
    if (data.cuit) listHTML += `CUIT: ${data.cuit} - `;
    if (data.razon) listHTML += `Razón social: ${data.razon} - `;
  }
  listHTML += `Whatsapp: ${data.whatsapp ? 'Sí' : 'No'} - `;
  listHTML += `Llamado: ${data.llamado ? 'Sí' : 'No'} - `;
  listHTML += `Correo: ${data.correo ? 'Sí' : 'No'} - `;
  if (data.internetPlan) listHTML += `Plan de Internet: ${data.internetPlan} - `;
  if (data.televisionPlan) listHTML += `Plan Televisión: ${data.televisionPlan} - `;
  if (data.televisionPlanPropio) listHTML += `Plan Televisión Custom: ${JSON.stringify(data.televisionPlanPropio)} - `;
  if (data.comboPlanPropio) listHTML += `Combos: ${JSON.stringify(data.comboPlanPropio)} - `;
  if (data.empresaPlan) listHTML += `Empresas: ${JSON.stringify(data.empresaPlan)} - `;
    
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(listHTML),
    });
  
    if (!response.ok) {
      console.log('Error sending email:', response.statusText);
      return;
    }
  
    const text = await response.text(); 
    try {
      const result = text ? JSON.parse(text) : {};
      console.log('Email Sent!', result.listHTML);
      toast('Mail enviado correctamente',
      {description: "Nos contactaremos a la brevedad",
      style: {
        color: "white",
        background: "black", 
        display: "flex", 
        alignItems: "center", 
        gap: "30px",
        paddingRight: "25px",
      },
      icon: <BiCheck style={{ color: "green", fontSize: "2rem", marginLeft: "10px" }} />, 
    });
      reset();
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  };

  useEffect(() => {
    setValue("internetPlan", internetPlan || "");
    setValue("televisionPlan", televisionPlan || "");
    setValue("empresaPlan", empresaPlan || "");
    setValue("televisionPlanPropio", televisionPlanPropio || "");
    setValue("comboPlanPropio", comboPlanPropio || "");
  }, [internetPlan, televisionPlan, empresaPlan, televisionPlanPropio, comboPlanPropio, setValue]);
  
  return (
    <Card className="pt-[45px] md:pt-[50px] pb-[35px] md:pb-[50px] relative w-[320px] md:w-[929px] rounded-ss-3xl rounded-se-3xl rounded-ee-3xl rounded-es-3xl" style={{ borderTopRightRadius: '60px', borderBottomLeftRadius: '60px',  boxShadow: '0 0 10px 0 #6A16CB' }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col px-8 lg:px-[70px]">
          <div className="flex flex-col lg:flex-row lg:gap-[46px]">
            <div className="flex flex-col lg:w-1/2">
              <input
                type="text"
                required
                autoComplete="off"
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
                type="text"
                required
                autoComplete="off"
                id="apellido"
                className="px-2 text-sm pt-8 lg:pt-1 pb-1 focus:outline-none focus:shadow-none"
                placeholder="Apellido"
                {... register('apellido')}
              />
              <hr className="w-full my-1 border-green" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-[46px]">
            <div className="flex flex-col lg:w-1/2">
                <input
                  type="email"
                  required
                  id="email"
                  autoComplete="off"
                  className="px-2 text-sm pt-8 focus:outline-none focus:shadow-none"
                  placeholder="Correo electrónico"
                  {... register('email')}
                />
                <hr className="w-full my-1 border-green" />
            </div>
            <div className="flex pt-8 lg:w-1/2">
              <div className="flex flex-col w-[100px]">
                <input
                  type="number"
                  autoComplete="off"
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
                  autoComplete="off"
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
              autoComplete="off"
              id="empresa"
              className="h-4 w-4"
              {... register('empresa')}
            />
          </div>
          {empresa && (
            <div className="flex flex-col lg:flex-row lg:lg:gap-[46px]">
                <div className="lg:w-1/2">
                    <input
                      type="number"
                      autoComplete="off"
                      id="cuit"
                      className="px-2 pt-7 text-sm focus:outline-none focus:shadow-none lg:w-full"
                      placeholder="CUIT"
                      {... register('cuit')}
                    />
                    <hr className="w-full my-1 border-green" />
                </div>
                <div className="lg:w-1/2">
                    <input
                      type="text"
                      autoComplete="off"
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
                    autoComplete="off"
                    id="whatsapp"
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
                    autoComplete="off"
                    id="llamado"
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
                    autoComplete="off"
                    id="correo"
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
        <div className="hidden">
          <input type="text" id="internetPlan" value={internetPlan || ''} {... register('internetPlan')}/>
          <input type="text" id="televisionPlan" value={televisionPlan || ''} {... register('televisionPlan')} />
          <input type="text" id="televisionPlanPropio" value={JSON.stringify(televisionPlanPropio)} {... register('televisionPlanPropio')} />
          <input type="text" id="comboPlanPropio" value={JSON.stringify(comboPlanPropio)} {... register('comboPlanPropio')} />
          <input type="text" id="empresaPlan" value={empresaPlan  || ''} {... register('empresaPlan')} />
        </div>
        <div className="flex justify-center pt-[30px]">
          <Toaster />
          <Button type="submit" className="capitalize w-auto lg:w-auto text-[15px] md:text-[21px] font-normal">
            
            Enviar
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Card_form;
