# PostmanApi.SchemaApi

All URIs are relative to *https://api.getpostman.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSchema**](SchemaApi.md#createSchema) | **POST** /apis/{apiId}/versions/{apiVersionId}/schemas | Create Schema
[**createcollectionfromschema**](SchemaApi.md#createcollectionfromschema) | **POST** /apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}/collections | Create collection from schema
[**getSchema**](SchemaApi.md#getSchema) | **GET** /apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId} | Get Schema
[**updateSchema**](SchemaApi.md#updateSchema) | **PUT** /apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId} | Update Schema



## createSchema

> Createschema createSchema(xApiKey, apiId, apiVersionId, body)

Create Schema

This call creates a new schema.  Request body should contain a &#x60;schema&#x60; object which should atleast have these properties with &#x60;string&#x60; values:  - **&#x60;type&#x60;**: Allowed types are &#x60;openapi3&#x60;, &#x60;openapi2&#x60;, &#x60;openapi1&#x60;, &#x60;raml&#x60; and &#x60;graphql&#x60;. - **&#x60;language&#x60;** : Allowed languages are &#x60;json&#x60; and &#x60;yaml&#x60; for OpenAPI and RAML schema types. GraphQL schema type accepts only &#x60;graphql&#x60; language. - **&#x60;schema&#x60;**: Optional. If passed, must be the content of the schema as a &#x60;string&#x60;.  Response contains a &#x60;schema&#x60; object with all the details related to the created schema, namely, &#x60;id&#x60;, &#x60;language&#x60;, &#x60;type&#x60; etc.   &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.SchemaApi();
let xApiKey = "xApiKey_example"; // String | 
let apiId = "apiId_example"; // String | 
let apiVersionId = "apiVersionId_example"; // String | 
let body = {
	"schema": {
		"language": "yaml",
		"schema": {{schema}},
		"type": "openapi3"
	}
}; // String | 
apiInstance.createSchema(xApiKey, apiId, apiVersionId, body, (error, data, response) => {
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
 **body** | **String**|  | 

### Return type

[**Createschema**](Createschema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createcollectionfromschema

> Createcollectionfromschema createcollectionfromschema(workspace, xApiKey, apiId, apiVersionId, schemaId, createcollectionfromschemaRequest)

Create collection from schema

This call creates a collection and links it to an API as one or multiple relations.   Request body requires two keys: - &#x60;name&#x60; - Name of the collection to be created. - &#x60;relations&#x60; - A list of relation(s) to be created.  The allowed relation types are &#x60;contracttest&#x60;, &#x60;integrationtest&#x60;, &#x60;testsuite&#x60;, and &#x60;documentation&#x60;.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.SchemaApi();
let workspace = {{workspaceId}}; // String | 
let xApiKey = "xApiKey_example"; // String | 
let apiId = "apiId_example"; // String | 
let apiVersionId = "apiVersionId_example"; // String | 
let schemaId = "schemaId_example"; // String | 
let createcollectionfromschemaRequest = {"name":"My generated collection","relations":[{"type":"contracttest"}]}; // CreatecollectionfromschemaRequest | 
apiInstance.createcollectionfromschema(workspace, xApiKey, apiId, apiVersionId, schemaId, createcollectionfromschemaRequest, (error, data, response) => {
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
 **apiId** | **String**|  | 
 **apiVersionId** | **String**|  | 
 **schemaId** | **String**|  | 
 **createcollectionfromschemaRequest** | [**CreatecollectionfromschemaRequest**](CreatecollectionfromschemaRequest.md)|  | 

### Return type

[**Createcollectionfromschema**](Createcollectionfromschema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; charset=utf-8


## getSchema

> Getschema getSchema(xApiKey, apiId, apiVersionId, schemaId)

Get Schema

This call fetches a single schema having the specified id.  Response contains a &#x60;schema&#x60; object with all the details related to the schema, namely, &#x60;id&#x60;, &#x60;language&#x60;, &#x60;type&#x60;, &#x60;schema&#x60; etc.   &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.SchemaApi();
let xApiKey = "xApiKey_example"; // String | 
let apiId = "apiId_example"; // String | 
let apiVersionId = "apiVersionId_example"; // String | 
let schemaId = "schemaId_example"; // String | 
apiInstance.getSchema(xApiKey, apiId, apiVersionId, schemaId, (error, data, response) => {
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
 **schemaId** | **String**|  | 

### Return type

[**Getschema**](Getschema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateSchema

> Updateschema updateSchema(xApiKey, apiId, apiVersionId, schemaId, body)

Update Schema

This call updates an existing schema.  Request body should contain a &#x60;schema&#x60; object which should atleast have these properties with &#x60;string&#x60; values:  - **&#x60;type&#x60;**: Allowed types are &#x60;openapi3&#x60;, &#x60;openapi2&#x60;, &#x60;openapi1&#x60;, &#x60;raml&#x60; and &#x60;graphql&#x60;. - **&#x60;language&#x60;** : Allowed languages are &#x60;json&#x60; and &#x60;yaml&#x60; for OpenAPI and RAML schema types. GraphQL schema type accepts only &#x60;graphql&#x60; language. - **&#x60;schema&#x60;**: Optional. If passed, must be the content of the schema as a &#x60;string&#x60;.  Response contains a &#x60;schema&#x60; object with all the details related to the created schema, namely, &#x60;id&#x60;, &#x60;language&#x60;, &#x60;type&#x60; etc.   &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.SchemaApi();
let xApiKey = "xApiKey_example"; // String | 
let apiId = "apiId_example"; // String | 
let apiVersionId = "apiVersionId_example"; // String | 
let schemaId = "schemaId_example"; // String | 
let body = {
	"schema": {
		"language": "json",
		"schema": {{schema}},
		"type": "openapi3"
	}
}; // String | 
apiInstance.updateSchema(xApiKey, apiId, apiVersionId, schemaId, body, (error, data, response) => {
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
 **schemaId** | **String**|  | 
 **body** | **String**|  | 

### Return type

[**Updateschema**](Updateschema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

