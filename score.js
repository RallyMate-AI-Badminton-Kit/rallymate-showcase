// 展示用的单局回合计分。用事件编号识别重传。
export class Scoreboard {
  #points = [];
  #seen = new Set();

  apply({ id, side, taps }) {
    if (!id || !['red', 'blue'].includes(side) || ![2, 3].includes(taps)) {
      throw new TypeError('需要事件编号、红蓝方及双击或三击');
    }
    if (this.#seen.has(id)) return this.score;
    this.#seen.add(id);
    if (taps === 2) this.#points.push(side);
    else if (this.#points.at(-1) === side) this.#points.pop();
    return this.score;
  }

  get score() {
    const red = this.#points.filter(side => side === 'red').length;
    return [red, this.#points.length - red];
  }
}
