const index = require('./index');

test('adds 1 + 2 equals 3', () => {
  expect(index.sum(1, 2)).toBe(3);
});

test('6 divide 2 equals 3', () => {
  expect(index.div(6, 2)).toBe(3);
});
