"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fluent_ffmpeg_1 = __importDefault(require("fluent-ffmpeg"));
const ffmpeg_1 = __importDefault(require("@ffmpeg-installer/ffmpeg"));
fluent_ffmpeg_1.default.setFfmpegPath(ffmpeg_1.default.path);
fluent_ffmpeg_1.default("src/videos/신서유기 8.E07.201120.720p-NEXT.mp4", { timeout: 432000 }).addOptions([
    '-profile:v baseline',
    '-level 3.0',
    '-start_number 0',
    '-hls_time 10',
    '-hls_list_size 0',
    '-f hls'
]).output("src/videos/output.m3u8").on('end', () => {
    console.log('end');
}).run();
