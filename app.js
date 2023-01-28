alert('Please enter your data');
let userName = prompt('Enter your name');
alert(`Your name is:${userName}`);
let surName = prompt('Enter your surname');
alert(`Your full name is:${userName} ${surName}`);
let age = prompt('How old are you?');
alert(`Your full name is:${userName} ${surName}, your age is:${age}`);
let access=confirm('Are you admin?');
alert(`Your full name is:${userName} ${surName}, your age is:${age}, admin status:${access}`);


let codeExample=`You can ignore single and double quotes like this: \\\' \\\' \\\" \\\" \\\"`;
console.log(codeExample);