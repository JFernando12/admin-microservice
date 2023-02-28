ADMIN DASHBOARD CUSTOM PRODUCTS

URL DIAGRAMA:
https://lucid.app/lucidchart/invitations/accept/inv_b0d6f57e-1421-4adf-a6ac-bbc221c65720

ESTRUCTURA:

**\*** MICROSERVICE Auth **\***

POST /api/business/signup
POST /api/users/signup
GET /api/users/currentuser
POST /api/users/signin
POST /api/users/signout
PUT /api/users/{userId}

User
{
id: string;
username: string;
password: string;
name: string;
first_lastname: string;
second_lastname: string;
email: string;
cellphone: string;
address: address_id;
billing: billing_id;
business: business_id
role: string;
}

Business
{
  id: string;
  name: string;
  users: [user_id];
  billing: billing_id;
}

Address
{
  id: string;
  zip_code: string;
  street: string;
  colony: string;
  city: string;
  state: string;
  state_code: string;
  country: string;
  country_code: string;
  street_number: string;
}

Billing
{
  id: string;
  name: string;
  street: string;
  zip_code: string;
  colony: string;
  street_number: string;
  rfc: string;
  cfdi_use: string;
  email: string;
  regime: string;
}
