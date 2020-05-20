import { Router } from "https://deno.land/x/abc@v1.0.0-rc5/mod.ts";

import {
  listarPostulante,
  crearPostulante,
  buscarPostulante,
  listarGradoEstudios,
  listarProfesiones
} from "../controllers/postulantes.ts";

export default (router: Router) => {
  router.add("GET", "/postulantes", listarPostulante);
  router.add("POST", "/postulantes", crearPostulante);
  router.add("GET", "/postulantes/:dni", buscarPostulante);
  router.add("GET", "/grado-estudios", listarGradoEstudios);
  router.add("GET", "/profesiones", listarProfesiones);
};
