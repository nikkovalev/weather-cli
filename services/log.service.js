import chalk from "chalk";
import dedent from "dedent-js";

const log = console.log;

const printError = (error) => {
  log(`${chalk.bgRed("Error")} ${error}`);
};

const printSuccess = (message) => {
  log(`${chalk.bgGreen("SUCCESS")} ${message}`);
};

const printHelp = () => {
  log(dedent`${chalk.bgCyan("HELP")}  
      Без параметров - вывод погоды
      -s [CITY] для установки города
      -h [HELP] для вывода помощи
      -t [API_KEY] для сохранения токена
    `);
};

export { printError, printSuccess, printHelp };
