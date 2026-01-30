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
  // T-SHIRTS - Black
  {
    id: 'tshirt-black-big',
    name: 'Black T-Shirt (Large Logo)',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt black big logo.png',
    hoverImage: '/images/t-shirts/T-shirt black small logo.png',
    description: 'Premium cotton t-shirt with large Strong Performance logo. Perfect for training or casual wear.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL']
  },
  {
    id: 'tshirt-black-small',
    name: 'Black T-Shirt (Small Logo)',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt black small logo.png',
    hoverImage: '/images/t-shirts/T-shirt black big logo.png',
    description: 'Premium cotton t-shirt with subtle Strong Performance logo. Clean and minimal design.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL']
  },

  // T-SHIRTS - White
  {
    id: 'tshirt-white-big',
    name: 'White T-Shirt (Large Logo)',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt white big logo.png',
    hoverImage: '/images/t-shirts/T-shirt white small logo.png',
    description: 'Classic white t-shirt with large Strong Performance logo. Essential training wear.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL']
  },
  {
    id: 'tshirt-white-small',
    name: 'White T-Shirt (Small Logo)',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt white small logo.png',
    hoverImage: '/images/t-shirts/T-shirt white big logo.png',
    description: 'Classic white t-shirt with subtle Strong Performance logo.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL']
  },

  // T-SHIRTS - Navy
  {
    id: 'tshirt-navy-big',
    name: 'Navy T-Shirt (Large Logo)',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt navy big logo.png',
    hoverImage: '/images/t-shirts/T-shirt navy small logo.png',
    description: 'Navy blue t-shirt with large Strong Performance logo. Versatile and stylish.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL']
  },
  {
    id: 'tshirt-navy-small',
    name: 'Navy T-Shirt (Small Logo)',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt navy small logo.png',
    hoverImage: '/images/t-shirts/T-shirt navy big logo.png',
    description: 'Navy blue t-shirt with subtle Strong Performance logo.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL']
  },

  // T-SHIRTS - Grey
  {
    id: 'tshirt-grey-big',
    name: 'Grey T-Shirt (Large Logo)',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt grey big logo.png',
    hoverImage: '/images/t-shirts/T-shirt grey small logo.png',
    description: 'Heather grey t-shirt with large Strong Performance logo. Perfect everyday wear.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL']
  },
  {
    id: 'tshirt-grey-small',
    name: 'Grey T-Shirt (Small Logo)',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt grey small logo.png',
    hoverImage: '/images/t-shirts/T-shirt grey big logo.png',
    description: 'Heather grey t-shirt with subtle Strong Performance logo.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL']
  },

  // T-SHIRTS - Maroon
  {
    id: 'tshirt-maroon-big',
    name: 'Maroon T-Shirt (Large Logo)',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt maroon big logo.png',
    hoverImage: '/images/t-shirts/T-shirt maroon small logo.png',
    description: 'Bold maroon t-shirt with large Strong Performance logo. Stand out in style.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL']
  },
  {
    id: 'tshirt-maroon-small',
    name: 'Maroon T-Shirt (Small Logo)',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt maroon small logo.png',
    hoverImage: '/images/t-shirts/T-shirt maroon big logo.png',
    description: 'Bold maroon t-shirt with subtle Strong Performance logo.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL']
  },

  // T-SHIRTS - Blue
  {
    id: 'tshirt-blue-big',
    name: 'Blue T-Shirt (Large Logo)',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt blue big logo.png',
    hoverImage: '/images/t-shirts/T-shirt blue small logo.png',
    description: 'Vibrant blue t-shirt with large Strong Performance logo.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL']
  },
  {
    id: 'tshirt-blue-small',
    name: 'Blue T-Shirt (Small Logo)',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt blue small logo.png',
    hoverImage: '/images/t-shirts/T-shirt blue big logo.png',
    description: 'Vibrant blue t-shirt with subtle Strong Performance logo.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL']
  },

  // T-SHIRTS - Corn Blue
  {
    id: 'tshirt-cornblue-big',
    name: 'Corn Blue T-Shirt (Large Logo)',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt corn blue big logo.png',
    hoverImage: '/images/t-shirts/T-shirt corn blue small logo.png',
    description: 'Light corn blue t-shirt with large Strong Performance logo.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL']
  },
  {
    id: 'tshirt-cornblue-small',
    name: 'Corn Blue T-Shirt (Small Logo)',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt corn blue small logo.png',
    hoverImage: '/images/t-shirts/T-shirt corn blue big logo.png',
    description: 'Light corn blue t-shirt with subtle Strong Performance logo.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL']
  },

  // T-SHIRTS - Military Green
  {
    id: 'tshirt-milgreen-big',
    name: 'Military Green T-Shirt (Large Logo)',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt mil green big logo.png',
    hoverImage: '/images/t-shirts/T-shirt mil green small logo.png',
    description: 'Military green t-shirt with large Strong Performance logo. Tactical style.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL']
  },
  {
    id: 'tshirt-milgreen-small',
    name: 'Military Green T-Shirt (Small Logo)',
    price: 25,
    category: 'T-Shirts',
    image: '/images/t-shirts/T-shirt mil green small logo.png',
    hoverImage: '/images/t-shirts/T-shirt mil green big logo.png',
    description: 'Military green t-shirt with subtle Strong Performance logo.',
    specs: ['100% Premium Cotton', 'Regular Fit', 'Machine Washable', 'Available in S-XXL']
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
  {
    id: 'addon-video',
    name: 'Video Check-In',
    price: 45,
    category: 'Tracksuits',
    image: '',
    hoverImage: '',
    description: '45-minute tactical deep dive to adjust strategy and technical form metrics.'
  },
  {
    id: 'addon-meal',
    name: 'Custom Meal Prep',
    price: 25,
    category: 'Tracksuits',
    image: '',
    hoverImage: '',
    description: 'Engineered shopping lists and recipe macros tailored for your metabolism.'
  },
  {
    id: 'addon-form',
    name: 'Form Review',
    price: 30,
    category: 'Tracksuits',
    image: '',
    hoverImage: '',
    description: 'Biomechanical analysis of lift videos via dedicated secure channel.'
  }
];