const logic = require("../logic/post");
const models = require("../models");
const init = require("./init");


beforeAll(() => {
    return init.initDb();
});

describe("Post Test", () => {
    it("creates new post", async () => {
        const req = init.mockRequest();
        const res = init.mockResponse();
        const user = await models.User.create({
            email: "test@test.com",
            password: "testtest",
            isActive: true
        });
        await logic.handlePostUploading("plik1.jpg", user.id, "Jakis opis test", req, res);
        expect(res.send).toHaveBeenCalledWith({ newPostId: 1 });
    });

    it("cant find post in db", async () => {
        const req = init.mockRequest();
        const res = init.mockResponse();
        await logic.getFileFromPost(3333, "test.jpg", req, res)
        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.send).toHaveBeenCalledWith();
    });

    it("cant find post in fs", async () => {
        const req = init.mockRequest();
        const res = init.mockResponse();
        const user = await models.User.create({
            email: "test2@test.com",
            password: "testtest",
            isActive: true
        });
        const post = await logic.handlePostUploading("test.jpg", user.id, "Jakis opis test", req, res);
        await logic.getFileFromPost(post.id, "test.jpg", req, res)
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith("File not found at server");
    });

    it("returns post", async () => {
        const req = init.mockRequest();
        const res = init.mockResponse();
        const user = await models.User.create({
            email: "test3@test.com",
            password: "testtest",
            isActive: true
        });
        const post = await logic.handlePostUploading("test.jpg", user.id, "Jakis opis test", req, res);
        await logic.getFileFromPost(res.send.mock.calls[0][0].newPostId, "test.jpg", req, res)
        expect(res.send).toHaveBeenCalledWith();
    });
});