
CREATE DATABASE basedatos
  WITH 
  OWNER = postgres
  ENCODING = 'UTF8'
  TABLESPACE = pg_default
  CONNECTION LIMIT = -1
  TEMPLATE template0;


\c basedatos



CREATE TYPE "enum_worker_status" AS ENUM (
	'Active',
	'Occupied');

CREATE TABLE worker (
	id serial4 NOT NULL,
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	address varchar(255) NOT NULL,
	username varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	docu_pic varchar(255) NULL,
	perf_pic varchar(255) NULL,
	status enum_worker_status DEFAULT 'Active'::enum_worker_status NOT NULL,
	created_at timestamptz NOT NULL,
	updated_at timestamptz NOT NULL,
	CONSTRAINT worker_pkey PRIMARY KEY (id)
);

CREATE TABLE "user" (
	id serial4 NOT NULL,
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	address varchar(255) NOT NULL,
	cell_number varchar(255) NOT NULL,
	public_receipt varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	"password" varchar(255) NOT NULL,
	created_at timestamptz NOT NULL,
	updated_at timestamptz NOT NULL,
	CONSTRAINT user_pkey PRIMARY KEY (id)
);

CREATE TABLE qualification (
	id serial4 NOT NULL,
	rate varchar(255) NULL,
	description varchar(255) NULL,
	CONSTRAINT qualification_pkey PRIMARY KEY (id)
);

CREATE TABLE labour (
	id serial4 NOT NULL,
	labour_name varchar(255) NOT NULL,
	price float8 NOT NULL,
	created_at timestamptz NOT NULL,
	updated_at timestamptz NOT NULL,
	CONSTRAINT labour_pkey PRIMARY KEY (id)
);

CREATE TABLE payment_type (
	id serial4 NOT NULL,
	payment_method varchar(255) NOT NULL,
	created_at timestamptz NOT NULL,
	updated_at timestamptz NOT NULL,
	CONSTRAINT payment_type_pkey PRIMARY KEY (id)
);

CREATE TABLE payment (
	id serial4 NOT NULL,
	payment_type_id int4 NOT NULL,
	user_id int4 NOT NULL,
	labour_id int4 NULL,
	created_at timestamptz NOT NULL,
	updated_at timestamptz NOT NULL,
	CONSTRAINT payment_pkey PRIMARY KEY (id),
	CONSTRAINT payment_labour_id_fkey FOREIGN KEY (labour_id) REFERENCES labour(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT payment_payment_type_id_fkey FOREIGN KEY (payment_type_id) REFERENCES payment_type(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT payment_user_id_fkey FOREIGN KEY (user_id) REFERENCES "user"(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE worker_by_labour (
	id serial4 NOT NULL,
	worker_id int4 NOT NULL,
	labour_id int4 NOT NULL,
	created_at timestamptz NOT NULL,
	updated_at timestamptz NOT NULL,
	CONSTRAINT worker_by_labour_pkey PRIMARY KEY (id),
	CONSTRAINT worker_by_labour_labour_id_fkey FOREIGN KEY (labour_id) REFERENCES labour(id) ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT worker_by_labour_worker_id_fkey FOREIGN KEY (worker_id) REFERENCES worker(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE bill (
	id serial4 NOT NULL,
	"date" timestamptz NOT NULL,
	amount float8 NOT NULL,
	payment_id int4 NOT NULL,
	created_at timestamptz NOT NULL,
	updated_at timestamptz NOT NULL,
	CONSTRAINT bill_pkey PRIMARY KEY (id),
	CONSTRAINT bill_payment_id_fkey FOREIGN KEY (payment_id) REFERENCES payment(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO labour (labour_name,price,created_at,updated_at) VALUES
	 ('Policia',66632.2,'2024-06-14 19:07:01.966-05','2024-06-14 19:07:01.966-05'),
	 ('Medico',100233.4,'2024-06-14 19:07:01.966-05','2024-06-14 19:07:01.966-05'),
	 ('Chef',23233.4,'2024-06-14 19:07:01.966-05','2024-06-14 19:07:01.966-05'),
	 ('Apicultor',633.4,'2024-06-14 19:07:01.966-05','2024-06-14 19:07:01.966-05'),
	 ('Camarero',7973.4,'2024-06-14 19:07:01.966-05','2024-06-14 19:07:01.966-05'),
	 ('Mecanico',400.2,'2024-06-14 19:07:01.966-05','2024-06-14 19:07:01.966-05');


INSERT INTO payment_type (payment_method,created_at,updated_at) VALUES
	 ('Visa','2024-06-14 19:07:01.976-05','2024-06-14 19:07:01.976-05'),
	 ('Master Card','2024-06-14 19:07:01.976-05','2024-06-14 19:07:01.976-05'),
	 ('PayPal','2024-06-14 19:07:01.976-05','2024-06-14 19:07:01.976-05'),
	 ('American Express','2024-06-14 19:07:01.976-05','2024-06-14 19:07:01.976-05'),
	 ('Discover','2024-06-14 19:07:01.976-05','2024-06-14 19:07:01.976-05');
