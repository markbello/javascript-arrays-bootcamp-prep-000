function addElementToBeginningOfArray(arr, elt){
  const newArr = [elt, ...arr];
  return newArr;
}
