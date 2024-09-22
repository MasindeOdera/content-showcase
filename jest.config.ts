export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",  // Simulates browser environment for React components
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { tsconfig: './tsconfig.app.json' }],
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy", // Mocks CSS imports in tests
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"]
};
