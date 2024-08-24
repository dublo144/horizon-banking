import { Configuration, PlaidApi, PlaidEnvironments } from "plaid";

const plaidConfig = new Configuration({
  basePath: PlaidEnvironments.sandbox,
  baseOptions: {
    headers: {
      "PLAID-CLIENT-ID": process.env.PLAID_CLIENT_ID,
      "PLAID-CLIENT-SECRET": process.env.PLAID_CLIENT_SECRET,
    },
  },
});

export const plaidClient = new PlaidApi(plaidConfig);
