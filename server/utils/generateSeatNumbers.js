export function generateSeatNumbers(rows, seatsPerRow) {
  const seatNumbers = [];
  for (let i = 0; i < rows; i++) {
    const row = String.fromCharCode(65 + i);
    for (let j = 1; j <= seatsPerRow; j++) {
      seatNumbers.push(`${row}${j}`);
    }
  }
  return seatNumbers;
}
