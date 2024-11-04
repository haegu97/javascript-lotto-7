import WinningLotto from "../src/model/WinningLotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 아니면 예외 발생.", () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 6, 7], 7);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자 있으면 예외 발생.", () => {
    expect(() => {
      new WinningLotto([1, 2, 3, 4, 5, 5], 7);
    }).toThrow("[ERROR]");
  });
});
