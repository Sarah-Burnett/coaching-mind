const express = require("express");

const app = express();

const { Client } = require("pg");
const client = new Client({
	connectionString:
		"postgres://wconxamlnvwqvj:b0b1b77ad68f57f69dc49327b026ca785ec84504cfd14ee5fb5ee3ebff8de5be@ec2-3-233-236-188.compute-1.amazonaws.com:5432/dde7f5ddm6f94h",
	ssl: {
		rejectUnauthorized: false,
	},
});
(async () => {
	await client.connect();
    console.log("connected to pg");
	await client.end();
})();

app.listen(3000, () => console.log("server listening on port 3000"));
