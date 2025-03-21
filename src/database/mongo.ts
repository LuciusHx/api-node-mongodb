import { MongoClient as Mongo, Db } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

export const MongoClient = {
  client: undefined as unknown as Mongo,
  db: undefined as unknown as Db,

  async connect(): Promise<void> {
    const url = process.env.MONGODB_URL;

    if (!url) {
      throw new Error("Variáveis de ambiente MONGODB_URL não definidas.");
    }

    // Conecta ao MongoDB
    const client = new Mongo(url);
    try {
      await client.connect();
      console.log("Conectado ao MongoDB com sucesso!");

      // Define o banco de dados
      this.db = client.db("users-db");
      this.client = client;
    } catch (error) {
      console.error("Erro ao conectar ao MongoDB:", error);
      throw error;
    }
  },
};
