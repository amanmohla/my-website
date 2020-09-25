import { parse } from 'date-fns';

export const parsePostDate = (date: string): string =>
    parse(date, 'dd-M-yyyy', new Date()).toString();
