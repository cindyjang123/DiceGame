const HTTP_PORT = process.env.PORT || 8080;
const express = require('express');
const app = express();

function onHttpStart() {
  console.log(`Express http server listening on ${HTTP_PORT}`);
}
app.use(express.static(`${__dirname}/public`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(HTTP_PORT, onHttpStart);
