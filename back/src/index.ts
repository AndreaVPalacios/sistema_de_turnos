import { PORT } from "./config/envs";
import server from "./server";
import "reflect-metadata"
import { AppDataSource, initializeDataSource } from "./config/data-source";


try {
  server.listen(PORT, async () => {
    console.log("Escuchando server PORT", PORT);
    await initializeDataSource()
  });
} catch (error) {
  console.log(error)
}

