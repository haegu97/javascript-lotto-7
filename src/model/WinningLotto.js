import Lotto from "./Lotto.js";

class WinningLotto {
  #winningLotto;
  #bonusNumber;

  constructor(numbers, bonusNumber) {
    this.#winningLotto = new Lotto(numbers);
    this.#bonusNumber = bonusNumber;
  }
}

export default WinningLotto;
