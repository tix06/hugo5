BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "AUTEURS" (
	"id"	INTEGER,
	"nom"	TEXT,
	"prenom"	TEXT,
	"ann_naissance"	INTEGER,
	"langue_ecriture"	TEXT,
	PRIMARY KEY("id")
);
CREATE TABLE IF NOT EXISTS "LIVRES" (
	"id"	INTEGER,
	"titre"	TEXT,
	"id_auteur"	INTEGER,
	"ann_publi"	INTEGER,
	"note" INTEGER,
	PRIMARY KEY("id")
);

COMMIT;
