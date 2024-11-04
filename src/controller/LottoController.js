// import LottoManager from "../model/LottoManager.js";
// import InputView from "../view/inputView.js";

// class LottoController {
//   #inputView;
//   #lottoManager;

//   constructor() {
//     this.#inputView = new InputView();
//   }

//   async startLotto() {
//     await this.#generateLottoManager();
//   }

//   async #generateLottoManager() {
//     const cost = await this.#inputView.getCost();
//     this.#lottoManager = new LottoManager(cost);
//   }
// }

// export default LottoController;

import LottoManager from "../model/LottoManager.js";
import InputView from "../view/inputView.js";
import { Console } from "@woowacourse/mission-utils";

class LottoController {
  #inputView;
  #lottoManager;

  constructor() {
    this.#inputView = new InputView();
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
  }

  async #generateLottoManager() {
    const cost = await this.#inputView.getCost();
    this.#lottoManager = new LottoManager(cost);
  }
}

export default LottoController;
