/**
 * MI PROFE
 * The MI PROFE-API description
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CreateOrderProductDto } from './create-order-product-dto';


export interface OrderRespondeDto { 
    id: number;
    date: string;
    deadline: string;
    note?: string;
    stage: string;
    total: number;
    provider: string;
    orderProducts: Array<CreateOrderProductDto>;
}
