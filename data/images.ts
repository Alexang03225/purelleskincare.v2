/** Curated Unsplash photography — IDs verified live (200 OK). */

const u = (id: string, w = 1000) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

/** Verified working skincare / beauty photos */
const P = {
  a: "photo-1556228720-195a672e8a03",
  b: "photo-1611930022073-b7a4ba5fcccd",
  c: "photo-1556228578-0d85b1a4d571",
  d: "photo-1556228578-8c89e6adf883",
  e: "photo-1598440947619-2c35fc9aa908",
  f: "photo-1556228453-efd6c1ff04f6",
  g: "photo-1570554886111-e80fcca6a029",
  h: "photo-1596462502278-27bfdc403348",
  i: "photo-1596755389378-c31d21fd1273",
  j: "photo-1512496015851-a90fb38ba796",
  k: "photo-1522335789203-aabd1fc54bc9",
  l: "photo-1608248597279-f99d160bfcbc",
  m: "photo-1612817288484-6f916006741a",
  n: "photo-1601049676869-702ea24cfd58",
  o: "photo-1615397349754-cfa2066a298e",
  p: "photo-1571875257727-256c39da42af",
  q: "photo-1540555700478-4be289fbecef",
  r: "photo-1487412720507-e7ab37603c6f",
  s: "photo-1522337660859-02fbefca4702",
  t: "photo-1496747611176-843222e1e57c",
  u: "photo-1509967419530-da38b4704bc6",
  v: "photo-1560066984-138dadb4c035",
  w: "photo-1515377905703-c4788e51af15",
} as const;

const trio = (x: string, y: string, z: string): [string, string, string] => [
  u(x),
  u(y),
  u(z),
];

export const heroImage = u(P.b, 1800);

export const productPhotos: Record<string, [string, string, string]> = {
  prod_001: trio(P.a, P.l, P.m),
  prod_002: trio(P.o, P.f, P.n),
  prod_003: trio(P.m, P.l, P.g),
  prod_004: trio(P.e, P.b, P.i),
  prod_005: trio(P.c, P.d, P.n),
  prod_006: trio(P.f, P.g, P.h),
  prod_007: trio(P.o, P.a, P.m),
  prod_008: trio(P.q, P.d, P.v),
  prod_009: trio(P.i, P.j, P.k),
  prod_010: trio(P.a, P.l, P.b),
  prod_011: trio(P.j, P.k, P.s),
  prod_012: trio(P.g, P.e, P.i),
  prod_013: trio(P.d, P.c, P.q),
  prod_014: trio(P.p, P.j, P.i),
  prod_015: trio(P.m, P.o, P.f),
  prod_016: trio(P.n, P.c, P.f),
  prod_017: trio(P.f, P.o, P.l),
  prod_018: trio(P.e, P.b, P.p),
  prod_019: trio(P.i, P.r, P.k),
  prod_020: trio(P.h, P.g, P.t),
};

export const concernPhotos = {
  hydration: u(P.d, 900),
  brightening: u(P.e, 900),
  antiaging: u(P.g, 900),
  sensitive: u(P.q, 900),
};

export const galleryPhotos = [
  u(P.a, 900),
  u(P.i, 900),
  u(P.o, 900),
  u(P.j, 900),
  u(P.w, 900),
  u(P.k, 900),
];

export const aboutImage = u(P.r, 1200);
