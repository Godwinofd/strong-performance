import { PlanCategory, Plan, Product } from './types';

export const PLANS: Plan[] = [
  {
    id: 'p1',
    category: PlanCategory.WEIGHT_LOSS,
    name: 'Weight Loss Transformation',
    target: 'For those ready to shed weight sustainably and build healthy habits.',
    description: 'A comprehensive approach to sustainable weight loss through personalized movement and nutrition.',
    price: 150,
    features: [
      'Customized calorie and macro targets',
      'Progressive workout programming (3-5 days/week)',
      'Habit-building strategies',
      'Weekly check-in protocol'
    ],
    image: 'https://res.cloudinary.com/dddvmez6s/image/upload/v1768684429/pexels-annushka-ahuja-7991916_weoetn.jpg',
    icon: 'Weight'
  },
  {
    id: 'p2',
    category: PlanCategory.HYROX,
    name: 'HYROX Training',
    target: 'For athletes preparing for HYROX competitions or functional endurance events.',
    description: 'Expert guidance for the ultimate hybrid competition.',
    price: 180,
    features: [
      'Race-specific conditioning protocols',
      'Strength and stamina balance',
      'Pacing strategies and mental prep',
      'Competition-day nutrition'
    ],
    image: 'https://res.cloudinary.com/dddvmez6s/image/upload/v1768684252/pexels-chente8888-35006998_ulkihy.jpg',
    icon: 'Timer'
  },
  {
    id: 'p3',
    category: PlanCategory.STRENGTH,
    name: 'Strength & Conditioning',
    target: 'For lifters focused on building muscle, power, and raw strength.',
    description: 'Maximum performance and physical capability developed through rigorous methodology.',
    price: 165,
    features: [
      'Periodized strength programming',
      'Hypertrophy and power phases',
      'Mobility and recovery protocols',
      'Supplement and nutrition guidance'
    ],
    image: 'https://res.cloudinary.com/dddvmez6s/image/upload/v1768684298/pexels-alexapopovich-10696732_olddyz.jpg',
    icon: 'Dumbbell'
  },
  {
    id: 'p4',
    category: PlanCategory.FUNCTIONAL,
    name: 'Functional Fitness',
    target: 'For everyday athletes seeking mobility, injury prevention, and real-world strength.',
    description: 'Build a body that moves better, feels stronger, and lasts longer.',
    price: 140,
    features: [
      'Movement quality focus',
      'Injury prevention exercises',
      'Functional strength patterns',
      'Longevity and wellness strategies'
    ],
    image: 'https://res.cloudinary.com/dddvmez6s/image/upload/v1768684341/pexels-jonathanborba-15491995_rm8ygt.jpg',
    icon: 'Activity'
  }
];

export const PRODUCTS: Product[] = [
  // T-SHIRTS - grouped by colour (one card per colour, variants = logo styles)
  {
    id: 'tshirt-black',
    name: 'Black T-Shirt',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt black big logo.png',
    hoverImage: '/images/t-shirts/T-shirt black small logo.png',
    description: 'Premium cotton t-shirt in black. Choose your logo style below.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL'],
    variants: [
      { id: 'tshirt-black-big', label: 'Large Logo', image: '/images/t-shirts/T-shirt black big logo.png' },
      { id: 'tshirt-black-small', label: 'Small Logo', image: '/images/t-shirts/T-shirt black small logo.png' },
    ]
  },
  {
    id: 'tshirt-white',
    name: 'White T-Shirt',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt white big logo.png',
    hoverImage: '/images/t-shirts/T-shirt white small logo.png',
    description: 'Classic white t-shirt. Choose your logo style below.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL'],
    variants: [
      { id: 'tshirt-white-big', label: 'Large Logo', image: '/images/t-shirts/T-shirt white big logo.png' },
      { id: 'tshirt-white-small', label: 'Small Logo', image: '/images/t-shirts/T-shirt white small logo.png' },
    ]
  },
  {
    id: 'tshirt-navy',
    name: 'Navy T-Shirt',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt navy big logo.png',
    hoverImage: '/images/t-shirts/T-shirt navy small logo.png',
    description: 'Navy blue t-shirt. Versatile and stylish. Choose your logo style below.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL'],
    variants: [
      { id: 'tshirt-navy-big', label: 'Large Logo', image: '/images/t-shirts/T-shirt navy big logo.png' },
      { id: 'tshirt-navy-small', label: 'Small Logo', image: '/images/t-shirts/T-shirt navy small logo.png' },
    ]
  },
  {
    id: 'tshirt-grey',
    name: 'Grey T-Shirt',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt grey big logo.png',
    hoverImage: '/images/t-shirts/T-shirt grey small logo.png',
    description: 'Heather grey t-shirt. Perfect everyday wear. Choose your logo style below.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL'],
    variants: [
      { id: 'tshirt-grey-big', label: 'Large Logo', image: '/images/t-shirts/T-shirt grey big logo.png' },
      { id: 'tshirt-grey-small', label: 'Small Logo', image: '/images/t-shirts/T-shirt grey small logo.png' },
    ]
  },
  {
    id: 'tshirt-maroon',
    name: 'Maroon T-Shirt',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt maroon big logo.png',
    hoverImage: '/images/t-shirts/T-shirt maroon small logo.png',
    description: 'Bold maroon t-shirt. Stand out in style. Choose your logo style below.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL'],
    variants: [
      { id: 'tshirt-maroon-big', label: 'Large Logo', image: '/images/t-shirts/T-shirt maroon big logo.png' },
      { id: 'tshirt-maroon-small', label: 'Small Logo', image: '/images/t-shirts/T-shirt maroon small logo.png' },
    ]
  },
  {
    id: 'tshirt-blue',
    name: 'Blue T-Shirt',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt blue big logo.png',
    hoverImage: '/images/t-shirts/T-shirt blue small logo.png',
    description: 'Vibrant blue t-shirt. Choose your logo style below.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL'],
    variants: [
      { id: 'tshirt-blue-big', label: 'Large Logo', image: '/images/t-shirts/T-shirt blue big logo.png' },
      { id: 'tshirt-blue-small', label: 'Small Logo', image: '/images/t-shirts/T-shirt blue small logo.png' },
    ]
  },
  {
    id: 'tshirt-cornblue',
    name: 'Corn Blue T-Shirt',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt corn blue big logo.png',
    hoverImage: '/images/t-shirts/T-shirt corn blue small logo.png',
    description: 'Light corn blue t-shirt. Choose your logo style below.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL'],
    variants: [
      { id: 'tshirt-cornblue-big', label: 'Large Logo', image: '/images/t-shirts/T-shirt corn blue big logo.png' },
      { id: 'tshirt-cornblue-small', label: 'Small Logo', image: '/images/t-shirts/T-shirt corn blue small logo.png' },
    ]
  },
  {
    id: 'tshirt-milgreen',
    name: 'Military Green T-Shirt',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt mil green big logo.png',
    hoverImage: '/images/t-shirts/T-shirt mil green small logo.png',
    description: 'Military green t-shirt. Tactical style. Choose your logo style below.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL'],
    variants: [
      { id: 'tshirt-milgreen-big', label: 'Large Logo', image: '/images/t-shirts/T-shirt mil green big logo.png' },
      { id: 'tshirt-milgreen-small', label: 'Small Logo', image: '/images/t-shirts/T-shirt mil green small logo.png' },
    ]
  },

  // TRACKSUITS
  {
    id: 'tracksuit-black-grey',
    name: 'Black/Grey Tracksuit',
    price: 70,
    category: 'Tracksuits',
    image: '/images/tracksuits/Tracksuit black-grey.png',
    description: 'Complete tracksuit set with zip-up jacket and jogger pants. Black with grey accents.',
    specs: ['Polyester Blend', 'Zip-up Jacket', 'Elastic Waist Pants', 'Available in S-XXL'],
    hoverImage: '/images/tracksuits/Tracksuit black-grey.png'
  },
  {
    id: 'tracksuit-black-red',
    name: 'Black/Red Tracksuit',
    price: 70,
    category: 'Tracksuits',
    image: '/images/tracksuits/Tracksuit black-red.png',
    description: 'Complete tracksuit set with zip-up jacket and jogger pants. Black with red accents.',
    specs: ['Polyester Blend', 'Zip-up Jacket', 'Elastic Waist Pants', 'Available in S-XXL'],
    hoverImage: '/images/tracksuits/Tracksuit black-red.png'
  },
  {
    id: 'tracksuit-black-white',
    name: 'Black/White Tracksuit',
    price: 70,
    category: 'Tracksuits',
    image: '/images/tracksuits/Tracksuit black-white.png',
    description: 'Complete tracksuit set with zip-up jacket and jogger pants. Black with white accents.',
    specs: ['Polyester Blend', 'Zip-up Jacket', 'Elastic Waist Pants', 'Available in S-XXL'],
    hoverImage: '/images/tracksuits/Tracksuit black-white.png'
  },

  // SUPPLEMENTS
  {
    id: 'preworkout-mango',
    name: 'Pre-Workout Powder — Mango',
    price: 25,
    category: 'Supplements',
    image: '/images/suplements/mango_flavour.png',
    hoverImage: '/images/suplements/mango_flavour.png',
    description: 'Petther Performance Pre-Workout Powder in Mango flavour. 25 servings per tub (375g). Engineered to fuel explosive energy, laser focus, and maximum endurance — so you can push harder every session.',
    specs: ['25 Servings', 'Net Wt. 375g (13.22oz)', 'Mango Flavour', 'Dietary Supplement', 'Mix 1 scoop with 250ml water 20–30 min before training']
  },
  {
    id: 'preworkout-blueberry',
    name: 'Pre-Workout Powder — Blueberry',
    price: 25,
    category: 'Supplements',
    image: '/images/suplements/blueberry_flavour.png',
    hoverImage: '/images/suplements/blueberry_flavour.png',
    description: 'Petther Performance Pre-Workout Powder in Blueberry flavour. 25 servings per tub (425g). Engineered to fuel explosive energy, laser focus, and maximum endurance — so you can push harder every session.',
    specs: ['25 Servings', 'Net Wt. 425g (14.99oz)', 'Blueberry Flavour', 'Dietary Supplement', 'Mix 1 scoop with 250ml water 20–30 min before training']
  },

  // ACCESSORIES
  {
    id: 'shaker-bottle-700ml',
    name: 'Protein Shaker Bottle — 700ml',
    price: 10,
    category: 'Accessories',
    image: '/images/accessories/shaker-yellow.jpg',
    hoverImage: '/images/accessories/shaker-yellow.jpg',
    description: '700ml premium sports performance protein shake bottle. Engineered with a durable leak-proof lid and internal mixer for smooth, clump-free shakes on the go.',
    specs: ['700ml Capacity with Measurement Markings', 'BPA-Free & Food-Grade Durable Plastic', 'Leak-Proof Flip Cap & Secure Screw-On Lid', 'Internal Blender Grid for Smooth Mixing', 'Signature Strong Performance Red Branding']
  }
];
