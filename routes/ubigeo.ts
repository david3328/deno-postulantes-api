import { Router } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";
import { listarDepartamentos, listarDistritos, listarProvincias } from '../controllers/ubigeo.ts';

export default (router:Router)=>{
  router.add("GET","/departamentos",listarDepartamentos);
  router.add("GET","/provincias",listarProvincias);
  router.add("GET","/distritos",listarDistritos);
}