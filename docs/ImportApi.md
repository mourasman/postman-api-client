# PostmanApi.ImportApi

All URIs are relative to *https://api.getpostman.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**importexporteddata**](ImportApi.md#importexporteddata) | **POST** /import/exported | Import exported data
[**importexternalAPIspecification**](ImportApi.md#importexternalAPIspecification) | **POST** /import/{importType} | Import external API specification



## importexporteddata

> SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders importexporteddata(xApiKey, contentType, type, input)

Import exported data

This endpoint allows you to import your exported Postman data. For more information about how you can export your data, refer &lt;a href&#x3D;\&quot;https://go.postman.co/me/export\&quot;&gt;Export your Postman data.&lt;/a&gt;  On successful imports, the response will be an array with Each element contaning &#x60;id&#x60;, &#x60;name&#x60; and &#x60;uid&#x60; of entities created.  **Note**: Refer to examples for different scenarios.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.ImportApi();
let xApiKey = "xApiKey_example"; // String | 
let contentType = application/json; // String | 
let type = "type_example"; // String | 
let input = "input_example"; // String | File containing the exported collections or environments
apiInstance.importexporteddata(xApiKey, contentType, type, input, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**|  | 
 **contentType** | **String**|  | 
 **type** | **String**|  | 
 **input** | **String**| File containing the exported collections or environments | 

### Return type

[**SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders**](SuccessImporttoaspecificworkspacewithworkspaceIDpassedintheheaders.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json


## importexternalAPIspecification

> SuccessImportStringifiedbody importexternalAPIspecification(xApiKey, importType, importexternalAPIspecificationRequest)

Import external API specification

This endpoint allows you to import external API specifications into Postman.  Currently, this endpoint only supports the &lt;a href&#x3D;\&quot;https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md\&quot;&gt;OpenAPI&lt;/a&gt; specification, for which the &#x60;importType&#x60; will be &#x60;openapi&#x60;.  On a successful import, the response will be an array with each element contaning &#x60;id&#x60;, &#x60;name&#x60; and &#x60;uid&#x60; of entities created.  Supported &#x60;type&#x60;s:  - string - json - file  The &#x60;input&#x60; parameter should be defined based on the &#x60;type&#x60;.  &gt; To import a file, request body must be form-data with &#x60;type&#x60; param set to &#x60;file&#x60;.  **Note**: Refer to examples for different scenarios.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.ImportApi();
let xApiKey = "xApiKey_example"; // String | 
let importType = "importType_example"; // String | 
let importexternalAPIspecificationRequest = {"type":"json","input":{"openapi":"3.0.0","info":{"version":"1.0.0","title":"Swagger Petstore","license":{"name":"MIT"}},"servers":[{"url":"http://petstore.swagger.io/v1"}],"paths":{"/pets":{"get":{"summary":"List all pets","operationId":"listPets","parameters":[{"name":"limit","in":"query","description":"limit","required":false,"schema":{"type":"integer","format":"int32"}}],"responses":{"default":{"description":"unexpected error","content":{"application/json":{"schema":{"$ref":"#/components/schemas/Error"}}}}}}}},"components":{"schemas":{"Error":{"required":["code","message"],"properties":{"code":{"type":"integer","format":"int32"},"message":{"type":"string"}}}}}}}; // ImportexternalAPIspecificationRequest | 
apiInstance.importexternalAPIspecification(xApiKey, importType, importexternalAPIspecificationRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**|  | 
 **importType** | **String**|  | 
 **importexternalAPIspecificationRequest** | [**ImportexternalAPIspecificationRequest**](ImportexternalAPIspecificationRequest.md)|  | 

### Return type

[**SuccessImportStringifiedbody**](SuccessImportStringifiedbody.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

