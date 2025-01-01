```javascript
const query = { name: /John/i }; // Case-insensitive search

const cursor = db.collection('users').find(query);

cursor.forEach((user) => {
  console.log(user);
});
```
This code snippet uses a case-insensitive regular expression for searching in MongoDB. If there is a large number of documents in the 'users' collection with a name field that contains 'John', this can cause performance issues and even lead to errors due to exhaustion of resources. For larger datasets it is recommended to use more selective query operators, such as $regex with case-insensitive flag set explicitly.