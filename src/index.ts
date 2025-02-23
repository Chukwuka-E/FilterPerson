
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
     
     
     type ExcludeType<T> = Omit<T, 'type'>;
     
     
     function filterPersons<T extends 'user' | 'admin'>(
      persons: (User | Admin)[],
      personType: T
     ): (T extends 'user' ? User[] : Admin[]) {
      return persons.filter((person) => person.type === personType) as any;
     }
     
    // some examples
     const usersAndAdmins: (User | Admin)[] = [
      { type: 'user', name: 'Chimobim', age: 6 },
      { type: 'admin', name: 'chizaram', role: 'Manager' },
     ];
     
     const result1 = filterPersons(usersAndAdmins, 'user');
     console.log(result1.length ? result1 : 'No users found.');
     
     const result2 = filterPersons(usersAndAdmins, 'admin');
     console.log(result2.length ? result2 : 'No admins found.');
