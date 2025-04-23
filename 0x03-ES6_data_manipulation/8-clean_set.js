export default function cleanSet(set, startString) {
  const newString = [];
  if (typeof startString !== 'string') {
    return '';
  }
  set.forEach((string) => {
    if (typeof string === 'string' && string.startsWith(startString)) {
      newString.push(string.slice(startString.length));
    }
  });
  return newString.join('-');
}
