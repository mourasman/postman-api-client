# PostmanApi.APIVersionApi

All URIs are relative to *https://api.getpostman.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAPIVersion**](APIVersionApi.md#createAPIVersion) | **POST** /apis/{apiId}/versions | Create API Version
[**deleteanAPIVersion**](APIVersionApi.md#deleteanAPIVersion) | **DELETE** /apis/{apiId}/versions/{apiVersionId} | Delete an API Version
[**getAllAPIVersions**](APIVersionApi.md#getAllAPIVersions) | **GET** /apis/{apiId}/versions | Get All API Versions
[**getanAPIVersion**](APIVersionApi.md#getanAPIVersion) | **GET** /apis/{apiId}/versions/{apiVersionId} | Get an API Version
[**updateanAPIVersion**](APIVersionApi.md#updateanAPIVersion) | **PUT** /apis/{apiId}/versions/{apiVersionId} | Update an API Version



## createAPIVersion

> CreateAPIversion createAPIVersion(xApiKey, apiId, createAPIVersionRequest)

Create API Version

This call creates a new API version in the specified API.    Request body should contain a &#x60;version&#x60; object which should have fields:  &lt;table&gt; &lt;tr&gt;  &lt;td&gt;name&lt;/td&gt;  &lt;td&gt;Required. Name of the API Version&lt;/td&gt; &lt;/tr&gt; &lt;tr&gt;  &lt;td&gt;source&lt;/td&gt;  &lt;td&gt;   If specified, it will copy the contents of the specified api version to create a new api verison.   &lt;table&gt;    &lt;tr&gt;     &lt;td&gt;id&lt;/td&gt;     &lt;td&gt;Required. Id of the apiversion from where the details are to be copied&lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;     &lt;td&gt;schema&lt;/td&gt;     &lt;td&gt;Boolean. If true then copies the schema from the specified api version&lt;/td&gt;    &lt;/tr&gt;    &lt;tr&gt;     &lt;td&gt;relations&lt;/td&gt;     &lt;td&gt;Object. {\&quot;&amp;lt;relationType&amp;gt;\&quot;: true/false}.        Allowed relation types are &#x60;mock&#x60;, &#x60;monitor&#x60;, &#x60;documentation&#x60;, &#x60;contracttest&#x60;, &#x60;integrationtest&#x60;, &#x60;testsuite&#x60;, &#x60;environment&#x60;     Relation types which should be copied over to the new api verison&lt;/td&gt;    &lt;/tr&gt;   &lt;/table&gt;  &lt;/td&gt; &lt;/tr&gt; &lt;/table&gt;  Response contains a &#x60;version&#x60; object with all the details related to the created API Version, namely, &#x60;id&#x60;, &#x60;name&#x60;, &#x60;api&#x60;.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.APIVersionApi();
let xApiKey = "xApiKey_example"; // String | 
let apiId = "apiId_example"; // String | 
let createAPIVersionRequest = {"version":{"name":1.0,"source":{"id":"{{apiVersionId}}","schema":true,"relations":{"monitor":true,"mock":true,"documentation":true}}}}; // CreateAPIVersionRequest | 
apiInstance.createAPIVersion(xApiKey, apiId, createAPIVersionRequest, (error, data, response) => {
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
 **createAPIVersionRequest** | [**CreateAPIVersionRequest**](CreateAPIVersionRequest.md)|  | 

### Return type

[**CreateAPIversion**](CreateAPIversion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteanAPIVersion

> DeleteanAPIversion deleteanAPIVersion(xApiKey, apiId, apiVersionId)

Delete an API Version

This call deletes an existing API Version having the specified id.    Response contains an &#x60;version&#x60; object with &#x60;id&#x60; of the API Version which was deleted.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.APIVersionApi();
let xApiKey = "xApiKey_example"; // String | 
let apiId = "apiId_example"; // String | 
let apiVersionId = "apiVersionId_example"; // String | 
apiInstance.deleteanAPIVersion(xApiKey, apiId, apiVersionId, (error, data, response) => {
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
 **apiVersionId** | **String**|  | 

### Return type

[**DeleteanAPIversion**](DeleteanAPIversion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getAllAPIVersions

> GetAllAPIversions getAllAPIVersions(xApiKey, apiId)

Get All API Versions

This call fetches details about the all the API Versions in the specified API.  The response will contain an array &#x60;versions&#x60; object which would be a list of all the API Version along with their details.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.APIVersionApi();
let xApiKey = "xApiKey_example"; // String | 
let apiId = "apiId_example"; // String | 
apiInstance.getAllAPIVersions(xApiKey, apiId, (error, data, response) => {
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

[**GetAllAPIversions**](GetAllAPIversions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getanAPIVersion

> GetanAPIversion getanAPIVersion(xApiKey, apiId, apiVersionId)

Get an API Version

This call fetches details about the specified API Version.  The response will contain a &#x60;version&#x60; object which would contain all the details of the API Version.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.APIVersionApi();
let xApiKey = "xApiKey_example"; // String | 
let apiId = "apiId_example"; // String | 
let apiVersionId = "apiVersionId_example"; // String | 
apiInstance.getanAPIVersion(xApiKey, apiId, apiVersionId, (error, data, response) => {
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
 **apiVersionId** | **String**|  | 

### Return type

[**GetanAPIversion**](GetanAPIversion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateanAPIVersion

> UpdateanAPIversion updateanAPIVersion(xApiKey, apiId, apiVersionId, updateanAPIVersionRequest)

Update an API Version

This call updates an existing API Version.    Request body should contain a &#x60;version&#x60; object with the fields which need to be updated. Only field which can be updated is &#x60;name&#x60;.  Response contains a &#x60;version&#x60; object with all the details related to the created API Version, namely, &#x60;id&#x60;, &#x60;name&#x60;, &#x60;api&#x60; etc.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.APIVersionApi();
let xApiKey = "xApiKey_example"; // String | 
let apiId = "apiId_example"; // String | 
let apiVersionId = "apiVersionId_example"; // String | 
let updateanAPIVersionRequest = {"version":{"name":2.0}}; // UpdateanAPIVersionRequest | 
apiInstance.updateanAPIVersion(xApiKey, apiId, apiVersionId, updateanAPIVersionRequest, (error, data, response) => {
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
 **apiVersionId** | **String**|  | 
 **updateanAPIVersionRequest** | [**UpdateanAPIVersionRequest**](UpdateanAPIVersionRequest.md)|  | 

### Return type

[**UpdateanAPIversion**](UpdateanAPIversion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

