import { Quadrosphere } from '~/types/constructions.types';
import {
    quadrospeheresStorage
} from '~/lib/data-storage/implementations/local-data-storage/storage/quadrospeheres.storage';


export type DataStorage = {
    quadrospheres: Array<Quadrosphere>;
}

export const dataStorage: DataStorage = {
    quadrospheres: quadrospeheresStorage,
};