import { Router } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";

import {
  listarPostulante,
  crearPostulante,
  buscarPostulante,
} from "../controllers/postulantes.ts";

export default (router: Router) => {
  router.add("GET", "/postulantes", listarPostulante);
  router.add("POST", "/postulantes", crearPostulante);
  router.add("GET", "/postulantes/:id", buscarPostulante);
};
