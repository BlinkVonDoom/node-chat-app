const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string value', () => {
    var string = 4;
    expect(isRealString(string)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var string = '   ';
    expect(isRealString(string)).toBe(false);
  });

  it('should allow valid strings', () => {
    var string = 'ab c ';
    expect(isRealString(string)).toBe(true);
  });
});
