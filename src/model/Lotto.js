import {
  validateIsSixNumber,
  validateDuplicateNumber,
  validateNumbersRange,
} from "../utils/validator.js";
import { MESSAGE } from "../constants/constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  #validate(numbers) {
    if (!validateIsSixNumber(numbers)) {
      throw new Error(
        `${MESSAGE.error.PREFIX} ${MESSAGE.error.INVALID_NUMBERS_COUNT}`
      );
    }

    if (validateDuplicateNumber(numbers)) {
      throw new Error(
        `${MESSAGE.error.PREFIX} ${MESSAGE.error.DUPLICATED_NUMBERS}`
      );
    }

    if (validateNumbersRange(numbers)) {
      throw new Error(`${MESSAGE.error.PREFIX} ${MESSAGE.error.INVALID_RANGE}`);
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
