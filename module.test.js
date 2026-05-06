import mut from './module.js';

test('Testing sum -- success', () => {
  const expected = 30;
  const got = mut.sum(12, 18);
  expect(got).toBe(expected);
});

test('Testing div -- success', () => {
  const expected = 60;
  const got = mut.div(420, 7);
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- true', () => {
  const expected = true;
  const got = mut.containsNumbers('abc67');
  expect(got).toBe(expected);
});

test('Testing containsNumbers -- false', () => {
  const expected = false;
  const got = mut.containsNumbers('hello');
  expect(got).toBe(expected);
});

// Should return false for a string with only spaces, but currently returns true
test('Testing containsNumbers -- bug', () => {
  const expected = false;
  const got = mut.containsNumbers('   ');
  expect(got).toBe(expected);
});