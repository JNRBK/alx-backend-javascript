export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    const inblock = true;
    const inblock2 = false;

    task2 = inblock;
    task = inblock2;
  }
  return [task, task2];
}
