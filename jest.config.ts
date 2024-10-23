import { config as dotenvConfig } from 'dotenv';
import { resolve } from 'path';


dotenvConfig({ path: resolve(__dirname, '.env.test') });

export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: './tsconfig.app.json' }],
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"]
};
