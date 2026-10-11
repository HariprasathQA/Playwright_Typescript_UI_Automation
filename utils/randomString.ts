import { randomInt } from 'node:crypto';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

export function generateRandomString(length = 16): string {
  if (!Number.isInteger(length) || length <= 0) {
    throw new RangeError('Random string length must be a positive integer.');
  }

  return Array.from({ length }, () => CHARACTERS[randomInt(CHARACTERS.length)]).join('');
}
