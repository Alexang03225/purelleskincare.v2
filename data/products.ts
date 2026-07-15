import type { Product } from "@/types";
import { productPhotos } from "@/data/images";

/**
 * Mock product catalog — structured for easy Shopify Storefront API replacement.
 * Swap this module for Shopify query results without changing UI components.
 */
const catalog: Product[] = [
  {
    id: "prod_001",
    name: "Purelle Hydrating Essence",
    slug: "hydrating-essence",
    category: "Essence",
    price: 48,
    rating: 4.9,
    reviewCount: 312,
    description:
      "A featherweight fermented essence that saturates skin with multi-weight hyaluronic acids and rice ferment filtrate. Designed for the first layer of a ritual—transparent, absorbing instantly, leaving a calm glass-like finish.",
    shortDescription:
      "Fermented hydration that prepares skin for every step that follows.",
    ingredients: [
      "Water",
      "Saccharomyces Ferment Filtrate",
      "Sodium Hyaluronate",
      "Panthenol",
      "Glycerin",
      "Betaine",
      "Centella Asiatica Extract",
    ],
    keyIngredients: [
      {
        name: "Rice Ferment Filtrate",
        benefit: "Supports barrier resilience and luminosity",
      },
      {
        name: "Multi-Weight HA",
        benefit: "Hydrates surface and deeper layers",
      },
      {
        name: "Centella Asiatica",
        benefit: "Soothes and calms reactive skin",
      },
    ],
    benefits: [
      "Deep, lasting hydration",
      "Plumper, smoother texture",
      "Prepares skin for serums",
      "Non-sticky, layerable finish",
    ],
    howToUse: [
      "After cleansing and toning, dispense 2–3 pumps into palms.",
      "Press gently over face and neck until absorbed.",
      "Follow with serum and moisturizer.",
    ],
    details: {
      volume: "150 ml",
      skinType: ["All", "Dry", "Sensitive"],
      concerns: ["Hydration", "Sensitive Skin"],
      texture: "Water-light essence",
      scent: "Unscented",
    },
    image: "/products/essence-hydrate.svg",
    gallery: [
      "/products/essence-hydrate.svg",
      "/products/essence-hydrate-2.svg",
      "/products/essence-hydrate-3.svg",
    ],
    badge: "Best Seller",
    featured: true,
  },
  {
    id: "prod_002",
    name: "Purelle Vitamin C Brightening Serum",
    slug: "vitamin-c-brightening-serum",
    category: "Serum",
    price: 62,
    rating: 4.8,
    reviewCount: 248,
    description:
      "Stabilized 15% ethyl ascorbic acid delivers clinical-level radiance without the sting of unstable forms. Paired with tranexamic acid and fermented licorice for even tone and a soft luminous finish.",
    shortDescription: "Clarifying radiance serum for dull, uneven skin.",
    ingredients: [
      "Water",
      "3-O-Ethyl Ascorbic Acid",
      "Tranexamic Acid",
      "Glycyrrhiza Glabra Extract",
      "Niacinamide",
      "Tocopherol",
    ],
    keyIngredients: [
      {
        name: "Ethyl Ascorbic Acid 15%",
        benefit: "Brightens and supports collagen",
      },
      {
        name: "Tranexamic Acid",
        benefit: "Visibly reduces dark spots",
      },
      {
        name: "Fermented Licorice",
        benefit: "Evens tone without irritation",
      },
    ],
    benefits: [
      "Brighter, more even complexion",
      "Reduced appearance of dark spots",
      "Antioxidant daily defense",
      "Silky, non-greasy texture",
    ],
    howToUse: [
      "Apply 3–4 drops to clean, dry skin in the morning.",
      "Allow to absorb fully before moisturizer and SPF.",
      "Introduce gradually if new to vitamin C.",
    ],
    details: {
      volume: "30 ml",
      skinType: ["All", "Normal", "Combination"],
      concerns: ["Brightening"],
      texture: "Lightweight serum",
      scent: "Faint citrus note",
    },
    image: "/products/serum-vitc.svg",
    gallery: [
      "/products/serum-vitc.svg",
      "/products/serum-vitc-2.svg",
      "/products/serum-vitc-3.svg",
    ],
    badge: "Clinically Tested",
    featured: true,
  },
  {
    id: "prod_003",
    name: "Purelle Retinol Renewal Serum",
    slug: "retinol-renewal-serum",
    category: "Serum",
    price: 72,
    rating: 4.7,
    reviewCount: 189,
    description:
      "Encapsulated retinol at 0.3% with bakuchiol and ceramide complex for overnight renewal without the typical dryness. A measured approach to refining texture and softening fine lines.",
    shortDescription: "Gentle overnight renewal for smoother, firmer skin.",
    ingredients: [
      "Water",
      "Retinol",
      "Bakuchiol",
      "Ceramide NP",
      "Squalane",
      "Bisabolol",
      "Allantoin",
    ],
    keyIngredients: [
      {
        name: "Encapsulated Retinol 0.3%",
        benefit: "Refines texture and softens lines",
      },
      {
        name: "Bakuchiol",
        benefit: "Plant-based renewal support",
      },
      {
        name: "Ceramide Complex",
        benefit: "Maintains barrier comfort",
      },
    ],
    benefits: [
      "Smoother skin texture",
      "Softer appearance of fine lines",
      "Improved firmness overnight",
      "Barrier-conscious formula",
    ],
    howToUse: [
      "Use at night, 2–3 times weekly to start.",
      "Apply pea-sized amount after essence.",
      "Always follow with moisturizer and morning SPF.",
    ],
    details: {
      volume: "30 ml",
      skinType: ["Normal", "Combination", "Dry"],
      concerns: ["Anti-aging"],
      texture: "Silky emulsion",
      scent: "Unscented",
    },
    image: "/products/serum-retinol.svg",
    gallery: [
      "/products/serum-retinol.svg",
      "/products/serum-retinol-2.svg",
      "/products/serum-retinol-3.svg",
    ],
    badge: "New",
    featured: true,
  },
  {
    id: "prod_004",
    name: "Purelle Barrier Repair Cream",
    slug: "barrier-repair-cream",
    category: "Moisturizer",
    price: 58,
    rating: 4.9,
    reviewCount: 421,
    description:
      "A dense yet breathable cream built around a 5-ceramide blend, cholesterol, and fatty acids—the lipid triad skin recognizes. Restores compromised barriers and locks in calm for dry or reactive skin.",
    shortDescription: "Ceramide-rich cream for compromised barrier repair.",
    ingredients: [
      "Water",
      "Ceramide NP",
      "Ceramide AP",
      "Cholesterol",
      "Shea Butter",
      "Squalane",
      "Madecassoside",
    ],
    keyIngredients: [
      {
        name: "5-Ceramide Blend",
        benefit: "Rebuilds lipid barrier structure",
      },
      {
        name: "Madecassoside",
        benefit: "Calms redness and discomfort",
      },
      {
        name: "Plant Squalane",
        benefit: "Softens without clogging",
      },
    ],
    benefits: [
      "Strengthened moisture barrier",
      "Reduced tightness and flaking",
      "Long-lasting comfort",
      "Suitable under makeup",
    ],
    howToUse: [
      "Apply morning and evening as the final step.",
      "Press a pearl-sized amount over face and neck.",
      "Use liberally on dry patches as needed.",
    ],
    details: {
      volume: "50 ml",
      skinType: ["Dry", "Sensitive", "Normal"],
      concerns: ["Hydration", "Sensitive Skin"],
      texture: "Rich cream",
      scent: "Unscented",
    },
    image: "/products/cream-barrier.svg",
    gallery: [
      "/products/cream-barrier.svg",
      "/products/cream-barrier-2.svg",
      "/products/cream-barrier-3.svg",
    ],
    badge: "Best Seller",
    featured: true,
  },
  {
    id: "prod_005",
    name: "Purelle Gentle Cleanser",
    slug: "gentle-cleanser",
    category: "Cleanser",
    price: 32,
    rating: 4.8,
    reviewCount: 567,
    description:
      "A low-foam amino acid cleanser that dissolves impurities without stripping the acid mantle. Leaves skin soft, balanced, and ready for treatment—never tight or squeaky.",
    shortDescription: "Amino acid cleanse that respects the barrier.",
    ingredients: [
      "Water",
      "Sodium Cocoyl Glutamate",
      "Coco-Betaine",
      "Glycerin",
      "Panthenol",
      "Camellia Sinensis Leaf Extract",
    ],
    keyIngredients: [
      {
        name: "Amino Acid Surfactants",
        benefit: "Cleanse without disrupting pH",
      },
      {
        name: "Green Tea Extract",
        benefit: "Antioxidant mildness",
      },
      {
        name: "Panthenol",
        benefit: "Soothes after cleansing",
      },
    ],
    benefits: [
      "Removes daily impurities gently",
      "Maintains natural moisture",
      "No tight after-feel",
      "Suitable for twice-daily use",
    ],
    howToUse: [
      "Wet face with lukewarm water.",
      "Massage a small amount in circular motions for 30 seconds.",
      "Rinse thoroughly and pat dry.",
    ],
    details: {
      volume: "150 ml",
      skinType: ["All", "Sensitive"],
      concerns: ["Sensitive Skin", "Hydration"],
      texture: "Soft gel cream",
      scent: "Subtle green tea",
    },
    image: "/products/cleanser-gentle.svg",
    gallery: [
      "/products/cleanser-gentle.svg",
      "/products/cleanser-gentle-2.svg",
      "/products/cleanser-gentle-3.svg",
    ],
    badge: "Clean Beauty",
    featured: true,
  },
  {
    id: "prod_006",
    name: "Purelle SPF50 Mineral Sunscreen",
    slug: "spf50-mineral-sunscreen",
    category: "Sunscreen",
    price: 44,
    rating: 4.6,
    reviewCount: 203,
    description:
      "100% mineral protection with zinc oxide and titanium dioxide in a sheer, elegant finish. No white cast on most tones—just a soft veil that makes daily SPF feel intentional, not obligatory.",
    shortDescription: "Sheer mineral SPF50 with an elegant finish.",
    ingredients: [
      "Zinc Oxide",
      "Titanium Dioxide",
      "Squalane",
      "Niacinamide",
      "Bisabolol",
      "Silica",
    ],
    keyIngredients: [
      {
        name: "Non-Nano Zinc Oxide",
        benefit: "Broad-spectrum mineral defense",
      },
      {
        name: "Niacinamide",
        benefit: "Supports barrier under UV stress",
      },
      {
        name: "Squalane",
        benefit: "Prevents dryness from mineral filters",
      },
    ],
    benefits: [
      "SPF50 broad-spectrum protection",
      "Minimal white cast",
      "Lightweight daily wear",
      "Makeup-friendly base",
    ],
    howToUse: [
      "Apply generously as the last morning step.",
      "Reapply every two hours with sun exposure.",
      "Allow 60 seconds before makeup.",
    ],
    details: {
      volume: "50 ml",
      skinType: ["All"],
      concerns: ["Anti-aging", "Sensitive Skin"],
      texture: "Fluid lotion",
      scent: "Unscented",
    },
    image: "/products/sunscreen-mineral.svg",
    gallery: [
      "/products/sunscreen-mineral.svg",
      "/products/sunscreen-mineral-2.svg",
      "/products/sunscreen-mineral-3.svg",
    ],
    badge: "Clinically Tested",
    featured: true,
  },
  {
    id: "prod_007",
    name: "Purelle Niacinamide Serum",
    slug: "niacinamide-serum",
    category: "Serum",
    price: 42,
    rating: 4.8,
    reviewCount: 389,
    description:
      "10% niacinamide with zinc PCA to refine pores, regulate oil, and strengthen barrier function. The laboratory classic rendered in a silky, non-pilling base that layers beautifully.",
    shortDescription: "10% niacinamide for clarity and refined pores.",
    ingredients: [
      "Water",
      "Niacinamide",
      "Zinc PCA",
      "Glycerin",
      "Allantoin",
      "Sodium Hyaluronate",
    ],
    keyIngredients: [
      {
        name: "Niacinamide 10%",
        benefit: "Clarifies and fortifies barrier",
      },
      {
        name: "Zinc PCA",
        benefit: "Helps balance excess sebum",
      },
      {
        name: "Hyaluronic Acid",
        benefit: "Keeps texture comfortable",
      },
    ],
    benefits: [
      "Visibly refined pores",
      "Balanced oil production",
      "Stronger-looking barrier",
      "Compatible with most routines",
    ],
    howToUse: [
      "Apply morning and/or evening after essence.",
      "Use 3–4 drops across face.",
      "Follow with moisturizer.",
    ],
    details: {
      volume: "30 ml",
      skinType: ["Oily", "Combination", "Normal"],
      concerns: ["Brightening", "Hydration"],
      texture: "Light gel serum",
      scent: "Unscented",
    },
    image: "/products/serum-niacinamide.svg",
    gallery: [
      "/products/serum-niacinamide.svg",
      "/products/serum-niacinamide-2.svg",
      "/products/serum-niacinamide-3.svg",
    ],
    badge: "Best Seller",
    featured: false,
  },
  {
    id: "prod_008",
    name: "Purelle Hyaluronic Moisture Gel",
    slug: "hyaluronic-moisture-gel",
    category: "Moisturizer",
    price: 46,
    rating: 4.7,
    reviewCount: 276,
    description:
      "A cool, water-rich gel moisturizer with five molecular weights of hyaluronic acid. Delivers a quenched, dewy finish ideal for humid climates or oily skin seeking moisture without weight.",
    shortDescription: "Five-weight HA gel for weightless hydration.",
    ingredients: [
      "Water",
      "Sodium Hyaluronate",
      "Hydrolyzed Hyaluronic Acid",
      "Aloe Barbadensis Leaf Juice",
      "Betaine",
      "Tremella Fuciformis Extract",
    ],
    keyIngredients: [
      {
        name: "5-Weight Hyaluronic Acid",
        benefit: "Multi-depth moisture delivery",
      },
      {
        name: "Tremella Mushroom",
        benefit: "Natural water-binding support",
      },
      {
        name: "Aloe Vera",
        benefit: "Cooling comfort",
      },
    ],
    benefits: [
      "Instant quenched feel",
      "Zero greasy residue",
      "Dewy, fresh finish",
      "Ideal under SPF",
    ],
    howToUse: [
      "Apply morning and evening after serums.",
      "Pat a coin-sized amount until absorbed.",
      "Layer cream on top in dry climates.",
    ],
    details: {
      volume: "50 ml",
      skinType: ["Oily", "Combination", "Normal"],
      concerns: ["Hydration"],
      texture: "Cooling gel",
      scent: "Fresh watery",
    },
    image: "/products/gel-ha.svg",
    gallery: [
      "/products/gel-ha.svg",
      "/products/gel-ha-2.svg",
      "/products/gel-ha-3.svg",
    ],
    badge: null,
    featured: false,
  },
  {
    id: "prod_009",
    name: "Purelle Sleeping Mask",
    slug: "sleeping-mask",
    category: "Mask",
    price: 52,
    rating: 4.9,
    reviewCount: 198,
    description:
      "An overnight recovery mask with peptide complex and night-blooming jasmine extract. Wake to skin that feels rested, soft, and subtly luminous—no rinse required.",
    shortDescription: "Overnight peptide mask for morning radiance.",
    ingredients: [
      "Water",
      "Palmitoyl Tripeptide-1",
      "Shea Butter",
      "Squalane",
      "Jasminum Sambac Extract",
      "Ceramide NP",
    ],
    keyIngredients: [
      {
        name: "Peptide Complex",
        benefit: "Supports overnight firmness",
      },
      {
        name: "Night Jasmine Extract",
        benefit: "Calming sensorial finish",
      },
      {
        name: "Ceramide NP",
        benefit: "Seals overnight repair",
      },
    ],
    benefits: [
      "Morning plumpness",
      "Softer fine dehydration lines",
      "Restored comfort by dawn",
      "Leave-on convenience",
    ],
    howToUse: [
      "As the final evening step, apply a thin even layer.",
      "Do not rinse—sleep and wake to soft skin.",
      "Use 2–3 nights weekly or nightly as needed.",
    ],
    details: {
      volume: "60 ml",
      skinType: ["All", "Dry"],
      concerns: ["Anti-aging", "Hydration"],
      texture: "Velvet cream mask",
      scent: "Soft jasmine",
    },
    image: "/products/mask-sleep.svg",
    gallery: [
      "/products/mask-sleep.svg",
      "/products/mask-sleep-2.svg",
      "/products/mask-sleep-3.svg",
    ],
    badge: "Limited",
    featured: true,
  },
  {
    id: "prod_010",
    name: "Purelle Balancing Toner",
    slug: "balancing-toner",
    category: "Toner",
    price: 36,
    rating: 4.7,
    reviewCount: 334,
    description:
      "A pH-balanced toner with willow bark and fermented green tea to refine after cleansing. Softens residual tightness and primes skin for actives without alcohol sting.",
    shortDescription: "pH-balancing toner that softens and primes.",
    ingredients: [
      "Water",
      "Salix Alba Bark Extract",
      "Camellia Sinensis Ferment",
      "Glycerin",
      "Lactic Acid",
      "Sodium PCA",
    ],
    keyIngredients: [
      {
        name: "Willow Bark Extract",
        benefit: "Gentle clarifying exfoliation",
      },
      {
        name: "Fermented Green Tea",
        benefit: "Antioxidant balance",
      },
      {
        name: "Lactic Acid",
        benefit: "Softens texture at low strength",
      },
    ],
    benefits: [
      "Restored pH after cleansing",
      "Smoother canvas for serums",
      "Mild clarifying effect",
      "Alcohol-free formula",
    ],
    howToUse: [
      "After cleansing, sweep across face with a cotton pad or palms.",
      "Do not rinse.",
      "Continue with essence or serum.",
    ],
    details: {
      volume: "200 ml",
      skinType: ["All", "Combination", "Oily"],
      concerns: ["Brightening", "Hydration"],
      texture: "Aqueous toner",
      scent: "Herbal green tea",
    },
    image: "/products/toner-balance.svg",
    gallery: [
      "/products/toner-balance.svg",
      "/products/toner-balance-2.svg",
      "/products/toner-balance-3.svg",
    ],
    badge: null,
    featured: false,
  },
  {
    id: "prod_011",
    name: "Purelle Peptide Eye Concentrate",
    slug: "peptide-eye-concentrate",
    category: "Eye Care",
    price: 54,
    rating: 4.6,
    reviewCount: 142,
    description:
      "A precision eye concentrate with caffeine, peptides, and caffeine-free green coffee extract. Targets puffiness, dark circles, and the fragile crease without heavy oils.",
    shortDescription: "Targeted peptides for the delicate eye area.",
    ingredients: [
      "Water",
      "Acetyl Hexapeptide-8",
      "Caffeine",
      "Coffea Arabica Seed Extract",
      "Niacinamide",
      "Sodium Hyaluronate",
    ],
    keyIngredients: [
      {
        name: "Acetyl Hexapeptide-8",
        benefit: "Softens expression lines",
      },
      {
        name: "Caffeine",
        benefit: "Visibly reduces morning puffiness",
      },
      {
        name: "Hyaluronic Acid",
        benefit: "Cushions thin under-eye skin",
      },
    ],
    benefits: [
      "Less visible puffiness",
      "Brighter under-eye look",
      "Smoother crease appearance",
      "Lightweight, non-migrating",
    ],
    howToUse: [
      "Dab a rice-grain amount around orbital bone morning and night.",
      "Pat gently with ring finger until absorbed.",
      "Avoid direct contact with eyes.",
    ],
    details: {
      volume: "15 ml",
      skinType: ["All"],
      concerns: ["Anti-aging", "Brightening"],
      texture: "Light emulsion",
      scent: "Unscented",
    },
    image: "/products/eye-peptide.svg",
    gallery: [
      "/products/eye-peptide.svg",
      "/products/eye-peptide-2.svg",
      "/products/eye-peptide-3.svg",
    ],
    badge: "New",
    featured: false,
  },
  {
    id: "prod_012",
    name: "Purelle Clarifying Clay Mask",
    slug: "clarifying-clay-mask",
    category: "Mask",
    price: 38,
    rating: 4.5,
    reviewCount: 167,
    description:
      "Kaolin and bentonite meet tea tree and niacinamide in a clarifying mask that draws congestion without desert dryness. Rinse to a smoother, clearer surface.",
    shortDescription: "Weekly clay detox that respects moisture.",
    ingredients: [
      "Kaolin",
      "Bentonite",
      "Melaleuca Alternifolia Leaf Oil",
      "Niacinamide",
      "Glycerin",
      "Aloe Barbadensis",
    ],
    keyIngredients: [
      {
        name: "Kaolin & Bentonite",
        benefit: "Absorb excess oil and impurities",
      },
      {
        name: "Tea Tree",
        benefit: "Clarifying aromatic support",
      },
      {
        name: "Niacinamide",
        benefit: "Keeps post-mask tone calm",
      },
    ],
    benefits: [
      "Cleared congestion",
      "Mattified T-zone",
      "Refined look after rinse",
      "No over-stripped feel",
    ],
    howToUse: [
      "Apply a thin layer avoiding eyes and lips.",
      "Leave 8–10 minutes until barely dry.",
      "Rinse with lukewarm water; follow with moisturizer.",
    ],
    details: {
      volume: "60 ml",
      skinType: ["Oily", "Combination"],
      concerns: ["Brightening"],
      texture: "Smooth clay paste",
      scent: "Fresh tea tree",
    },
    image: "/products/mask-clay.svg",
    gallery: [
      "/products/mask-clay.svg",
      "/products/mask-clay-2.svg",
      "/products/mask-clay-3.svg",
    ],
    badge: null,
    featured: false,
  },
  {
    id: "prod_013",
    name: "Purelle Calming Centella Toner",
    slug: "calming-centella-toner",
    category: "Toner",
    price: 38,
    rating: 4.9,
    reviewCount: 291,
    description:
      "A mist-soft centella toner packed with madecassoside and panthenol. Designed for reactive, redness-prone, or post-treatment skin that needs quiet, cool comfort.",
    shortDescription: "Centella calm for sensitive, reactive skin.",
    ingredients: [
      "Water",
      "Centella Asiatica Extract",
      "Madecassoside",
      "Panthenol",
      "Allantoin",
      "Beta-Glucan",
    ],
    keyIngredients: [
      {
        name: "Madecassoside",
        benefit: "Clinically studied calming agent",
      },
      {
        name: "Panthenol",
        benefit: "Restores comfort to dry zones",
      },
      {
        name: "Beta-Glucan",
        benefit: "Soothes and hydrates gently",
      },
    ],
    benefits: [
      "Visibly calmed redness",
      "Cooling comfort on contact",
      "Supports recovery days",
      "Fragrance-free",
    ],
    howToUse: [
      "Press onto face after cleansing, or mist from 20 cm.",
      "Reapply midday for comfort if needed.",
      "Follow with serum and cream.",
    ],
    details: {
      volume: "200 ml",
      skinType: ["Sensitive", "Dry", "All"],
      concerns: ["Sensitive Skin", "Hydration"],
      texture: "Ultra-light liquid",
      scent: "Unscented",
    },
    image: "/products/toner-centella.svg",
    gallery: [
      "/products/toner-centella.svg",
      "/products/toner-centella-2.svg",
      "/products/toner-centella-3.svg",
    ],
    badge: "Clean Beauty",
    featured: false,
  },
  {
    id: "prod_014",
    name: "Purelle Ceramide Eye Balm",
    slug: "ceramide-eye-balm",
    category: "Eye Care",
    price: 48,
    rating: 4.7,
    reviewCount: 118,
    description:
      "A richer eye balm for dry, mature under-eyes. Ceramides and shea cushion fragile skin overnight, softening crepey texture without migrating into the eye.",
    shortDescription: "Nourishing ceramide balm for dry under-eyes.",
    ingredients: [
      "Shea Butter",
      "Ceramide NP",
      "Squalane",
      "Jojoba Oil",
      "Tocopherol",
      "Bisabolol",
    ],
    keyIngredients: [
      {
        name: "Ceramide NP",
        benefit: "Reinforces delicate eye barrier",
      },
      {
        name: "Shea Butter",
        benefit: "Deep overnight nourishment",
      },
      {
        name: "Bisabolol",
        benefit: "Keeps sensitive lids calm",
      },
    ],
    benefits: [
      "Softer crepey under-eye look",
      "All-night moisture seal",
      "Reduced dry flakiness",
      "Non-migrating balm texture",
    ],
    howToUse: [
      "Warm a rice-grain amount between fingers.",
      "Press along orbital bone evening only.",
      "Use sparingly—a little goes far.",
    ],
    details: {
      volume: "15 ml",
      skinType: ["Dry", "Normal"],
      concerns: ["Anti-aging", "Hydration"],
      texture: "Rich balm",
      scent: "Unscented",
    },
    image: "/products/eye-balm.svg",
    gallery: [
      "/products/eye-balm.svg",
      "/products/eye-balm-2.svg",
      "/products/eye-balm-3.svg",
    ],
    badge: null,
    featured: false,
  },
  {
    id: "prod_015",
    name: "Purelle Ferment Essence Ampoule",
    slug: "ferment-essence-ampoule",
    category: "Essence",
    price: 68,
    rating: 4.8,
    reviewCount: 156,
    description:
      "A concentrated ferment ampoule with galactomyces and bifida lysate. The Korean-inspired intermediate between essence and serum—dense nutrition in a glass vial ritual.",
    shortDescription: "Concentrated ferment ampoule for resilient skin.",
    ingredients: [
      "Galactomyces Ferment Filtrate",
      "Bifida Ferment Lysate",
      "Niacinamide",
      "Adenosine",
      "Sodium Hyaluronate",
    ],
    keyIngredients: [
      {
        name: "Galactomyces 80%",
        benefit: "Improves clarity and texture",
      },
      {
        name: "Bifida Lysate",
        benefit: "Supports barrier resilience",
      },
      {
        name: "Adenosine",
        benefit: "Softens early aging signs",
      },
    ],
    benefits: [
      "Improved skin clarity",
      "Stronger-feeling barrier",
      "Refined surface texture",
      "Luxurious ritual experience",
    ],
    howToUse: [
      "After toner, drop 4–5 drops into palms.",
      "Press firmly into skin until warm and absorbed.",
      "Follow with targeted serum.",
    ],
    details: {
      volume: "50 ml",
      skinType: ["All", "Dry"],
      concerns: ["Brightening", "Anti-aging", "Hydration"],
      texture: "Viscous essence",
      scent: "Subtle ferment",
    },
    image: "/products/ampoule-ferment.svg",
    gallery: [
      "/products/ampoule-ferment.svg",
      "/products/ampoule-ferment-2.svg",
      "/products/ampoule-ferment-3.svg",
    ],
    badge: "Limited",
    featured: true,
  },
  {
    id: "prod_016",
    name: "Purelle Oil Control Primer Fluid",
    slug: "oil-control-cleanser",
    category: "Cleanser",
    price: 34,
    compareAtPrice: 40,
    rating: 4.5,
    reviewCount: 98,
    description:
      "A clarifying gel cleanser with willow bark and charcoal microparticles for oily, congested skin. Purifies without leaving the barrier compromised.",
    shortDescription: "Clarifying gel cleanse for oily, congested skin.",
    ingredients: [
      "Water",
      "Charcoal Powder",
      "Salix Alba Bark Extract",
      "Sodium Cocoyl Isethionate",
      "Niacinamide",
      "Glycerin",
    ],
    keyIngredients: [
      {
        name: "Activated Charcoal",
        benefit: "Draws surface impurities",
      },
      {
        name: "Willow Bark",
        benefit: "Gentle clarifying support",
      },
      {
        name: "Niacinamide",
        benefit: "Maintains post-cleanse calm",
      },
    ],
    benefits: [
      "Deeply purified pores",
      "Fresher T-zone feel",
      "Balanced after-cleanse",
      "Ideal evening second cleanse",
    ],
    howToUse: [
      "Use as evening cleanser or second cleanse.",
      "Massage on damp skin for 45 seconds.",
      "Rinse thoroughly; follow with toner.",
    ],
    details: {
      volume: "150 ml",
      skinType: ["Oily", "Combination"],
      concerns: ["Brightening"],
      texture: "Clear gel with microcharcoal",
      scent: "Soft clean",
    },
    image: "/products/cleanser-charcoal.svg",
    gallery: [
      "/products/cleanser-charcoal.svg",
      "/products/cleanser-charcoal-2.svg",
      "/products/cleanser-charcoal-3.svg",
    ],
    badge: null,
    featured: false,
  },
  {
    id: "prod_017",
    name: "Purelle Daily Defense Serum",
    slug: "daily-defense-serum",
    category: "Serum",
    price: 56,
    rating: 4.7,
    reviewCount: 211,
    description:
      "A morning antioxidant serum with ectoin, vitamin E, and marine algae extract. Prepares skin for urban stressors before SPF—quiet science for long-term glow.",
    shortDescription: "Antioxidant morning serum for urban defense.",
    ingredients: [
      "Water",
      "Ectoin",
      "Tocopherol",
      "Ascorbyl Glucoside",
      "Algae Extract",
      "Ferulic Acid",
    ],
    keyIngredients: [
      {
        name: "Ectoin",
        benefit: "Protects against environmental stress",
      },
      {
        name: "Ascorbyl Glucoside",
        benefit: "Gentle daytime brightening",
      },
      {
        name: "Ferulic Acid",
        benefit: "Stabilizes antioxidant network",
      },
    ],
    benefits: [
      "Daily antioxidant shield",
      "Improved morning luminosity",
      "Comfort under SPF",
      "Non-sticky base layer",
    ],
    howToUse: [
      "Apply 3–4 drops each morning after essence.",
      "Wait 60 seconds, then moisturizer and SPF.",
      "Layer under makeup without pilling.",
    ],
    details: {
      volume: "30 ml",
      skinType: ["All"],
      concerns: ["Anti-aging", "Brightening"],
      texture: "Fluid serum",
      scent: "Faint botanical",
    },
    image: "/products/serum-defense.svg",
    gallery: [
      "/products/serum-defense.svg",
      "/products/serum-defense-2.svg",
      "/products/serum-defense-3.svg",
    ],
    badge: "Clinically Tested",
    featured: false,
  },
  {
    id: "prod_018",
    name: "Purelle Recovery Overnight Cream",
    slug: "recovery-overnight-cream",
    category: "Moisturizer",
    price: 64,
    rating: 4.8,
    reviewCount: 174,
    description:
      "A night cream with bakuchiol, peptides, and cupuacu butter for those seeking renewal without retinol. Rich but elegantly absorbed—skin wakes composed, soft, and luminous.",
    shortDescription: "Bakuchiol night cream for gentle renewal.",
    ingredients: [
      "Water",
      "Bakuchiol",
      "Palmitoyl Tripeptide-5",
      "Cupuacu Butter",
      "Squalane",
      "Ceramide AP",
    ],
    keyIngredients: [
      {
        name: "Bakuchiol",
        benefit: "Retinol-alternative renewal",
      },
      {
        name: "Tripeptide-5",
        benefit: "Supports collagen appearance",
      },
      {
        name: "Cupuacu Butter",
        benefit: "Deep comfort for dry nights",
      },
    ],
    benefits: [
      "Overnight softness",
      "Improved morning firmness feel",
      "No retinol dryness",
      "Suitable for sensitive skin",
    ],
    howToUse: [
      "Apply as final evening step over serums.",
      "Massage upward until fully absorbed.",
      "Use nightly or alternate with retinol nights.",
    ],
    details: {
      volume: "50 ml",
      skinType: ["Dry", "Sensitive", "Normal"],
      concerns: ["Anti-aging", "Hydration", "Sensitive Skin"],
      texture: "Velvet cream",
      scent: "Soft floral musk",
    },
    image: "/products/cream-overnight.svg",
    gallery: [
      "/products/cream-overnight.svg",
      "/products/cream-overnight-2.svg",
      "/products/cream-overnight-3.svg",
    ],
    badge: "New",
    featured: false,
  },
  {
    id: "prod_019",
    name: "Purelle Silk Sheet Mask Set",
    slug: "silk-sheet-mask-set",
    category: "Mask",
    price: 42,
    rating: 4.6,
    reviewCount: 225,
    description:
      "A set of five bio-cellulose silk sheet masks infused with hyaluronic acid and rice ferment. The clinic ritual at home—15 minutes of occlusion for intensive hydration.",
    shortDescription: "Five bio-cellulose masks for intensive hydration.",
    ingredients: [
      "Water",
      "Sodium Hyaluronate",
      "Saccharomyces Ferment",
      "Panthenol",
      "Allantoin",
      "Centella Asiatica",
    ],
    keyIngredients: [
      {
        name: "Bio-Cellulose",
        benefit: "Superior serum delivery occlusion",
      },
      {
        name: "Rice Ferment",
        benefit: "Luminous post-mask glow",
      },
      {
        name: "Panthenol",
        benefit: "Soothes during wear",
      },
    ],
    benefits: [
      "Immediate plump hydration",
      "Event-ready glow",
      "Calm, soft finish",
      "Travel-friendly sachets",
    ],
    howToUse: [
      "After toner, unfold mask and align to face.",
      "Leave for 15–20 minutes.",
      "Remove, pat remaining essence, continue routine.",
    ],
    details: {
      volume: "5 × 25 ml",
      skinType: ["All"],
      concerns: ["Hydration", "Brightening"],
      texture: "Serum-soaked sheet",
      scent: "Light rice note",
    },
    image: "/products/mask-sheet.svg",
    gallery: [
      "/products/mask-sheet.svg",
      "/products/mask-sheet-2.svg",
      "/products/mask-sheet-3.svg",
    ],
    badge: "Best Seller",
    featured: false,
  },
  {
    id: "prod_020",
    name: "Purelle Urban Shield SPF Essence",
    slug: "urban-shield-spf-essence",
    category: "Sunscreen",
    price: 46,
    rating: 4.7,
    reviewCount: 133,
    description:
      "A hybrid chemical-mineral SPF30 essence that wears like a toner. Built for Asian urban climates—sheer, breathable, and elegant enough to replace a separate primer.",
    shortDescription: "Sheer SPF30 essence for effortless daily wear.",
    ingredients: [
      "Ethylhexyl Methoxycinnamate",
      "Zinc Oxide",
      "Niacinamide",
      "Ectoin",
      "Sodium Hyaluronate",
      "Adenosine",
    ],
    keyIngredients: [
      {
        name: "Hybrid UV Filters",
        benefit: "Lightweight broad-spectrum SPF30",
      },
      {
        name: "Ectoin",
        benefit: "Blue-light and pollution support",
      },
      {
        name: "Niacinamide",
        benefit: "Keeps tone even under sun stress",
      },
    ],
    benefits: [
      "Barely-there protection",
      "Essence-like feel",
      "No white cast",
      "Makeup-ready finish",
    ],
    howToUse: [
      "Apply liberally as last morning skincare step.",
      "Reapply every two hours outdoors.",
      "Shake gently before use.",
    ],
    details: {
      volume: "50 ml",
      skinType: ["All", "Oily", "Combination"],
      concerns: ["Anti-aging", "Brightening"],
      texture: "Essence fluid",
      scent: "Clean watery",
    },
    image: "/products/sunscreen-essence.svg",
    gallery: [
      "/products/sunscreen-essence.svg",
      "/products/sunscreen-essence-2.svg",
      "/products/sunscreen-essence-3.svg",
    ],
    badge: null,
    featured: false,
  },
];

export const products: Product[] = catalog.map((product) => {
  const photos = productPhotos[product.id];
  if (!photos) return product;
  return {
    ...product,
    image: photos[0],
    gallery: [...photos],
  };
});

export const productCategories = [
  "Cleanser",
  "Toner",
  "Essence",
  "Serum",
  "Moisturizer",
  "Mask",
  "Sunscreen",
  "Eye Care",
] as const;

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getRelatedProducts(
  product: Product,
  limit = 4
): Product[] {
  return products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.category === product.category ||
          p.details.concerns.some((c) => product.details.concerns.includes(c)))
    )
    .slice(0, limit);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.ingredients.some((i) => i.toLowerCase().includes(q))
  );
}
