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
  bb: 'y6',
  d: 'zz'
}
const err2: SwapKeyValue<Obj> = {
  aa: 'x',
  bb: 'y44',
  d: 'zz'
}
const err3: SwapKeyValue<Obj> = {
  aa: 'y',
  bb: 'y'
}


type SwapKeyValue<T extends Record<string ,string>> = {
  [K in T[keyof T] ]: Extract<ModelKeyValue<T, K>['value'], ModelKeyValue<T, K>>['value'];
};

// type SwapKeyValue<T extends Record<string ,string>> = {
//   [K in T[keyof T] ]: T[K]
// };

// *  *  *   Utils
type CreateStructure<T extends {[key: string]: string;} > = {
  [K in keyof T extends string ? keyof T :  never]: ModelKeyValue<T, K>;
} // *  *  *
type ModelKeyValue<T extends {[key: string]: string}, K extends string  > = {
  key: K;
  value: T[K];
}