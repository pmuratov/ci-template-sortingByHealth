export default function sorter(arr) {
  let tempArr = [...arr];
  tempArr.sort((a, b) =>
    a.health < b.health ? 1 : a.health > b.health ? -1 : 0
  );
  return tempArr;
}
