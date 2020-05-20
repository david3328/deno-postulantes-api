import {
  HandlerFunc,
  Context,
} from "https://deno.land/x/abc@v1.0.0-rc5/mod.ts";

import db from "../config/db.ts";
import {Departamento, Provincia, Distrito} from '../models/departamentos.ts';

const database = db.getDatabase;
const departamentos = database.collection("departamentos");
const provincias = database.collection("provincias");
const distritos = database.collection("distritos");

export const listarDepartamentos: HandlerFunc = async (context: Context) => {
  try {   
    const fetchDepartamentos:Departamento[] = await departamentos.find();
    return context.json(fetchDepartamentos, 200);
  } catch (error) {
    return context.json(error, 500);
  }
};

export const listarProvincias: HandlerFunc = async (context: Context) => {
  try {
    let opciones:any = {};
    const departamento = context.params.departamento;
    opciones.departamento = departamento;
    const fetchProvincias:Provincia[] = await provincias.find(opciones);
    return context.json(fetchProvincias, 200);
  } catch (error) {
    return context.json(error, 500);
  }
};

export const listarDistritos: HandlerFunc = async (context: Context) => {
  try{
    let opciones:any = {};
    const provincia = context.params.provincia;
    opciones.provincia = provincia;
    const fetchDistritos:Distrito[] = await distritos.find(opciones);
    return context.json(fetchDistritos, 200);
  } catch (error) {
    return context.json(error, 500);
  }
};
