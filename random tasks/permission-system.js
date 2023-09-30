// Task: User Permission System
// Create a function named checkPermissions that simulates a user permission system using JavaScript. Here's what it should do:

// Requirements:
// The function should accept three arguments:

// age (a number): representing the age of the user.
// accountType (a string): could be 'admin', 'moderator', or 'user'.
// permission (a string): the permission being requested, for example, 'deleteUser', 'viewContent', etc.
// Implement the following permission rules using ||, &&, and other logical operators:

// Users under the age of 18 should not have any permissions.
// Admins have all permissions.
// Moderators can only 'viewContent' and 'editContent'.
// Regular users can only 'viewContent'.
// Any other accountType should return an error message.
// Return a boolean true if the user has the requested permission, false otherwise. If the accountType is invalid, return an error message string.

// Examples:
// javascript
// Copy code
// checkPermissions(20, 'admin', 'deleteUser'); // Should return true
// checkPermissions(17, 'user', 'viewContent'); // Should return false
// checkPermissions(20, 'moderator', 'editContent'); // Should return true
// checkPermissions(25, 'unknown', 'viewContent'); // Should return an error message
// Note:
// Ensure you handle edge cases and invalid inputs appropriately and feel free to expand on this basic idea to make it more complex if you want more of a challenge!

// Happy coding!

function checkPermissions(age, accountType, action) {
  let permissions = false;
  if (age > 18) {
  }
  if (accountType == "admin") {
    permissions = true;
  }
  if (
    accountType == "moderator" &&
    (action == "viewContent" || action == "editContent")
  ) {
    permissions = true;
  }
  if (accountType == "user") {
  }

  return permissions;
  console.log(accountType);
}

console.log(checkPermissions(20, "admin", "deleteUser")); // Should return true
console.log(checkPermissions(17, "user", "viewContent")); // Should return false
console.log(checkPermissions(20, "moderator", "editContent")); // Should return true
console.log(checkPermissions(25, "unknown", "viewContent")); // Should return an error message
