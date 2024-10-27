const objectForThirdPartyLibrary = { importantProperty: "this is important" };

const objectProxy = new Proxy(objectForThirdPartyLibrary, {
  get(target, key) {
    console.log("Accessing key", key);
    return Reflect.get(target, key);
  },
});

function thirdParty(object) {
  object.importantProperty;
}

thirdParty(objectProxy);

// function performOperation(object, key, operation) {
//   return operation(object, key);
// }

// performOperation(objectForThirdPartyLibrary, "importantProperty", Reflect.has);

// const getPropFromObject = Reflect.get.bind(null, objectForThirdPartyLibrary);

// getPropFromObject("importantProperty");
