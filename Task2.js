const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

// 1.
const joinedString = colors.join(',');

// 2.
colors.splice(1, 2, 'purple', 'pink')

// 3.
colors.copyWithin(0, 1, 4);

// 4. 
const upperCaseColors = colors.map(color => color.toUpperCase());

// 5. 
const startsWithB = colors.find(color => color.startsWith('b'));

// 6. 
const selectedColors = colors.slice(1, 4);

