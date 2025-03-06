function add(numbers) {
  // Return 0 for empty string
  if (!numbers) return 0;

  const numberArray = numbers.split(",");
  return numberArray.reduce((acc, curr) => {
    return acc + Number(curr)
  }, 0)
}

module.exports = add;