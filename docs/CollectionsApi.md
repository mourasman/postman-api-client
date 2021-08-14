# PostmanApi.CollectionsApi

All URIs are relative to *https://api.getpostman.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allCollections**](CollectionsApi.md#allCollections) | **GET** /collections | All Collections
[**createCollection**](CollectionsApi.md#createCollection) | **POST** /collections | Create Collection
[**createaFork**](CollectionsApi.md#createaFork) | **POST** /collections/fork/{collection_uid} | Create a Fork
[**deleteCollection**](CollectionsApi.md#deleteCollection) | **DELETE** /collections/{collection_uid} | Delete Collection
[**mergeaFork**](CollectionsApi.md#mergeaFork) | **POST** /collections/merge | Merge a Fork
[**singleCollection**](CollectionsApi.md#singleCollection) | **GET** /collections/{collection_uid} | Single Collection
[**updateCollection**](CollectionsApi.md#updateCollection) | **PUT** /collections/{collection_uid} | Update Collection



## allCollections

> ValidResponse allCollections(xApiKey)

All Collections

The &#x60;/collections&#x60; endpoint returns a list of all [collections](https://www.getpostman.com/docs/collections) that are accessible by you. The list includes your own collections and the collections that you have subscribed to.  The response contains an array of collection information containing the &#x60;name&#x60;, &#x60;id&#x60;, &#x60;owner&#x60; and &#x60;uid&#x60; of each collection.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.CollectionsApi();
let xApiKey = "xApiKey_example"; // String | 
apiInstance.allCollections(xApiKey, (error, data, response) => {
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

[**ValidResponse**](ValidResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8


## createCollection

> CreateCollectioninaWorkspace createCollection(xApiKey, createCollectionRequest, opts)

Create Collection

This endpoint allows you to create collections using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).  On successful creation of the collection, the response returns the collection &#x60;name&#x60;, &#x60;id&#x60; and the &#x60;uid&#x60;.  You can also specify the context of a workspace to create a collection in directly by passing the &#x60;workspace&#x60; as a query param.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.CollectionsApi();
let xApiKey = "xApiKey_example"; // String | 
let createCollectionRequest = {"collection":{"info":{"name":"Sample Collection {{$randomInt}}","description":"This is just a sample collection.","schema":"https://schema.getpostman.com/json/collection/v2.1.0/collection.json"},"item":[{"name":"This is a folder","item":[{"name":"Sample POST Request","request":{"url":"https://postman-echo.com/post","method":"POST","header":[{"key":"Content-Type","value":"application/json"}],"body":{"mode":"raw","raw":"{\"data\": \"123\"}"},"description":"This is a sample POST Request"}}]},{"name":"Sample GET Request","request":{"url":"https://postman-echo/get","method":"GET","description":"This is a sample GET Request"}}]}}; // CreateCollectionRequest | 
let opts = {
  'workspace': "workspace_example" // String | 
};
apiInstance.createCollection(xApiKey, createCollectionRequest, opts, (error, data, response) => {
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
 **createCollectionRequest** | [**CreateCollectionRequest**](CreateCollectionRequest.md)|  | 
 **workspace** | **String**|  | [optional] 

### Return type

[**CreateCollectioninaWorkspace**](CreateCollectioninaWorkspace.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createaFork

> createaFork(workspace, xApiKey, collectionUid, createaForkRequest)

Create a Fork

This endpoint allows you to create a fork from an existing collection.  On successful creation of the collection, the response returns the collection &#x60;name&#x60;, &#x60;id&#x60;, &#x60;uid&#x60; along with &#x60;fork&#x60; information.  You can also specify the context of a workspace to fork a collection in by passing the &#x60;workspace&#x60; as a query param.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.CollectionsApi();
let workspace = {{workspace_id}}; // String | Workspace ID is required to create a fork
let xApiKey = "xApiKey_example"; // String | 
let collectionUid = "collectionUid_example"; // String | 
let createaForkRequest = {"name":"Fork name"}; // CreateaForkRequest | 
apiInstance.createaFork(workspace, xApiKey, collectionUid, createaForkRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **String**| Workspace ID is required to create a fork | 
 **xApiKey** | **String**|  | 
 **collectionUid** | **String**|  | 
 **createaForkRequest** | [**CreateaForkRequest**](CreateaForkRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## deleteCollection

> CollectionDeleted deleteCollection(xApiKey, collectionUid)

Delete Collection

This endpoint allows you to delete an existing collection.  On successful deletion of the collection, the response returns the &#x60;id&#x60; and &#x60;uid&#x60;.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.CollectionsApi();
let xApiKey = "xApiKey_example"; // String | 
let collectionUid = "collectionUid_example"; // String | 
apiInstance.deleteCollection(xApiKey, collectionUid, (error, data, response) => {
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
 **collectionUid** | **String**|  | 

### Return type

[**CollectionDeleted**](CollectionDeleted.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8, application/json


## mergeaFork

> mergeaFork(xApiKey, mergeaForkRequest)

Merge a Fork

This endpoint allows you to merge a forked collection back to its destination collection.  On successful creation of the collection, the response returns the collection &#x60;name&#x60;, &#x60;id&#x60; and &#x60;uid&#x60;.  You need to specify the fork UID (as &#x60;source&#x60;) and destination collection UID (as &#x60;destination&#x60;) in the request body.  Optionally, you can also specify the merge strategy as either &#x60;deleteSource&#x60; or &#x60;updateSourceWithDestination&#x60;. Following is an explanation of the merge strategies  | Merge Strategy | Behaviour | | --- | --- | | deleteSource | Forked collection is deleted after merging | | updateSourceWithDestination | Forked collection is up to date with changes in destination collection |  If the collections cannot be merged (due to conflicts), appropriate error messages will be returned.   &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.CollectionsApi();
let xApiKey = "xApiKey_example"; // String | 
let mergeaForkRequest = {"strategy":"deleteSource","source":"{{source_collection_uid}}","destination":"{{destination_collection_uid}}"}; // MergeaForkRequest | 
apiInstance.mergeaFork(xApiKey, mergeaForkRequest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xApiKey** | **String**|  | 
 **mergeaForkRequest** | [**MergeaForkRequest**](MergeaForkRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: Not defined


## singleCollection

> ValidResponse1 singleCollection(xApiKey, collectionUid)

Single Collection

Access the contents of a collection that is accessible to you using its unique id (&#x60;uid&#x60;).  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.CollectionsApi();
let xApiKey = "xApiKey_example"; // String | 
let collectionUid = "collectionUid_example"; // String | 
apiInstance.singleCollection(xApiKey, collectionUid, (error, data, response) => {
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
 **collectionUid** | **String**|  | 

### Return type

[**ValidResponse1**](ValidResponse1.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8


## updateCollection

> CollectionUpdated updateCollection(xApiKey, collectionUid, updateCollectionRequest)

Update Collection

This endpoint allows you to update an existing collection using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).  On successful updation of the collection, the response returns the collection &#x60;name&#x60;, &#x60;id&#x60; and &#x60;uid&#x60;.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.  Note: Please be careful when trying to update the collection, as the existing collection will be replaced by the request body.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.CollectionsApi();
let xApiKey = "xApiKey_example"; // String | 
let collectionUid = "collectionUid_example"; // String | 
let updateCollectionRequest = {"collection":{"info":{"name":"Sample Collection {{$randomInt}}","description":"This is just a sample collection.","_postman_id":"174bad7c-07e3-45f3-914f-36cf84e5586f","schema":"https://schema.getpostman.com/json/collection/v2.1.0/collection.json"},"item":[{"name":"This is a folder","item":[{"name":"Sample POST Request","request":{"url":"https://postman-echo.com/post","method":"POST","header":[{"key":"Content-Type","value":"application/json"}],"body":{"mode":"raw","raw":"{\"data\": \"123\"}"},"description":"This is a sample POST Request"}}]},{"name":"Sample GET Request","request":{"url":"https://postman-echo/get","method":"GET","description":"This is a sample GET Request"}}]}}; // UpdateCollectionRequest | 
apiInstance.updateCollection(xApiKey, collectionUid, updateCollectionRequest, (error, data, response) => {
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
 **collectionUid** | **String**|  | 
 **updateCollectionRequest** | [**UpdateCollectionRequest**](UpdateCollectionRequest.md)|  | 

### Return type

[**CollectionUpdated**](CollectionUpdated.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; charset=utf-8, application/json

