"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Express Instance
var app_1 = __importDefault(require("./lib/app"));
var router = require('./routes/index');
app_1.default.use('/rest', router);
// Catch all 404 if not found
var http_errors_1 = __importDefault(require("http-errors"));
app_1.default.use(function (req, res, next) {
    next(http_errors_1.default(404, '404 Not Found!'));
});
var errorHandler_1 = __importDefault(require("./lib/errorHandler"));
app_1.default.use(errorHandler_1.default);
app_1.default.listen(process.env.PORT, function () {
    console.log('Listening on port: ' + process.env.PORT);
});
