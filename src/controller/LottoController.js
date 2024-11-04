import InputView from "../view/inputView.js";

class LottoController {
  #inputView;

  constructor() {
    this.#inputView = new InputView();
  }

  async startLotto() {
    const cost = await this.#inputView.getCost();
  }
}

export default LottoController;
