import { Router } from "https://deno.land/x/abc@v1.0.0-rc2/mod.ts";

import postulanteRoutes from "./postulantes.ts";
import ubigeoRoutes from "./ubigeo.ts";

const router: Router = new Router();

postulanteRoutes(router);
ubigeoRoutes(router);

export default router;
