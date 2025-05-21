import { defineWorkersProject } from "@cloudflare/vitest-pool-workers/config"

export default defineWorkersProject({
  test: {
    poolOptions: {
      workers: {
        isolatedStorage: true,
        singleWorker: true,
        miniflare: {
          compatibilityDate: "2025-05-08",
          compatibilityFlags: ["nodejs_compat"],
        },
      },
    },
  },
})
