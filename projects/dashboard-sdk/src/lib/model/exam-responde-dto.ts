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


export interface ExamRespondeDto { 
    id: number;
    status: boolean;
    name: string;
    description?: string;
    price: number;
    unitedCheck: boolean;
    united?: string;
    valuesCheck: boolean;
    values?: string;
    typesExam: object;
}

