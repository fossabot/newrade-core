"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapRootElement = exports.wrapPageElement = void 0;
const react_1 = __importDefault(require("react"));
const layout_1 = require("./src/layouts/layout");
const providers_1 = require("./src/layouts/providers");
/**
 * Gatsby Browser APIs
 *
 * @see https://www.gatsbyjs.com/docs/browser-apis/
 * @see https://www.gatsbyjs.com/docs/api-files-gatsby-browser/
 */
exports.wrapPageElement = ({ element, props }) => {
    return react_1.default.createElement(layout_1.Layout, Object.assign({}, props), element);
};
exports.wrapRootElement = ({ element, props }) => {
    return react_1.default.createElement(providers_1.Providers, null, element);
};