class OldSystem {
  legacyRequest() {
    return "Data from the legacy system";
  }
}

class Adapter {
  constructor(oldSystem) {
    this.oldSystem = oldSystem;
  }

  newRequest() {
    const legacyData = this.oldSystem.legacyRequest();
    // Adapt the data or perform any necessary transformations
    return `Adapted: ${legacyData}`;
  }
}

const oldSystem = new OldSystem();
const adapter = new Adapter(oldSystem);

const result = adapter.newRequest();
console.log(result); // Output: 'Adapted: Data from the legacy system'

// https://dev.to/alexmercedcoder/oop-design-patterns-in-javascript-3i98
