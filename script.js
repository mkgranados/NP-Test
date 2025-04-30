// Arrays of product components
const prefixes = [
    "Vital",
    "Pure", 
    "Natural",
    "Eco",
    "Bio",
    "Zen",
    "Elite",
    "Prime",
    "Essential",
    "Ultra",
    "Peak",
    "Optimal",
    "Glow",
    "Core",
    "Fresh"
];

const supplements = [
    // Vitamins & Minerals
    "Vitamin D3",
    "B-Complex",
    "Magnesium",
    "Zinc",
    "Iron",
    "Calcium",
    "Selenium",
    "Vitamin C",
    "Vitamin K2",
    "Chromium",

    // Adaptogens & Herbs
    "Ashwagandha",
    "Rhodiola",
    "Holy Basil",
    "Ginseng",
    "Maca Root",
    "Reishi",
    "Cordyceps",
    "Lion's Mane",
    "Chaga",
    "Turkey Tail",

    // Amino Acids & Proteins
    "L-Theanine",
    "L-Glutamine",
    "BCAA Complex",
    "Whey Isolate",
    "Pea Protein",
    "Hemp Protein",
    "Creatine",
    "L-Carnitine",
    "Taurine",
    "Glycine",

    // Wellness Compounds
    "Turmeric",
    "Glucosamine",
    "MSM",
    "Collagen Peptides",
    "Biotin",
    "CoQ10",
    "Resveratrol",
    "Quercetin",
    "NAC",
    "Alpha Lipoic Acid",

    // Digestive Health
    "Digestive Enzymes",
    "Prebiotic Fiber",
    "Probiotic Blend",
    "Apple Cider Vinegar",
    "Aloe Vera",
    "Ginger Root",
    "Peppermint",
    "Slippery Elm",
    "Marshmallow Root",
    "Kombucha Extract",

    // Superfoods
    "Spirulina",
    "Chlorella",
    "Moringa",
    "Acai Berry",
    "Goji Berry",
    "Camu Camu",
    "Matcha",
    "Wheatgrass",
    "Blue Algae",
    "Baobab",

    // Essential Fatty Acids
    "Krill Oil",
    "Fish Oil",
    "MCT Oil",
    "Evening Primrose",
    "Flaxseed Oil",
    "Algae DHA",
    "Borage Oil",
    "Hemp Seed Oil",
    "Black Seed Oil",
    "Chia Seed Oil",

    // Specialty Blends
    "Antioxidant Complex",
    "Immune Support Blend",
    "Joint Complex",
    "Beauty Blend",
    "Sleep Support Mix",
    "Energy Complex",
    "Focus Formula",
    "Stress Relief Blend",
    "Detox Complex",
    "Hormone Balance Blend",

    // Botanical Extracts
    "Green Tea Extract",
    "Grape Seed Extract",
    "Pine Bark Extract",
    "Milk Thistle",
    "Echinacea",
    "Elderberry",
    "Dandelion Root",
    "Nettle Leaf",
    "Valerian Root",
    "Passionflower",

    // Modern Wellness
    "Beta Glucan",
    "Fulvic Acid",
    "Berberine",
    "NMN",
    "PQQ",
    "Glutathione",
    "Hyaluronic Acid",
    "Peptide Complex",
    "Colostrum",
    "Beta Alanine"
];

const formats = [
    // Beverages
    "Sparkling Tonic",
    "Cold Brew",
    "Kombucha",
    "Energy Shot",
    "Smoothie Mix",
    "Tea Crystals",
    "Elixir Drops",
    "Protein Shake",
    "Wellness Shot",
    "Herbal Latte",

    // Snacks & Foods
    "Protein Balls",
    "Superfood Bark",
    "Energy Bites",
    "Granola Clusters",
    "Wellness Cookies",
    "Protein Chips",
    "Power Crackers",
    "Nutrition Bar",
    "Trail Mix",
    "Fruit Leather",

    // Confectionery
    "Gummy Bears",
    "Chewing Gum",
    "Lozenges",
    "Hard Candies",
    "Chocolate Squares",
    "Jelly Beans",
    "Mint Tablets",
    "Taffy Chews",
    "Caramel Bites",
    "Fruit Pastilles",

    // Beauty & Personal Care
    "Face Serum",
    "Body Butter",
    "Hair Mask",
    "Lip Treatment",
    "Eye Cream",
    "Face Mist",
    "Body Scrub",
    "Massage Oil",
    "Bath Bombs",
    "Facial Oil",

    // Traditional Forms
    "Capsules",
    "Tablets",
    "Liquid Drops",
    "Powder Sachets",
    "Soft Gels",
    "Sublingual Spray",
    "Effervescent Tablets",
    "Tincture",
    "Oil Capsules",
    "Melting Tablets",

    // Innovative Delivery
    "Patch",
    "Oral Strip",
    "Nasal Spray",
    "Mouth Spray",
    "Dissolving Strips",
    "Roll-On",
    "Inhaler Stick",
    "Topical Gel",
    "Foam",
    "Micro-Tablets",

    // Functional Foods
    "Overnight Oats",
    "Protein Spread",
    "Superfood Honey",
    "Nut Butter",
    "Protein Cookie",
    "Energy Gel",
    "Protein Pancake Mix",
    "Wellness Syrup",
    "Protein Pasta",
    "Superfood Sauce",

    // Lifestyle Products
    "Sleep Mask",
    "Aromatherapy Stick",
    "Wellness Patches",
    "Bath Salts",
    "Shower Steamers",
    "Massage Roller",
    "Wellness Mist",
    "Crystal Roller",
    "Sleep Drops",
    "Aromatherapy Beads",

    // Modern Formats
    "Collagen Creamer",
    "Adaptogenic Coffee",
    "Protein Water",
    "Beauty Nectar",
    "Focus Drops",
    "Energy Crystals",
    "Brain Fuel",
    "Recovery Blend",
    "Sleep Elixir",
    "Vitality Essence"
];

const benefits = [
    // Physical Wellness
    "supports healthy aging",
    "enhances natural energy levels",
    "promotes muscle recovery",
    "supports bone strength",
    "helps maintain healthy joints",
    "promotes cardiovascular health",
    "supports digestive balance",
    "enhances athletic performance",
    "promotes flexible movement",
    "supports metabolic health",

    // Mental & Cognitive
    "improves mental clarity",
    "enhances focus and concentration",
    "supports memory function",
    "promotes stress resilience",
    "supports emotional balance",
    "enhances cognitive performance",
    "promotes mental stamina",
    "supports brain health",
    "enhances learning capacity",
    "promotes mindful awareness",

    // Beauty & Appearance
    "promotes radiant skin",
    "supports hair strength",
    "enhances nail health",
    "promotes youthful appearance",
    "supports skin elasticity",
    "enhances natural glow",
    "promotes collagen production",
    "supports skin hydration",
    "enhances complexion",
    "promotes anti-aging benefits",

    // Sleep & Recovery
    "promotes restful sleep",
    "supports natural sleep cycles",
    "enhances sleep quality",
    "promotes relaxation",
    "supports evening wind-down",
    "enhances recovery",
    "promotes cellular renewal",
    "supports restorative sleep",
    "enhances dream recall",
    "promotes peaceful rest",

    // Immunity & Vitality
    "strengthens immune response",
    "supports natural defenses",
    "enhances seasonal wellness",
    "promotes year-round vitality",
    "supports immune function",
    "enhances cellular health",
    "promotes natural resistance",
    "supports overall wellness",
    "enhances adaptive immunity",
    "promotes robust health",

    // Digestive Health
    "supports gut microbiome",
    "promotes healthy digestion",
    "enhances nutrient absorption",
    "supports intestinal health",
    "promotes regular function",
    "enhances gut-brain axis",
    "supports digestive comfort",
    "promotes healthy flora",
    "enhances metabolic function",
    "supports digestive balance",

    // Energy & Performance
    "boosts natural energy",
    "supports sustained vitality",
    "enhances physical performance",
    "promotes endurance",
    "supports active lifestyle",
    "enhances stamina",
    "promotes peak performance",
    "supports natural vigor",
    "enhances daily energy",
    "promotes dynamic living",

    // Mood & Emotional
    "supports emotional wellbeing",
    "promotes positive mood",
    "enhances mental balance",
    "supports stress management",
    "promotes inner calm",
    "enhances emotional resilience",
    "supports mood stability",
    "promotes mental clarity",
    "enhances social confidence",
    "supports emotional harmony",

    // Specialized Benefits
    "supports hormonal balance",
    "promotes healthy aging",
    "enhances cellular repair",
    "supports DNA protection",
    "promotes detoxification",
    "enhances liver function",
    "supports joint mobility",
    "promotes eye health",
    "enhances respiratory function",
    "supports cardiovascular health",

    // Lifestyle Benefits
    "supports work-life balance",
    "promotes active living",
    "enhances daily wellness",
    "supports healthy habits",
    "promotes sustainable energy",
    "enhances lifestyle goals",
    "supports holistic health",
    "promotes natural vitality",
    "enhances quality of life",
    "supports optimal wellness"
];

const audiences = [
    // Professional Demographics
    "ambitious entrepreneurs",
    "remote workers",
    "creative professionals",
    "tech industry leaders",
    "healthcare practitioners",
    "corporate executives",
    "digital nomads",
    "startup founders",
    "sales professionals",
    "business consultants",

    // Lifestyle Groups
    "wellness enthusiasts",
    "mindful millennials",
    "conscious consumers",
    "urban professionals",
    "eco-conscious individuals",
    "minimalist lifestyle advocates",
    "sustainable living enthusiasts",
    "holistic health seekers",
    "natural living advocates",
    "wellness influencers",

    // Age-Based Groups
    "active Gen-Z",
    "health-conscious millennials",
    "vibrant seniors",
    "dynamic professionals 30+",
    "energetic retirees",
    "young professionals",
    "active adults 50+",
    "college students",
    "mature professionals",
    "generation X leaders",

    // Activity-Based
    "yoga practitioners",
    "CrossFit enthusiasts",
    "marathon runners",
    "weekend warriors",
    "outdoor adventurers",
    "gym regulars",
    "pilates devotees",
    "hiking enthusiasts",
    "cycling enthusiasts",
    "dance fitness lovers",

    // Health-Focused
    "nutrition enthusiasts",
    "clean eating advocates",
    "keto diet followers",
    "plant-based eaters",
    "paleo lifestyle followers",
    "intermittent fasters",
    "gluten-free individuals",
    "organic food enthusiasts",
    "macro counters",
    "wellness coaches",

    // Lifestyle Situations
    "busy parents",
    "working mothers",
    "active grandparents",
    "urban commuters",
    "night shift workers",
    "frequent travelers",
    "busy professionals",
    "active families",
    "social butterflies",
    "on-the-go individuals",

    // Special Interest
    "meditation practitioners",
    "mindfulness seekers",
    "spiritual wellness seekers",
    "alternative health enthusiasts",
    "biohackers",
    "wellness bloggers",
    "health podcast listeners",
    "wellness app users",
    "self-improvement seekers",
    "holistic living advocates",

    // Beauty & Wellness
    "beauty enthusiasts",
    "skincare devotees",
    "anti-aging seekers",
    "natural beauty advocates",
    "wellness spa regulars",
    "clean beauty followers",
    "beauty industry professionals",
    "aesthetic wellness seekers",
    "holistic beauty enthusiasts",
    "self-care advocates",

    // Performance-Focused
    "elite athletes",
    "competitive sports players",
    "performance optimizers",
    "strength trainers",
    "endurance athletes",
    "amateur athletes",
    "sports enthusiasts",
    "fitness competitors",
    "athletic coaches",
    "team sports players",

    // Modern Lifestyle
    "digital wellness seekers",
    "modern minimalists",
    "conscious creators",
    "lifestyle optimizers",
    "wellness tech adopters",
    "sustainable lifestyle advocates",
    "ethical consumers",
    "health trend early adopters",
    "wellness community leaders",
    "mindful modernists"
];

// Helper function to get random item from array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate random color
function getRandomColor() {
    const colors = [
        '#4CAF50', // Green
        '#2196F3', // Blue
        '#9C27B0', // Purple
        '#FF9800', // Orange
        '#E91E63', // Pink
        '#00BCD4', // Cyan
        '#3F51B5', // Indigo
        '#FF5722', // Deep Orange
        '#009688', // Teal
        '#8BC34A'  // Light Green
    ];
    return getRandomItem(colors);
}

// Generate product name
function generateProductName(supplement, format) {
    const prefix = getRandomItem(prefixes);
    return `${prefix} ${supplement} ${format}`;
}

// Main generation function
function generateProduct() {
    const supplement = getRandomItem(supplements);
    const format = getRandomItem(formats);
    const benefit = getRandomItem(benefits);
    const audience = getRandomItem(audiences);
    
    // Add this line to change button color
    document.getElementById('generateBtn').style.backgroundColor = getRandomColor();
    
    const productName = generateProductName(supplement, format);
    const description = `A revolutionary ${format.toLowerCase()} infused with premium ${supplement.toLowerCase()}.`;
    
    document.getElementById('productName').textContent = productName;
    document.getElementById('description').textContent = description;
    document.getElementById('audience').textContent = `Perfect for ${audience}`;
    document.getElementById('benefits').textContent = `This innovative product ${benefit}`;
}

// Add click event listener to button
document.getElementById('generateBtn').addEventListener('click', generateProduct);