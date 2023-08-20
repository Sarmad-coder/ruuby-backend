const dotenv = require("dotenv");

let ENV_FILE_NAME = ".env";
// switch (process.env.NODE_ENV) {
//   case "production":
//     ENV_FILE_NAME = ".env.production";
//     break;
//   case "staging":
//     ENV_FILE_NAME = ".env.staging";
//     break;
//   case "test":
//     ENV_FILE_NAME = ".env.test";
//     break;
//   case "development":
//   default:
//     ENV_FILE_NAME = ".env";
//     break;
// }

try {
  dotenv.config({ path: process.cwd() + "/" + ENV_FILE_NAME });
} catch (e) { }

// CORS when consuming Medusa from admin
const ADMIN_CORS =
  process.env.ADMIN_CORS ||
  [
    "http://localhost:7000",
    "http://localhost:7001",
    "http://95.179.207.65",
    "https://admin.ruuby.co",
    "https://ruuby-admin.pages.dev",
  ].join(",");

// CORS to avoid issues when consuming Medusa from a client
const STORE_CORS = process.env.STORE_CORS || ["http://localhost:8000", "http://localhost:8010", "https://ruuby.co"].join(",");

// Database URL (here we use a local database called medusa-development)
const DATABASE_URL = process.env.DATABASE_URL || `postgres://db_admin:abuzar.1047@95.179.207.65:5432/ruuby`;

// Medusa uses Redis, so this needs configuration as well
const REDIS_URL = process.env.REDIS_URL || "redis://95.179.207.65:6379";

// Stripe keys
const STRIPE_API_KEY = process.env.STRIPE_API_KEY || "";
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET || "";

// This is the place to include plugins. See API documentation for a thorough guide on plugins.
const plugins = [
  `medusa-fulfillment-manual`,
  `medusa-payment-manual`,
  // Uncomment to add Stripe support.
  // You can create a Stripe account via: https://stripe.com
  {
    resolve: `medusa-payment-stripe`,
    options: {
      api_key: STRIPE_API_KEY,
      webhook_secret: STRIPE_WEBHOOK_SECRET,
    },
  },

  // {
  // resolve: `medusa-file-s3`,
  // options: {
  //   s3_url: process.env.S3_BUCKET_URL,
  //   bucket: process.env.S3_BUCKET_NAME,
  //   region: process.env.S3_BUCKET_REGION,
  //   access_key_id: Sprocess.env.S3_ACCESS_KEY_ID,
  //   secret_access_key: process.env.S3_SECRET_ACCESS_KEY,
  // },
  // },

  {
    resolve: "medusa-plugin-filestorage-local",
    options: {
      // The baseurl for your medusajs server
      serverBaseUrl: "https://api.ruuby.co/",
      // when enabled saves the file as a base64 encoded string inside the database (deleting that row is not yet supported)
      saveInDatabase: false, // recommended: false
      // the folder where your files are stored on the server
      fileLocation: "uploads/persistent/",
    },
  },
];

// console.log("Environment variables:", process.env);

module.exports = {
  projectConfig: {
    redis_url: REDIS_URL,
    // For more production-like environment install PostgresQL
    database_url: DATABASE_URL,
    database_type: "postgres",
    // database_database: "./medusa-db.sql",
    // database_type: "sqlite",
    store_cors: STORE_CORS,
    admin_cors: ADMIN_CORS,
    jwt_secret: process.env.JWT_SECRET,
    cookie_secret: process.env.COOKIE_SECRET,
  },
  modules: {
    eventBus: {
      resolve: "@medusajs/event-bus-redis",
      options: {
        redisUrl: REDIS_URL,
      },
    },
    cacheService: {
      resolve: "@medusajs/cache-redis",
      options: {
        redisUrl: REDIS_URL,
      },
    },
  },
  plugins,
};


