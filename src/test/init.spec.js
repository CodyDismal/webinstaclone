
const models = require("../models");
const init = require("./init");

beforeAll(() => {
    return init.initDb();
});

describe("Init Test", () => {
    it("checks if database is empty", async () => {
        const users = await models.User.findAll();
        expect(users).toEqual([]);
    });
});