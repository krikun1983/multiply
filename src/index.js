module.exports = function multiply(first, second) {
  let decision = BigInt(first) * BigInt(second);
  return String(decision);
}
