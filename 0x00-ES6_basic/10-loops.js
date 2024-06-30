export default function appendToEachArrayValue(array, appendString) {
  const NewArr = [];
  for (const idx of array) {
    NewArr.push(appendString + idx);
  }
  return NewArr;
}
