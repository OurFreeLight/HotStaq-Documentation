[hotstaq](../README.md) / [Modules](../modules.md) / HotAPI

# Class: HotAPI

The API to use.

## Hierarchy

- **`HotAPI`**

  ↳ [`HotTesterAPI`](HotTesterAPI.md)

## Table of contents

### Constructors

- [constructor](HotAPI.md#constructor)

### Properties

- [authCredentials](HotAPI.md#authcredentials)
- [baseUrl](HotAPI.md#baseurl)
- [connection](HotAPI.md#connection)
- [createFunctions](HotAPI.md#createfunctions)
- [db](HotAPI.md#db)
- [executeEventsUsing](HotAPI.md#executeeventsusing)
- [onPostRegister](HotAPI.md#onpostregister)
- [onPreRegister](HotAPI.md#onpreregister)
- [routes](HotAPI.md#routes)
- [userAuth](HotAPI.md#userauth)

### Methods

- [addRoute](HotAPI.md#addroute)
- [getDB](HotAPI.md#getdb)
- [getDBSchema](HotAPI.md#getdbschema)
- [makeCall](HotAPI.md#makecall)
- [registerRoute](HotAPI.md#registerroute)
- [registerRoutes](HotAPI.md#registerroutes)
- [setDBSchema](HotAPI.md#setdbschema)

## Constructors

### constructor

• **new HotAPI**(`baseUrl`, `connection?`, `db?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `baseUrl` | `string` | `undefined` |
| `connection` | [`HotServer`](HotServer.md) \| [`HotClient`](HotClient.md) | `null` |
| `db` | [`HotDB`](HotDB.md)<`any`, `any`, [`HotDBSchema`](HotDBSchema.md)\> | `null` |

#### Defined in

[HotAPI.ts:78](https://github.com/OurFreeLight/HotStaq/blob/1bc3620/src/HotAPI.ts#L78)

## Properties

### authCredentials

• **authCredentials**: `any`

The authorization credentials to use throughout the application.

#### Defined in

[HotAPI.ts:58](https://github.com/OurFreeLight/HotStaq/blob/1bc3620/src/HotAPI.ts#L58)

___

### baseUrl

• **baseUrl**: `string`

The base url for the server.

#### Defined in

[HotAPI.ts:41](https://github.com/OurFreeLight/HotStaq/blob/1bc3620/src/HotAPI.ts#L41)

___

### connection

• **connection**: [`HotServer`](HotServer.md) \| [`HotClient`](HotClient.md)

The server connection.

#### Defined in

[HotAPI.ts:37](https://github.com/OurFreeLight/HotStaq/blob/1bc3620/src/HotAPI.ts#L37)

___

### createFunctions

• **createFunctions**: `boolean`

If set, this will create the route variables and functions for
easy client/server calling.

#### Defined in

[HotAPI.ts:46](https://github.com/OurFreeLight/HotStaq/blob/1bc3620/src/HotAPI.ts#L46)

___

### db

• **db**: [`HotDB`](HotDB.md)<`any`, `any`, [`HotDBSchema`](HotDBSchema.md)\>

The database connection.

#### Defined in

[HotAPI.ts:54](https://github.com/OurFreeLight/HotStaq/blob/1bc3620/src/HotAPI.ts#L54)

___

### executeEventsUsing

• **executeEventsUsing**: [`EventExecutionType`](../enums/EventExecutionType.md)

The database connection.

#### Defined in

[HotAPI.ts:50](https://github.com/OurFreeLight/HotStaq/blob/1bc3620/src/HotAPI.ts#L50)

___

### onPostRegister

• **onPostRegister**: () => `Promise`<`boolean`\>

#### Type declaration

▸ (): `Promise`<`boolean`\>

Executed when the API has finished registering routes. If
this function returns false, the server will not start.

##### Returns

`Promise`<`boolean`\>

#### Defined in

[HotAPI.ts:76](https://github.com/OurFreeLight/HotStaq/blob/1bc3620/src/HotAPI.ts#L76)

___

### onPreRegister

• **onPreRegister**: () => `Promise`<`boolean`\>

#### Type declaration

▸ (): `Promise`<`boolean`\>

Executed when the API is about to start registering routes. If
this function returns false, the server will not start.

##### Returns

`Promise`<`boolean`\>

#### Defined in

[HotAPI.ts:71](https://github.com/OurFreeLight/HotStaq/blob/1bc3620/src/HotAPI.ts#L71)

___

### routes

• **routes**: `Object`

The database connection.

#### Index signature

▪ [name: `string`]: [`HotRoute`](HotRoute.md)

#### Defined in

[HotAPI.ts:66](https://github.com/OurFreeLight/HotStaq/blob/1bc3620/src/HotAPI.ts#L66)

___

### userAuth

• **userAuth**: [`ServerAuthorizationFunction`](../modules.md#serverauthorizationfunction)

The function used for user authentication.

#### Defined in

[HotAPI.ts:62](https://github.com/OurFreeLight/HotStaq/blob/1bc3620/src/HotAPI.ts#L62)

## Methods

### addRoute

▸ **addRoute**(`route`, `routeMethod?`, `executeFunction?`): `void`

Add a route. If this.createFunctions is set to true, this will take the incoming
route and create an object in this HotAPI object using the name of the route. If there's
any HotRouteMethods inside of the incoming HotRoute, it will create the methods
and attach them to the newly created HotRoute object.

Example:
```
export class Users extends HotRoute
{
		constructor (api: FreeLightAPI)
		{
			super (api.connection, "user");

			this.addMethod ("create", this._create, HTTPMethod.POST);
		}

		protected async _create (req: any, res: any, authorizedValue: any, jsonObj: any, queryObj: any): Promise<any>
		{
			return (true);
		}
}
```

This in turn could be used like so:
```
Hot.API.user.create ({});
```

Additionally it would create the endpoint: ```http://127.0.0.1:8080/v1/user/create```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `route` | `string` \| [`HotRoute`](HotRoute.md) | `undefined` | The route to add. Can be either a full HotRoute object, or just the route's name. If a HotRoute object is supplied, the rest of the parameters will be ignored. |
| `routeMethod` | `string` \| [`HotRouteMethod`](HotRouteMethod.md) | `null` | The route's method to add. If the route parameter is a string, it will be interpreted as the route's name, and this will be the method added to the new route. |
| `executeFunction` | (`req`: `any`, `res`: `any`, `authorizedValue`: `any`, `jsonObj`: `any`, `queryObj`: `any`) => `Promise`<`any`\> | `null` | The function to execute when routeMethod is called by the API. |

#### Returns

`void`

#### Defined in

[HotAPI.ts:167](https://github.com/OurFreeLight/HotStaq/blob/1bc3620/src/HotAPI.ts#L167)

___

### getDB

▸ **getDB**(): [`HotDB`](HotDB.md)<`any`, `any`, [`HotDBSchema`](HotDBSchema.md)\>

Get the database being used.

#### Returns

[`HotDB`](HotDB.md)<`any`, `any`, [`HotDBSchema`](HotDBSchema.md)\>

#### Defined in

[HotAPI.ts:109](https://github.com/OurFreeLight/HotStaq/blob/1bc3620/src/HotAPI.ts#L109)

___

### getDBSchema

▸ **getDBSchema**(): [`HotDBSchema`](HotDBSchema.md)

Get the database schema being used.

#### Returns

[`HotDBSchema`](HotDBSchema.md)

#### Defined in

[HotAPI.ts:120](https://github.com/OurFreeLight/HotStaq/blob/1bc3620/src/HotAPI.ts#L120)

___

### makeCall

▸ **makeCall**(`route`, `data`, `httpMethod?`): `Promise`<`any`\>

Make a call to the API.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `route` | `string` | `undefined` |
| `data` | `any` | `undefined` |
| `httpMethod` | `string` | `"POST"` |

#### Returns

`Promise`<`any`\>

#### Defined in

[HotAPI.ts:343](https://github.com/OurFreeLight/HotStaq/blob/1bc3620/src/HotAPI.ts#L343)

___

### registerRoute

▸ **registerRoute**(`route`): `Promise`<`void`\>

Register a route with the server.

#### Parameters

| Name | Type |
| :------ | :------ |
| `route` | [`HotRoute`](HotRoute.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[HotAPI.ts:321](https://github.com/OurFreeLight/HotStaq/blob/1bc3620/src/HotAPI.ts#L321)

___

### registerRoutes

▸ **registerRoutes**(): `Promise`<`void`\>

Register all routes with the server.

#### Returns

`Promise`<`void`\>

#### Defined in

[HotAPI.ts:330](https://github.com/OurFreeLight/HotStaq/blob/1bc3620/src/HotAPI.ts#L330)

___

### setDBSchema

▸ **setDBSchema**(`schema`): `void`

Set the database schema for use.

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`HotDBSchema`](HotDBSchema.md) |

#### Returns

`void`

#### Defined in

[HotAPI.ts:95](https://github.com/OurFreeLight/HotStaq/blob/1bc3620/src/HotAPI.ts#L95)
