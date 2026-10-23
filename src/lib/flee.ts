export type Size = { width: number; height: number };
export type Point = { x: number; y: number };

export function pickFleePosition(
  bounds: Size,
  button: Size,
  current: Point,
  pointer: Point,
): Point {
  const maxX = Math.max(0, bounds.width - button.width);
  const maxY = Math.max(0, bounds.height - button.height);
  const reach = Math.hypot(bounds.width, bounds.height);
  const minPointer = Math.max(64, Math.min(150, reach * 0.34));
  const minMove = Math.max(40, Math.min(110, Math.min(bounds.width, bounds.height) * 0.2));

  let best: Point | null = null;
  let bestScore = -Infinity;

  for (let i = 0; i < 28; i++) {
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    const fromPointer = Math.hypot(x + button.width / 2 - pointer.x, y + button.height / 2 - pointer.y);
    const fromCurrent = Math.hypot(x - current.x, y - current.y);
    if (fromPointer < minPointer || fromCurrent < minMove) continue;
    const score = fromPointer + fromCurrent * 0.45;
    if (score > bestScore) {
      bestScore = score;
      best = { x, y };
    }
  }

  if (best) return best;

  const corners: Point[] = [
    { x: 0, y: 0 },
    { x: maxX, y: 0 },
    { x: 0, y: maxY },
    { x: maxX, y: maxY },
  ];

  return corners.reduce((winner, corner) => {
    const cornerScore =
      Math.hypot(corner.x + button.width / 2 - pointer.x, corner.y + button.height / 2 - pointer.y) +
      Math.hypot(corner.x - current.x, corner.y - current.y);
    const winnerScore =
      Math.hypot(winner.x + button.width / 2 - pointer.x, winner.y + button.height / 2 - pointer.y) +
      Math.hypot(winner.x - current.x, winner.y - current.y);
    return cornerScore > winnerScore ? corner : winner;
  });
}
