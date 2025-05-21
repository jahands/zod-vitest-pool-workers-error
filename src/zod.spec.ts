import { describe, it, expect } from "vitest"
import { z } from "zod/v4"

describe("zod", () => {
  describe("parse", () => {
    it("should parse a string", () => {
      const schema = z.string()
      const result = schema.parse("hello")
      expect(result).toBe("hello")
    })
  })
})
