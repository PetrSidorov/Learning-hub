function FormatDate({ value, ...props }: Parameters<typeof formatDate>[0]) {
    return <time date={value}>{formDate({ value, ...props })}</span>
}

function formatDate({ value, date, time, format, }: { value: string; date: boolean; time: boolean; format?: string; }) {
    // do formatting stuff based on `date`, `time`, `format`,
    return value;
}

function App() {
    return <Parent a b={"hi"} c ={2} />
}

function Parent(props: React.ComponentProps<typeof A> & React.ComponentProps<typeof B> & React.ComponentProps<typeof  C>) {
    return <>
        <A a={props.a} />
        <B b={props.b} />
        <C c={props.c} />
    </>
}

type Model = {
    a: NumericString; // '1' '2' '3'
    b: BooleanAsNumber | null;
}

type User = {
    id: UserId;
};

type UserId = number & { __tag: "userId" }; 

type Product  = {
    id: ProductId;
};

type ProductId = number & { __tag: "productId" };

function getUserById(id: User["id"]) {

}

const u: User = { id: 3 as UserId };
const p: Product = { id: 2 as ProductId };

getUserById(p.id);



type NumericString = string;
type BooleanAsNumber = 0 | 1





function A({ a }: { a: boolean }) {
}

function B({ b }: { b: string | null }) {

}

function C({ c }: { c: number}) {

}

type Maybe<T> = T | undefined 


