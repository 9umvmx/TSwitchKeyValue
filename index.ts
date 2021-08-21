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


type SwapKeyValue<T extends Record<string ,string>> = {
  [K in T[keyof T] ]: ModelKeyValue<T, K>['key'];
};

// type SwapKeyValue<T extends Record<string ,string>> = {
//   [K in T[keyof T] ]: T[K]
// };

// *  *  *   Utils
type CreateStructure<T extends { [key: string]: string; }> = {
  [key in keyof T]: {
    key: key,
    value: T[key]
  };
} // *  *  *
type ModelKeyValue<T extends {[key: string]: string}, K extends T[keyof T]  > = (
  Extract<
    CreateStructure<T>[keyof CreateStructure<T>],
    {
      // Перевернули значения
      value: K, // Известен
      key: keyof T // Неизвестен
    }
  >
);
