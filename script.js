'use strict';

const myObject = {
  firstName: 'Richard',
  lastName: 'Trisnosaputra',
};

const myObject2 = {
  firstName: 'Agus',
  lastName: 'Saraha',
};

const myObject3 = {
  firstName: 'Dian',
  lastName: 'Permesan',
  age: 28,
};

const myObject4 = {
  firstName: 'Dian',
  namaBelakang: 'Permesan',
};

const myObject5 = {
  nama: 'Edward',
};

const myObject6 = {
  firstName: 'Dian',
  namaBelakang: 'Permesan',
};

const myArrayObject = [myObject, myObject2, myObject3, myObject4];

function identicalObject(object1, object2) {
  const obj1Arr = Object.keys(object1);
  const obj2Arr = Object.keys(object2);

  if (obj1Arr.length !== obj2Arr.length) return false;

  for (const property of obj1Arr) {
    if (!obj2Arr.includes(property)) {
      return false;
    }
  }

  return true;
}

function arrayObjectInclude(arrayObject, object) {
  for (const obj of arrayObject) {
    if (identicalObject(obj, object)) return true;
  }
  return false;
}

console.log(arrayObjectInclude(myArrayObject, myObject5));
console.log(arrayObjectInclude(myArrayObject, myObject6));
