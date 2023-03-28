import path from "path";
import fs from "fs";
import { NewsResponse } from "../../common/db/model/news/news.error";
import { createNewsService } from "../service/news.service";

export async function uploadNewsImageHandler(req, reply) {
    console.log(req.body);
    const file = req.body.file;
    if (!file) {
        throw NewsResponse.InvalidImage()
    };

    const name = '/file' + '-' + file.md5 + path.extname(file.name)

    const direction = path.join(__dirname, '../../..', '/uploads');

    const wstream = fs.createWriteStream(direction + name);
    wstream.write(file.data)

    wstream.end();

    await createNewsService({ imgUrl: name });
    console.log('File succesfully uploaded!');
    
    reply.success(name);
}
