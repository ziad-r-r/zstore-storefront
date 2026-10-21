import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "./openapi.yaml",
    output: {
      mode: "tags-split",
      target: "../api-client-react/src/generated/api.ts",
      schemas: "../api-client-react/src/generated",
      client: "react-query",
      override: {
        mutator: {
          path: "../api-client-react/src/custom-fetch.ts",
          name: "customFetch",
        },
      },
    },
  },
  zod: {
    input: "./openapi.yaml",
    output: {
      mode: "tags-split",
      target: "../api-zod/src/generated/api.ts",
      schemas: "../api-zod/src/generated/types",
      client: "zod",
    },
  },
});
