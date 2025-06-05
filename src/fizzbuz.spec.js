import fizzbuzz from "./fizzbuzz.js";

describe("Fizzbuzz", () => {
  it("retornar el numero si no sigue una regla", () => {
    expect(fizzbuzz(1)).toEqual(1);
  });

  it("retornar el numero si no sigue una regla con otro ejemplo", () => {
    expect(fizzbuzz(2)).toEqual(2);
  });

  it("retornar el numero si no sigue una regla con otro ejemplo", () => {
    expect(fizzbuzz(4)).toEqual(4);
  });
});
