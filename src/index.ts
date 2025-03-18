import "reflect-metadata";
import { AppDataSource } from "./infra/plugins/db";
import fastify, { FastifyInstance } from "fastify";
import config from "./config";
class Application {
  server: FastifyInstance;

  constructor() {
    this.server = fastify();
  }

  async startHttpServer() {
    try {
      const address = await this.server.listen({
        port: config.port,
      });
      console.log(`Servidro rodando na porta: ${address}`);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }

  async main() {
    await AppDataSource.initialize();
    await this.startHttpServer();
  }
}

const appInstance = new Application();
appInstance.main();
