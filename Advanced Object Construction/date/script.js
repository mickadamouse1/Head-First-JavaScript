
console.log("Current Time:");
var now = new Date();
console.log(now);

console.log(""); // Line breaks for readability

console.log("Current Date:");
var dateString = now.toString();
console.log(dateString);

console.log(""); // Line breaks for readability

console.log("Current Year:");
var theYear = now.getFullYear();
console.log(theYear);

console.log(""); // Line breaks for readability

console.log("Current Day of Week:");
var theDayOfWeek = now.getDay();
console.log(theDayOfWeek);

console.log(""); // Line breaks for readability

console.log("Birthday:");
var birthday = new Date("May 1, 1983");
console.log(birthday);

console.log(""); // Line breaks for readability

console.log("Time of Birth:");
var birthday2 = new Date("May 1 1983 08:03 pm");
console.log(birthday2);
