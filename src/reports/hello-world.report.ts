import type { TDocumentDefinitions } from "pdfmake/interfaces";

interface ReportOptions {
    name: String;
}

export const getHelloWorldReport = (options: ReportOptions): TDocumentDefinitions => {

    const { name } = options;


    const docDefinition: TDocumentDefinitions = {
        content: [`Hola ${name}`],
    }

    return docDefinition;

}