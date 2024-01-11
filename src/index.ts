
// 1.

type Return<T> = T extends () => infer U ? U : undefined;

type Foo = () => number;

let returnTypeFoo: Return<Foo>;

// 2.

type ReturnAndParamType<T> = T extends (a: infer N) => infer U ? [U, N] : undefined;

type Foo2 = (a: number) => string;

let returnTypeFoo2: ReturnAndParamType<Foo2> = ['string', 5];

// 3.

type Union<T, U> = T extends {[a: string | number]: infer N} ? {a: N} : undefined;

