export default class Bhaskara {
    public calcular(a: number, b: number, c: number): string {
        let delta = b * b - 4 * a * c;
  
        if (delta > 0) {
            // Duas raízes reais distintas
            let x1 = (-b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-b - Math.sqrt(delta)) / (2 * a);
            return `As raízes são: x1 = ${x1} e x2 = ${x2}`;
        } else if (delta === 0) {
            // Uma raiz real
            let x = -b / (2 * a);
            return `A raiz é: x = ${x}`;
        } else {
            // Raízes complexas
            let realPart = -b / (2 * a);
            let imaginaryPart = Math.sqrt(-delta) / (2 * a);
            return `As raízes são complexas: ${realPart} ± ${imaginaryPart}i`;
        }
    }
  }