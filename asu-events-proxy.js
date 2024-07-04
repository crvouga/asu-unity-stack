const http = require("http");
const https = require("https");

const PORT = 8888;
const SERVER_URL = `http://localhost:${PORT}`;
const TARGET_URL = "https://asuevents.asu.edu/feed-json/sun_devil_athletics";

const server = http.createServer(async (req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  await new Promise(resolve => setTimeout(resolve, 1000));

  https
    .get(TARGET_URL, externalRes => {
      let data = "";

      // Collect data chunks
      externalRes.on("data", chunk => {
        data += chunk;
      });

      // Once the response is complete, send the data back to the client
      externalRes.on("end", () => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(data);
      });
    })
    .on("error", err => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(`Error fetching data: ${err.message}`);
    });
});

server.listen(PORT, () => {
  console.log(`Proxy server is running on port ${PORT}`);
  console.log(`Proxy server is forwarding requests to ${TARGET_URL}`);
  console.log(`Proxy server is accessible at ${SERVER_URL}`);
});
