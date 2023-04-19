// Note that ConverterService is a service local to
// the library "converter".
export class ConverterService {
  constructor() { }

  celsiusToFahrenheit(degreeCelsius: number): number {
    return degreeCelsius * 9 / 5 + 32;
  }

  farenheitToCelsius(degreeFarenheit: number): number {
    return (degreeFarenheit - 32) * 5 / 9;
  }
}
