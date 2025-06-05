import fizzBuzz from "./fizzbuzz.js";

describe("Fizzbuzz", () => {
  it("retornar el numero si no sigue una regla", () => {
    expect(fizzBuzz(1)).toEqual(1);
  });

  it("retornar el numero si no sigue una regla con otro ejemplo", () => {
    expect(fizzBuzz(2)).toEqual(2);
  });

  it("retornar el numero si no sigue una regla con otro ejemplo", () => {
    expect(fizzBuzz(4)).toEqual(4);
  });
});
