const app = require('./index.js')
const port = 3001;

app.listen(port, () => console.log(`Your express server is listening on port: ${port}`))