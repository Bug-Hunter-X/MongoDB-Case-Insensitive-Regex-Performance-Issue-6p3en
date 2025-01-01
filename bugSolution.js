```javascript
//Using an index for improved performance
db.collection('users').createIndex( { name: 'text' } );

const query = { $text: { $search: "John" } };

const cursor = db.collection('users').find(query);

cursor.forEach((user) => {
  console.log(user);
});

//Alternatively using $regex with explicit flag
const query2 = { name: { $regex: 'John', $options: 'i' } };

const cursor2 = db.collection('users').find(query2);

cursor2.forEach((user) => {
  console.log(user);
});
```