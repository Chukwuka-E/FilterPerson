// Define User and Admin types
interface User {
      type: 'user';
      name: string;
      age: number;
     }
     
     interface Admin {
      type: 'admin';
      name: string;
      role: string;
     }
     
     // Create a utility type to exclude the 'type' field from an object
     type ExcludeType<T> = Omit<T, 'type'>;
     
     // Define a generic filterPersons function that returns different types based on personType
     function filterPersons<T extends 'user' | 'admin'>(
      persons: (User | Admin)[],
      personType: T
     ): (T extends 'user' ? User[] : Admin[]) {
      return persons.filter((person) => person.type === personType) as any;
     }
     
     // Usage examples
     const usersAndAdmins: (User | Admin)[] = [
      { type: 'user', name: 'Chimobim', age: 6 },
      { type: 'admin', name: 'chizaram', role: 'Manager' },
     ];
     
     const result1 = filterPersons(usersAndAdmins, 'user');
     console.log(result1.length ? result1 : 'No users found.');
     
     const result2 = filterPersons(usersAndAdmins, 'admin');
     console.log(result2.length ? result2 : 'No admins found.');