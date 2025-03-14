import "reflect-metadata";
import { AppDataSource } from "./plugins/db";
import { User } from "./models/user";
class Application {
  static async main() {
    await AppDataSource.initialize();
    const user = new User();
    user.email = "artur2@gmail.com";
    user.password = "123@A51231aaaaAAAA";
    user.username = "Quartp Teste";
    user.cpf = "123.456.789-11";
    try {
      await user.save();
      console.log("usuario criado");
    } catch (err) {
      console.log(err);
    }
  }
}

export default Application;
