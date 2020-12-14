// an array of objects
const menuItems = [
  {
    menu_id: 1,
    name: 'Fennelian',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: '/images/pizza.jpg',
    category: 'Food',
    subcategory: 'Pizza',
    section: 'Our Most Popular Pizzas',
    smallPrice: 13.99,
    mediumPrice: 16.99,
    largePrice: 19.99,
    diabeticFriendly: false,
    ketoFriendly: false,
    vegetarianFriendly: true,
    dailySpecial: false,
  },
  {
    menu_id: 2,
    name: 'Belisimonian',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: '/images/banner2.jpg',
    category: 'Food',
    subcategory: 'Pizza',
    section: 'Our Most Popular Pizzas',
    smallPrice: 13.99,
    mediumPrice: 16.99,
    largePrice: 19.99,
    diabeticFriendly: false,
    ketoFriendly: false,
    vegetarianFriendly: true,
    dailySpecial: false,
  },
  {
    menu_id: 3,
    name: 'Tomato and Basil Spaghetti',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'images/pastas.jpg',
    category: 'Food',
    subcategory: 'Pastas',
    section: 'Recommened Side Dishes',
    price: 17.99,
    diabeticFriendly: false,
    ketoFriendly: false,
    vegetarianFriendly: true,
    dailySpecial: true,
  },
  {
    menu_id: 4,
    name: 'Spinach and Pommegranite Salad',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'images/salads.jpg',
    category: 'Food',
    subcategory: 'Salads',
    section: 'Recommened Side Dishes',
    price: 16.99,
    diabeticFriendly: true,
    ketoFriendly: false,
    vegetarianFriendly: true,
    dailySpecial: false,
  },
  {
    menu_id: 5,
    name: 'Chocolate Brownie',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'images/desserts.jpg',
    category: 'Food',
    subcategory: 'Desserts',
    section: 'Featured Treats',
    price: 12.99,
    diabeticFriendly: false,
    ketoFriendly: false,
    vegetarianFriendly: true,
    dailySpecial: false,
  },
  {
    menu_id: 6,
    name: 'Creme Brule',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'images/desserts2.jpg',
    category: 'Food',
    subcategory: 'Desserts',
    section: 'Featured Treats',
    price: 12.99,
    diabeticFriendly: false,
    ketoFriendly: false,
    vegetarianFriendly: true,
    dailySpecial: false,
  },
  {
    menu_id: 7,
    name: 'Sodas',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'images/drinks.jpg',
    category: 'Drinks',
    subcategory: 'Drinks',
    section: 'Drinks',
    price: 2.99,
    diabeticFriendly: false,
    ketoFriendly: false,
    vegetarianFriendly: true,
    dailySpecial: false,
  },
  {
    menu_id: 8,
    name: 'Smoothies',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    image: 'images/drinks2.jpg',
    category: 'Drinks',
    subcategory: 'Drinks',
    section: 'Drinks',
    price: 9.99,
    diabeticFriendly: false,
    ketoFriendly: false,
    vegetarianFriendly: true,
    dailySpecial: true,
  },
];

// A function
const countMenuItemsProps = (array, propertyName) => {
  const prop = array.reduce((acc, cur) => {
    if (cur[propertyName]) {
      acc++;
    }
    return acc;
  }, 0);
  return prop;
};

// Set of problems to solve with the function

// How many diabetic friendly menu items are there?
const dfmi = countMenuItemsProps(menuItems, 'diabeticFriendly');
console.log('Number of diabetic friendly menu items: ', dfmi);

// How many keto friendly menu items are there?
const kfmi = countMenuItemsProps(menuItems, 'ketoFriendly');
console.log('Number of keto friendly menu items', kfmi);

// How many vegetarian friendly menu items are there?
const vfmi = countMenuItemsProps(menuItems, 'vegetarianFriendly');
console.log('Number of vegetarian friendly menu items', vfmi);

// How many daily specials are there?
const ts = countMenuItemsProps(menuItems, 'dailySpecial');
console.log('Number of daily specials', ts);
