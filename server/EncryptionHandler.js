const crypto = require("crypto");
const secret = "pppppppppppppppppppppppppppppppp";

const encrypt = (password) => {
  const iv = Buffer.from(crypto.randomBytes(16));
  const secret = "pppppppppppppppppppppppppppppppp";
  const cipher = crypto.createCipheriv("aes-256-ctr", Buffer.from(secret), iv);

  const encryptedPassword = Buffer.concat([
    cipher.update(password),
    cipher.final(),
  ]);

  return {
    iv: iv.toString("hex"),
    password: encryptedPassword.toString("hex"),
  };
};

const decrypt = (encryption) => {
  //const iv = Buffer.from(crypto.randomBytes(16));
  const secret = "pppppppppppppppppppppppppppppppp";
  const decipher = crypto.createDecipheriv("aes-256-ctr",Buffer.from(secret),Buffer.from(encryption[0].hashed_password,"hex"));

  const decryptedPassword = Buffer.concat([
    decipher.update(Buffer.from(encryption[0].password,"hex")),
    decipher.final(),
  ]);

  //console.log(decryptedPassword);
  return decryptedPassword.toString();
};

module.exports = { encrypt, decrypt };
