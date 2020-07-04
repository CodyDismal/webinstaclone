const db = require("../models/index");

module.exports = {
    mockRequest: (sessionData) => {
        return {
            session: { data: sessionData },
        };
    },

    mockResponse: () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        res.send = jest.fn().mockReturnValue(res);
        res.end = jest.fn().mockReturnValue(res);
        return res;
    },

    mockModels: () => {
        const models = {};
        Object.keys(db).forEach((model) => {
            models[model] = {};
            models[model].findAll = jest.fn().mockReturnValue(models[model]);
            models[model].findOne = jest.fn().mockReturnValue(models[model]);
            models[model].create = jest.fn().mockReturnValue(models[model]);
        });
    },

    initDb: async () => {
        return db.sequelize.sync({ force: true, logging: false });
    }
}