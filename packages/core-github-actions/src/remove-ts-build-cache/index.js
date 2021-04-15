"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core = __importStar(require("@actions/core"));
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const delimiter = path.sep;
try {
    const changedFiles = JSON.parse(core.getInput('changed-files'));
    const tsBuildInfoFilenames = JSON.parse(core.getInput('tsBuildInfoFiles'));
    core.info('changedFiles: ' + changedFiles.length);
    core.info('tsBuildInfoFilenames: ' + tsBuildInfoFilenames);
    tsBuildInfoFilenames.forEach((tsBuildInfoFilename) => {
        changedFiles.forEach((changedFile) => {
            const fileParts = path.dirname(changedFile).split(delimiter);
            let fileFound;
            do {
                const tsbuildInfoFile = path.join(fileParts.join(delimiter), tsBuildInfoFilename);
                // console.log('tsbuildInfoFile', fileParts, tsbuildInfoFile, fileParts.length);
                if (fs.existsSync(tsbuildInfoFile)) {
                    fileFound = tsbuildInfoFile;
                }
                fileParts.pop();
            } while (fileParts.length > 0 && !fileFound);
            if (fileFound) {
                core.info('removing ts buildinfo file ' + fileFound);
                fs.unlinkSync(fileFound);
            }
        });
    });
}
catch (error) {
    core.setFailed(error.message);
}
//# sourceMappingURL=index.js.map