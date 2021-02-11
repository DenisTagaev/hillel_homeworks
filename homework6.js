let array1 = [null, 54, "", undefined, 0, "String", " ", NaN, Infinity],
    array2 = [];

function removeNegative(value) {
  for (let i = 0; i < value.length; i++) {

    if(!array1 [i] === true) {
    /*Проверяем через булеан все что ближе к фолс,
    вырезаем из родительского массива, сохраняем значение,
    вставляем в дочерний */
      const deleted = array1.splice(i-, 1);
      array2.push(deleted);
    }
  }

    console.log(array1);
    /*Undefined выводится в консоль если ее не трогать,
    но как только пытаюсь присвоить в переменную,
    остается в первом массиве, почему? :( */
    console.log(array2);
    return;
}

removeNegative(array1);
