import generarNumeroRomano from "./romanos.js";

describe("generarNumeroRomano"  , () => {
  it("deberia poner el valor correspondiente en romano", () => {
    expect(generarNumeroRomano(3)).toEqual('III');
  });

  it("deberia poner el valor correspondiente en romano", () => {
    expect(generarNumeroRomano(10)).toEqual('X');
  });

  it("deberia poner el valor correspondiente en romano", () => {
    expect(generarNumeroRomano(9)).toEqual('IX');
  });

  it("deberia poner el valor correspondiente en romano", () => {
    expect(generarNumeroRomano(5)).toEqual('V');
  });
  
  it("deberia poner el valor correspondiente en romano", () => {
    expect(generarNumeroRomano(4)).toEqual('IV');
  });

  it("deberia poner el valor fuera de rango", () => {
    expect(generarNumeroRomano(1001)).toEqual('Número fuera de rango (1-1000)');
  });

  it("deberia poner el valor correspondiente en romano", () => {
    expect(generarNumeroRomano(1101)).toEqual('Número fuera de rango (1-1000)');
  });

});


