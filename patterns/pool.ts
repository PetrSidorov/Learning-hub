class ObjectPool {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.pool = [];
  }

  create() {
    if (this.pool.length < this.maxSize) {
      // Create a new object and add it to the pool
      const obj = {
        /* Your object initialization code here */
      };
      this.pool.push(obj);
      return obj;
    } else {
      // Pool is full, cannot create more objects
      console.log("Pool is full. Cannot create more objects.");
      return null;
    }
  }

  reuse() {
    if (this.pool.length > 0) {
      // Reuse an object from the pool
      return this.pool.pop();
    } else {
      // Pool is empty, no objects available for reuse
      console.log("Pool is empty. No objects available for reuse.");
      return null;
    }
  }

  release(obj) {
    // Release an object back to the pool for reuse
    this.pool.push(obj);
  }
}

// Usage
const pool = new ObjectPool(5); // Create a pool with a maximum size of 5 objects

const obj1 = pool.create();
const obj2 = pool.create();
const obj3 = pool.create();

pool.release(obj2); // Release obj2 back to the pool for reuse

const obj4 = pool.reuse(); // Reuse an object from the pool (obj2)
