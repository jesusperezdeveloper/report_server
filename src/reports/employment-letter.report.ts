import type { Content, StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces";
import { DateFormatter } from "src/helpers";

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

const logo: Content = {
    image: 'src/assets/tucan-code-logo.png',
    width: 100,
    height: 100,
    alignment: 'center',
    margin: [0, 0, 0, 50],
}

export const getEmploymentLetterReport = (): TDocumentDefinitions => {
    const docDefinition: TDocumentDefinitions = {
        styles: style,
        pageMargins: [40, 60, 40, 60],
        header: {
            margin: [20, 10, 20, 0],
            columns: [
                logo,
                {
                    text: DateFormatter.getDDMMMMYYYY(new Date()),
                    alignment: 'right',
                    margin: [0, 20, 0, 0],
                }
            ],
        },
        content: [
            {
                text: 'CONSTANCIA DE EMPLEO',
                style: 'header',
            },
            {
                text: `Yo, [Nombre del Empleador], en mi calidad de [Cargo del Empleador] de [Nombre de la Empresa],
                por medio de la presente certifco que [Nombre del Empleado] ha sido empleado en nuestra
                empresa desde el [Fecha de Inicio del Empleado].
                \n\n
                Durante su empleo, el Sr./Sra. [Nombre del Empleado] ha desempeñado el cargo de [Cargo del
                Empleado], demostrando responsabilidad, compromiso y habilidades profesionales en sus
                labores.
                \n\n
                La jornada laboral del Sr./ Sra. [Nombre del Empleado] es de [Número de Horas] horas
                semanales, con un horario de [Horario de Trabajo], cumpliendo con las políticas y
                procedimientos establecidos por la empresa.
                \n\n
                Esta constancia se expide a solicitud del interesado para los fines que considere conveniente.,
                \n\n`,
                style: 'body',
            },
            { text: `Atentamente:`, style: 'signature' },
            { text: `[Nombre del Empleador]`, style: 'signature' },
            { text: `[Cargo del Empleador]`, style: 'signature' },
            {
                text: `[Nombre de la Empresa]`,
                style: 'signature'
            },
            {
                text: `[Fecha de Emisión]`,
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