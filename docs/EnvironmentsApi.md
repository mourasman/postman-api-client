# PostmanApi.EnvironmentsApi

All URIs are relative to *https://api.getpostman.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allEnvironments**](EnvironmentsApi.md#allEnvironments) | **GET** /environments | All Environments
[**createEnvironment**](EnvironmentsApi.md#createEnvironment) | **POST** /environments | Create Environment
[**deleteEnvironment**](EnvironmentsApi.md#deleteEnvironment) | **DELETE** /environments/{environment_uid} | Delete Environment
[**singleEnvironment**](EnvironmentsApi.md#singleEnvironment) | **GET** /environments/{environment_uid} | Single Environment
[**updateEnvironment**](EnvironmentsApi.md#updateEnvironment) | **PUT** /environments/{environment_uid} | Update Environment



## allEnvironments

> ValidResponse2 allEnvironments(xApiKey)

All Environments

The &#x60;/environments&#x60; endpoint returns a list of all [environments](https://www.getpostman.com/docs/environments) that belong to you..  The response contains an array of environments&#39; information containing the &#x60;name&#x60;, &#x60;id&#x60;, &#x60;owner&#x60; and &#x60;uid&#x60; of each environment.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.EnvironmentsApi();
let xApiKey = "xApiKey_example"; // String | 
apiInstance.allEnvironments(xApiKey, (error, data, response) => {
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

[**ValidResponse2**](ValidResponse2.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8


## createEnvironment

> CreateEnvironmentinaWorkspace createEnvironment(xApiKey, createEnvironmentRequest, opts)

Create Environment

A sample body is added to the request that conforms to the following JSON schema:  &#x60;&#x60;&#x60;json {   \&quot;type\&quot;: \&quot;object\&quot;,   \&quot;properties\&quot;: {     \&quot;environment\&quot;: {       \&quot;type\&quot;: \&quot;object\&quot;,       \&quot;properties\&quot;: {         \&quot;name\&quot;: {               \&quot;type\&quot;: \&quot;string\&quot;,               \&quot;maxLength\&quot;: 254,               \&quot;minLength\&quot;: 1             },         \&quot;values\&quot;: {           \&quot;type\&quot;: \&quot;array\&quot;,           \&quot;maxItems\&quot;: 100,           \&quot;additionalItems\&quot;: false,           \&quot;items\&quot;: {               \&quot;type\&quot;: \&quot;object\&quot;,               \&quot;properties\&quot;: {                 \&quot;key\&quot;: {                   \&quot;type\&quot;: \&quot;string\&quot;,                   \&quot;maxLength\&quot;: 254                   \&quot;minLength\&quot;: 1                 },                 \&quot;value\&quot;: { \&quot;type\&quot;: \&quot;string\&quot; },                 \&quot;enabled\&quot;: { \&quot;type\&quot;: \&quot;boolean\&quot; }               },               \&quot;required\&quot;: [\&quot;key\&quot;, \&quot;value\&quot;]             }         }       },       \&quot;required\&quot;: [\&quot;name\&quot;]     }   },   \&quot;required\&quot;: [\&quot;environment\&quot;] } &#x60;&#x60;&#x60;  On successful creation of the environment, the API returns the environment name and &#x60;id&#x60;.  You can also specify the context of a workspace to create an environment in directly by passing the &#x60;workspace&#x60; as a query param.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.EnvironmentsApi();
let xApiKey = "xApiKey_example"; // String | 
let createEnvironmentRequest = {"environment":{"name":"Sample Environment Name (required)","values":[{"key":"variable_name_1","value":"The value of the variable"},{"key":"variable_name_2","value":""}]}}; // CreateEnvironmentRequest | 
let opts = {
  'workspace': "workspace_example" // String | 
};
apiInstance.createEnvironment(xApiKey, createEnvironmentRequest, opts, (error, data, response) => {
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
 **createEnvironmentRequest** | [**CreateEnvironmentRequest**](CreateEnvironmentRequest.md)|  | 
 **workspace** | **String**|  | [optional] 

### Return type

[**CreateEnvironmentinaWorkspace**](CreateEnvironmentinaWorkspace.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteEnvironment

> EnvironmentDeleted deleteEnvironment(xApiKey, environmentUid)

Delete Environment

This endpoint allows you to delete a single environment based on an environment&#39;s unique &#x60;uid&#x60;.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.EnvironmentsApi();
let xApiKey = "xApiKey_example"; // String | 
let environmentUid = "environmentUid_example"; // String | 
apiInstance.deleteEnvironment(xApiKey, environmentUid, (error, data, response) => {
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
 **environmentUid** | **String**|  | 

### Return type

[**EnvironmentDeleted**](EnvironmentDeleted.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8, application/json


## singleEnvironment

> ValidResponse3 singleEnvironment(xApiKey, environmentUid)

Single Environment

Access the contents of an environment that is accessible to you using its unique id (&#x60;uid&#x60;).  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.EnvironmentsApi();
let xApiKey = "xApiKey_example"; // String | 
let environmentUid = "environmentUid_example"; // String | 
apiInstance.singleEnvironment(xApiKey, environmentUid, (error, data, response) => {
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
 **environmentUid** | **String**|  | 

### Return type

[**ValidResponse3**](ValidResponse3.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8


## updateEnvironment

> SuccessfulResponse updateEnvironment(xApiKey, environmentUid, updateEnvironmentRequest)

Update Environment

This endpoint replaces an existing environment.  A sample body is added to the request that conforms to the following JSON schema:  &#x60;&#x60;&#x60;json {  \&quot;type\&quot;: \&quot;object\&quot;,  \&quot;properties\&quot;: {   \&quot;environment\&quot;: {    \&quot;type\&quot;: \&quot;object\&quot;,    \&quot;properties\&quot;: {     \&quot;name\&quot;: {      \&quot;type\&quot;: \&quot;string\&quot;,      \&quot;maxLength\&quot;: 254,      \&quot;minLength\&quot;: 1     },     \&quot;values\&quot;: {      \&quot;type\&quot;: \&quot;array\&quot;,      \&quot;maxItems\&quot;: 100,      \&quot;additionalItems\&quot;: false,      \&quot;items\&quot;: {       \&quot;type\&quot;: \&quot;object\&quot;,       \&quot;properties\&quot;: {        \&quot;key\&quot;: {         \&quot;type\&quot;: \&quot;string\&quot;,         \&quot;maxLength\&quot;: 254,         \&quot;minLength\&quot;: 1        },        \&quot;value\&quot;: {         \&quot;type\&quot;: \&quot;string\&quot;,         \&quot;maxLength\&quot;: 254,         \&quot;minLength\&quot;: 1        },        \&quot;type\&quot;: {         \&quot;type\&quot;: \&quot;string\&quot;        },        \&quot;enabled\&quot;: {         \&quot;type\&quot;: \&quot;boolean\&quot;        }       },       \&quot;required\&quot;: [        \&quot;key\&quot;,        \&quot;value\&quot;       ]      }     }    }   }  },  \&quot;required\&quot;: [   \&quot;environment\&quot;  ] } &#x60;&#x60;&#x60;  On successful updation of the environment, the API returns the environment name and &#x60;id&#x60;.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.EnvironmentsApi();
let xApiKey = "xApiKey_example"; // String | 
let environmentUid = "environmentUid_example"; // String | 
let updateEnvironmentRequest = {"environment":{"name":"New Name","values":[{"key":"name","value":"Bruce Wayne"},{"key":"occupation","value":"Vigilante"}]}}; // UpdateEnvironmentRequest | 
apiInstance.updateEnvironment(xApiKey, environmentUid, updateEnvironmentRequest, (error, data, response) => {
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
 **environmentUid** | **String**|  | 
 **updateEnvironmentRequest** | [**UpdateEnvironmentRequest**](UpdateEnvironmentRequest.md)|  | 

### Return type

[**SuccessfulResponse**](SuccessfulResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; charset=utf-8, application/json

