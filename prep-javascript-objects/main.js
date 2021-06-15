var person = {
  firstName: 'Isaac',
  lastName: 'Hsu',
  hobby: 'Ultimate Frisbee'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log('The person\'s name is:', fullName);
person.job = 'Unemployed';
console.log('The person\'s current job is:', person.job);
person.previousJob = 'Student';
console.log('The person\'s previous job is:', person.previousJob);
console.log(person);
