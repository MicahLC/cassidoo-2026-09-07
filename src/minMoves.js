function minMoves(startCode, endCode) {
  if (startCode.length !== endCode.length)
  {
    return -1;
  }
  let totalDiff = 0;
  for(let i = 0; i < startCode.length; ++i) {
    let start = parseInt(startCode[i]), end = parseInt(endCode[i]);
    let diff = Math.abs(start - end);
    if (diff > 5)
    {
      diff = 10 - diff;
    }
    totalDiff += diff;
  }
  return totalDiff;
}

module.exports = {
  minMoves,
};
