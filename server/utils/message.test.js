const expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    // store res in var
    // assert from is correct
    // assert text match
    // createdAt is number.

    var from = 'Jen';
    var text = 'some text';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});
