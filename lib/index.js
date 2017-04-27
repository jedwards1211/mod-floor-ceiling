/**
 * @param {number} value - the number to get the floor of
 * @param {number} modulus - the modulus of division
 * @param {number} [anchor=0] - controls the offset of multiples of modulus.  For example, with a modulus of 3
 * and an anchor of 1, possible return values include -2, 1, 4, 7, etc.
 * @return the greatest (closest to positive infinity) multiple of modulus that is <= value.
 */
function modFloor(value, modulus, anchor) {
  if (anchor) return anchor + modFloor(value - anchor, modulus)
  if (value < 0.0) return -modCeiling(-value, modulus)
  modulus = Math.abs(modulus)
  return value - value % modulus
}

/**
 * @param {number} value - the number to get the ceiling of
 * @param {number} modulus - the modulus of division
 * @param {number} [anchor=0] - controls the offset of multiples of modulus.  For example, with a modulus of 3
 * and an anchor of 1, possible return values include -2, 1, 4, 7, etc.
 * @return the least (closest to negative infinity) multiple of modulus that is >= value.
 */
function modCeiling(value, modulus, anchor) {
  if (anchor) return anchor + modCeiling(value - anchor, modulus)
  if (value < 0.0) return -modFloor(-value, modulus)
  modulus = Math.abs(modulus)
  var rem = value % modulus
  if (rem !== 0.0) value += modulus - rem
  return value
}

/**
 * @param {number} value - any number
 * @param {number} modulus - the modulus of division
 * @param {number} [anchor=0] - controls the offset of multiples of modulus.  For example, with a modulus of 3
 * and an anchor of 1, possible return values include -2, 1, 4, 7, etc.
 * @return the greatest (closest to positive infinity) multiple of modulus that is < value.
 */
function modLower(value, modulus, anchor) {
  var result = modFloor(value, modulus, anchor)
  return result < value ? result : result - modulus
}

/**
 * @param {number} value - any number
 * @param {number} modulus - the modulus of division
 * @param {number} [anchor=0] - controls the offset of multiples of modulus.  For example, with a modulus of 3
 * and an anchor of 1, possible return values include -2, 1, 4, 7, etc.
 * @return the least (closest to negative infinity) multiple of modulus that is > value.
 */
function modHigher(value, modulus, anchor) {
  var result = modCeiling(value, modulus, anchor)
  return result > value ? result : result + modulus
}

exports.modFloor = modFloor
exports.modCeiling = modCeiling
exports.modLower = modLower
exports.modHigher = modHigher

