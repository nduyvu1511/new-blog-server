"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var Tag = new mongoose_1.default.Schema({
    title: { type: String, required: true, unique: true, trim: true, lowercase: true },
}, { timestamps: true });
exports.default = mongoose_1.default.model("Tag", Tag);
