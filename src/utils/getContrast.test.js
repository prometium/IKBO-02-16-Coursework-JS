import getContrast from './getContrast';

test('white contrast is black', () => {
  expect(getContrast('#fff')).toBe('#000');
});

test('black contrast is white', () => {
  expect(getContrast('#000')).toBe('#fff');
});

test('#6200ea contrast is white', () => {
  expect(getContrast('#6200ea')).toBe('#fff');
});

test('#bdbdbd contrast is black', () => {
  expect(getContrast('#bdbdbd')).toBe('#000');
});
