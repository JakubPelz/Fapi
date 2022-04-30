const app = require('express')();

app.get('/api', (req, res) => {
  res.json([{ name: 'Jakub', location: 'lipník' }]);
});

module.exports = app;
