# Overview

REpresentational State Transfer(REST) style APIs are very common. The big thing is that they use HTTP Verbs (GET/POST/PUT/DELETE) to help to document different CRUD operations to resources stored at URLs.

## Activities

- Get a url from [crudcrud.com](https://crudcrud.com/) (example `https://crudcrud.com/api/<endpoint-id>`)
- Send a POST request to create a resource `https://crudcrud.com/api/<endpoint-id>/<resource>`.
  ![](./Postman-POST.PNG)
- With JS make a fetch GET request to `https://crudcrud.com/api/<endpoint-id>/<resource>`
- _Bonus_: Perform all CRUD operations from a web page.

## Resources

- _note_ Postman is a tool for helping to make/troubleshoot API requests. You can download the [desktop app](https://www.postman.com/downloads/) or there is a [VS Code extension](breaking-point.vsc-postman)
- [REST API intro](https://www.geeksforgeeks.org/rest-api-introduction/)
