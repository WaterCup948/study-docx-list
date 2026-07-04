const jwt = require("jsonwebtoken");
// const token = jwt.sign(payload, secretOrPrivateKey, [options, callback]);
// way-1
const token1 = jwt.sign(
  { userId: 123 }, // 你要存的数据（比如用户ID）
  "my-secret-key", // 密码钥匙（越长越安全）
  { expiresIn: "1h" } // 可选：设置过期时间（比如1小时后失效）
);
console.log(token1);
// 注意：密码钥匙
// 1. 密钥要保密：绝对不能写死在代码里，要用环境变量（process.env）
// 2. 不要存敏感信息：JWT可以被解码（只是不能篡改）
// 3. 合理设置有效期：根据业务需求设置长短

// way-2
//在生产环境中，为了避免密钥硬编码在代码中带来的安全风险，推荐使用环境变量来管理密钥。
// const token2 = jwt.sign(
//   { userId: 123 },
//   process.env.JWT_SECRET_KEY, // 从环境变量读取
//   { expiresIn: "1h" }
// );
// console.log(token2);
