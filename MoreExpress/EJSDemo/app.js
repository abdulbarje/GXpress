var neo4j = require('neo4j-driver');
(async () => {
  // URI examples: 'neo4j://localhost', 'neo4j+s://xxx.databases.neo4j.io'
  const URI = '<URI to Neo4j database>';
  const USER = '<Username>';
  const PASSWORD = '<Password>';
  let driver;

  try {
    driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD));
    const serverInfo = await driver.getServerInfo();
    console.log('Connection established');
    console.log(serverInfo);
  } catch (err) {
    console.log(`Connection error\n${err}\nCause: ${err.cause}`);
  }
})();

var express = require('express');

var app = express();

// "/" => "hello there"
app.get('/', function (req, res) {
  res.render('cat');
});

app.use(express.static('public'));
app.set('view engine', 'ejs');

// "/" => "hello there"
app.get('/home', function (req, res) {
  res.render('home');
});

// "/" => "hello there"
app.get('/fallinLovewith/:thing', function (req, res) {
  var thing = req.params.thing;
  res.render('love', { thingvar: thing });
});

// "/" => "hello there"
app.get('/posts', function (req, res) {
  var posts = [
    { title: 'Post 1', author: 'Shamoo' },
    { title: 'What an unbelievsble thing', author: 'Sagy' },
    { title: 'I love big dogs', author: 'ABI' },
  ];
  res.render('posts', { posts: posts });
});

// Get the name of all 42 year-olds
const { records, summary, keys } = await driver.executeQuery(
  'MATCH (p:Person {age: $age}) RETURN p.name AS name',
  { age: 42 },
  { database: 'neo4j' }
);

// Summary information
console.log(
  `>> The query ${summary.query.text} ` +
    `returned ${records.length} records ` +
    `in ${summary.resultAvailableAfter} ms.`
);

// Loop through results and do something with them
console.log('>> Results');
for (record of records) {
  console.log(record.get('name'));
}

// tell express to listen for request (start server)
app.listen(process.env.PORT, process.env.IP, function () {
  console.log('servser has started');
});
