// json-structure.ts
export interface PetJson {
  id: number;
  name: string;
  petKind: string;
  age: number;
  image: string;
  ownerId: number;
}

export interface EmbeddedPetsJson {
  pets: PetJson[];
}

export interface LinksJson {
  self: {
    href: string;
  };
  profile: {
    href: string;
  };
}

export interface PageJson {
  size: number;
  totalElements: number;
  totalPages: number;
  number: number;
}

export interface CatalogJson {
  _embedded: EmbeddedPetsJson;
  _links: LinksJson;
  page: PageJson;
}
