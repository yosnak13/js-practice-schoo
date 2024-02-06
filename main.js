function getTriangleArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

const area1 = getTriangleArea(4, 5);
const area2 = getTriangleArea(2, 80);
console.log(area1); // 10
console.log(area2); // 80
