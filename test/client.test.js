import * as ZenClient from "../index.js";

const client = ZenClient.createFromToken("teste",
  "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJiMTFhOWVlNy1jNWM1LTRjMDQtOTJlYS1lYzBhODAxYzBlZTQiLCJzdWIiOiJzdXBwb3J0QHBlcnNvbmFsc29mdC5jb20uYnIiLCJuYmYiOjE3MDg0NzQ5NDcsImlhdCI6MTcwODQ3NDk0NywiZXhwIjoxNzA4NTYxMzQ3LCJsb2NhbGUiOiJwdC1CUiIsInRpbWVab25lIjoiQW1lcmljYS9TYW9fUGF1bG8ifQ.yXOPeZusmv2OMEGbfvy8SSWBBGvqSoeusWfVtLoKR0w");

// console.log(await new ZenClient.SaleService(client).saleOpPrepare(1166));
// console.log(await new ZenClient.SaleService(client).saleOpPrepareRevert(1166));
console.log(await new ZenClient.CatalogService(client).categoryRead());