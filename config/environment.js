const path = require('path')
const development = {
  name: "development",
  secretOrKey: "5D34F7E618B22B4F45EBE2EAE8CDB",
  session_cookie_key: "asifhajosicrh89w34u9rjixp3purhw3oir",
  db: {
    password: "zuarCppdm4JleJpT",
    username: "samarth",
  },

  asset_path: "./assets",
  smtp: {
    host: "smtp.gmail.com",
    service: "gmail",
    port: 587,
    secure: false,
    auth: {
      user: "teamcodeial",
      pass: "pack6:ICU",
    },
  },
  GOOGLE_APPLICATION_CREDENTIALS: path.join(__dirname, "../config/qwiklabs-gcp-02-3a67ec5cb5bc-75e388f83074.json")
};
const production = {
  name: "production",
};

module.exports = development;