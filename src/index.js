// Define a generic filterPersons function that returns different types based on personType
function filterPersons(persons, personType) {
    return persons.filter(function (person) { return person.type === personType; });
}
// Usage examples
var usersAndAdmins = [
    { type: 'user', name: 'chimobim', age: 6 },
    { type: 'admin', name: 'chizaram', role: 'Manager' },
];
var result1 = filterPersons(usersAndAdmins, 'user');
console.log(result1.length ? result1 : 'No users found.');
var result2 = filterPersons(usersAndAdmins, 'admin');
console.log(result2.length ? result2 : 'No admins found.');
