import { Console } from "@woowacourse/mission-utils";
import { MESSAGE } from "../constants/constants.js";

class OutputView {
  printPurchaseResult({ lottosAmount, lottos }) {
    Console.print(MESSAGE.output.PURCHASE_AMOUNT(lottosAmount));
    lottos.forEach((numbers) => {
      Console.print(MESSAGE.output.LOTTOS(numbers));
    });
  }
}

export default OutputView;
