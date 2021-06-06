export default function diamond(letterToReach: string): string {
  if (letterToReach === "A") {
    return "A";
  }

  const firstHalf = buildFirstHalf(letterToReach);
  const secondHalf = buildSecondHalf(letterToReach);

  return [...firstHalf, ...secondHalf].join("\n");
}

function buildFirstHalf(letterToReach: string): string[] {
  const lines = [];
  const letterToReachCode = letterToReach.charCodeAt(0);
  let currentLetterCode = "A".charCodeAt(0);

  while (currentLetterCode <= letterToReachCode) {
    const line = buildLine(letterToReachCode, currentLetterCode);
    lines.push(line);
    currentLetterCode += 1;
  }

  return lines;
}

function buildSecondHalf(letterToReach: string): string[] {
  const lines = [];
  const letterToReachCode = letterToReach.charCodeAt(0);
  let currentLetterCode = letterToReach.charCodeAt(0) - 1;

  while (currentLetterCode >= "A".charCodeAt(0)) {
    const line = buildLine(letterToReachCode, currentLetterCode);
    lines.push(line);
    currentLetterCode -= 1;
  }

  return lines;
}

function buildLine(letterToReachCode: number, currentLetterCode: number): string {
  const spacesBefore = " ".repeat(letterToReachCode - currentLetterCode);
  const charToDisplay = String.fromCharCode(currentLetterCode);

  if (currentLetterCode === "A".charCodeAt(0)) {
    return `${spacesBefore}${charToDisplay}`;
  }

  const spacesBetween = " ".repeat((currentLetterCode - "A".charCodeAt(0)) * 2 - 1);
  return `${spacesBefore}${charToDisplay}${spacesBetween}${charToDisplay}`;
}
