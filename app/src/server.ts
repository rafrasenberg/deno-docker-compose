import { Application } from "./deps.ts";
import router from "./routes.ts";

const env = Deno.env.toObject();

const PORT = env.PORT as unknown as number;
const HOST = env.HOST as unknown as string;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server running on port ${PORT}`);

await app.listen({ port: PORT, hostname: HOST });

export default app;
