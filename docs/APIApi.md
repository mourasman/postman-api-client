# PostmanApi.APIApi

All URIs are relative to *https://api.getpostman.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAPI**](APIApi.md#createAPI) | **POST** /apis | Create API
[**deleteanAPI**](APIApi.md#deleteanAPI) | **DELETE** /apis/{apiId} | Delete an API
[**getallAPIs**](APIApi.md#getallAPIs) | **GET** /apis | Get all APIs
[**singleAPI**](APIApi.md#singleAPI) | **GET** /apis/{apiId} | Single API
[**updateanAPI**](APIApi.md#updateanAPI) | **PUT** /apis/{apiId} | Update an API



## createAPI

> CreateAPI createAPI(workspace, xApiKey, createAPIRequest)

Create API

This call creates a new API with a default API Version.    Request body should contain an &#x60;api&#x60; object which should atleast have a property &#x60;name&#x60;.  Response contains an &#x60;api&#x60; object with all the details related to the created API, namely, &#x60;id&#x60;, &#x60;name&#x60;, &#x60;summary&#x60;, &#x60;description&#x60;, etc.   &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.APIApi();
let workspace = {{workspaceId}}; // String | 
let xApiKey = "xApiKey_example"; // String | 
let createAPIRequest = {"api":{"name":"Sync Service API","summary":"This is supposed to be a short summary.","description":"This is description."}}; // CreateAPIRequest | 
apiInstance.createAPI(workspace, xApiKey, createAPIRequest, (error, data, response) => {
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
 **workspace** | **String**|  | 
 **xApiKey** | **String**|  | 
 **createAPIRequest** | [**CreateAPIRequest**](CreateAPIRequest.md)|  | 

### Return type

[**CreateAPI**](CreateAPI.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteanAPI

> DeleteanAPI deleteanAPI(xApiKey, apiId)

Delete an API

This call deletes an existing API having the specified id.    Response contains an &#x60;api&#x60; object with &#x60;id&#x60; of the API which was deleted.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.APIApi();
let xApiKey = "xApiKey_example"; // String | 
let apiId = "apiId_example"; // String | 
apiInstance.deleteanAPI(xApiKey, apiId, (error, data, response) => {
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
 **apiId** | **String**|  | 

### Return type

[**DeleteanAPI**](DeleteanAPI.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getallAPIs

> GetallAPIs getallAPIs(workspace, xApiKey, contentType)

Get all APIs

This call fetches all the APIs present in the specified workspace  Response contains an array named &#x60;apis&#x60; which would contain all the details of APIs present in the workspace.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.APIApi();
let workspace = {{workspaceId}}; // String | 
let xApiKey = "xApiKey_example"; // String | 
let contentType = application/json; // String | 
apiInstance.getallAPIs(workspace, xApiKey, contentType, (error, data, response) => {
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
 **workspace** | **String**|  | 
 **xApiKey** | **String**|  | 
 **contentType** | **String**|  | 

### Return type

[**GetallAPIs**](GetallAPIs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## singleAPI

> GetsingleAPI singleAPI(xApiKey, apiId)

Single API

This call fetches a single API having the specified id.  Response contains an &#x60;api&#x60; object with all the details related to the queried API, namely, &#x60;id&#x60;, &#x60;name&#x60;, &#x60;summary&#x60;, &#x60;description&#x60; etc.   &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.APIApi();
let xApiKey = "xApiKey_example"; // String | 
let apiId = "apiId_example"; // String | 
apiInstance.singleAPI(xApiKey, apiId, (error, data, response) => {
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
 **apiId** | **String**|  | 

### Return type

[**GetsingleAPI**](GetsingleAPI.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateanAPI

> UpdateanAPI updateanAPI(xApiKey, apiId, updateanAPIRequest)

Update an API

This call updates an existing API .    Request body should contain an &#x60;api&#x60; object which should have the fields to be updated. Only &#x60;name&#x60;, &#x60;summary&#x60; and &#x60;description&#x60; fields can be edited for an API.  Response contains an &#x60;api&#x60; object with all the details related to the created API, namely, &#x60;id&#x60;, &#x60;name&#x60;, &#x60;summary&#x60;, &#x60;description&#x60; etc.   &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.APIApi();
let xApiKey = "xApiKey_example"; // String | 
let apiId = "apiId_example"; // String | 
let updateanAPIRequest = {"api":{"name":"New name","description":"This is an updated Description"}}; // UpdateanAPIRequest | 
apiInstance.updateanAPI(xApiKey, apiId, updateanAPIRequest, (error, data, response) => {
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
 **apiId** | **String**|  | 
 **updateanAPIRequest** | [**UpdateanAPIRequest**](UpdateanAPIRequest.md)|  | 

### Return type

[**UpdateanAPI**](UpdateanAPI.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

