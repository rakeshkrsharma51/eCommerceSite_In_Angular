import { DataType } from './dataType';

export interface ServiceResponse extends Array<DataType> {
    data: any;
}
