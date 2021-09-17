http2httpsProxy

Possibly unhandled rejection: 
```json
{
   "data":{
      "type":"https://tools.ietf.org/html/rfc7231#section-6.5.1",
      "title":"Bad Request",
      "status":400,
      "traceId":"|fec2d1d4-4378dbc44763f84b."
   },
   "status":400,
   "config":{
      "method":"POST",
      "transformRequest":[
         null
      ],
      "transformResponse":[
         null
      ],
      "jsonpCallbackParam":"callback",
      "url":"/core-service/task/execute-submit/d0eabe31-d354-4cd3-91b6-3af9eb79d90d/0/script/",
      "data":{
         "Items":[
            {
               "Action":"script_submitpreload"
            },
            {
               "Action":"script_select",
               "Data":[
                  [
                     "Approved"
                  ]
               ]
            },
            {
               "Action":"script_savevalues",
               "Data":[
                  [
                     ""
                  ]
               ]
            }
         ]
      },
      "headers":{
         "Accept":"application/json, text/plain, */*",
         "Content-Type":"application/json;charset=utf-8"
      },
      "withCredentials":false
   },
   "statusText":"Bad Request",
   "xhrStatus":"complete"
}
```
