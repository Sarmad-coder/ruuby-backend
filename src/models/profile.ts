import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { BaseEntity } from "@medusajs/medusa";
import { generateEntityId } from "@medusajs/medusa/dist/utils";

@Entity()
export class Profile extends BaseEntity {
  // user: [
  //   {
  //     type: mogoose.SchemaTypes.ObjectId,
  //     ref: "user"
  //   }
  // ],

  @Column({ type: "varchar" })
  username: string | null;

  @Column({ type: "varchar" })
  thumbnail: string | null;

  @Column({ type: "varchar" })
  name: string | null;

  @Column({ type: "varchar" })
  email: string | null;

  @Column({ type: "varchar" })
  bio: string | null;

  @Column({ type: "varchar" })
  slug: string | null;

  @Column({ type: "boolean" })
  removePageFromDiscovery: boolean;

  @Column({ type: "json" })
  socialLayout: Array<any>;

  @Column({ type: "varchar" })
  socialWhatsapp: string | null;

  @Column({ type: "varchar" })
  socialFacebook: string | null;

  @Column({ type: "varchar" })
  socialInstagram: string | null;

  @Column({ type: "varchar" })
  socialTwitter: string | null;

  @Column({ type: "varchar" })
  socialYoutube: string | null;

  @Column({ type: "varchar" })
  phoneNo: string | null;

  @Column({ type: "varchar" })
  website: string | null;

  @Column({ type: "varchar" })
  companyName: string | null;

  @Column({ type: "varchar" })
  jobTitle: string | null;

  @Column({ type: "varchar" })
  location: string | null;

  @Column({ type: "varchar" })
  taxOffice: string | null;

  @Column({ type: "varchar" })
  taxId: string | null;

  @Column({ type: "varchar" })
  iban: string | null;

  @Column({ type: "varchar" })
  schoolName: string | null;

  @Column({ type: "varchar" })
  fieldOfStudy: string | null;

  @Column({ type: "varchar" })
  video: string | null;

  @Column({ type: "varchar" })
  videoDiscription: string | null;

  @Column({ type: "varchar" })
  acceptButtonColor: string | null;

  @Column({ type: "varchar" })
  acceptButtonIcon: string | null;

  @Column({ type: "varchar" })
  acceptButtonRadius: string | null;

  @Column({ type: "varchar" })
  acceptButtonText: string | null;

  @Column({ type: "varchar" })
  acceptButtonTextColor: string | null;

  @Column({ type: "varchar" })
  pageSkin: string | null;

  @Column({ type: "json" })
  views: Array<any>;

  @BeforeInsert()
  private beforeInsert(): void {
    this.id = generateEntityId(this.id, "post");
  }
}
