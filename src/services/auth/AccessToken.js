const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

function createAccessToken(userId) {
  const accessToken = jwt.sign({ userId }, JWT_SECRET, { expiresIn: "24h" });
  console.log("access Token", accessToken);
}

function decodeAccessToken(accessToken) {
  const decodedToken = jwt.verify(accessToken, JWT_SECRET);

  console.log("decoded Token", decodedToken);

  return decodedToken;
}

module.exports = { createAccessToken, decodeAccessToken };
