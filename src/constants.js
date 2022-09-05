export const digitColor = {
  0: '#000000',
  1: '#8C4D19',
  2: '#DE4439',
  3: '#EF8228',
  4: '#FCD500',
  5: '#53C638',
  6: '#1A94D0',
  7: '#7E43B1',
  8: '#999999',
  9: '#FFFFFF',
};

export const multiplierColor = {
  1: '#000000',
  10: '#8C4D19',
  100: '#DE4439',
  1000: '#EF8228',
  10000: '#FCD500',
  100000: '#53C638',
  1000000: '#1A94D0',
  10000000: '#7E43B1',
  100000000: '#999999',
  1000000000: '#FFFFFF',
  0.1: '#FFB800',
  0.01: '#DCDCDC',
};

export const toleranceColor = {
  1: '#8C4D19',
  2: '#DE4439',
  0.5: '#53C638',
  0.25: '#1A94D0',
  0.10: '#7E43B1',
  0.05: '#999999',
  5: '#FFB800',
  10: '#DCDCDC',
};

export const tempcoeffColor = {
  100: '#8C4D19',
  50: '#DE4439',
  15: '#EF8228',
  25: '#FCD500',
  10: '#1A94D0',
  5: '#7E43B1',
};

export function numberToShorthand(num) {
  let formatter = Intl.NumberFormat('en', { notation: 'compact', maximumSignificantDigits: 3 });
  return formatter.format(num).replace('B', 'G').replace('K', 'k');
}