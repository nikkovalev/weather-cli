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

const printWeather = (res, icon) => {
  const date = new Date();
  const month = date.toLocaleString("ru", {
    month: "long",
    day: "2-digit",
  });
  const weekDay = date.toLocaleString("ru", {
    weekday: "short",
  });
  const time = date.toLocaleString("ru", {
    hour: "2-digit",
    minute: "2-digit",
  });

  log(dedent`
    ${chalk.bgYellow("WEATHER")} - ${res.name}
    ${weekDay}, ${month}, ${time}
    Температура: ${res.main.temp} ${icon}  ${res.weather[0].description} 
    По ощущению: ${res.main.feels_like}
    Скорость ветра: ${res.wind.speed} м/c
    Влажность: ${res.main.humidity} %
  `);
};

export { printError, printSuccess, printHelp, printWeather };
