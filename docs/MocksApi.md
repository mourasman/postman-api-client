# PostmanApi.MocksApi

All URIs are relative to *https://api.getpostman.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allMocks**](MocksApi.md#allMocks) | **GET** /mocks | All Mocks
[**createMock**](MocksApi.md#createMock) | **POST** /mocks | Create Mock
[**deleteMock**](MocksApi.md#deleteMock) | **DELETE** /mocks/{mock_uid} | Delete Mock
[**publishMock**](MocksApi.md#publishMock) | **POST** /mocks/{mock_uid}/publish | Publish Mock
[**singleMock**](MocksApi.md#singleMock) | **GET** /mocks/{mock_uid} | Single Mock
[**unpublishMock**](MocksApi.md#unpublishMock) | **DELETE** /mocks/{mock_uid}/unpublish | Unpublish Mock
[**updateMock**](MocksApi.md#updateMock) | **PUT** /mocks/{mock_uid} | Update Mock



## allMocks

> SuccessfulResponse1 allMocks(xApiKey)

All Mocks

This endpoint fetches all the mocks that you have created.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.MocksApi();
let xApiKey = "xApiKey_example"; // String | 
apiInstance.allMocks(xApiKey, (error, data, response) => {
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

### Return type

[**SuccessfulResponse1**](SuccessfulResponse1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8


## createMock

> CreateMockinaWorkspace createMock(xApiKey, createMockRequest)

Create Mock

This endpoint allows you to create a mock on a collection. You can also provide an environment UID to resolve any environment variables in the collection.  You can also specify the context of a workspace to create a mock in directly by passing the &#x60;workspace&#x60; as a query param.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.MocksApi();
let xApiKey = "xApiKey_example"; // String | 
let createMockRequest = {"mock":{"collection":"1679925-39fee52f-b806-3ffa-1173-00a6f5b183dc","environment":"1679925-0b9e9f15-3208-a2b1-22e0-d58392f01524"}}; // CreateMockRequest | 
apiInstance.createMock(xApiKey, createMockRequest, (error, data, response) => {
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
 **createMockRequest** | [**CreateMockRequest**](CreateMockRequest.md)|  | 

### Return type

[**CreateMockinaWorkspace**](CreateMockinaWorkspace.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteMock

> SuccessfulResponse3 deleteMock(xApiKey, mockUid)

Delete Mock

This endpoint allows you to delete an existing mock using its &#x60;uid&#x60;.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.MocksApi();
let xApiKey = "xApiKey_example"; // String | 
let mockUid = "mockUid_example"; // String | 
apiInstance.deleteMock(xApiKey, mockUid, (error, data, response) => {
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
 **mockUid** | **String**|  | 

### Return type

[**SuccessfulResponse3**](SuccessfulResponse3.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8


## publishMock

> SuccessResponse1 publishMock(xApiKey, mockUid)

Publish Mock

This endpoint publishes the mock you have created using its &#x60;uid&#x60;  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key &#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.MocksApi();
let xApiKey = "xApiKey_example"; // String | 
let mockUid = "mockUid_example"; // String | 
apiInstance.publishMock(xApiKey, mockUid, (error, data, response) => {
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
 **mockUid** | **String**|  | 

### Return type

[**SuccessResponse1**](SuccessResponse1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## singleMock

> SuccessfulResponse2 singleMock(xApiKey, mockUid)

Single Mock

This endpoint fetches you the basic information about a single mock using its &#x60;uid&#x60;.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.MocksApi();
let xApiKey = "xApiKey_example"; // String | 
let mockUid = "mockUid_example"; // String | 
apiInstance.singleMock(xApiKey, mockUid, (error, data, response) => {
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
 **mockUid** | **String**|  | 

### Return type

[**SuccessfulResponse2**](SuccessfulResponse2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8


## unpublishMock

> SuccessResponse1 unpublishMock(xApiKey, mockUid)

Unpublish Mock

This endpoint unpublishes the mock you have created using its &#x60;uid&#x60;  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key &#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.MocksApi();
let xApiKey = "xApiKey_example"; // String | 
let mockUid = "mockUid_example"; // String | 
apiInstance.unpublishMock(xApiKey, mockUid, (error, data, response) => {
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
 **mockUid** | **String**|  | 

### Return type

[**SuccessResponse1**](SuccessResponse1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateMock

> SuccessResponse updateMock(xApiKey, mockUid, updateMockRequest)

Update Mock

This endpoint allows you to update a mock you have created using its &#x60;uid&#x60;. The endpoint allows you to edit fields, * name * environment * description * private * versionTag  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.MocksApi();
let xApiKey = "xApiKey_example"; // String | 
let mockUid = "mockUid_example"; // String | 
let updateMockRequest = {"mock":{"name":"My Mock Server","environment":"11582779-ac1b6608-deb7-4c05-9d48-ee775aabfc19","description":"example describing update mock description","private":false,"versionTag":"abf07d3d-f8ec-47d4-8015-9fe83078b4ec"}}; // UpdateMockRequest | 
apiInstance.updateMock(xApiKey, mockUid, updateMockRequest, (error, data, response) => {
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
 **mockUid** | **String**|  | 
 **updateMockRequest** | [**UpdateMockRequest**](UpdateMockRequest.md)|  | 

### Return type

[**SuccessResponse**](SuccessResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; charset=utf-8

