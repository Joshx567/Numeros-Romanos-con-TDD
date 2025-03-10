import generarNumeroRomano from "./romanos.js";

describe("NumeroRomano", () => {
  it("deberia poner el valor correspondiente en romano", () => {
    expect(generarNumeroRomano(3)).toEqual('III');
  });

  it("deberia poner el valor correspondiente en romano", () => {
    expect(generarNumeroRomano(13)).toEqual('XIII');
  });

  it("deberia poner el valor correspondiente en romano", () => {
    expect(generarNumeroRomano(103)).toEqual('CIII');
  });

  it("deberia poner el valor correspondiente en romano", () => {
    expect(generarNumeroRomano(1000)).toEqual('M');
  });
  
  it("deberia poner el valor correspondiente en romano", () => {
    expect(generarNumeroRomano(600)).toEqual('DC');
  });

  it("deberia poner el valor fuera de rango", () => {
    expect(generarNumeroRomano(1001)).toEqual('Número fuera de rango (1-1000)');
  });

  it("deberia poner el valor correspondiente en romano", () => {
    expect(generarNumeroRomano(1101)).toEqual('Número fuera de rango (1-1000)');
  });

});
