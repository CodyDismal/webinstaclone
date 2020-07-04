const logic = require("../logic/auth");
const init = require("./init");

beforeAll(() => {
    return init.initDb();
});

describe("Auth Test", () => {
    it("can not create new user without login", async () => {
        const req = init.mockRequest();
        const res = init.mockResponse();
        await logic.registerUser(null, "1234", req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith("Brakujące hasło lub e-mail!");
    });

    it("can not create new user without password", async () => {
        const req = init.mockRequest();
        const res = init.mockResponse();
        await logic.registerUser("test@test.com", null, req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith("Brakujące hasło lub e-mail!");
    });

    it("creates new user", async () => {
        const req = init.mockRequest();
        const res = init.mockResponse();
        await logic.registerUser("test@test.com", "1234", req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalledWith();
    });

    it("cant login without password", async () => {
        const req = init.mockRequest();
        const res = init.mockResponse();
        await logic.loginUser("test@test.com", null, req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith("Błędne hasło lub e-mail!");
    });

    it("cant login without password", async () => {
        const req = init.mockRequest();
        const res = init.mockResponse();
        await logic.loginUser(null, "1234", req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith("Błędne hasło lub e-mail!");
    });

    it("cant login user with wrong email", async () => {
        const req = init.mockRequest();
        const res = init.mockResponse();
        await logic.registerUser("test@test.com", "1234", req, res);
        await logic.loginUser("NOTTEST@test.com", "1234", req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith("Błędne hasło lub e-mail!");
    });

    it("cant login user with wrong password", async () => {
        const req = init.mockRequest();
        const res = init.mockResponse();
        await logic.registerUser("test@test.com", "1234", req, res);
        await logic.loginUser("test@test.com", "123456789", req, res);
        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.send).toHaveBeenCalledWith("Błędne hasło lub e-mail!");
    });
});