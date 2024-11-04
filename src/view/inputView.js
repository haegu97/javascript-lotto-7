import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constants.js";

class InputView {
  async getCost() {
    const cost = await Console.readLineAsync(MESSAGE.input.PURCHASE);
    Console.print(MESSAGE.newLine);

    return Number(cost);
  }
}

export default InputView;
