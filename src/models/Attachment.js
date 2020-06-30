import fs from 'fs';

class Attachment {
    constructor(fileName, path, contentType) {
        this.buildAttachment(path, contentType);
    }

    buildAttachment(fileName, path, contentType) {
        const fileRead = fs.readFileSync(path);
        const fileBase64 = fileRead.toString('base64');
        this.fileAttachment = {
            filename: fileName,
            content: fileBase64,
            contentType: contentType
        };
    }

    getAttachment() {
        return this.fileAttachment;
    }
}

export default Attachment;
