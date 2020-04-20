export function toBingoLabel(num) {
  if (num < 1 || num > 75) {
    throw new Error('Bingo numbers must be in range 1-75');
  }
  if (num > 60) {
    return `O${num}`;
  } else if (num > 45) {
    return `G${num}`;
  } else if (num > 30) {
    return `N${num}`;
  } else if (num > 15) {
    return `I${num}`;
  } else {
    return `B${num}`;
  }
}

const MAX_INT = 2147483647;

function rand() {
  const crypto = window.crypto || window.msCrypto;
  if (crypto) {
    const a = new Uint32Array(1);
    crypto.getRandomValues(a);
    return (a[0] & MAX_INT) / MAX_INT;
  } else {
    return Math.random();
  }
}

export class RandomNumberPool {
  constructor(end, start = 1) {
    this.pool = [];
    for (let num = start; num <= end; num += 1) {
      this.pool.push(num);
    }
  }

  get remaining() {
    return this.pool.length;
  }

  pick() {
    if (!this.pool.length) {
      return null;
    }
    const random = Math.floor(rand() * this.pool.length);
    const picked = this.pool[random];
    this.pool.splice(random, 1);
    return picked;
  }
}