import { HandlerFunc, Context } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";

export const listarDepartamentos:HandlerFunc = (context:Context)=>{
  return context.json({mensaje:'Listar departamentos'})
}

export const listarProvincias:HandlerFunc = (context:Context)=>{
  return context.json({mensaje:'Listar provincias'})
}

export const listarDistritos:HandlerFunc = (context:Context)=>{
  return context.json({mensaje:'Listar distritos'})
}