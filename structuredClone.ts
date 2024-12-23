const isPrimitive = (arg: unknown): arg is Primitive =>
  typeof arg != "object" && typeof arg != "function";

const myStructuredClone = <T>(arg: T): T => {
  if (isPrimitive(arg) || arg === null) {
    return arg;
  }

  if (typeof arg == "function") {
    const copy = arg.bind(this);
    return copy;
  }

  if (Array.isArray(arg)) {
    return arg.map(myStructuredClone);
  }

  if (typeof arg == "object") {
    const copy = {} as T;
    for (const [key, value] of Object.entries(arg)) {
      copy[key] = myStructuredClone(value);
    }
    return copy;
  }

  throw new Error("NOOOOOO");
};

type Primitive = string | number | undefined | null | bigint | symbol | boolean;

function handlePrimitive(value: Primitive) {
  //
}
