import postgres from "postgres";

const sql = postgres(process.env.POSTGRES_URL as string, { ssl: "require" });

async function seedUser() {
	await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
	await sql`
    CREATE TABLE IF NOT EXISTS "user" (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  firstName VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  birthdate DATE,
  city VARCHAR(255) NOT NULL,
  zipCode INT NOT NULL,
  tel VARCHAR(10),
  photo VARCHAR(255),
  password VARCHAR(255) NOT NULL,
  role VARCHAR(30) DEFAULT 'user'
);
    `;
}

async function seedCamping() {
	await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
	await sql`
    CREATE TABLE IF NOT EXISTS camping (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  label VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  tel VARCHAR(10),
  city VARCHAR(255) NOT NULL,
  zipCode INT NOT NULL,
  adress VARCHAR(255) NOT NULL ,
  description TEXT NOT NULL,
  stars INT NOT NULL,
  opening DATE NOT NULL,
  closing DATE NOT NULL,
  photo VARCHAR(255)
);
    `;
}

async function seedBook() {
	await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
	await sql`
CREATE TABLE IF NOT EXISTS book (
   id UUID DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  user_id UUID NOT NULL,
  camping_id UUID NOT NULL,
  start_book DATE NOT NULL,
  end_book DATE NOT NULL,
  cost FLOAT NOT NULL,
  CONSTRAINT fk_book_user FOREIGN KEY(user_id) REFERENCES "user"(id),
  CONSTRAINT fk_book_camping FOREIGN KEY(camping_id) REFERENCES camping(id)
);
    `;
}

async function seedKindInfra() {
	await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
	await sql`
  CREATE TABLE IF NOT EXISTS kind_infra(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
    label VARCHAR(255) NOT NULL
  )`;
}

async function seedInfrastructure() {
	await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
	await sql`
CREATE TABLE IF NOT EXISTS infrastructure(
     id UUID DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
     kind_infra_id UUID NOT NULL,
     camping_id UUID NOT NULL,
     photo VARCHAR(255),
     CONSTRAINT fk_kind_infra_infra FOREIGN KEY(kind_infra_id) REFERENCES kind_infra(id),
     CONSTRAINT fk_infra_camping FOREIGN KEY(camping_id) REFERENCES camping(id)
);
    `;
}

async function seedModel() {
	await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
	await sql`
CREATE TABLE IF NOT EXISTS model(
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  label VARCHAR(255) NOT NULL
);
    `;
}

async function seedRental() {
	await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
	await sql`
CREATE TABLE IF NOT EXISTS rental(
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  model_id UUID NOT NULL,
  size INT NOT NULL,
  max_pers INT NOT NULL,
  pricePerNight FLOAT NOT NULL,
  opening DATE,
  closing DATE,
  photo VARCHAR(255),
  total INT NOT NULL,
  camping_id UUID NOT NULL,
  CONSTRAINT fk_rental_model FOREIGN KEY(model_id) REFERENCES model(id),
  CONSTRAINT fk_rental_camping FOREIGN KEY(camping_id) REFERENCES camping(id)
);
    `;
}

async function seedTypePitches() {
	await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
	await sql`
CREATE TABLE IF NOT EXISTS type_pitches(
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
    label VARCHAR(255) NOT NULL
  );
 `;
}

async function seedPitches() {
	await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
	await sql`
CREATE TABLE IF NOT EXISTS pitches(
   id UUID DEFAULT uuid_generate_v4() PRIMARY KEY NOT NULL,
  type_pitches_id UUID NOT Null,
  size INT NOT NULL,
  is_electrified BOOLEAN NOT NULL,
  power INT,
  price_night FLOAT NOT NULL,
  max_pers INT NOT NULL,
  opening DATE,
  closing DATE,
  photo VARCHAR(255),
  total INT NOT NULL,
  camping_id UUID NOT NULL,
  CONSTRAINT fk_type_pitches FOREIGN KEY(type_pitches_id) REFERENCES type_pitches(id),
  CONSTRAINT fk_pitches_camping FOREIGN KEY(camping_id) REFERENCES camping(id)
);
     `;
}

export async function GET() {
	try {
		const result = await sql.begin(async (sql) => [
			seedUser(),
			seedCamping(),
			seedBook(),
			seedKindInfra(),
			seedInfrastructure(),
			seedModel(),
			seedRental(),
			seedTypePitches(),
			seedPitches(),
		]);

		return Response.json({ message: "Database seeded successfully" });
	} catch (error) {
		return Response.json({ error }, { status: 500 });
	}
}
