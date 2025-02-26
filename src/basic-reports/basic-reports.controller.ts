import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { BasicReportsService } from './basic-reports.service';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(private readonly basicReportsService: BasicReportsService) { }


  @Get()
  async hello(@Res() response: Response) {
    const pdfDoc = this.basicReportsService.hello();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Author = 'Synergo Services';
    pdfDoc.info.Title = 'Hola Mundo.pdf';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('employment-letter')
  async employmentLetter(@Res() response: Response) {
    const pdfDoc = this.basicReportsService.employmentLetter();

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Author = 'Synergo Services';
    pdfDoc.info.Title = 'Certificado de Empleado.pdf';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('employment-letter/:employeeId')
  async employmentLetterById(
    @Res() response: Response,
    @Param('employeeId') employeeId: string
  ) {
    const pdfDoc = await this.basicReportsService.employmentLetterById(+employeeId);

    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Author = 'Synergo Services';
    pdfDoc.info.Title = 'Certificado de Empleado.pdf';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
