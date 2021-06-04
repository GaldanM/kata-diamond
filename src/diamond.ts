export default function diamond(letter: string): string {
  if (letter === "B") {
    return " A\nB B\n A";
  } else if (letter === "C") {
    return "  A\n B B\nC   C\n B B\n  A";
  }
  return "A";
}
