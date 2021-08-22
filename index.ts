type Obj = {
  x: 'aa',
  y: 'bb'
}

const obj: SwapKeyValue<Obj> = {
  aa: 'x',
  bb: 'y'
}

const err1: SwapKeyValue<Obj> = {
  aa: 'x',
  bb: 'y6666666',
}
const err2: SwapKeyValue<Obj> = {
  aa: 'x',
  bb: 'y',
  dddddddddddddddd: 'zz'
}
const err3: SwapKeyValue<Obj> = {
  aa: 'x',
  bb: 'x'
}


type RecordString = Record<string, string>;

type SwapKeyValue<T extends RecordString> = {
  [K in ObjValues<T>]: ModelKeyValue<T, K>['key'];
};


// Зменить на RecordString в начале при открытие
type ObjValues<T extends Record<string, any>> = T[keyof T];
// *  *  *   Utils
<<<<<<< HEAD
type CreateStructure<T extends RecordString> = {
=======
type CreateStructure<T extends RecordString> = ObjValues<{
>>>>>>> 81f8a87 (Answer)
  [key in keyof T]: {
    // Значение не переворачиваю
    key: key,
    value: T[key]
  };
<<<<<<< HEAD
} // *  *  *
type ModelKeyValue<T extends RecordString, K extends ObjValues<T>> = (
  Extract<
    ObjValues<CreateStructure<T>>,
=======
}> // *  *  *
type ModelKeyValue<T extends RecordString, K extends ObjValues<T>> = (
  Extract<
    CreateStructure<T>,
>>>>>>> 81f8a87 (Answer)
    {
      // Перевернули значения
      value: K, // Известен
      key: keyof T // Неизвестен
    }
  >
);
