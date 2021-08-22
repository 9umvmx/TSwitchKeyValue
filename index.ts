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

// Как создать generic?
type SwapKeyValue<T> = any









