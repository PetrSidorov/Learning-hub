class Singleton {
  static instance: Singleton | undefined;

  private constructor() {
    if (Singleton.instance) {
      throw Error("Use Singleton.getInstance()");
    }
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new this();
    }
    return this.instance;
  }
}

/*
declare s1 = new instance of singleton
declare s2 = new instance of singleton
s1 is s2
*/

var s1 = Singleton.getInstance();

console.log(s1);
console.log(Singleton.getInstance() === Singleton.getInstance());
// ------

interface Validator {
  validate(value: string): boolean;
}

class FormField implements Validator {
  validate() {
    return false;
  }
}

type ValidateType = {
  validate(value: string): boolean;
};

const validators: ValidateType[] = [
  {
    validate() {
      return false;
    },
  },
  new FormField(),
];

for (const validator of validators) {
  validator.validate("hi");
}
