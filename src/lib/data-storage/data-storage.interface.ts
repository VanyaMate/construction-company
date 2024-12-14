import { Quadrosphere } from '~/types/constructions.types';


export type DataStorageResponse<T> = {
    // Данные
    data: T;
    // Общее количество
    count: number;
}

export interface IDataStorage {
    getQuadrospheres (limit: number, offset: number): Promise<DataStorageResponse<Array<Quadrosphere>>>;
}