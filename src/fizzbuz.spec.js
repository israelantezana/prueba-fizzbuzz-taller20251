//import sumar from "./sumador.js";

describe("Fizzbuzz", () => {
  it("retornar el numero si no sigue una regla", () => {
    expect(fizzbuzz(1)).toEqual(1);
  });

  it("retornar el numero si no sigue una regla con otro ejemplo", () => {
    expect(fizzbuzz(2)).toEqual(2);
  });
});

function fizzbuzz(n) {
  return n;
}
