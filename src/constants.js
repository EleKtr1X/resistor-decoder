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
  9: '#EEEEEE',
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
  1000000000: '#EEEEEE',
  0.1: 'url(#gold)',
  0.01: 'url(#silver)',
};

export const toleranceColor = {
  1: '#8C4D19',
  2: '#DE4439',
  0.5: '#53C638',
  0.25: '#1A94D0',
  0.1: '#7E43B1',
  0.05: '#999999',
  5: 'url(#gold)',
  10: 'url(#silver)',
};

export const tempcoeffColor = {
  250: '#000000',
  100: '#8C4D19',
  50: '#DE4439',
  15: '#EF8228',
  25: '#FCD500',
  20: '#53C638',
  10: '#1A94D0',
  5: '#7E43B1',
  1: '#999999'
};

export const contrastColors = {
  '#000000': '#FFF',
  '#8C4D19': '#FFF',
  '#DE4439': '#000',
  '#EF8228': '#000',
  '#FCD500': '#000',
  '#53C638': '#000',
  '#1A94D0': '#000',
  '#7E43B1': '#FFF',
  '#999999': '#000',
  '#EEEEEE': '#000',
  'url(#gold)': '#000',
  'url(#silver)': '#000',
}

export function numberToShorthand(num) {
  let formatter = Intl.NumberFormat('en', { notation: 'compact', maximumSignificantDigits: 3 });
  return formatter.format(num).replace('B', 'G').replace('K', 'k');
}