require("dotenv").config();

module.exports = {
    development: {
      username: "gdbmkkajzxkpsc",
      password: "d598f1722479e97b1176c50a171f9ca33053d0f2097c8600dbec166849233c89",
      database: "d9k7gm1g4pp4b",
      host: "ec2-50-19-255-190.compute-1.amazonaws.com",
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    },
    test: {
      username: "postgres",
      password: "1234",
      database: "instagram_db",
      host: "127.0.0.1",
      dialect: "postgres",
    },
    production: {
      username: "gdbmkkajzxkpsc",
      password: "d598f1722479e97b1176c50a171f9ca33053d0f2097c8600dbec166849233c89",
      database: "d9k7gm1g4pp4b",
      host: "ec2-50-19-255-190.compute-1.amazonaws.com",
      dialect: "postgres",
      dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
        },
      },
    },
  };