import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PrinterService } from 'src/printer/printer.service';
import { getEmploymentLetterByIdReport, getEmploymentLetterReport, getHelloWorldReport } from 'src/reports';

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


    async employmentLetterById(employeeId: number) {

        const employee = await this.employees.findUnique({ where: { id: employeeId, } })

        if (!employee) {
            throw new NotFoundException(`Employee with id ${employeeId} not found`);
        }

        console.log(employee);

        const docDefinition = getEmploymentLetterByIdReport({
            employerName: 'Jesús Pérez',
            employerPosition: 'Gerente Recursos Humanos',
            employeeName: employee.name,
            employeePosition: employee.position,
            employeeStartData: employee.start_date,
            employeeHours: employee.hours_per_day,
            employeeWorkSchedule: employee.work_schedule,
            eomployerCompany: 'Synergo Services'
        });

        var doc = this.printerService.createPdf(docDefinition);

        return doc;
    }

}
