# PostmanApi.MonitorsApi

All URIs are relative to *https://api.getpostman.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**allMonitors**](MonitorsApi.md#allMonitors) | **GET** /monitors | All Monitors
[**createMonitor**](MonitorsApi.md#createMonitor) | **POST** /monitors | Create Monitor
[**deleteMonitor**](MonitorsApi.md#deleteMonitor) | **DELETE** /monitors/{monitor_uid} | Delete Monitor
[**runaMonitor**](MonitorsApi.md#runaMonitor) | **POST** /monitors/{monitor_uid}/run | Run a Monitor
[**singleMonitor**](MonitorsApi.md#singleMonitor) | **GET** /monitors/{monitor_uid} | Single Monitor
[**updateMonitor**](MonitorsApi.md#updateMonitor) | **PUT** /monitors/{monitor_uid} | Update Monitor



## allMonitors

> SuccessfulResponse4 allMonitors(xApiKey)

All Monitors

The &#x60;/monitors&#x60; endpoint returns a list of all [monitors](https://monitor.getpostman.com/) that are accessible by you.  The response contains an array of monitors information containing the &#x60;name&#x60;, &#x60;id&#x60;, &#x60;owner&#x60; and &#x60;uid&#x60; of each monitor.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.MonitorsApi();
let xApiKey = "xApiKey_example"; // String | 
apiInstance.allMonitors(xApiKey, (error, data, response) => {
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

[**SuccessfulResponse4**](SuccessfulResponse4.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8


## createMonitor

> MonitorCreated createMonitor(xApiKey, createMonitorRequest)

Create Monitor

This endpoint allows you to create a monitor.  Some sample &#x60;cron&#x60; values are:  | Frequency                  | Cron Pattern   | |-----------------------|----------------| | Every 5 minutes       | &#x60;*_/5 * * * *&#x60;  | | Every 30 minutes     | &#x60;*_/30 * * * *&#x60; | | Every Hour         | &#x60;0 *_/1 * * *&#x60;  | | Every 6 Hours      | &#x60;0 *_/6 * * *&#x60;  | | Every day at 5pm    | &#x60;0 17 * * *&#x60;   | | Every Monday at 12pm  | &#x60;0 12 * * MON&#x60; | | Every weekday (Monday - Friday) at 6am | &#x60;0 6 * * MON-FRI&#x60; |  Note: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules.   For more information about the format of the &#x60;timezone&#x60; value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)  You can also specify the context of a workspace to create a monitor in directly by passing the &#x60;workspace&#x60; as a query param.   &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.MonitorsApi();
let xApiKey = "xApiKey_example"; // String | 
let createMonitorRequest = {"monitor":{"name":"This is a Monitor Name","schedule":{"cron":"0 0 * * *","timezone":"Asia/Kolkata"},"collection":"5852-8d05dd85-222c-1452-553b-e76a531b71ed","environment":"5852-8a4c21ea-2a36-40d1-a82d-d717fac9d6ef"}}; // CreateMonitorRequest | 
apiInstance.createMonitor(xApiKey, createMonitorRequest, (error, data, response) => {
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
 **createMonitorRequest** | [**CreateMonitorRequest**](CreateMonitorRequest.md)|  | 

### Return type

[**MonitorCreated**](MonitorCreated.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; charset=utf-8, application/json


## deleteMonitor

> MonitorDeleted deleteMonitor(xApiKey, monitorUid)

Delete Monitor

This endpoint can be used to delete an existing monitor using its &#x60;uid&#x60;.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.MonitorsApi();
let xApiKey = "xApiKey_example"; // String | 
let monitorUid = "monitorUid_example"; // String | 
apiInstance.deleteMonitor(xApiKey, monitorUid, (error, data, response) => {
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
 **monitorUid** | **String**|  | 

### Return type

[**MonitorDeleted**](MonitorDeleted.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8, application/json


## runaMonitor

> MonitorRunwithErrors runaMonitor(xApiKey, monitorUid)

Run a Monitor

This endpoint will run the monitor instantly and wait for the monitor to run completely. It responds with the run results.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.MonitorsApi();
let xApiKey = "xApiKey_example"; // String | 
let monitorUid = "monitorUid_example"; // String | 
apiInstance.runaMonitor(xApiKey, monitorUid, (error, data, response) => {
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
 **monitorUid** | **String**|  | 

### Return type

[**MonitorRunwithErrors**](MonitorRunwithErrors.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8


## singleMonitor

> SuccessfulResponse5 singleMonitor(xApiKey, monitorUid)

Single Monitor

This endpoint fetches you basic information about the monitor using its &#x60;uid&#x60;.  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.MonitorsApi();
let xApiKey = "xApiKey_example"; // String | 
let monitorUid = "monitorUid_example"; // String | 
apiInstance.singleMonitor(xApiKey, monitorUid, (error, data, response) => {
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
 **monitorUid** | **String**|  | 

### Return type

[**SuccessfulResponse5**](SuccessfulResponse5.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json; charset=utf-8, application/json


## updateMonitor

> MonitorUpdated updateMonitor(xApiKey, monitorUid, updateMonitorRequest)

Update Monitor

This endpoint allows you to update a monitor using its &#x60;uid&#x60;. Only the monitor name and its schedule can be updated.  Some example &#x60;cron&#x60; values are:  | Frequency                  | Cron Pattern   | |-----------------------|----------------| | Every 5 minutes       | &#x60;*_/5 * * * *&#x60;  | | Every 30 minutes     | &#x60;*_/30 * * * *&#x60; | | Every Hour         | &#x60;0 *_/1 * * *&#x60;  | | Every 6 Hours      | &#x60;0 *_/6 * * *&#x60;  | | Every day at 5pm    | &#x60;0 17 * * *&#x60;   | | Every Monday at 12pm  | &#x60;0 12 * * MON&#x60; | | Every weekday (Monday - Friday) at 6am | &#x60;0 6 * * MON-FRI&#x60; |  Note: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules.   For more information about the format of the &#x60;timezone&#x60; value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)  &gt; Requires &lt;a href&#x3D;\&quot;#authentication\&quot;&gt;API Key&lt;/a&gt; as &#x60;X-Api-Key&#x60; request header or &#x60;apikey&#x60; URL query parameter.

### Example

```javascript
import PostmanApi from 'postman_api';

let apiInstance = new PostmanApi.MonitorsApi();
let xApiKey = "xApiKey_example"; // String | 
let monitorUid = "monitorUid_example"; // String | 
let updateMonitorRequest = {"monitor":{"name":"Updated Monitor Name","schedule":{"cron":"*/5 * * * *","timezone":"America/Chicago"}}}; // UpdateMonitorRequest | 
apiInstance.updateMonitor(xApiKey, monitorUid, updateMonitorRequest, (error, data, response) => {
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
 **monitorUid** | **String**|  | 
 **updateMonitorRequest** | [**UpdateMonitorRequest**](UpdateMonitorRequest.md)|  | 

### Return type

[**MonitorUpdated**](MonitorUpdated.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json; charset=utf-8

