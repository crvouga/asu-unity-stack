/**
 * Calculate the Levenshtein distance between two strings
 * @type {(a: string, b: string) => number}
 */
export const levenshteinDistance = (a, b) => {
  const matrix = Array.from({ length: a.length + 1 }, () => {
    return Array(b.length + 1).fill(0);
  });

  matrix.forEach((_, i) => {
    matrix[i][0] = i;
  });
  matrix[0].forEach((_, j) => {
    matrix[0][j] = j;
  });

  matrix.forEach((_, i) => {
    if (i === 0) return;
    matrix[i].forEach((__, j) => {
      if (j === 0) return;
      if (a[i - 1] === b[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1,
          matrix[i][j - 1] + 1,
          matrix[i - 1][j - 1] + 1
        );
      }
    });
  });

  return matrix[a.length][b.length];
};
