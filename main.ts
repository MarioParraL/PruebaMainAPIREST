import { MongoClient } from "mongodb";

const MONGO_URL = Deno.env.get("MONGO_URL");
if (!MONGO_URL) {
  console.error("Please provide a MONGO_URL");
}

const mongoClient = new MongoClient(MONGO_URL);
await mongoClient.connect();
console.info("Connected to MongoDB");

const mongodb = mongoClient.db("MainAPIRESTDB");
const ContactsCollection = mongodb.collection("contacts");

const handler = async (req: Request): Promise<Response> => {
  const method = req.method;
  const url = new URL(req.url);
  const path = url.pathname;

  return new Response("Endpoint not found");
};

Deno.serve({ port: 3000 }, handler);
