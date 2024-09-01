abstract class Pet {
    abstract String speak();
}

class Cat extends Pet {
    String speak() {
        return "Meow!";
    }
}

class Dog extends Pet {
    String speak() {
        return "Woof!";
    }
}

static void letsHear(final Pet pet) {
    println(pet.speak());
}

static void main(String[] args) {
    letsHear(new Cat());
    letsHear(new Dog());
}