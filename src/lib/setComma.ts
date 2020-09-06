export default function (number: number): string {
  if (!number) return "?";
  let arr = (number + "").split("");
  if (arr.length === 3) return arr.join("");
  for (let i = arr.length - 3; i >= 0; i -= 3) {
    if (i === 0) return arr.join("");
    arr.splice(i, 0, ",");
  }
  return arr.join("");
}
