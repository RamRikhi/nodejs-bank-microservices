import { createClient } from "redis";

  const client = createClient({
    url: "http://localhost:6369",
  });

  client.on("error", (err) => console.log("Redis Client Error", err));
  await client.connect()


module.exports = redisClient;