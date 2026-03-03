// 타입들 모두 배열에 넣고 카운트가 제일 높은것 추출
export function pickMostType(types = [], fallbackType = null) {
  const counts = {};

  for (const t of types) {
    if (!t) continue;
    counts[t] = (counts[t] || 0) + 1;
  }

  let bestType = fallbackType;
  let bestCount = -1;

  for (const [type, count] of Object.entries(counts)) {
    // 동점시 마지막 선택
    if (count > bestCount || (count === bestCount && type === fallbackType)) {
      bestType = type;
      bestCount = count;
    }
  }

  return bestType;
}
