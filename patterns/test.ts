// import * as config from "./singleton";

// config.API;

// —
// Older mobile browsers (pre-iOS 9 or Android 5) introduced a 300ms delay before registering clicks to differentiate single and double-tap events. Modern browsers handle this automatically if the viewport meta tag is present:
// <meta name="viewport" content="width=device-width, initial-scale=1">
// <p>You are <strong>the most important thing in my life</strong>. <em>You</em> are the joy of my life.</p>
// <p>And so, they both sat down and started talking about love. <i lang="fr">L'amour</i>.</p>
// The i stands for Idiomatic (relating to idioms). Unfortunately, this element has been used by popular libraries to represent icons which is absolutely not semantic. The i element is not used to represent icons
// The em element is meant to stress a word or a group of words. In contrast, the i element denotes an alternate voice or mood or a term in a different context or language without any extra stress

button.addEventListener(
  "click",
  () => {
    console.log("button clicked");
  },
  {
    once: true,
  }
);
// target / currentTarget

positions.insertAdjacentHTML(
  "beforeend",
  `<div class="position">2015-2020</div>`
);
// innerHTML += ... is inefficient because it recreates the entire HTML. This could also remove existing event listeners.
// Instead, when you want to add a piece of HTML, you should use the insertAdjacentHTML method.

class PaymentProcessor {
  pay(method: string, amount: number): void {
    if (method === "PayPal") {
      console.log(`Paid $${amount} using PayPal.`);
    } else if (method === "CreditCard") {
      console.log(`Paid $${amount} using Credit Card.`);
    } else {
      throw new Error("Unsupported payment method");
    }
  }
}

// Example usage:
const processor = new PaymentProcessor();
processor.pay("PayPal", 100); // Outputs: Paid $100 using PayPal.
processor.pay("CreditCard", 200); // Outputs: Paid $200 using Credit Card.
// Abstract class

abstract class PaymentMethod {
  abstract pay(amount: number): void;
}

// Concrete implementations
class PayPal extends PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid $${amount} using PayPal.`);
  }
}

class CreditCard extends PaymentMethod {
  pay(amount: number): void {
    console.log(`Paid $${amount} using Credit Card.`);
  }
}

// Centralized payment processing
function processPayment(paymentMethod: PaymentMethod, amount: number): void {
  paymentMethod.pay(amount);
}

// Example usage:
const paypal = new PayPal();
const creditCard = new CreditCard();

processPayment(paypal, 100); // Outputs: Paid $100 using PayPal.
processPayment(creditCard, 200); // Outputs: Paid $200 using Credit Card.
