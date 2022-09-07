import { SnackController } from "./Controllers/SnackController.js";

class App {
  // NOTE comment out values controller once you have one of your onw
  // valuesController = new ValuesController();

  snackController = new SnackController()
}

window["app"] = new App();
