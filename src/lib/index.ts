import {
    LocalDataStorageService,
} from '~/lib/data-storage/implementations/local-data-storage/local-data-storage.service';
import {
    dataStorage,
} from '~/lib/data-storage/implementations/local-data-storage/storage/dataStorage';


export const localDataStorage = new LocalDataStorageService(dataStorage);