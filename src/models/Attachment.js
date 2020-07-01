import fs from 'fs';

class Attachment {
  constructor(fileName, path, contentType) {
    this.buildAttachment(fileName, path, contentType);
  }

  buildAttachment(fileName, path, type) {
    const fileRead = fs.readFileSync(path);
    const fileBase64 = fileRead.toString('base64');
    this.fileAttachment = {
      filename: fileName,
      content: fileBase64,
      contentType: type,
    };
  }

  getAttachment() {
    return { ...this.fileAttachment };
  }
}

export default Attachment;
