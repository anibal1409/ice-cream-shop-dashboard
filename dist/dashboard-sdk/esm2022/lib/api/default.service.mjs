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
/* tslint:disable:no-unused-variable member-ordering */
import { Inject, Injectable, Optional } from '@angular/core';
import { HttpHeaders, HttpContext } from '@angular/common/http';
import { CustomHttpParameterCodec } from '../encoder';
// @ts-ignore
import { BASE_PATH } from '../variables';
import { Configuration } from '../configuration';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../configuration";
export class DefaultService {
    constructor(httpClient, basePath, configuration) {
        this.httpClient = httpClient;
        this.basePath = 'http://api';
        this.defaultHeaders = new HttpHeaders();
        this.configuration = new Configuration();
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }
            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }
    // @ts-ignore
    addToHttpParams(httpParams, value, key) {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        }
        else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }
    addToHttpParamsRecursive(httpParams, value, key) {
        if (value == null) {
            return httpParams;
        }
        if (typeof value === "object") {
            if (Array.isArray(value)) {
                value.forEach(elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            }
            else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, value.toISOString().substring(0, 10));
                }
                else {
                    throw Error("key may not be null if value is Date");
                }
            }
            else {
                Object.keys(value).forEach(k => httpParams = this.addToHttpParamsRecursive(httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        }
        else if (key != null) {
            httpParams = httpParams.append(key, value);
        }
        else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }
    appControllerGetHello(observe = 'body', reportProgress = false, options) {
        let localVarHeaders = this.defaultHeaders;
        let localVarHttpHeaderAcceptSelected = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts = [];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }
        let localVarHttpContext = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }
        let responseType_ = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            }
            else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            }
            else {
                responseType_ = 'blob';
            }
        }
        let localVarPath = `/`;
        return this.httpClient.request('get', `${this.configuration.basePath}${localVarPath}`, {
            context: localVarHttpContext,
            responseType: responseType_,
            withCredentials: this.configuration.withCredentials,
            headers: localVarHeaders,
            observe: observe,
            reportProgress: reportProgress
        });
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DefaultService, deps: [{ token: i1.HttpClient }, { token: BASE_PATH, optional: true }, { token: i2.Configuration, optional: true }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DefaultService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.2.12", ngImport: i0, type: DefaultService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: undefined, decorators: [{
                    type: Optional
                }, {
                    type: Inject,
                    args: [BASE_PATH]
                }] }, { type: i2.Configuration, decorators: [{
                    type: Optional
                }] }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvZGFzaGJvYXJkLXNkay9zcmMvbGliL2FwaS9kZWZhdWx0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7R0FVRztBQUNILHVEQUF1RDtBQUV2RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBMkIsZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBYyxXQUFXLEVBQ3NCLFdBQVcsRUFDeEQsTUFBWSxzQkFBc0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBK0IsWUFBWSxDQUFDO0FBSS9FLGFBQWE7QUFDYixPQUFPLEVBQUUsU0FBUyxFQUFzQixNQUEwQixjQUFjLENBQUM7QUFDakYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUEwQyxrQkFBa0IsQ0FBQzs7OztBQU9yRixNQUFNLE9BQU8sY0FBYztJQU92QixZQUFzQixVQUFzQixFQUFnQyxRQUF5QixFQUFjLGFBQTRCO1FBQXpILGVBQVUsR0FBVixVQUFVLENBQVk7UUFMbEMsYUFBUSxHQUFHLFlBQVksQ0FBQztRQUMzQixtQkFBYyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7UUFDbkMsa0JBQWEsR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDO1FBSXZDLElBQUksYUFBYSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7U0FDdEM7UUFDRCxJQUFJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ2pELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDaEQsUUFBUSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxQjtZQUVELElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO2dCQUM5QixRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUM1QjtZQUNELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUMxQztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLElBQUksSUFBSSx3QkFBd0IsRUFBRSxDQUFDO0lBQ2hGLENBQUM7SUFHRCxhQUFhO0lBQ0wsZUFBZSxDQUFDLFVBQXNCLEVBQUUsS0FBVSxFQUFFLEdBQVk7UUFDcEUsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksS0FBSyxZQUFZLElBQUksS0FBSyxLQUFLLEVBQUU7WUFDOUQsVUFBVSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDakU7YUFBTTtZQUNILFVBQVUsR0FBRyxJQUFJLENBQUMsd0JBQXdCLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0RTtRQUNELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFFTyx3QkFBd0IsQ0FBQyxVQUFzQixFQUFFLEtBQVcsRUFBRSxHQUFZO1FBQzlFLElBQUksS0FBSyxJQUFJLElBQUksRUFBRTtZQUNmLE9BQU8sVUFBVSxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDM0IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNyQixLQUFlLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDeEc7aUJBQU0sSUFBSSxLQUFLLFlBQVksSUFBSSxFQUFFO2dCQUM5QixJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7b0JBQ2IsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFHLEtBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZGO3FCQUFNO29CQUNKLE1BQU0sS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUM7aUJBQ3REO2FBQ0o7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUN2RSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQy9EO1NBQ0o7YUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDcEIsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQzlDO2FBQU07WUFDSCxNQUFNLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO1NBQ3RFO1FBQ0QsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQVNNLHFCQUFxQixDQUFDLFVBQWUsTUFBTSxFQUFFLGlCQUEwQixLQUFLLEVBQUUsT0FBK0Q7UUFFaEosSUFBSSxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUUxQyxJQUFJLGdDQUFnQyxHQUF1QixPQUFPLElBQUksT0FBTyxDQUFDLGdCQUFnQixDQUFDO1FBQy9GLElBQUksZ0NBQWdDLEtBQUssU0FBUyxFQUFFO1lBQ2hELGlDQUFpQztZQUNqQyxNQUFNLGlCQUFpQixHQUFhLEVBQ25DLENBQUM7WUFDRixnQ0FBZ0MsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDL0Y7UUFDRCxJQUFJLGdDQUFnQyxLQUFLLFNBQVMsRUFBRTtZQUNoRCxlQUFlLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsZ0NBQWdDLENBQUMsQ0FBQztTQUNyRjtRQUVELElBQUksbUJBQW1CLEdBQTRCLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQzlFLElBQUksbUJBQW1CLEtBQUssU0FBUyxFQUFFO1lBQ25DLG1CQUFtQixHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7U0FDM0M7UUFHRCxJQUFJLGFBQWEsR0FBNkIsTUFBTSxDQUFDO1FBQ3JELElBQUksZ0NBQWdDLEVBQUU7WUFDbEMsSUFBSSxnQ0FBZ0MsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3JELGFBQWEsR0FBRyxNQUFNLENBQUM7YUFDMUI7aUJBQU0sSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxnQ0FBZ0MsQ0FBQyxFQUFFO2dCQUN4RSxhQUFhLEdBQUcsTUFBTSxDQUFDO2FBQzFCO2lCQUFNO2dCQUNILGFBQWEsR0FBRyxNQUFNLENBQUM7YUFDMUI7U0FDSjtRQUVELElBQUksWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFNLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLFlBQVksRUFBRSxFQUN0RjtZQUNJLE9BQU8sRUFBRSxtQkFBbUI7WUFDNUIsWUFBWSxFQUFPLGFBQWE7WUFDaEMsZUFBZSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZTtZQUNuRCxPQUFPLEVBQUUsZUFBZTtZQUN4QixPQUFPLEVBQUUsT0FBTztZQUNoQixjQUFjLEVBQUUsY0FBYztTQUNqQyxDQUNKLENBQUM7SUFDTixDQUFDOytHQS9HUSxjQUFjLDRDQU8wQyxTQUFTO21IQVBqRSxjQUFjLGNBRmIsTUFBTTs7NEZBRVAsY0FBYztrQkFIMUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7OzBCQVFrRCxRQUFROzswQkFBRyxNQUFNOzJCQUFDLFNBQVM7OzBCQUE4QixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBNSSBQUk9GRVxuICogVGhlIE1JIFBST0ZFLUFQSSBkZXNjcmlwdGlvblxuICpcbiAqIFRoZSB2ZXJzaW9uIG9mIHRoZSBPcGVuQVBJIGRvY3VtZW50OiAxLjBcbiAqIFxuICpcbiAqIE5PVEU6IFRoaXMgY2xhc3MgaXMgYXV0byBnZW5lcmF0ZWQgYnkgT3BlbkFQSSBHZW5lcmF0b3IgKGh0dHBzOi8vb3BlbmFwaS1nZW5lcmF0b3IudGVjaCkuXG4gKiBodHRwczovL29wZW5hcGktZ2VuZXJhdG9yLnRlY2hcbiAqIERvIG5vdCBlZGl0IHRoZSBjbGFzcyBtYW51YWxseS5cbiAqL1xuLyogdHNsaW50OmRpc2FibGU6bm8tdW51c2VkLXZhcmlhYmxlIG1lbWJlci1vcmRlcmluZyAqL1xuXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsIH0gICAgICAgICAgICAgICAgICAgICAgZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyxcbiAgICAgICAgIEh0dHBSZXNwb25zZSwgSHR0cEV2ZW50LCBIdHRwUGFyYW1ldGVyQ29kZWMsIEh0dHBDb250ZXh0IFxuICAgICAgICB9ICAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEN1c3RvbUh0dHBQYXJhbWV0ZXJDb2RlYyB9ICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9lbmNvZGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICdyeGpzJztcblxuXG4vLyBAdHMtaWdub3JlXG5pbXBvcnQgeyBCQVNFX1BBVEgsIENPTExFQ1RJT05fRk9STUFUUyB9ICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vdmFyaWFibGVzJztcbmltcG9ydCB7IENvbmZpZ3VyYXRpb24gfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tICcuLi9jb25maWd1cmF0aW9uJztcblxuXG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIERlZmF1bHRTZXJ2aWNlIHtcblxuICAgIHByb3RlY3RlZCBiYXNlUGF0aCA9ICdodHRwOi8vYXBpJztcbiAgICBwdWJsaWMgZGVmYXVsdEhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoKTtcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKCk7XG4gICAgcHVibGljIGVuY29kZXI6IEh0dHBQYXJhbWV0ZXJDb2RlYztcblxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBodHRwQ2xpZW50OiBIdHRwQ2xpZW50LCBAT3B0aW9uYWwoKUBJbmplY3QoQkFTRV9QQVRIKSBiYXNlUGF0aDogc3RyaW5nfHN0cmluZ1tdLCBAT3B0aW9uYWwoKSBjb25maWd1cmF0aW9uOiBDb25maWd1cmF0aW9uKSB7XG4gICAgICAgIGlmIChjb25maWd1cmF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24gPSBjb25maWd1cmF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb25maWd1cmF0aW9uLmJhc2VQYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYmFzZVBhdGgpICYmIGJhc2VQYXRoLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBiYXNlUGF0aCA9IGJhc2VQYXRoWzBdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGJhc2VQYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGJhc2VQYXRoID0gdGhpcy5iYXNlUGF0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5iYXNlUGF0aCA9IGJhc2VQYXRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZW5jb2RlciA9IHRoaXMuY29uZmlndXJhdGlvbi5lbmNvZGVyIHx8IG5ldyBDdXN0b21IdHRwUGFyYW1ldGVyQ29kZWMoKTtcbiAgICB9XG5cblxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBwcml2YXRlIGFkZFRvSHR0cFBhcmFtcyhodHRwUGFyYW1zOiBIdHRwUGFyYW1zLCB2YWx1ZTogYW55LCBrZXk/OiBzdHJpbmcpOiBIdHRwUGFyYW1zIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBodHRwUGFyYW1zID0gdGhpcy5hZGRUb0h0dHBQYXJhbXNSZWN1cnNpdmUoaHR0cFBhcmFtcywgdmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHR0cFBhcmFtcyA9IHRoaXMuYWRkVG9IdHRwUGFyYW1zUmVjdXJzaXZlKGh0dHBQYXJhbXMsIHZhbHVlLCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodHRwUGFyYW1zO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkVG9IdHRwUGFyYW1zUmVjdXJzaXZlKGh0dHBQYXJhbXM6IEh0dHBQYXJhbXMsIHZhbHVlPzogYW55LCBrZXk/OiBzdHJpbmcpOiBIdHRwUGFyYW1zIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBodHRwUGFyYW1zO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgKHZhbHVlIGFzIGFueVtdKS5mb3JFYWNoKCBlbGVtID0+IGh0dHBQYXJhbXMgPSB0aGlzLmFkZFRvSHR0cFBhcmFtc1JlY3Vyc2l2ZShodHRwUGFyYW1zLCBlbGVtLCBrZXkpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLmFwcGVuZChrZXksICh2YWx1ZSBhcyBEYXRlKS50b0lTT1N0cmluZygpLnN1YnN0cmluZygwLCAxMCkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJrZXkgbWF5IG5vdCBiZSBudWxsIGlmIHZhbHVlIGlzIERhdGVcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh2YWx1ZSkuZm9yRWFjaCggayA9PiBodHRwUGFyYW1zID0gdGhpcy5hZGRUb0h0dHBQYXJhbXNSZWN1cnNpdmUoXG4gICAgICAgICAgICAgICAgICAgIGh0dHBQYXJhbXMsIHZhbHVlW2tdLCBrZXkgIT0gbnVsbCA/IGAke2tleX0uJHtrfWAgOiBrKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGh0dHBQYXJhbXMgPSBodHRwUGFyYW1zLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwia2V5IG1heSBub3QgYmUgbnVsbCBpZiB2YWx1ZSBpcyBub3Qgb2JqZWN0IG9yIGFycmF5XCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBodHRwUGFyYW1zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBvYnNlcnZlIHNldCB3aGV0aGVyIG9yIG5vdCB0byByZXR1cm4gdGhlIGRhdGEgT2JzZXJ2YWJsZSBhcyB0aGUgYm9keSwgcmVzcG9uc2Ugb3IgZXZlbnRzLiBkZWZhdWx0cyB0byByZXR1cm5pbmcgdGhlIGJvZHkuXG4gICAgICogQHBhcmFtIHJlcG9ydFByb2dyZXNzIGZsYWcgdG8gcmVwb3J0IHJlcXVlc3QgYW5kIHJlc3BvbnNlIHByb2dyZXNzLlxuICAgICAqL1xuICAgIHB1YmxpYyBhcHBDb250cm9sbGVyR2V0SGVsbG8ob2JzZXJ2ZT86ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuLCBvcHRpb25zPzoge2h0dHBIZWFkZXJBY2NlcHQ/OiB1bmRlZmluZWQsIGNvbnRleHQ/OiBIdHRwQ29udGV4dH0pOiBPYnNlcnZhYmxlPGFueT47XG4gICAgcHVibGljIGFwcENvbnRyb2xsZXJHZXRIZWxsbyhvYnNlcnZlPzogJ3Jlc3BvbnNlJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuLCBvcHRpb25zPzoge2h0dHBIZWFkZXJBY2NlcHQ/OiB1bmRlZmluZWQsIGNvbnRleHQ/OiBIdHRwQ29udGV4dH0pOiBPYnNlcnZhYmxlPEh0dHBSZXNwb25zZTxhbnk+PjtcbiAgICBwdWJsaWMgYXBwQ29udHJvbGxlckdldEhlbGxvKG9ic2VydmU/OiAnZXZlbnRzJywgcmVwb3J0UHJvZ3Jlc3M/OiBib29sZWFuLCBvcHRpb25zPzoge2h0dHBIZWFkZXJBY2NlcHQ/OiB1bmRlZmluZWQsIGNvbnRleHQ/OiBIdHRwQ29udGV4dH0pOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PjtcbiAgICBwdWJsaWMgYXBwQ29udHJvbGxlckdldEhlbGxvKG9ic2VydmU6IGFueSA9ICdib2R5JywgcmVwb3J0UHJvZ3Jlc3M6IGJvb2xlYW4gPSBmYWxzZSwgb3B0aW9ucz86IHtodHRwSGVhZGVyQWNjZXB0PzogdW5kZWZpbmVkLCBjb250ZXh0PzogSHR0cENvbnRleHR9KTogT2JzZXJ2YWJsZTxhbnk+IHtcblxuICAgICAgICBsZXQgbG9jYWxWYXJIZWFkZXJzID0gdGhpcy5kZWZhdWx0SGVhZGVycztcblxuICAgICAgICBsZXQgbG9jYWxWYXJIdHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IG9wdGlvbnMgJiYgb3B0aW9ucy5odHRwSGVhZGVyQWNjZXB0O1xuICAgICAgICBpZiAobG9jYWxWYXJIdHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy8gdG8gZGV0ZXJtaW5lIHRoZSBBY2NlcHQgaGVhZGVyXG4gICAgICAgICAgICBjb25zdCBodHRwSGVhZGVyQWNjZXB0czogc3RyaW5nW10gPSBbXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgbG9jYWxWYXJIdHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgPSB0aGlzLmNvbmZpZ3VyYXRpb24uc2VsZWN0SGVhZGVyQWNjZXB0KGh0dHBIZWFkZXJBY2NlcHRzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYWxWYXJIdHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbG9jYWxWYXJIZWFkZXJzID0gbG9jYWxWYXJIZWFkZXJzLnNldCgnQWNjZXB0JywgbG9jYWxWYXJIdHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGxvY2FsVmFySHR0cENvbnRleHQ6IEh0dHBDb250ZXh0IHwgdW5kZWZpbmVkID0gb3B0aW9ucyAmJiBvcHRpb25zLmNvbnRleHQ7XG4gICAgICAgIGlmIChsb2NhbFZhckh0dHBDb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxvY2FsVmFySHR0cENvbnRleHQgPSBuZXcgSHR0cENvbnRleHQoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbGV0IHJlc3BvbnNlVHlwZV86ICd0ZXh0JyB8ICdqc29uJyB8ICdibG9iJyA9ICdqc29uJztcbiAgICAgICAgaWYgKGxvY2FsVmFySHR0cEhlYWRlckFjY2VwdFNlbGVjdGVkKSB7XG4gICAgICAgICAgICBpZiAobG9jYWxWYXJIdHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQuc3RhcnRzV2l0aCgndGV4dCcpKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlXyA9ICd0ZXh0JztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jb25maWd1cmF0aW9uLmlzSnNvbk1pbWUobG9jYWxWYXJIdHRwSGVhZGVyQWNjZXB0U2VsZWN0ZWQpKSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlXyA9ICdqc29uJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlXyA9ICdibG9iJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBsb2NhbFZhclBhdGggPSBgL2A7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQucmVxdWVzdDxhbnk+KCdnZXQnLCBgJHt0aGlzLmNvbmZpZ3VyYXRpb24uYmFzZVBhdGh9JHtsb2NhbFZhclBhdGh9YCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0OiBsb2NhbFZhckh0dHBDb250ZXh0LFxuICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogPGFueT5yZXNwb25zZVR5cGVfLFxuICAgICAgICAgICAgICAgIHdpdGhDcmVkZW50aWFsczogdGhpcy5jb25maWd1cmF0aW9uLndpdGhDcmVkZW50aWFscyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBsb2NhbFZhckhlYWRlcnMsXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZTogb2JzZXJ2ZSxcbiAgICAgICAgICAgICAgICByZXBvcnRQcm9ncmVzczogcmVwb3J0UHJvZ3Jlc3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbn1cbiJdfQ==