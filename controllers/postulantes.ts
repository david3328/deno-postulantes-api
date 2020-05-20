import {
  HandlerFunc,
  Context,
} from "https://deno.land/x/abc@v1.0.0-rc5/mod.ts";

import db from '../config/db.ts';

const database = db.getDatabase;
const gradoEstudios = database.collection("gradoEstudios"); 
const profesiones = database.collection("profesiones");
const postulantes = database.collection("postulantes");

export const crearPostulante: HandlerFunc = async (context: Context) => {
  try{
    const body:any = await (context.body());
    if (!Object.keys(body).length) {
      return context.json("Request body can not be empty!", 400);
    }

    body.fechaRecepcion = new Date();

    const postulanteId = await postulantes.insertOne(body);

    return context.json(postulanteId, 201);
  } catch(error) {
    return context.json(error,500);
  }
  
};

export const listarPostulante: HandlerFunc = async (context: Context) => {
  try {
    const options = context.queryParams
    const fetchPostulantes = await postulantes.find(options);
    return context.json(fetchPostulantes, 200);
  } catch (error) {
    return context.json(error, 500);
  }
};

export const buscarPostulante: HandlerFunc = async (context: Context) => {
  try{
    const dni = context.params.dni;
    const fetchPostulante = await postulantes.findOne({dni})
    if(!fetchPostulante) return context.json({mensaje:`El usuario con DNI ${dni} no se encuentra registrado.`},404);
    return context.json(fetchPostulante)
  } catch (error) {
    return context.json(error,500);
  }
};

export const listarGradoEstudios: HandlerFunc = async (context: Context) => {
  try{
    const fetchGradoEstudios = await gradoEstudios.find();
    return context.json(fetchGradoEstudios, 200);
  } catch (error) {
    return context.json(error,500)
  }
};

export const listarProfesiones: HandlerFunc = async (context: Context) => {
  try{
    const fetchProfesiones = await profesiones.find();
    return context.json(fetchProfesiones);
  } catch(error) {
    return context.json(error,500);
  }
};