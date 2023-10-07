import expect from "expect"
import { it, describe, beforeEach } from "mocha"
import { restore, stub } from "sinon"
import axios from "axios"
import { foo } from "../foo"

describe("foo", () => {
	beforeEach(() => {
		restore()
	})

	it("do somethings", async () => {
		stub(axios, "get").resolves({ data: { title: "foo" } })

		const res = await foo()

		expect(res).toBe("foo")
	})
})
