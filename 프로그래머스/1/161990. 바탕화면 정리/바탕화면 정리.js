function solution(wallpaper) {
  let [minX, minY, maxX, maxY] = [Infinity, Infinity, -Infinity, -Infinity];

  wallpaper.forEach((cols, row) => {
    cols.split('').forEach((char, col) => {
      if (char === '#') {
        minX = minX > row ? row : minX;
        minY = minY > col ? col : minY;
        maxX = maxX < row ? row : maxX;
        maxY = maxY < col ? col : maxY;
      }
    });
  });

  return [minX, minY, maxX + 1, maxY + 1];
}