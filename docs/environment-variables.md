---
sidebar_position: 2
---

# Environment Variables
You can configure how HotStaq starts by using:
* DATABASE_TYPE
	* Type: string
	* Description: The type of database to use.
	* Accepted values:
		* mysql
		* influx
* DATABASE_SERVER
	* Type: string
	* Description: The url to the database server to connect to.
	* Accepted values:
		* MySql example: 127.0.0.1
		* Influx example: http://127.0.0.1:8086
* DATABASE_PORT
	* Type: number
	* Description: The database port to use.
	* Accepted values:
		* Any integer.
* DATABASE_USERNAME
	* Type: string
	* Description: The database username to use.
	* Accepted values:
		* Any string.
* DATABASE_PASSWORD
	* Type: string
	* Description: The database password to use.
	* Accepted values:
		* Any string.
* DATABASE_ORG
	* Type: string
	* Description: The organization that contains the database. For Influx use.
	* Accepted values:
		* Any string.
* DATABASE_TOKEN
	* Type: string
	* Description: The database token to use. For Influx use.
	* Accepted values:
		* Any string.
* DATABASE_SCHEMA
	* Type: string
	* Description: The database schema (or bucket) to use.
	* Accepted values:
		* Any string.
* SELENIUM_REMOTE_SERVER
	* Type: string
	* Description: The remote selenium server to do web browser tests with.
	* Accepted values:
		* Any valid url.
* SELENIUM_WINDOW_WIDTH
	* Type: number
	* Description: The width of the new browser window.
	* Accepted values:
		* Any integer.
* SELENIUM_WINDOW_HEIGHT
	* Type: number
	* Description: The height of the new browser window.
	* Accepted values:
		* Any integer.
* TESTING_DEVTOOLS
	* Type: number
	* Description: Set to 1 if you want chrome to open the dev tools as browser tests start. This is only for testing.
	* Accepted values:
		* 0
		* 1
* TESTING_REMOTE_SERVER
	* Type: string
	* Description: The remote server to use during browser tests.
	* Accepted values:
		* Any valid url.