import { APPLY_FILTER, RESET_FILTER,CREAT_FILTER } from './../actions/action-types';
const INITIAL_STATE = {
    filters:{brands:[],prices:[]},
    items:[
        {
          header: 'Sony Xperia MDual',
          brand: 'Sony',
          description:
            'Xperia was Launched in 2011',
          meta: '$699',
        },
        {
            header: 'LG Blade',
            brand: 'LG',
            description:
              'Blade Launched in 2015',
            meta: '$450',
          },
          {
            header: 'Moto Razr',
            brand: 'Moto',
            description:
              'Razr Launched in 2020',
            meta: '$700',
          },
          {
            header: 'BlackBerry B2',
            brand: 'BlackBerry',
            description:
              'B3 Launched in 2020',
            meta: '$1800',
          },
          {
            header: 'Apple Iphone X',
            brand: 'Apple',
            description:
              'Apple Iphone X Launched in 2018',
            meta: '$1140',
          },
          {
            header: 'Apple Iphone 12',
            brand: 'Apple',
            description:
              'Apple Iphone 12 Launched in 2020',
            meta: '$1200',
          },
          {
            header: 'Apple Iphone 5',
            brand: 'Apple',
            description:
              'Apple Iphone 12 Launched in 2009',
            meta: '399',
          },
          {
            header: 'Samsung Note 4',
            brand: 'Samsung',
            description:
              'Apple Iphone 12 Launched in 2012',
            meta: '$570',
          },
          {
            header: 'Nokia 3310',
            brand: 'Nokia',
            description:
              'The Hammer Phone',
            meta: '$120',
          },
          {
            header: 'OnePlus 5 ',
            brand: 'OnePlus',
            description:
              'One Plus 5 launched in 2017',
            meta: '$1200',
          },
          {
            header: 'Samsung Note 7',
            brand: 'Samsung',
            description:
              'aunched in 2015',
            meta: '$800',
          },
          {
            header: 'Samsung Note 9',
            brand: 'Samsung',
            description:
              'Launched in 2020',
            meta: '$800',
          },
      ]
};

const filterReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case APPLY_FILTER:
            console.log(action.payload)

           return {
             ...state, count: state.count + 1,

           };

        case RESET_FILTER:

           return {
              ...state, count: state.count - 1,

           };

           case CREAT_FILTER:
            let brands = state.items.map(phone=>{return phone.brand}).filter((v, i, a) => a.indexOf(v) === i);
            let prices = state.items.map(phone => {return phone.meta}).filter((v, i, a) => a.indexOf(v) === i);
           return {
              ...state, filters:{brands,prices},

           };

         default: return state;

    }

};

export default filterReducer;