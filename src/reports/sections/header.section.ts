import { Content, ContentImage } from "pdfmake/interfaces";
import { DateFormatter } from "src/helpers";

const logo: Content = {
    image: 'src/assets/tucan-code-logo.png',
    width: 100,
    height: 100,
    alignment: 'center',
    margin: [0, 0, 0, 50],
}

interface HeaderOptions {
    title?: String,
    subtitle?: String,
    showLogo?: boolean,
    showDate?: boolean,
}

export const headerSection = (options: HeaderOptions): Content => {

    const { title, subtitle, showLogo = true, showDate = true } = options;

    const headerLogo = showLogo ? logo : null;
    const headerDate: Content = showDate ? {
        text: DateFormatter.getDDMMMMYYYY(new Date()),
        alignment: 'right',
        margin: [20, 20],
    } : '';

    const headerTitle: Content = title ? {
        text: 'CONSTANCIA DE EMPLEO',
        style: {
            fontSize: 20,
            bold: true,
            alignment: 'center',

        },
    } : '';

    return {
        margin: [20, 10, 20, 0],
        columns: [
            headerLogo as ContentImage,
            headerTitle,
            headerDate,
        ],
    };


}