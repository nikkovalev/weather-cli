const getArgs = (args) => {
  const res = {};
  const [executer, file, ...rest] = args;
  rest.forEach((value, index, array) => {
    if (value.charAt(0) === "-") {
      if (!array[index + 1] || array[index + 1].charAt(0) === "-") {
        res[value.substring(1)] = true;
      } else if (array[index + 1].charAt(0) !== "-") {
        res[value.substring(1)] = array[index + 1];
      }
    }
  });
  return res;
};

export { getArgs };
