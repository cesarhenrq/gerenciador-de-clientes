export default class Formatter {
  static formatPhone(number: string): string {
    if (number.length === 9) {
      return number.replace(/(\d{5})(\d{4})/, "$1-$2");
    } else {
      return number;
    }
  }
}
