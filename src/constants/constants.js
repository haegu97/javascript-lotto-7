export const MESSAGE = Object.freeze({
  input: {
    PURCHASE: "구입금액을 입력해 주세요.\n",
    WINNING_NUMBER: "당첨 번호를 입력해 주세요.\n",
  },

  output: {
    PURCHASE_AMOUNT: (numbers) => `${numbers}개를 구매했습니다.`,
    LOTTOS: (numbers) => `[${numbers.join(", ")}]`,
  },

  error: {
    PREFIX: "[ERROR]",
    INVALID_NUMBER: "숫자만 입력 가능합니다.\n",
    INVALID_COST: "구매는 1000원 단위로만 가능합니다.\n",
    INVALID_NUMBERS_COUNT: "로또 번호는 6개여야 합니다.\n",
    DUPLICATED_NUMBERS: "로또 번호는 중복될 수 없습니다.\n",
    INVALID_RANGE: "로또 번호는 1~45 사이여야 합니다.\n",
  },

  newLine: "",
});

export const CONSTANTS = Object.freeze({
  MIN_NUMBER: 1,
  MAX_NUMBER: 45,
  COUNT_OF_NUMBERS: 6,
});
