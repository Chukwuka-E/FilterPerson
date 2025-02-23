# FilterPersons - TypeScript User/Admin Filtering Utility

## 📌 Overview
Welcome to my **TypeScript User/Admin Filtering Utility!** This project was built to provide a simple yet powerful way to filter `User` and `Admin` objects based on type and additional criteria. It’s **type-safe**, supports **dynamic filtering**, and includes **debugging logs** for better visibility.

## ✨ Features
- ✅ **Filter by Type (`user` or `admin`)**
- ✅ **Filter by Additional Criteria (e.g., age, role, name)**
- ✅ **Strong TypeScript Type Safety**
- ✅ **Logging for Debugging**
- ✅ **Optional Filtering (Get All Users/Admins)**

## 🛠️ Installation & Setup
Ensure you have **Node.js** and **TypeScript** installed.

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/Chukwuka-E/FilterPerson.git
cd index.ts
```

### **2️⃣ Install TypeScript & ts-node**
```sh
npm install -g typescript ts-node
```

### **3️⃣ Run the Code**
#### **Option 1: Compile & Run**
```sh
tsc index.ts  # Compiles to index.js
node index.js # Runs the compiled JS file
```
#### **Option 2: Run Directly Using ts-node**
```sh
ts-node index.ts
```

## 📜 Usage

### **Example Code**
```typescript
// Example Usage
const users = filterPersons("user", usersAndAdmins, { age: 6 });
console.log("👤 Filtered Users:", users);

const admins = filterPersons("admin", usersAndAdmins, { role: "Manager" });
console.log("🔧 Filtered Admins:", admins);
```

### **Example Output**
```sh
🔍 Filtering for type: user
✅ Matching results: [ { type: 'user', name: 'chimobim', age: 6 } ]
👤 Filtered Users: [ { type: 'user', name: 'chimobim', age: 6 } ]

🔍 Filtering for type: admin
✅ Matching results: [ { type: 'admin', name: 'chizaram', role: 'Manager' } ]
🔧 Filtered Admins: [ { type: 'admin', name: 'chizaram', role: 'Manager' } ]
```

## 📌 Function Signature
```typescript
function filterPersons<T extends "user" | "admin">(
  persons: (User | Admin)[],
  personType: T,
  criteria: FilterCriteria<T extends "user" ? User : Admin> = {}
): (T extends "user" ? User[] : Admin[]);
```

## 📚 Types Used
```typescript
interface User {
  type: "user";
  name: string;
  age: number;
}

interface Admin {
  type: "admin";
  name: string;
  role: string;
}
```

## 🤝 Contribution
if you would like to add anything feel free to send an email to
## emenikechukwuka65@gmail.com. 
Hope you enjoyed it.
