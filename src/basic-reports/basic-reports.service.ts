import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import { getEmploymentLetterReport, getHelloWorldReport } from 'src/reports';

//TODO: esto será optimizado



@Injectable()
export class BasicReportsService extends PrismaClient implements OnModuleInit {

    async onModuleInit() {
        await this.$connect();
        console.log('Connected to database');
    }

    constructor(private readonly printerService: PrinterService,) {
        super();
    }

    hello() {

        const docDefinition = getHelloWorldReport({ name: 'Jesús Pérez' });

        var doc = this.printerService.createPdf(docDefinition);

        return doc;
    }

    employmentLetter() {
        const docDefinition = getEmploymentLetterReport();

        var doc = this.printerService.createPdf(docDefinition);

        return doc;
    }


}
