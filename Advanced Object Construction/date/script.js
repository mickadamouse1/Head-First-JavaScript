var now = new Date();
console.log(`Full Date:-- ${now} -- ${typeof now}`);

var dateString = now.toString();
console.log(`Date String:-- ${dateString} -- ${typeof dateString}`);

var theYear = now.getFullYear();
console.log(`Current Year:-- ${theYear} -- ${typeof theYear}`);

var theDayOfWeek = now.getDay();
console.log(`Current Day:-- ${theDayOfWeek} -- ${typeof theDayOfWeek}`);

var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
console.log(`Current Day:-- ${days[theDayOfWeek - 1]} -- ${typeof days[theDayOfWeek - 1]}`);

var birthday = new Date("March 1, 1997 05:25 pm");
console.log(`My Birthday:-- ${birthday} -- ${typeof birthday}`);
