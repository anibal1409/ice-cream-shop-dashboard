/**
 * Laboratory
 * The Laboratory-API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { IdCreateEntity } from './id-create-entity';


export interface CreateExamDto { 
    name: string;
    description?: string;
    price: number;
    status: boolean;
    unitedCheck: boolean;
    united?: string;
    valuesCheck: boolean;
    values?: string;
    typesExam: IdCreateEntity;
}

