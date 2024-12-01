export function toBingoLabel(num: number | null) {
	if (num == null || num < 1 || num > 75) {
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

let values: Uint32Array | undefined;
const MAX = 512;
let count = MAX;
const LARGEST = 0x100000000;

function rand() {
	if (values == null || count === 0) {
		values = new Uint32Array(MAX);
		crypto.getRandomValues(values);
		count = MAX;
	}
	count -= 1;
	const rnd = values[count] / LARGEST;
	return rnd;
}

export class RandomNumberPool {
	pool: number[] = [];
	#start: number;
	#end: number;
	constructor(end: number, start = 1) {
		this.#start = start;
		this.#end = end;
		this.reset();
	}

	reset() {
		this.pool = [];
		for (let num = this.#start; num <= this.#end; num += 1) {
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
