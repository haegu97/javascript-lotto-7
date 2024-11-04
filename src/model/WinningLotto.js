import Lotto from "./Lotto.js";
import {
  isNumber,
  isBonusNumberInRange,
  isBonusNumberExist,
} from "../utils/validator.js";
import { MESSAGE } from "../constants/constants.js";

class WinningLotto {
  #winningLotto;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#validateBonusNumber(bonusNumber, numbers);
    this.#winningLotto = new Lotto(numbers);
    this.#bonusNumber = bonusNumber;
  }

  #validateBonusNumber(bonusNumber, numbers) {
    if (!isNumber(bonusNumber)) {
      throw new Error(
        `${MESSAGE.error.PREFIX} ${MESSAGE.error.INVALID_NUMBER}`
      );
    }

    if (!isBonusNumberInRange(bonusNumber)) {
      throw new Error(`${MESSAGE.error.PREFIX} ${MESSAGE.error.INVALID_RANGE}`);
    }

    if (isBonusNumberExist(bonusNumber, numbers)) {
      throw new Error(
        `${MESSAGE.error.PREFIX} ${MESSAGE.error.ALREADY_EXISTS}`
      );
    }
  }
}

export default WinningLotto;
