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

// Решая задачу я подумал, как программисты решают задачу для
// смены значений между двумя переменными. Создают третью временную переменную.
// Я  решил создать структуру {key, value}
type SwapKeyValue1<T extends RecordString> = {
  [K in ObjValues<T>]: ModelKeyValue<T, K>['key'];
};


type ObjValues<T extends Record<string, any>> = T[keyof T];
// *  *  *   Utils
type CreateModelSet<T extends RecordString> = ObjValues<{
  [key in keyof T]: {
    // Значение не переворачиваю
    key: key,
    value: T[key]
  };
}> // *  *  *
type ModelKeyValue<T extends RecordString, K extends ObjValues<T>> = (
  Extract<
    CreateModelSet<T>,
    {
      // Перевернули значения
      value: K, // Известен
      key: keyof T // Неизвестен
    }
  >
);





// Но задача решается проще, зная синтаксис typeScript
type SwapKeyValue<T extends RecordString> = {
  [key in keyof T as T[key]]: key
}
