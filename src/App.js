import LottoController from "../src/controller/LottoController.js";

class App {
  async run() {
    const lottoController = new LottoController();

    await lottoController.startLotto();
  }
}

export default App;
