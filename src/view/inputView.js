import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constants.js";

class InputView {
  async getCost() {
    const cost = await Console.readLineAsync(MESSAGE.input.PURCHASE);
    Console.print(MESSAGE.newLine);

    return Number(cost);
  }

  async getWinningNumbers() {
    const numbers = await Console.readLineAsync(MESSAGE.input.WINNING_NUMBER);
    Console.print(MESSAGE.newLine);

    return numbers.split(",").map((num) => Number(num));
  }

  async getBonusNumber() {
    const number = await await Console.readLineAsync(
      MESSAGE.input.BOUNUS_NUMBER
    );
    return Number(number);
  }
}

export default InputView;
