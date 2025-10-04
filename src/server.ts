import { env } from "./conf/env.js";
import app from "./app.js";

const port = env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});