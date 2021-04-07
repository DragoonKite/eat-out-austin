const {format_name} = require('../utils/helpers')

test('format_name() returns a name with - instead of spaces', () => {
    const name = 'Testing Testing 1 2 3';

    expect(format_name(name)).toBe('Testing-Testing-1-2-3');
});