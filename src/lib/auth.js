import dns from "node:dns";
dns.setServers(['8.8.8.8','8.8.4.4']);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

/* const uri = process.env.MONGO_URL;

if (!uri) {
  throw new Error("MONGO_URL is missing");
} */


const client = new MongoClient(process.env.MONGO_URL);
const db = client.db("DRAGON-News-DB");


export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),

   emailAndPassword: { 
    enabled: true, 
  },
   baseURL: process.env.BETTER_AUTH_URL, 
    socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_AUTH_SECRET, 
        }, 
    },
     socialProviders: {
        github: { 
            clientId: process.env.GITHUB_CLIENT_ID, 
            clientSecret: process.env.GITHUB_CLIENT_SECRET, 
        }, 
    },
});