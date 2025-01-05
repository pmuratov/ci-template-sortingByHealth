export function sorter(a, b) {
  return a.health < b.health ? 1 : a.health > b.health ? -1 : 0;
}
