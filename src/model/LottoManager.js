import { isNumber, isValidCost } from "../utils/validator.js";
import { Random } from "@woowacourse/mission-utils";
import Lotto from "./Lotto.js";
import { MESSAGE } from "../constants/constants.js";

class LottoManager {
  constructor(cost) {
    this.#validate(cost);
    this.lottosAmount = cost / 1000;
    this.lottos = [];
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
      const lottoNumber = Random.pickUniqueNumbersInRange(1, 45, 6);

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
}

export default LottoManager;
