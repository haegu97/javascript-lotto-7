import LottoManager from "../model/LottoManager.js";
import InputView from "../view/inputView.js";
import OutputView from "../view/outputView.js";

import { Console } from "@woowacourse/mission-utils";

class LottoController {
  #inputView;
  #outputView;
  #lottoManager;

  constructor() {
    this.#inputView = new InputView();
    this.#outputView = new OutputView();
  }

  async startLotto() {
    while (true) {
      try {
        await this.#generateLottoManager();
        break;
      } catch (err) {
        Console.print(err.message);
      }
    }

    await this.#lottoManager.makeLotto();
    this.#outputView.printPurchaseResult(this.#lottoManager.getPurchaseDTO());
  }

  async #generateLottoManager() {
    const cost = await this.#inputView.getCost();
    this.#lottoManager = new LottoManager(cost);
  }
}

export default LottoController;
