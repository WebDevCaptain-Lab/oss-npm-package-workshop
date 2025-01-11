/**
 * Add any number of arguments
 * @param {...number} args - The numbers to be added
 * @returns {number} - sum of the numbers
 */
export function add(...args) {
  return args.reduce((prev, curr) => prev + curr, 0);
}
