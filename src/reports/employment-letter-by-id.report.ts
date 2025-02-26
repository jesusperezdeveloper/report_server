import type { Content, StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import { headerSection } from "./sections/header.section";
import { DateFormatter } from "src/helpers";

interface ReportValues {
    employerName: string;
    employerPosition: string;
    employeeName: string;
    employeePosition: string;
    employeeStartData: Date;
    employeeHours: number;
    employeeWorkSchedule: string;
    eomployerCompany: string;
}


const style: StyleDictionary = {
    header: {
        fontSize: 24,
        bold: true,
        alignment: 'center',
        margin: [0, 80, 0, 45],
    },
    body: {
        fontSize: 12,
        alignment: 'justify',
        margin: [0, 15, 0, 15],

    },
    signature: {
        fontSize: 12,
        alignment: 'left',
        bold: true,
    },
    subheader: {
        fontSize: 25,
        bold: true,
        margin: [0, 15, 0, 15],
    },
    footer: {
        fontSize: 12,
        bold: true,
        margin: [0, 0, 0, 60],
        alignment: 'center',
    }
};



export const getEmploymentLetterByIdReport = (values: ReportValues): TDocumentDefinitions => {

    const {
        employerName,
        employerPosition,
        employeeName,
        employeePosition,
        employeeStartData,
        employeeHours,
        employeeWorkSchedule,
        eomployerCompany
    } = values;


    const docDefinition: TDocumentDefinitions = {
        styles: style,
        pageMargins: [40, 60, 40, 60],
        header: headerSection({
            showLogo: true,
            showDate: true,
            //title: 'CONSTANCIA DE EMPLEO',
        }),
        content: [
            {
                text: 'CONSTANCIA DE EMPLEO',
                style: 'header',
            },
            {
                text: `Yo, ${values.employerName}, en mi calidad de ${values.employerPosition} de ${values.eomployerCompany},
                por medio de la presente certifco que ${values.employeeName} ha sido empleado en nuestra
                empresa desde el ${DateFormatter.getDDMMMMYYYY(values.employeeStartData)}.
                \n\n
                Durante su empleo, el Sr./Sra. ${values.employeeName} ha desempeñado el cargo de ${values.employeePosition}, demostrando responsabilidad, compromiso y habilidades profesionales en sus
                labores.
                \n\n
                La jornada laboral del Sr./ Sra. ${values.employeeName} es de ${values.employeeHours} horas
                semanales, con un horario de ${values.employeeWorkSchedule}, cumpliendo con las políticas y
                procedimientos establecidos por la empresa.
                \n\n
                Esta constancia se expide a solicitud del interesado para los fines que considere conveniente.,
                \n\n`,
                style: 'body',
            },
            { text: `Atentamente:`, style: 'signature' },
            { text: `${values.employerName}`, style: 'signature' },
            { text: `${values.employerPosition}`, style: 'signature' },
            {
                text: `${values.eomployerCompany}`,
                style: 'signature'
            },
            {
                text: `${DateFormatter.getDDMMMMYYYY(new Date())}`,
                style: 'signature'
            }
        ],
        footer: {
            text: 'Para que conste y surta los efectos oportunos',
            style: 'footer',
        }
    }

    return docDefinition;
}