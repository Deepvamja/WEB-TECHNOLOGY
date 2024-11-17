let m = new Map([
      ["a", 100],
      ["b", 200],
]);

console.log("Old value for key: 'b', "+m.get('b'));
m.set('b',1000)
console.log("New value for key: 'b', "+m.get('b'));
