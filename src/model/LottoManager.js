import { isNumber, isValidCost } from "../utils/validator.js";
import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { CONSTANTS, MESSAGE } from "../constants/constants.js";
import WinningLotto from "./WinningLotto.js";

class LottoManager {
  constructor(cost) {
    this.#validate(cost);
    this.lottosAmount = cost / 1000;
    this.lottos = [];
    this.winningLotto;
  }

  #validate(cost) {
    if (!isNumber(cost)) {
      throw new Error(
        `${MESSAGE.error.PREFIX} ${MESSAGE.error.INVALID_NUMBER}`
      );
    }

    if (!isValidCost(cost)) {
      throw new Error(`${MESSAGE.error.PREFIX} ${MESSAGE.error.INVALID_COST}`);
    }
  }

  makeLotto() {
    while (this.lottos.length < this.lottosAmount) {
      const lottoNumber = Random.pickUniqueNumbersInRange(
        CONSTANTS.MIN_NUMBER,
        CONSTANTS.MAX_NUMBER,
        CONSTANTS.COUNT_OF_NUMBERS
      );

      const lotto = new Lotto(lottoNumber);
      this.lottos.push(lotto);
    }
  }

  getPurchaseDTO() {
    return {
      lottosAmount: this.lottosAmount,
      lottos: this.lottos.map((lotto) => lotto.getNumbers()),
    };
  }

  makeWinningLotto(winningNumbers, bonusNumber) {
    this.winningLotto = new WinningLotto(winningNumbers, bonusNumber);
  }
}

export default LottoManager;
