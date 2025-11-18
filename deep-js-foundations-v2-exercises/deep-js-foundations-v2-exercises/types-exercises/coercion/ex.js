// TODO: write the validation functions
function isValidName(name) {
  if (typeof name !== "string") return false;

  const trimmedName = name.trim();
  if (trimmedName === "") return false;
  if (trimmedName.length < 3) return false;

  return true;
}

function hoursAttended(attended, length) {
  // must be string OR number
  if (typeof attended !== "string" && typeof attended !== "number") return false;
  if (typeof length !== "string" && typeof length !== "number") return false;

  // reject empty strings BEFORE coercion
  if (typeof attended === "string" && attended.trim() === "") return false;
  if (typeof length === "string" && length.trim() === "") return false;

  // convert to number
  const attendedNum = Number(attended);
  const lengthNum = Number(length);

  // must be valid numbers
  if (Number.isNaN(attendedNum)) return false;
  if (Number.isNaN(lengthNum)) return false;

  // must be 0 or higher
  if (attendedNum < 0) return false;
  if (lengthNum < 0) return false;

  // must be whole numbers
  if (!Number.isInteger(attendedNum)) return false;
  if (!Number.isInteger(lengthNum)) return false;

  // attended must be <= length
  if (attendedNum > lengthNum) return false;

  return true;
}


// tests:
console.log("1:", isValidName("Frank") === true);
console.log("2:", hoursAttended(6, 10) === true);
console.log("3:", hoursAttended(6, "10") === true);
console.log("4:", hoursAttended("6", 10) === true);
console.log("5:", hoursAttended("6", "10") === true);

console.log("6:", isValidName(false) === false);
console.log("7:", isValidName(null) === false);
console.log("8:", isValidName(undefined) === false);
console.log("9:", isValidName("") === false);
console.log("10:", isValidName("  \t\n") === false);
console.log("11:", isValidName("X") === false);

console.log("12:", hoursAttended("", 6) === false);
console.log("13:", hoursAttended(6, "") === false);
console.log("14:", hoursAttended("", "") === false);
console.log("15:", hoursAttended("foo", 6) === false);
console.log("16:", hoursAttended(6, "foo") === false);
console.log("17:", hoursAttended("foo", "bar") === false);

console.log("18:", hoursAttended(null, null) === false);
console.log("19:", hoursAttended(null, undefined) === false);
console.log("20:", hoursAttended(undefined, null) === false);
console.log("21:", hoursAttended(undefined, undefined) === false);

console.log("22:", hoursAttended(false, false) === false);
console.log("23:", hoursAttended(false, true) === false);
console.log("24:", hoursAttended(true, false) === false);
console.log("25:", hoursAttended(true, true) === false);

console.log("26:", hoursAttended(10, 6) === false);
console.log("27:", hoursAttended(10, "6") === false);
console.log("28:", hoursAttended("10", 6) === false);
console.log("29:", hoursAttended("10", "6") === false);

console.log("30:", hoursAttended(6, 10.1) === false);
console.log("31:", hoursAttended(6.1, 10) === false);
console.log("32:", hoursAttended(6, "10.1") === false);
console.log("33:", hoursAttended("6.1", 10) === false);
console.log("34:", hoursAttended("6.1", "10.1") === false);
