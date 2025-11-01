import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,            // permite usar "describe", "it", "expect" sem importar
    environment: "node",      // ou "jsdom" se for para testar React/Next.js
    include: ["src/**/*.test.ts"], // localização dos testes
    coverage: {
      provider: "v8",         // opcional: cobertura de código
    },
  },
});