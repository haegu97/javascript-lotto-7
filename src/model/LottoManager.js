import { isNumber, isValidCost } from "../utils/validator.js";
import { MESSAGE } from "../constants/constants.js";

class LottoManager {
  constructor(cost) {
    this.#validate(cost);
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
}

export default LottoManager;
