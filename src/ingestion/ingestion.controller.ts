import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { parse } from 'csv-parse';

function parseCsv(buffer: Buffer): Promise<any[]> {
  return new Promise((resolve, reject) => {
    parse(buffer, { columns: true }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
@Controller('ingestion')
export class IngestionController {
  @Post('csv')
  @UseInterceptors(FileInterceptor('csvFile'))
  async uploadCsv(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 20000 }),
          new FileTypeValidator({ fileType: 'text/csv' }),
        ],
      }),
    )
    file: Express.Multer.File,
  ) {
    console.log(file);
    const parsedFile = await parseCsv(file.buffer);
    console.log(parsedFile);
  }
}
