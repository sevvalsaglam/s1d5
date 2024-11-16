const isPalindrom = require('./index.js');
// const isPalindrom = require('./solution.js');

describe('Palindrom Testleri', () => {
  test('teğet için true dönüyor mu?', () => {
    expect(isPalindrom('teğet')).toBe(true);
  });

  test('terminatör için false dönüyor mu?', () => {
    expect(isPalindrom('terminatör')).toBe(false);
  });

  test('Büyük küçük harfe dikkat ediyor', () => {
    expect(isPalindrom('Teğet')).toBe(true);
  });

  test('Fonksiyonun dönüş değeri boolean mı?', () => {
    const result = isPalindrom('teğet');
    expect(typeof result).toBe('boolean');
  });
});