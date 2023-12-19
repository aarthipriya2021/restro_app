import images from './images';

const ClassicComfort = [
  {
    title: 'Homestyle Chicken Pot Pie',
    price: '$56',
    tags: 'US | Bottle',
  },
  {
    title: 'Spaghetti Bolognese',
    price: '$59',
    tags: 'IT | Bottle',
  },
  {
    title: 'Vegetarian Lasagna',
    price: '$44',
    tags: 'IT | 750 ml',
  },
  {
    title: 'Decadent Chocolate Brownie Sundae',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Margherita Pizza',
    price: '$26',
    tags: 'IT | 750 ml',
  },
];

const GlobalFusion = [
  {
    title: 'Beef Bulgogi Tacos',
    price: '$20',
    tags: 'KR | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Mushroom Risotto",
    price: '$16',
    tags: 'IT | Ginger beer | Slice of lime',
  },
  {
    title: 'Vegetarian Sushi Rolls',
    price: '$10',
    tags: 'JP | Citrus juice | Sugar',
  },
  {
    title: 'Tiramisu Jar',
    price: '$31',
    tags: 'IT | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Caprese Quinoa Salad',
    price: '$26',
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
