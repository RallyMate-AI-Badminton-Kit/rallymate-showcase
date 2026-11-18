import assert from 'node:assert/strict';
import { Scoreboard } from './score.js';

const board = new Scoreboard();
for (const [id, side, taps, expected] of [
  ['red-1', 'red', 2, [1, 0]],
  ['red-1', 'red', 2, [1, 0]], // 同一事件重传
  ['blue-1', 'blue', 2, [1, 1]],
  ['blue-2', 'blue', 3, [1, 0]],
]) {
  const score = board.apply({ id, side, taps });
  assert.deepEqual(score, expected);
  console.log(id, score.join(' : '));
}
