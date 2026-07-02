// const url = require("url");
// const obj = {
//   protocol: "https:",
//   host: "example.com",
//   pathname: "/p/a/t/h",
//   query: { name: "John", age: 30 },
// };
// const myUrl = url.format(obj);
// console.log(myUrl);
// 输出：'https://example.com/p/a/t/h?name=John&age=30'

const querystring = require("querystring");
const params = querystring.parse("name=John&age=30&hobby=coding");
console.log(params);
