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


export interface CreatePatientDto { 
    email: string;
    idDocument: string;
    lastName: string;
    firstName: string;
    status: boolean;
    birthdate: string;
    phone?: string;
    gender: string;
}

