import fp from "fastify-plugin"
import { uploadFileHandler } from './upload.handler'

async function upload(server, options, done) {
    server.post('/upload', uploadFileHandler)

    done()
}

export const uploadPlugin = fp(upload);
