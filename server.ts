import { Application } from "https://deno.land/x/abc@v1.0.0-rc5/mod.ts";
import "https://deno.land/x/denv/mod.ts";
import router from './routes/index.ts';

const app:Application = new Application();
const port:number = parseInt(Deno.env.get("PORT") || '3000')

app.router = router;
app.start({ port });
console.log(`Server listening on port ${port}`);