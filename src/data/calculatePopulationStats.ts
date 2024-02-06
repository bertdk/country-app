export function calculatePopulationStats(data: { population: number }[]) {
  const total = data.reduce((acc, { population }) => acc + population, 0);
  const average = total / data.length;
  return { total, average };
}
