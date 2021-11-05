module.exports = isOnlyNumbers = (text) => {
  const regexOnlyNumbers = /^[0-9]*$/;
  return regexOnlyNumbers.test(text);
};
