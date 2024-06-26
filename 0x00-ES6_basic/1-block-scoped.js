/* eslint-disable*/
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;

    // task2 = inblock;
    // task = inblock2;
  }
  return [task, task2];
}
