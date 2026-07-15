import type { Review, FAQ, CategoryItem, IngredientSpotlight } from "@/types";
import { concernPhotos, galleryPhotos } from "@/data/images";

export const reviews: Review[] = [
  {
    id: "rev_001",
    productId: "prod_001",
    author: "Hana M.",
    rating: 5,
    title: "Like water for thirsty skin",
    content:
      "I've used countless essences and this is the first that feels both clinical and luxurious. Absorbs instantly—my serums perform better now.",
    date: "2026-05-12",
    verified: true,
    skinType: "Dry",
  },
  {
    id: "rev_002",
    productId: "prod_002",
    author: "Elena R.",
    rating: 5,
    title: "Quiet brightness, no sting",
    content:
      "Vitamin C usually irritates me. Purelle's formula is different—gentle lift in clarity after three weeks without redness.",
    date: "2026-04-28",
    verified: true,
    skinType: "Sensitive",
  },
  {
    id: "rev_003",
    productId: "prod_004",
    author: "Sofia K.",
    rating: 5,
    title: "Barrier finally healed",
    content:
      "After over-exfoliating last winter, this cream brought my skin back. Dense but never greasy. Worth every yen.",
    date: "2026-06-02",
    verified: true,
    skinType: "Combination",
  },
  {
    id: "rev_004",
    productId: "prod_005",
    author: "Mia T.",
    rating: 5,
    title: "The cleanser I recommend to everyone",
    content:
      "Leaves skin soft, never stripped. I double-cleanse with it every evening and my dermatologist noticed improvement.",
    date: "2026-03-19",
    verified: true,
    skinType: "Normal",
  },
  {
    id: "rev_005",
    productId: "prod_009",
    author: "Yuki A.",
    rating: 5,
    title: "Hotel spa in a jar",
    content:
      "The sleeping mask is my Friday ritual. Wake up with that soft, rested glow people ask about.",
    date: "2026-05-30",
    verified: true,
    skinType: "Dry",
  },
  {
    id: "rev_006",
    author: "Claire D.",
    rating: 5,
    title: "Formulas that feel editorial",
    content:
      "Every bottle looks like it belongs in a Seoul aesthetic clinic. The textures are precise—nothing loud, everything intentional.",
    date: "2026-06-15",
    verified: true,
    skinType: "Combination",
  },
];

export const faqs: FAQ[] = [
  {
    id: "faq_001",
    question: "Are Purelle products suitable for sensitive skin?",
    answer:
      "Most formulas are fragrance-free or minimally scented and developed with barrier-first principles. Look for the Sensitive Skin concern filter, or begin with our Gentle Cleanser, Calming Centella Toner, and Barrier Repair Cream.",
    category: "Products",
  },
  {
    id: "faq_002",
    question: "Can I use retinol and vitamin C together?",
    answer:
      "We recommend vitamin C in the morning under SPF, and retinol at night. If you have sensitive skin, alternate evenings rather than stacking actives.",
    category: "Routine",
  },
  {
    id: "faq_003",
    question: "How long until I see results?",
    answer:
      "Hydration improvements often appear within days. Brightening and texture changes typically show between 4–8 weeks of consistent use. Always pair actives with SPF.",
    category: "Results",
  },
  {
    id: "faq_004",
    question: "Are your formulas cruelty-free and clean?",
    answer:
      "Yes. Purelle is cruelty-free. We avoid unnecessary fragrance, silicones where they impair absorption of actives, and ingredients on our restricted list. Full INCI lists are available on each product page.",
    category: "Brand",
  },
  {
    id: "faq_005",
    question: "How should I store my products?",
    answer:
      "Keep formulas in a cool, dry place away from direct sunlight. Vitamin C and retinol prefer dark storage. Do not refrigerate unless specified—temperature swings can destabilize emulsions.",
    category: "Care",
  },
  {
    id: "faq_006",
    question: "Do you offer international shipping?",
    answer:
      "This is a frontend demo. Shipping, checkout, and order tracking will be available once Shopify Storefront API integration is connected.",
    category: "Orders",
  },
  {
    id: "faq_007",
    question: "What is your return policy?",
    answer:
      "In the live store, unopened products may be returned within 30 days. Demo checkout does not process real orders.",
    category: "Orders",
  },
  {
    id: "faq_008",
    question: "How do I build a starter routine?",
    answer:
      "Begin with four steps: Gentle Cleanser → Balancing or Centella Toner → Hydrating Essence → Barrier Repair Cream. Add SPF50 in the morning. Introduce serums one at a time every two weeks.",
    category: "Routine",
  },
];

export const skinConcerns: CategoryItem[] = [
  {
    id: "concern_hydration",
    name: "Hydration",
    description: "Restore moisture at every depth",
    href: "/shop?concern=Hydration",
    image: concernPhotos.hydration,
  },
  {
    id: "concern_brightening",
    name: "Brightening",
    description: "Clarify tone with quiet precision",
    href: "/shop?concern=Brightening",
    image: concernPhotos.brightening,
  },
  {
    id: "concern_antiaging",
    name: "Anti-aging",
    description: "Refine texture, soften time",
    href: "/shop?concern=Anti-aging",
    image: concernPhotos.antiaging,
  },
  {
    id: "concern_sensitive",
    name: "Sensitive Skin",
    description: "Calm, fortify, protect",
    href: "/shop?concern=Sensitive%20Skin",
    image: concernPhotos.sensitive,
  },
];

export const ingredientSpotlights: IngredientSpotlight[] = [
  {
    id: "ing_001",
    name: "Centella Asiatica",
    origin: "Madagascar & Korea",
    description:
      "A renowned calming botanical rich in madecassoside. Used in Purelle formulas to quiet reactivity while supporting barrier recovery.",
    benefits: ["Calms redness", "Supports healing", "Barrier comfort"],
  },
  {
    id: "ing_002",
    name: "Multi-Weight Hyaluronic Acid",
    origin: "Bio-fermented",
    description:
      "Low, medium, and high molecular weights work in concert—surface dew and deeper reservoir hydration without sticky weight.",
    benefits: ["Multi-depth moisture", "Plump appearance", "Soft finish"],
  },
  {
    id: "ing_003",
    name: "Encapsulated Retinol",
    origin: "Laboratory-grade",
    description:
      "Time-release encapsulation delivers retinol gradually, reducing irritation while refining texture and soft lines overnight.",
    benefits: ["Texture renewal", "Gentler delivery", "Overnight firmness"],
  },
  {
    id: "ing_004",
    name: "Ceramide Complex",
    origin: "Biomimetic lipids",
    description:
      "Five ceramides mirrored to skin's own lipid structure—essential architecture for a resilient, comfortable barrier.",
    benefits: ["Barrier rebuild", "Moisture lock", "Long-wear comfort"],
  },
];

export const beforeAfterResults = [
  {
    id: "ba_001",
    concern: "Hydration",
    duration: "4 weeks",
    product: "Hydrating Essence + Barrier Cream",
    result: "Improved moisture retention and reduced tightness",
    beforeLabel: "Week 0",
    afterLabel: "Week 4",
  },
  {
    id: "ba_002",
    concern: "Brightening",
    duration: "8 weeks",
    product: "Vitamin C Serum + Niacinamide",
    result: "Visibly more even tone and softer dark spots",
    beforeLabel: "Week 0",
    afterLabel: "Week 8",
  },
  {
    id: "ba_003",
    concern: "Barrier Repair",
    duration: "3 weeks",
    product: "Gentle Cleanser + Barrier Cream",
    result: "Calmed reactivity and restored comfort",
    beforeLabel: "Week 0",
    afterLabel: "Week 3",
  },
];

export const socialGallery = [
  { id: "sg_001", caption: "Morning ritual", image: galleryPhotos[0] },
  { id: "sg_002", caption: "Lab-made elegance", image: galleryPhotos[1] },
  { id: "sg_003", caption: "Quiet luxury", image: galleryPhotos[2] },
  { id: "sg_004", caption: "Glass skin moments", image: galleryPhotos[3] },
  { id: "sg_005", caption: "Clinic precision", image: galleryPhotos[4] },
  { id: "sg_006", caption: "Evening recovery", image: galleryPhotos[5] },
];
