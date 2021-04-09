const {format_name, format_phone} = require('../utils/helpers')

test('format_name() returns a name with - instead of spaces', () => {
    const name = 'Testing Testing 1 2 3';

    expect(format_name(name)).toBe('Testing-Testing-1-2-3');
});


test('format_phone() returns a number with - instead of all one string', () => {
    const phone = '1234567890'
    
    expect(format_phone(phone)).toBe('123-456-7890');
});