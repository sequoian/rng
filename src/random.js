/**
 * Returns a random number between min and max, inclusive
 */
export default function randomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  if (isNaN(min) || isNaN(max)) return null
  return Math.floor(Math.random() * (max - min + 1)) + min
}