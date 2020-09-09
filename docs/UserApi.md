# PostmanApi.UserApi

All URIs are relative to *https://api.getpostman.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**aPIKeyOwner**](UserApi.md#aPIKeyOwner) | **GET** /me | API Key Owner



## aPIKeyOwner

> ValidResponse6 aPIKeyOwner(xApiKey)

API Key Owner

The &#x60;/me&#x60; endpoint allows you to fetch relevant information pertaining to the API Key being used.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.UserApi();
let xApiKey = "xApiKey_example"; // String | 
apiInstance.aPIKeyOwner(xApiKey, (error, data, response) => {
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

[**ValidResponse6**](ValidResponse6.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8

