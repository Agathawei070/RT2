import * as readline from 'readline';
import Mensagens from './mensagens';
import Multiplicacao from './multiplicacao';
import Soma from './soma';
import Subtracao from './subtracao';
import Divisao from './divisao';
import Potencia from './potencia';
import Radiciacao from './radiciacao';
import Bhaskara from './bhaskara';

let mensagens = new Mensagens();

let iniciar = () => {
  let leitor = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });

  leitor.question(`Quais são seus números e a operação desejada?\n`, (valor) => {
      let instrucoes = valor.split(' ');
      let numero1 = Number(instrucoes[0]);
      let numero2 = Number(instrucoes[1]);
      let operacao = instrucoes[instrucoes.length - 1];
      let numero3: number | undefined;

      if (operacao === 'Bhaskara' && instrucoes.length === 4) {
          numero3 = Number(instrucoes[2]);
      } else if (instrucoes.length === 1) {
          operacao = instrucoes[0];
      }

      console.log(`Estas foram suas instruções: ${instrucoes}\n`);

      let calculo: Soma | Subtracao | Multiplicacao | Divisao | Potencia | Radiciacao | Bhaskara;

      switch (operacao) {
          case 'Somar':
              calculo = new Soma();
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
              break;
          case 'Subtrair':
              calculo = new Subtracao();
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
              break;

          case 'Multiplicar':
              calculo = new Multiplicacao();
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
              break;
          case 'Dividir':
              calculo = new Divisao();
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
              break;
          case 'Potenciar':
              calculo = new Potencia();
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
              break;
          case 'Radiciar':
              calculo = new Radiciacao();
              console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2)}\n`);
              break;
          case 'Bhaskara':
              if (numero3 !== undefined) {
                  calculo = new Bhaskara();
                  console.log(`O resultado da operação é: ${calculo.calcular(numero1, numero2, numero3)}\n`);
              } else {
                  console.log("Para a operação Bhaskara, forneça 3 números: a, b e c.\n");
              }
              break;
          case 'Sair':
              console.log(`Até uma próxima, falou...`);
              break;
          default:
              console.log(`Operação não entendida :(`);
      }

      leitor.close();
      if (operacao !== 'Sair') {
          mensagens.comoUsar();
          iniciar();
      }
  });
};


mensagens.boasVindas();
mensagens.listarOpcoes();
mensagens.comoUsar();
iniciar();