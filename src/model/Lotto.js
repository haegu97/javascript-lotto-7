import { MESSAGE } from "../constants/constants.js";

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validate(numbers);
    this.#numbers = numbers;
  }

  #validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(
        `${MESSAGE.error.PREFIX} ${MESSAGE.error.INVALID_NUMBERS_COUNT}`
      );
    }
  }

  getNumbers() {
    return this.#numbers;
  }
}

export default Lotto;
