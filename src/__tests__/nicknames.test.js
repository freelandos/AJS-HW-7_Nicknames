import Validator from '../nicknames';

test.each([
  ['only latinic letters in', 'megatron', true],

  ['only cyrillic letters in', 'Мегатрон', false],
  ['some latinic and cyrillic letters in', 'ДmegaИtronЛ', false],

  ['digit at the beginning of', '5megatron', false],
  ['symbol _ at the beginning of', '_megatron', false],
  ['symbol - at the beginning of', '-megatron', false],

  ['3 digits in a row in', 'mega333tron', true],
  ['4 digits in a row in', 'mega4444tron', false],

  ['some digits and valid symbols in', 'me333__ga-22---tron', true],

  ['digit at the end of', 'megatron5', false],
  ['symbol _ at the end of', 'megatron_', false],
  ['symbol - at the end of', 'megatron-', false],
])('testing validateUsername method with %s username', (_, username, expected) => {
  const validator = new Validator(username);
  const result = validator.validateUsername();

  expect(result).toBe(expected);
});
