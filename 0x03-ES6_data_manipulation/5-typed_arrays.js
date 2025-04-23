export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(
    new ArrayBuffer(length), 0, length,
  );

  const newArray = new Int8Array(buffer);
  newArray[position] = value;
  return view;
}
