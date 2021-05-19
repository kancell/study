const ClassObject = {
  type: {
    primary: ['bg-blue-middle', 'text-white', 'bordered'],
    pure: ['bg-white', 'text-blue-middle', 'bordered'],
    text: ['bg-blue-middle', 'text-white', 'bordered'],
  },
  size: {
    large: ['w-96', 'h-32'],
    middle: ['w-48', 'h-24'],
    small: ['w-36', 'h-16'],
  },
};

const ClassMap = new Map([
  ['type', new Map([
    ['primary', ['bg-blue-middle', 'text-white', 'bordered']],
    ['pure', ['bg-white', 'text-blue-middle', 'bordered']],
    ['text', ['bg-blue-middle', 'text-white', 'bordered']],
  ])],
  ['size', new Map([
    ['large', ['w-96', 'h-32']],
    ['middle', ['w-48', 'h-24']],
    ['small', ['w-36', 'h-16']],
  ])],
]);


let proxy1 = new Proxy(ClassObject, {
  set(taget, props) {
    console.log(13213)
    return true
  }
});

proxy1.type.primary = 1


interface Obj {
  a: Function;
  b: string;
}

let obj: Obj = {
  a: function() { return 'aaa'; },
  b: 'bbbb'
};


function typedKeys<T>(o: T): (keyof T)[] {
  // type cast should be safe because that's what really Object.keys() does
  return Object.keys(o) as (keyof T)[];
}


// type-checked dynamic property access
typedKeys(obj).forEach(k => console.log(obj[k]));

// verify that it's indeed typechecked
typedKeys(obj).forEach(k => {
  let a: string = obj[k]; //  error TS2322: Type 'string | Function'                         // is not assignable to type 'string'                        //  Type 'Function' is not assignable to type 'string'.
});