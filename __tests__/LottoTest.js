import Lotto from "../src/model/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6이 아니면 예외 발생.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 값이 있으면 예외 발생.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 4, 5]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 범위에 벗어난 값이 있으면 예외 발생.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow("[ERROR]");
  });
});
