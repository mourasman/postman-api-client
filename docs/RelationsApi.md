# PostmanApi.RelationsApi

All URIs are relative to *https://api.getpostman.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createrelations**](RelationsApi.md#createrelations) | **POST** /apis/{apiId}/versions/{apiVersionId}/relations | Create relations
[**getlinkedrelations**](RelationsApi.md#getlinkedrelations) | **GET** /apis/{apiId}/versions/{apiVersionId}/relations | Get linked relations
[**getrelationdetails**](RelationsApi.md#getrelationdetails) | **GET** /apis/{apiId}/versions/{apiVersionId}/{relationType}/{relationId} | Get relation details
[**getrelationsbytype**](RelationsApi.md#getrelationsbytype) | **GET** /apis/{apiId}/versions/{apiVersionId}/{relationType} | Get relations by type



## createrelations

> Createmultiplerelationsfromexistingcollections createrelations(xApiKey, apiId, apiVersionId, createrelationsRequest)

Create relations

This call allows you to add existing Postman entities as new relations to an API. The request body should contain the relations to be created along with an array of entity IDs.   &lt;table&gt;   &lt;tr&gt;     &lt;th&gt;Relation&lt;/th&gt;     &lt;th&gt;Entity ID type&lt;/th&gt;   &lt;tr&gt;   &lt;tr&gt;     &lt;td&gt;contracttest&lt;/td&gt;     &lt;td&gt;Collection UIDs&lt;/td&gt;   &lt;/tr&gt;   &lt;tr&gt;     &lt;td&gt;integrationtest&lt;/td&gt;     &lt;td&gt;Collection UIDs&lt;/td&gt;   &lt;/tr&gt;   &lt;tr&gt;     &lt;td&gt;documentation&lt;/td&gt;     &lt;td&gt;Collection UIDs&lt;/td&gt;   &lt;/tr&gt;   &lt;tr&gt;     &lt;td&gt;testsuite&lt;/td&gt;     &lt;td&gt;Collection UIDs&lt;/td&gt;   &lt;/tr&gt;   &lt;tr&gt;     &lt;td&gt;environment&lt;/td&gt;     &lt;td&gt;Environment UIDs&lt;/td&gt;   &lt;/tr&gt;   &lt;tr&gt;     &lt;td&gt;mock&lt;/td&gt;     &lt;td&gt;Mock IDs&lt;/td&gt;   &lt;/tr&gt;   &lt;tr&gt;     &lt;td&gt;monitor&lt;/td&gt;     &lt;td&gt;Monitor IDs&lt;/td&gt;   &lt;/tr&gt; &lt;/table&gt;  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.RelationsApi();
let xApiKey = "xApiKey_example"; // String | 
let apiId = "apiId_example"; // String | 
let apiVersionId = "apiVersionId_example"; // String | 
let createrelationsRequest = {"contracttest":["collection-uid-1"],"testsuite":["collection-uid-1","collection-uid-2"],"documentation":["collection-uid-3"],"mock":["mock-uid-1"]}; // CreaterelationsRequest | 
apiInstance.createrelations(xApiKey, apiId, apiVersionId, createrelationsRequest, (error, data, response) => {
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
 **createrelationsRequest** | [**CreaterelationsRequest**](CreaterelationsRequest.md)|  | 

### Return type

[**Createmultiplerelationsfromexistingcollections**](Createmultiplerelationsfromexistingcollections.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; charset=utf-8


## getlinkedrelations

> GetlinkedrelationsforanAPIversion getlinkedrelations(xApiKey, apiId, apiVersionId)

Get linked relations

This call fetches all the relations which are linked to the specified API version along with their details.  The response will contain a &#x60;relations&#x60; object which lists all the relation types which are linked to the API version. Each of the relation type will be an object which details the relations of this type.   &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.RelationsApi();
let xApiKey = "xApiKey_example"; // String | 
let apiId = "apiId_example"; // String | 
let apiVersionId = "apiVersionId_example"; // String | 
apiInstance.getlinkedrelations(xApiKey, apiId, apiVersionId, (error, data, response) => {
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

[**GetlinkedrelationsforanAPIversion**](GetlinkedrelationsforanAPIversion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getrelationdetails

> Getrelationsofatype1 getrelationdetails(xApiKey, apiId, apiVersionId, relationType, relationId)

Get relation details

This call fetches detailed information of a relation.  The response will contain keys as shown in the example response where &#x60;collection&#x60; will contain the collection associated with the relation in &lt;a href&#x3D;\&quot;https://schema.getpostman.com/collection/json/v2.1.0/draft-07/docs/index.html\&quot;&gt;v2.1.0 format&lt;/a&gt;.   For mocks, monitors, and environments, the response will contain the ID of the entity.   &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.RelationsApi();
let xApiKey = "xApiKey_example"; // String | 
let apiId = "apiId_example"; // String | 
let apiVersionId = "apiVersionId_example"; // String | 
let relationType = "relationType_example"; // String | 
let relationId = "relationId_example"; // String | 
apiInstance.getrelationdetails(xApiKey, apiId, apiVersionId, relationType, relationId, (error, data, response) => {
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
 **relationType** | **String**|  | 
 **relationId** | **String**|  | 

### Return type

[**Getrelationsofatype1**](Getrelationsofatype1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getrelationsbytype

> Getrelationsofatype getrelationsbytype(xApiKey, apiId, apiVersionId, relationType)

Get relations by type

This call fetches all the relations by type which are linked to the specified API version along with their details.  The response will contain an array with key &#x60;{{relationType}}&#x60;. Each of the item will consist of all the details related each of the relation.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.RelationsApi();
let xApiKey = "xApiKey_example"; // String | 
let apiId = "apiId_example"; // String | 
let apiVersionId = "apiVersionId_example"; // String | 
let relationType = "relationType_example"; // String | 
apiInstance.getrelationsbytype(xApiKey, apiId, apiVersionId, relationType, (error, data, response) => {
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
 **relationType** | **String**|  | 

### Return type

[**Getrelationsofatype**](Getrelationsofatype.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

