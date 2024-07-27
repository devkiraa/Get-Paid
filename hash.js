const bcrypt = require('bcrypt');

bcrypt.hash('kiraa', 10, (err, hash) => {
  console.log(hash);
});
