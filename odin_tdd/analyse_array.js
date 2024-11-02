export function analyseArray(arr) {
  let properties = {
    average: 0,
    min: arr[0],
    max: arr[0],
    length: 0,
  };

  let total = 0;
  arr.forEach((element) => {
    properties.length++;
    total += element;
    properties.max = element > properties.max ? element : properties.max;
    properties.min = element < properties.min ? element : properties.min;
  });

  properties.average = total / properties.length;

  return properties;
}
