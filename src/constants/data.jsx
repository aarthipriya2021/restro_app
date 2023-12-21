import images from './images';

const ClassicComfort = [
  {
    title: 'Homestyle Chicken Pot Pie',
    price: '₹780',
    tags: 'US | Bottle',
  },
  {
    title: 'Spaghetti Bolognese',
    price: '₹1590',
    tags: 'IT | Bottle',
  },
  {
    title: 'Vegetarian Lasagna',
    price: '₹1780',
    tags: 'IT | 750 ml',
  },
  {
    title: 'Decadent Chocolate Brownie Sundae',
    price: '₹820',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Margherita Pizza',
    price: '₹950',
    tags: 'IT | 750 ml',
  },
];

const GlobalFusion = [
  {
    title: 'Beef Bulgogi Tacos',
    price: '₹280',
    tags: 'KR | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Mushroom Risotto",
    price: '₹1230',
    tags: 'IT | Ginger beer | Slice of lime',
  },
  {
    title: 'Vegetarian Sushi Rolls',
    price: '₹1160',
    tags: 'JP | Citrus juice | Sugar',
  },
  {
    title: 'Tiramisu Jar',
    price: '₹2140',
    tags: 'IT | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Caprese Quinoa Salad',
    price: '₹1410',
    tags: 'IT | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Culinary Excellence Recognition: Bib Gourmand',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Aspiring Excellence Recognized: Rising Star',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'A Mark of Excellence: AA Hospitality',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Culinary Brilliance Recognized: Outstanding Chef',
  },
];



// eslint-disable-next-line import/no-anonymous-default-export
export default { ClassicComfort, GlobalFusion, awards };
