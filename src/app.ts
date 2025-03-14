import "reflect-metadata";
import { AppDataSource } from "./plugins/db";
import { User } from "./models/user";
class Application {
  static async main() {
    await AppDataSource.initialize();
    const user = new User();
    user.email = "artur@gmail.com";
    user.password = "123";
    user.username = "Segundo Teste";
    user.cpf = "123.456.789-10";
    try {
      await user.save();
      console.log("usuario criado");
    } catch (err) {
      console.log(err);
    }
  }
}

export default Application;
