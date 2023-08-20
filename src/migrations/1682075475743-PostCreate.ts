import { MigrationInterface, QueryRunner } from "typeorm";

export class PostCreate1682075475743 implements MigrationInterface {
    name = 'PostCreate1682075475743'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "profile" ("id" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "username" character varying NOT NULL, "thumbnail" character varying NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "bio" character varying NOT NULL, "slug" character varying NOT NULL, "removePageFromDiscovery" boolean NOT NULL, "socialLayout" json NOT NULL, "socialWhatsapp" character varying NOT NULL, "socialFacebook" character varying NOT NULL, "socialInstagram" character varying NOT NULL, "socialTwitter" character varying NOT NULL, "socialYoutube" character varying NOT NULL, "phoneNo" character varying NOT NULL, "website" character varying NOT NULL, "companyName" character varying NOT NULL, "jobTitle" character varying NOT NULL, "location" character varying NOT NULL, "taxOffice" character varying NOT NULL, "taxId" character varying NOT NULL, "iban" character varying NOT NULL, "schoolName" character varying NOT NULL, "fieldOfStudy" character varying NOT NULL, "video" character varying NOT NULL, "videoDiscription" character varying NOT NULL, "acceptButtonColor" character varying NOT NULL, "acceptButtonIcon" character varying NOT NULL, "acceptButtonRadius" character varying NOT NULL, "acceptButtonText" character varying NOT NULL, "acceptButtonTextColor" character varying NOT NULL, "pageSkin" character varying NOT NULL, "views" json NOT NULL, CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "profile"`);
    }

}
