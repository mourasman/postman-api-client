# PostmanApi.WorkspacesApi

All URIs are relative to *https://api.getpostman.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allworkspaces**](WorkspacesApi.md#allworkspaces) | **GET** /workspaces | All workspaces
[**createWorkspace**](WorkspacesApi.md#createWorkspace) | **POST** /workspaces | Create Workspace
[**deleteWorkspace**](WorkspacesApi.md#deleteWorkspace) | **DELETE** /workspaces/{workspace_id} | Delete Workspace
[**singleworkspace**](WorkspacesApi.md#singleworkspace) | **GET** /workspaces/{workspace_id} | Single workspace
[**updateWorkspace**](WorkspacesApi.md#updateWorkspace) | **PUT** /workspaces/{workspace_id} | Update Workspace



## allworkspaces

> ValidResponse4 allworkspaces(xApiKey)

All workspaces

The &#x60;/workspaces&#x60; endpoint returns a list of all [workspaces](https://www.getpostman.com/docs/v6/postman/workspaces/intro_to_workspaces) that is accessible by you. The list includes your own workspaces and the workspaces that you have access to.  The response contains an array of collection information containing the &#x60;name&#x60;, &#x60;id&#x60;, and &#x60;type&#x60; of each workspace.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.WorkspacesApi();
let xApiKey = "xApiKey_example"; // String | 
apiInstance.allworkspaces(xApiKey, (error, data, response) => {
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

[**ValidResponse4**](ValidResponse4.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createWorkspace

> SuccessfulResponse6 createWorkspace(xApiKey, createWorkspaceRequest)

Create Workspace

This endpoint allows you to create a workspace and populate it with entities like &#x60;collections&#x60;, &#x60;environments&#x60;, &#x60;mocks&#x60; and &#x60;monitors&#x60; using their &#x60;uid&#x60;.  On successful creation of the workspace, the response returns the workspcae &#x60;name&#x60; and &#x60;id&#x60;.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.WorkspacesApi();
let xApiKey = "xApiKey_example"; // String | 
let createWorkspaceRequest = {"workspace":{"name":"New Workspace","type":"personal","description":"Some description","collections":[{"id":"e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d","name":"Straw hats","uid":"8154-e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d"}],"environments":[{"id":"83a1aaa2-a204-4bd8-9b92-4d486918906b","name":"env","uid":"8154-83a1aaa2-a204-4bd8-9b92-4d486918906b"}],"mocks":[{"id":"cda672ef-1375-40e9-baee-e20ece8d7b65"}],"monitors":[{"id":"1e889bd2-3862-4be0-b2c2-9b1fe9673aec"}]}}; // CreateWorkspaceRequest | 
apiInstance.createWorkspace(xApiKey, createWorkspaceRequest, (error, data, response) => {
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
 **createWorkspaceRequest** | [**CreateWorkspaceRequest**](CreateWorkspaceRequest.md)|  | 

### Return type

[**SuccessfulResponse6**](SuccessfulResponse6.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deleteWorkspace

> SuccessfulResponse8 deleteWorkspace(workspaceId)

Delete Workspace

This endpoint allows you to delete an existing workspace.  On successful deletion of the workspace, the response returns the &#x60;id&#x60;.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.WorkspacesApi();
let workspaceId = "workspaceId_example"; // String | 
apiInstance.deleteWorkspace(workspaceId, (error, data, response) => {
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
 **workspaceId** | **String**|  | 

### Return type

[**SuccessfulResponse8**](SuccessfulResponse8.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## singleworkspace

> ValidResponse5 singleworkspace(xApiKey, workspaceId)

Single workspace

Access the contents of a workspace that is accessible to you using its id (&#x60;id&#x60;). Includes the collections, environments, mocks and monitors of that workspace.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.WorkspacesApi();
let xApiKey = "xApiKey_example"; // String | 
let workspaceId = "workspaceId_example"; // String | 
apiInstance.singleworkspace(xApiKey, workspaceId, (error, data, response) => {
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
 **workspaceId** | **String**|  | 

### Return type

[**ValidResponse5**](ValidResponse5.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateWorkspace

> SuccessfulResponse6 updateWorkspace(xApiKey, workspaceId, updateWorkspaceRequest)

Update Workspace

This endpoint allows you to update a workspace and update it&#39;s association to entities like &#x60;collections&#x60;, &#x60;environments&#x60;, &#x60;mocks&#x60; and &#x60;monitors&#x60; using their &#x60;uid&#x60;.  On successful updation of the workspace, the response returns the workspcae &#x60;name&#x60; and &#x60;id&#x60;.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.  **Note** : The endpoint expects you to send the desired state of the workspace in terms of the associated entities so be careful when trying to update these entities.  For eg. if your workspace has collections A and B, and in the update call, you send C&#39;s uid in the collections array, then A and B would be removed from the workspace and C would be added.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.WorkspacesApi();
let xApiKey = "xApiKey_example"; // String | 
let workspaceId = "workspaceId_example"; // String | 
let updateWorkspaceRequest = {"workspace":{"name":"New Workspace updated","description":"Some description","collections":[{"id":"e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d","name":"Straw hats","uid":"8154-e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d"}],"environments":[{"id":"83a1aaa2-a204-4bd8-9b92-4d486918906b","name":"env","uid":"8154-83a1aaa2-a204-4bd8-9b92-4d486918906b"}],"mocks":[{"id":"cda672ef-1375-40e9-baee-e20ece8d7b65"}],"monitors":[{"id":"1e889bd2-3862-4be0-b2c2-9b1fe9673aec"}]}}; // UpdateWorkspaceRequest | 
apiInstance.updateWorkspace(xApiKey, workspaceId, updateWorkspaceRequest, (error, data, response) => {
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
 **workspaceId** | **String**|  | 
 **updateWorkspaceRequest** | [**UpdateWorkspaceRequest**](UpdateWorkspaceRequest.md)|  | 

### Return type

[**SuccessfulResponse6**](SuccessfulResponse6.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

