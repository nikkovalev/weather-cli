import { homedir } from "os";
import { join } from "path";
import { promises } from "fs";

const filePath = join(homedir(), "weather-data.json");
const TOKEN_DICTIONARY = {
  token: "token",
  city: "city",
};

const isExist = async (path) => {
  try {
    await promises.stat(path);
    return true;
  } catch (error) {
    return false;
  }
};

const getDateFromFile = async (path) => {
  const file = await promises.readFile(path);
  return JSON.parse(file);
};

const getKeyValue = async (key) => {
  if (await isExist(filePath)) {
    const data = await getDateFromFile(filePath);
    return data[key];
  }
  return undefined;
};

const saveKeyValue = async (key, value) => {
  let data = {};
  if (await isExist(filePath)) {
    data = await getDateFromFile(filePath);
  }
  data[key] = value;
  await promises.writeFile(filePath, JSON.stringify(data));
};

export { saveKeyValue, getKeyValue, TOKEN_DICTIONARY };
