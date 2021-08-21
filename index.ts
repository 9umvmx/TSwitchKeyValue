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
  aa: 'x', // Известен
  bb: 'y44',
  d: 'zz'
}
const err3: SwapKeyValue<Obj> = {
  aa: 'y',
  bb: 'y'
}


type RecordString = Record<string, string>;
type SwapKeyValue<T extends RecordString> = {
  [K in ObjValues<T>]: ModelKeyValue<T, K>['key'];
};


// *  *  *   Utils
type CreateStructure<T extends RecordString> = {
  [key in keyof T]: {
    // Значение не переворачиваю
    key: key,
    value: T[key]
  };
} // *  *  *
type ObjValues<T extends Record<string, any>> = T[keyof T];
type ModelKeyValue<T extends RecordString, K extends T[keyof T]  > = (
  Extract<
    ObjValues<CreateStructure<T>>,
    {
      // Перевернули значения
      value: K, // Известен
      key: keyof T // Неизвестен
    }
  >
);
