---
sidebar_position: 1
---

# HTTP Server
Running a HotStaq.json file using `hotstaq start` will deploy a HTTP 1.x web server.

## Security Considerations
By default the following files will not be served by the web server:
* .env
* .npmrc
* HotSite.json
* *.pem
