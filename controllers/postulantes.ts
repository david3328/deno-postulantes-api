import {
  HandlerFunc,
  Context,
} from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";

export const crearPostulante: HandlerFunc = (context: Context) => {
  return context.json({ mensaje: "Insertar postulante" });
};

export const listarPostulante: HandlerFunc = (context: Context) => {
  return context.json({ mensaje: "Listar postulantes" });
};

export const buscarPostulante: HandlerFunc = (context: Context) => {
  return context.json({ mensaje: "Buscar postulante" });
};

export const listarGrados: HandlerFunc = (context: Context) => {
  return context.json({ mensaje: "Listar grados" });
};

export const listarProfesiones: HandlerFunc = (context: Context) => {
  return context.json({ mensaje: "Listar profesiones" });
};

export const listarNivelesExperiencia: HandlerFunc = (context: Context) => {
  return context.json({ mensaje: "Listar niveles experiencia" });
};
