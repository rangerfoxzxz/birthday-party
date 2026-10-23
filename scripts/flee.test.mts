import assert from "node:assert/strict";
import { pickFleePosition } from "../src/lib/flee.ts";

const bounds = { width: 360, height: 420 };
const button = { width: 96, height: 56 };
const current = { x: 30, y: 40 };
const pointer = { x: 78, y: 68 };

for (let i = 0; i < 40; i++) {
  const next = pickFleePosition(bounds, button, current, pointer);
  assert.ok(next.x >= 0 && next.x <= bounds.width - button.width);
  assert.ok(next.y >= 0 && next.y <= bounds.height - button.height);
  const moved = Math.hypot(next.x - current.x, next.y - current.y);
  const fromPointer = Math.hypot(next.x + button.width / 2 - pointer.x, next.y + button.height / 2 - pointer.y);
  assert.ok(moved > 20, `expected a visible jump, got ${moved}`);
  assert.ok(fromPointer > 60, `expected to leave the pointer, got ${fromPointer}`);
}

const tiny = pickFleePosition({ width: 80, height: 50 }, { width: 90, height: 60 }, { x: 0, y: 0 }, { x: 10, y: 10 });
assert.deepEqual(tiny, { x: 0, y: 0 });

console.log("flee position checks passed");
