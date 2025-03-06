function add(numbers) {
  // Return 0 for empty string
  if (!numbers) return 0;

  // Handle the custom delimiter case
  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const [delimLine, ...rest] = numbers.split("\n");
    delimiter = new RegExp(delimLine.slice(2));
    numbers = rest.join("\n");
  }

  // Split by the delimiter and map to numbers
  const numberArray = numbers.split(delimiter).map((num)=>Number(num));

  // handle negative numbers
  const negativeNumbers = numberArray.filter(num => num < 0);
  
  if (negativeNumbers.length) {
    throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`);
  }


  return numberArray.reduce((acc, curr) => {
    return acc + Number(curr);
  }, 0);
}

module.exports = add;