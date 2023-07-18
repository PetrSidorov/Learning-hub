// console.log("process.argv", process.argv);

if (process.argv.length != 3) {
  console.error("usage: node password.mjs <password>");
  process.exit(1);
}

var password = process.argv[2].trim();

// 8 symb, at least: one digit, capital letter, special char
var passRules = [/[A-Z]/, /[a-z]/, /[0-9]/, /[@#$%^&*!?]/, /.{8}/];
var passwordPassesTests = passRules.every(function testPassword(rule) {
  return rule.test(password);
});
console.log(passwordPassesTests);
// var passwordFailed = false;

// for (let rule of passRules) {
//   if (!rule.test(password)) {
//     passwordFailed = true;
//     break;
//   }
// }

// console.log(!passwordFailed);