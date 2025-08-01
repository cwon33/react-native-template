import { defineConfig } from 'orval';

export default defineConfig({
  api: {
    output: {
      mode: 'split',
      target: 'api/generated/endpoints.ts',
      schemas: 'api/generated/model',
      client: 'react-query',
      clean: true,
      mock: true,
      prettier: true,
      override: {
        mutator: {
          path: './api/axios-instance.ts',
          name: 'customAxios',
        },
      },
    },
    input: {
      // This will get overridden by /scripts/generate-api.ts
      target: './placeholder.yaml',
    },
  },
});
