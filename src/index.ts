
// 1.

type Return<T> = T extends () => infer U ? U : undefined;

type Foo = () => number;

let returnTypeFoo: Return<Foo> = 7;

// 2.

type ReturnAndParamType<T> = T extends (a: infer N) => infer U ? [U, N] : undefined;

type Foo2 = (a: number) => string;

let returnTypeFoo2: ReturnAndParamType<Foo2> = ['string', 5];


// 3.

type Union<T, U> = {
    [K in keyof T & keyof U]:
      T[K] extends U[K] 
      ? T[K] 
      : never 
  }

let x = {
    a: 2,
    b: 'we',
    c: true
}

let y = {
    b: 'se',
    c: true
}


let tuy: Union<typeof x, typeof y> = {b:'tre', c: false};

