MICROSERVICE Auth

POST /api/users/signup
GET /api/users/currentuser
POST /api/users/signin
POST /api/users/signout
PUT /api/users/{userId}

User
{
id: string;
username: string;
email: string;
permission: string;
}

Auth
{
id: string;
userId: string;
password: string;
}

MICROSERVICE Products

POST /api/products
GET /api/products
GET /api/products/{productId}
PUT /api/products/{productId}
DELETE /api/products/{productId}

Product
{
id: string;
name: string;
description: string;
price: number;
images: [imageId];
stock: number;
weight: number;
height: number;
length: number;
width: number;
}

Image
{
id: string;
url: string;
}

MICROSERVICE Carts

POST /api/carts
GET /api/carts
GET /api/carts/{cartId}
PUT /api/carts/{cartId}
DELETE /api/carts/{cartId}

Cart
{
id: string;
userId: string;
productId: string;
customId: string;
quantity: number;
version: number;
}

Product
{
id: string;
name: string;
description: string;
price: number;
}

Custom
{
id: string;
images: [imageId];
texts: [textId];
spotifys: [spotifyId];
}

MICROSERVICE Customs

POST /api/customs
GET /api/customs
GET /api/customs/{customId}
PUT /api/customs/{customId}
DELETE /api/customs/{customId}

{
id: string;
userId: string;
images: [imageId];
texts: [textId];
spotifys: [spotifyId];
}

MICROSERVICE Images

POST /api/images
GET /api/images
GET /api/images/{imageId}
DELETE /api/images/{imageId}

{
id: string;
userId: string;
url: string;
description: string;
createdAt: date;
}

MICROSERVICE Texts

POST /api/texts
GET /api/texts
GET /api/texts/{textId}
PUT /api/texts/{textId}
DELETE /api/texts/{textId}

{
id: string;
userId: string;
text: string;
position: string;
createdAt: string;
}

MICROSERVICE Orders

POST /api/orders
GET /api/orders
GET /api/orders/{orderId}
PUT /api/orders/{orderId}
DELETE /api/orders/{orderId}

Order
{
id: string;
userId: string;
carts: [cartId];
shipmentId: string;
paymentId: string;
status: string;
expiredAt: date;
version: number;
}

Cart
{
id: string;
productId: string;
customId: string;
quantity: number;
}

Product
{
id: string;
name: string;
description: string;
price: number;
}

Shipment
{
id: string;
addressId: string;
parcel: string;
status: string;
}

Address
{
id: string;
zipcode: number;
state: string;
city: string;
}

MICROSERVICE Payments

POST /api/payments
GET /api/payments
GET /api/payments/{paymentId}
PUT /api/payments/{paymentId}

Payment
{
id: string;
orderId: string;
stripeId: string;
}

Order
{
id: string;
userId: string;
price: number;
status: OrderStatus;
}

MICROSERVICE Shipments

POST /api/shipments
GET /api/shipments
GET /api/shipments/{shipmentId}
PUT /api/shipments/{shipmentId}

{
id: string;
orderId: string;
addressId: string;
parcel: string;
status: string;
version: number;
}

Order
{
id: string;
userId: string;
productId: number;
status: string;
}

Product
{
id: string;
name: string;
description: string;
price: number;
weight: number;
height: number;
length: number;
width: number;
}

MICROSERVICE Address

POST /api/addresses
GET /api/addresses
GET /api/addresses/{addressId}
PUT /api/addresses/{addressId}

{
id: string;
userId: string;
name: string;
lastname: string;
zipcode: number;
state: string;
city: string;
colony: string;
street: string;
number: number;
reference: string;
}
