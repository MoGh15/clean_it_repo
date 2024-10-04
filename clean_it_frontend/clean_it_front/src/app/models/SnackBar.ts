export type SnackType = 'Success' | 'Error' | 'Warn' | 'Download' | 'Done';

export interface ISnackBarData {
    snackType: SnackType;
    message: string;
}
