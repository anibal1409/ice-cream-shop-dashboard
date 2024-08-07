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
import { IdCreateEntity } from './id-create-entity';
import { CreateSaleProductDto } from './create-sale-product-dto';
export interface UpdateSaleDto {
    date?: string;
    note?: string;
    stage?: string;
    total?: number;
    customer?: IdCreateEntity;
    saleProducts?: Array<CreateSaleProductDto>;
}
