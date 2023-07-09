import { MongoClient, Db } from "mongodb";
import { ConfigError } from "../lib/interfaces/errors/configerror";

const { MONGO_URI, MONGO_DB, MONGO_UNAME, MONGO_PWD } = process.env;

if (!MONGO_URI) {
  throw new ConfigError({
    message: "No URI for Database available",
    data: {
      message: "Please check configuration files for DB URI",
    },
  });
}

if (!MONGO_DB) {
  throw new ConfigError({
    message: "No DB name available",
    data: {
      message: "Please check configuration files for DB name",
    },
  });
}

export interface ICachedConnection {
  client?: MongoClient;
  db?: Db;
}

export interface IConnectionCache {
  conn?: ICachedConnection;
  promise?: Promise<any>;
}

let cached: IConnectionCache = (global as any).mongo;
if (!cached) {
  cached = (global as any).mongo = {};
}

const dbConnect = async (): Promise<ICachedConnection | undefined> => {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const conn: ICachedConnection = {};

    const username = encodeURIComponent(MONGO_UNAME ?? "");
    const password = encodeURIComponent(MONGO_PWD ?? "");
    const cluster_url = MONGO_URI;
    const authMechanism = "DEFAULT";

    let url = `mongodb://${cluster_url}`;
    if (username.length) {
      url = `mongodb+srv://${username}:${password}@${cluster_url}/?authMechanism=${authMechanism}`;
    }

    try {
      const client = new MongoClient(url);
      cached.promise = client.connect();
      conn.client = await cached.promise;
      conn.db = client.db(MONGO_DB);
      cached.conn = conn;
    } catch (e) {
      console.error("An error occurred while connecting to the database");
      console.error(e);
    }
  }

  return cached.conn;
};

export const isDBConnected = (): boolean => {
  return !!cached.conn && !!cached.conn.client && !!cached.conn.db;
};

export default dbConnect;
