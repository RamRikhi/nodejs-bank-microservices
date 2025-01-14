import { createClient } from "redis";

const redisClient = async () => {
  const client = createClient({
    url: "http://localhost:6369",
  });

  client.on("error", (err) => console.log("Redis Client Error", err));
};

module.exports = redisClient;
