function processUser(name, age) {
  // validate name
  if (!name || typeof name !== "string") {
    throw new Error("Invalid name");
  }

  // validate age
  if (typeof age !== "number" || age < 0) {
    throw new Error("Invalid age");
  }

  // format name
  const formattedName = name.trim().toUpperCase();

  // calculate birth year
  const currentYear = new Date().getFullYear();
  const birthYear = currentYear - age;

  // build final message
  return `User ${formattedName} was born in ${birthYear}.`;
}

module.exports = processUser;
