//launching express server:
const express = require('express');

const app = express();

///ejs rendering setup:
app.set('view engine', 'ejs');
app.use(express.static('public')); //show path to static files for express

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000, () => {
  console.log('Server has started on port 3000...');
});
