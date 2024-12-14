import {
    DataStorageResponse,
    IDataStorage,
} from '~/lib/data-storage/data-storage.interface';
import {
    DataStorage
} from '~/lib/data-storage/implementations/local-data-storage/storage/dataStorage';
import { Quadrosphere } from '~/types/constructions.types';


export class LocalDataStorageService implements IDataStorage {
    constructor (private readonly _storage: DataStorage) {
    }

    async getQuadrospheres (limit: number, offset: number): Promise<DataStorageResponse<Array<Quadrosphere>>> {
        return {
            data : this._storage.quadrospheres,
            count: this._storage.quadrospheres.length,
        };
    }
}