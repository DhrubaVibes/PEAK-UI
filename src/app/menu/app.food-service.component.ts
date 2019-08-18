import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})

export class FoodService {

    socialHours: any[];
    weekendSpecial: any[];
    starterItems: any[];
    soupsAndSalads: any[];
    himalayanTiffin: any[];
    chikcenSpecial: any[];
    seaFoodEntrees: any[];
    lambSpeical: any[];
    goatSpecial: any[];
    riceAndBiryani: any[];
    tandooriBreads: any[];
    noodles: any[];
    peakSpecial: any[];
    vegetableEntrees: any[];
    thakaliThali: any[];
    tibetan: any[];
    delight: any[];
    weekendSpecialDrinks: any[];
    socialDrinks: any[];
    peakSpecialDrinks: any[];
    lunchSpecials: any[];

    whiskey: any[];
    fizzyLight: any[];
    shots: any[];
    beers: any[];
    wine: any[];
    scotch: any[];
    tequila: any[];
    vodka: any[];
    rum: any[];
    gin: any[];

    constructor() {

        this.tequila = [
            {
                'name': 'Jose Cuervo',
                'price': 6.00
            },
            {
                'name': 'Cazadores Silver',
                'price': 6.00
            },
            {
                'name': 'Espolon Blanco',
                'price': 6.00
            },
            {
                'name': 'Espolon Reposado',
                'price': 8.00

            },
            {
                'name': '1800',
                'price': 7.00

            },
            {
                'name': '1800 Gold',
                'price': 8.00
            },
            {
                'name': 'Miagro Silver',
                'price': 8.00
            },
            {
                'name': 'Cavadores Reposado',
                'price': 8.00
            },
            {
                'name': 'Patron Silver',
                'price': 9.00
            },
            {
                'name': 'Don Julio Silver',
                'price': 9.00
            },
            {
                'name': 'Cazadores Anejo',
                'price': 12.00

            },
            {
                'name': 'Patron Anejo',
                'price': 14.00
            },
            {
                'name': 'Don Julio 1942',
                'price': 22.00
            },
            {
                'name': 'Casa Azules Reposado',
                'price': 14.00
            },
            {
                'name': 'Tres Generaciones',
                'price': 8.00
            }

        ];

        this.vodka = [
            {
                'name': 'Absolute',
                'price': 6.00
            },
            {
                'name': 'Grey Goose',
                'price': 7.00
            },
            {
                'name': 'Titos',
                'price': 6.00
            },
            {
                'name': 'Ketel One',
                'price': 7.00

            },
            {
                'name': 'Ciroc',
                'price': 8.00

            },
            {
                'name': 'Deep Eddy',
                'price': 6.00
            },
            {
                'name': 'Stoli',
                'price': 7.00
            },
            {
                'name': 'Belvedere',
                'price': 8.00
            }
        ];

        this.rum = [
            {
                'name': 'Bacardi',
                'price': 6.00
            },
            {
                'name': 'Captain Morgan',
                'price': 6.00
            },
            {
                'name': 'Captan Morgan Black',
                'price': 7.00
            },
            {
                'name': 'Malibu',
                'price': 6.00

            },
            {
                'name': 'Old Monk XXX',
                'price': 6.00

            }
        ];

        this.gin = [
            {
                'name': 'Beefeater',
                'price': 6.00
            },
            {
                'name': 'Bombay Sapphire',
                'price': 7.00
            },
            {
                'name': 'Tanqueray',
                'price': 7.00
            },
            {
                'name': 'New Amsterdam',
                'price': 6.00

            },
            {
                'name': 'Hendrick',
                'price': 7.00
            }];



        this.scotch = [
            {
                'name': 'Johnnie Walker Red',
                'price': 7.00
            },
            {
                'name': 'Johnnie Walker Black',
                'price': 10.00
            },
            {
                'name': 'Johnnie Walker Blue',
                'price': 28.00
            },
            {
                'name': 'Chival Regal',
                'price': 8.00

            },
            {
                'name': 'Macallan 12 Yrs',
                'price': 11.00

            },
            {
                'name': 'Macallan 15Y rs',
                'price': 14.00
            },
            {
                'name': 'Dewars 12 Yrs',
                'price': 8.00
            },
            {
                'name': 'Glenlivet 12 Yrs',
                'price': 10.00
            },
            {
                'name': 'Glenlivet 18 Yrs',
                'price': 15.00
            },
            {
                'name': 'Deep Ellum IPA',
                'price': 5.00
            },
            {
                'name': 'Community Mosaic',
                'price': 5.00
            },
            {
                'name': 'Revolver Blood & Honey',
                'price': 5.00

            },
            {
                'name': 'Glenfiddich 12 Yrs',
                'price': 11.00

            },
            {
                'name': 'Hennessy',
                'price': 8.00
            },
            {
                'name': 'Hennessy Black',
                'price': 10.00
            },
            {
                'name': 'Remy 1738',
                'price': 8.00
            },
            {
                'name': 'Remy Martin',
                'price': 12.00
            }

        ]


        this.wine = [
            {
                'name': 'CK Mondavi Chardonnay (California)'
            },
            {
                'name': 'CK Mondavi Merlot (California)'
            },
            {
                'name': 'Josh Cellar Cabernet Sauvugnon (California)'
            },
            {
                'name': 'Freakshow Cabernet Sauvugnon (California)'

            },
            {
                'name': 'William Hill Merlot (California)'
            },
            {
                'name': 'The Prisoners Blend (California)'
            },
            {
                'name': 'Kim Crawford Sauvignon Blanc (New Zealand)'
            },
            {
                'name': 'Moscato Villa Pozzi (Italy)'
            },
            {
                'name': 'Skyfall Riesling (Columbia Valley)'
            },
            {
                'name': 'Septima Malbec (Mendoza Argentina)'
            },
            {
                'name': 'Ecco Domani Pinot Grigio (Italy)'
            },
            {
                'name': 'Stag Leap Chardonnay (Napa California)'
            },
            {
                'name': 'Hrken Chardonnay (California)'
            },
            {
                'name': 'la Marca Prosecco (Italy)'
            }
        ];

        this.beers = [
            {
                'name': 'Dos XX',
                'price': 4.00
            },
            {
                'name': 'Modello',
                'price': 5.00
            },
            {
                'name': 'Corona',
                'price': 4.00
            },
            {
                'name': 'Heineken',
                'price': 4.00

            },
            {
                'name': 'Sapporo',
                'price': 5.00

            },
            {
                'name': 'Stella Artois',
                'price': 5.00
            },
            {
                'name': 'Guiness',
                'price': 5.00
            },
            {
                'name': 'Angry Orchard',
                'price': 5.00
            },
            {
                'name': 'Dallas Blonde',
                'price': 5.00
            },
            {
                'name': 'Deep Ellum IPA',
                'price': 5.00
            },
            {
                'name': 'Community Mosaic',
                'price': 5.00
            },
            {
                'name': 'Revolver Blood & Honey',
                'price': 5.00

            },
            {
                'name': 'Heineken N/A',
                'price': 3.00

            },
            {
                'name': 'Budlight',
                'price': 4.00
            },
            {
                'name': 'Budweiser',
                'price': 4.00
            },
            {
                'name': 'Coors Light',
                'price': 4.00
            },
            {
                'name': 'Mochelob Ultra',
                'price': 4.00
            },
            {
                'name': 'Millet Lite',
                'price': 4.00
            }

        ]
        this.shots = [
            {
                'name': 'Mango Lassi',
                'price': 6.00,
                'desc': 'Deep Eddys Peach Vodka + Lassi Yogurt'
            },
            {
                'name': 'Kathmandu Flame',
                'price': 6.00,
                'desc': 'Greygoose Vodka, Peach Schnapps, Orange Juice'
            },
            {
                'name': 'Gurkha Bombnshot',
                'price': 7.00,
                'desc': 'Belvedere Vodka Cointreau served bomb style Redbull and Orange Juice'
            }
        ]

        this.fizzyLight = [
            {
                'name': 'Moscow Mule',
                'price': 9.00
            },
            {
                'name': 'Irish Mule',
                'price': 9.00
            },
            {
                'name': 'mango Chile Margarita',
                'price': 9.00
            },
            {
                'name': 'The Classic Mojito',
                'price': 8.00

            },
            {
                'name': 'Coconut Mojito',
                'price': 8.00

            },
            {
                'name': 'Pineapple Mojito',
                'price': 8.00
            },
            {
                'name': 'Lemon Ginger Fizz',
                'price': 8.00
            }
        ];

        this.whiskey = [
            {
                'name': 'Jack Daniels',
                'price': 6.00
            },
            {
                'name': 'Jack Honet',
                'price': 6.00
            },
            {
                'name': 'Crown Royal',
                'price': 6.00
            },
            {
                'name': 'Crown Royal Apple',
                'price': 6.00

            },
            {
                'name': 'Jameson',
                'price': 6.00

            },
            {
                'name': 'Bullet Rye',
                'price': 8.00
            },
            {
                'name': 'Knob Creek',
                'price': 8.00
            },
            {
                'name': 'Basil Hyeden',
                'price': 8.00
            },
            {
                'name': 'Markers Mark',
                'price': 8.00

            },
            {
                'name': 'Buffalo Trace',
                'price': 7.00
            },
            {
                'name': 'TX Whiskey',
                'price': 8.00
            }
        ];
        this.lunchSpecials = [
            {
                'name': 'Chiken/Pork/Egg Fried Rice',
                'price': 7.99,
                'desc': 'Stir fried basmati rice with vegetables and your choice of protein'
            },
            {
                'name': 'Veg/Chicken/Goat Biryani',
                'price': 7.99,
                'desc': 'Basmati rice cooked with meat and delicios indian masala'
            },
            {
                'name': 'Veg/Chicken/Pork Chowmein',
                'price': 7.99,
                'desc': 'Stir fried noodles with vegetables and your choice of protein'
            },
            {
                'name': 'Butter Chicken',
                'price': 10.99,
                'desc': 'BBQ chicken legs cooked with creamy tomato sauce'

            },
            {
                'name': 'Chicken Korma',
                'price': 10.99,
                'desc': 'Boneless chicken cooked with very mild tomato, indial spices and a touch of creamy sauce'

            },
            {
                'name': 'Mix/Veg Curry',
                'price': 7.99,
                'desc': 'Mxed vegetables cooked with indian spices'
            },
            {
                'name': 'Aloo Gobi',
                'price': 7.99,
                'desc': 'Cauliflower and potatoes curry cooked with indian spices'
            },
            {
                'name': 'Chicken Tandoori',
                'price': 10.99,
                'desc': 'Chicken marinated in yogurt/spices and cooked in tandoori (traditional clay oven)'
            },
            {
                'name': 'Chicken Tikka Kabab',
                'price': 10.99,
                'desc': 'Boneless chicken marinated with yogurt/spices and baked to perfection'

            },
            {
                'name': 'Kids Menu',
                'price': 5.99,
                'desc': 'Onion Rings, Fries, Cheese and Chicken nuggets, fried mo:mo'

            },
            {
                'name': 'Chips Chilli',
                'price': 4.99,
                'desc': 'Spicy Fries mixed with exotic sauces '
            },
            {
                'name': 'Piro Aloo',
                'price': 4.99,
                'desc': 'Mashed potatoes mixed with herbs and spices.'
            },
            {
                'name': 'Sadeko Badel',
                'price': 5.99,
                'desc': 'Well cooked chunks of wild boar mixed with speical spices and served to perfection'
            },
            {
                'name': 'Chicken Chilli',
                'price': 5.99,
                'desc': 'Spicy chicken pieces mixed with special sauces and herbs'

            },
            {
                'name': 'Shabhaleh',
                'price': 4.99,
                'desc': 'A tibetan beef delicacy'

            },
            {
                'name': 'Fish Fry',
                'price': 4.99,
                'desc': 'Fried fish'

            }
        ];

        this.socialHours = [
            {
                'name': 'Bhatmas Sadeko',
                'price': 1.99
            },
            {
                'name': 'Aloo Dum',
                'price': 1.99
            },
            {
                'name': 'Badel Sakeko',
                'price': 3.99
            },
            {
                'name': 'Peanut Sadeko',
                'price': 1.99

            }
        ];

        this.socialDrinks = [
            {
                'name': 'Mimosa',
                'price': 5.00
            },
            {
                'name': '23Oz Summer Shandy',
                'price': 5.00
            },
            {
                'name': 'Peach Bellini',
                'price': 5.00
            },
            {
                'name': 'Red/White Sangria',
                'price': 5.00

            },
            {
                'name': 'Watermelon Margarita',
                'price': 5.00

            },
            {
                'name': 'Mimosa',
                'price': 5.00
            },
            {
                'name': '23Oz Summer Shandy',
                'price': 5.00
            },
            {
                'name': 'Peach Bellini',
                'price': 5.00
            },
            {
                'name': 'Red/White Sangria',
                'price': 5.00

            },
            {
                'name': 'Watermelon Margarita',
                'price': 5.00

            }
        ];

        this.weekendSpecialDrinks = [
            {
                'name': 'Mimosa',
                'price': 5.00
            },
            {
                'name': '23Oz Summer Shandy',
                'price': 5.00
            },
            {
                'name': 'Peach Bellini',
                'price': 5.00
            },
            {
                'name': 'Red/White Sangria',
                'price': 5.00

            },
            {
                'name': 'Watermelon Margarita',
                'price': 5.00

            }
        ];

        this.peakSpecialDrinks = [
            {
                'name': 'Peak Margarita',
                'price': 10.00
            },
            {
                'name': 'Laaligurans Sip',
                'price': 9.00
            },
            {
                'name': 'The Danphe Effect',
                'price': 10.00
            },
            {
                'name': 'Himalayan Mule',
                'price': 10.00

            },
            {
                'name': 'Mt. 8848',
                'price': 9.00

            },
            {
                'name': 'Darjeeling Iced Tea',
                'price': 9.00
            },
            {
                'name': 'Mountain Lion',
                'price': 10.00

            },
            {
                'name': 'Mustang Tea ',
                'price': 8.00

            }
        ];

        this.weekendSpecial = [
            {
                'name': 'Local Kukhura Jhol',
                'price': 12.99,
                'desc': 'A savory soup made with cage free chicken. Served with rice.'
            },
            {
                'name': 'Fafer dhido',
                'price': 14.99,
                'desc': 'A traditional nepal dish. Mashed buckwheat served with a choice of meat from local chicken/mutton/sish curry/vegetable soup(rajma, chana, bodi)'
            },
            {
                'name': 'Thakali Macha seabass bone in skin',
                'price': 12.99,
                'desc': 'A traditional nepalese fish curry(bone-in) served with rice.'
            },
            {
                'name': 'Khasi ko Jhol',
                'price': 12.99,
                'desc': 'Mutton curry soup served with a side of rice'
            },
            {
                'name': 'Kathi Roll Egg Wash',
                'price': 5.99,
                'desc': 'Special egg roll served with grilled chicken'
            }
        ];

        this.starterItems = [
            {
                'name': 'Veg Spring Roll',
                'price': 4.99,
                'desc': "Vegetarian spring rolls served with our own authentic sauce. Comes two rolls in single serving."
            },
            {
                'name': 'Cheese Roll',
                'price': 4.99
            },
            {
                'name': 'Chicken Spring Roll',
                'price': 5.99
            },
            {
                'name': 'Wai Wai Sadeko',
                'price': 3.99,
                'desc': "Crunchy dy noodles from nepal minced with onion, mashed potates and other himalayan herbs served cold. A perfect recipe for your starter."
            },
            {
                'name': 'Bhatmas Sadeko',
                'price': 3.99
            },
            {
                'name': 'Onion Rings',
                'price': 3.99
            },
            {
                'name': 'French Fries',
                'price': 3.99
            },
            {
                'name': 'Kosa Edemame',
                'price': 2.99
            },
            {
                'name': 'Peanut Sadeko',
                'price': 3.99
            },
            {
                'name': 'Macha Tareko',
                'price': 6.99
            },
            {
                'name': 'Chips Chill',
                'price': 5.99
            },
            {
                'name': 'Chicken Chilli',
                'price': 6.99
            },
            {
                'name': 'Pork Chilli',
                'price': 8.99
            },
            {
                'name': 'Piro Aloo',
                'price': 5.99
            },
            {
                'name': 'Sadeko Badel',
                'price': 7.99
            },
            {
                'name': 'Masala Papad',
                'price': 2.99
            }
        ]
        this.soupsAndSalads = [
            {
                'name': 'Tomato Soup',
                'price': 2.99
            },
            {
                'name': 'Mushroom Soup',
                'price': 3.99
            },
            {
                'name': 'Chicken Soup',
                'price': 3.99
            },
            {
                'name': 'Vegetable Soup',
                'price': 2.99
            },
            {
                'name': 'Daal Soup',
                'price': 3.99
            },
            {
                'name': 'House Salad',
                'price': 3.99
            },
            {
                'name': 'Kuchumber Salad',
                'price': 3.99
            }
        ]
        this.himalayanTiffin = [
            {
                'name': 'Chicken Momo',
                'price': 6.99
            },
            {
                'name': 'Chicken C. Momo',
                'price': 7.99
            },
            {
                'name': 'Pork Tash',
                'price': 9.99
            },
            {
                'name': 'Pangra Fried',
                'price': 8.99
            },
            {
                'name': 'Grilled/BBQ Battai',
                'price': 9.99
            },
            {
                'name': 'Pork Sekuwa',
                'price': 8.99
            },
            {
                'name': 'Hako Choila',
                'price': 7.99
            }
        ]
        this.chikcenSpecial = [
            {
                'name': 'Chicken Curry',
                'price': 9.99
            },
            {
                'name': 'Chicken Jalfrezi',
                'price': 9.99
            },
            {
                'name': 'Chicken Vindaloo',
                'price': 10.99
            },
            {
                'name': 'Chicken Koram',
                'price': 11.99
            },
            {
                'name': 'Butter C. Masala',
                'price': 12.99
            },
            {
                'name': 'Jeera Chicken',
                'price': 10.99
            }
        ]
        this.seaFoodEntrees = [
            {
                'name': 'Fish Masala',
                'price': 10.99
            },
            {
                'name': 'Shrimp Masala',
                'price': 11.99
            },
            {
                'name': 'Shrimp Kadai',
                'price': 11.99
            },
            {
                'name': 'Fish Vindaloo',
                'price': 10.99
            },
            {
                'name': 'Shrimp Vindaloo',
                'price': 11.99
            }
        ]
        this.lambSpeical = [
            {
                'name': 'Lamb Curry',
                'price': 9.99
            },
            {
                'name': 'Lamb Korma',
                'price': 11.99
            },
            {
                'name': 'Kadhai Gosh',
                'price': 10.99
            },
            {
                'name': 'Jeera Lamb',
                'price': 10.99
            },
            {
                'name': 'Chilli Gosh',
                'price': 11.99
            }, {
                'name': 'Lamb Rogan Josh',
                'price': 10.99
            },
            {
                'name': 'Lamb Vindaloo',
                'price': 10.99
            },
            {
                'name': 'Lamb Doh Pyaja',
                'price': 11.99
            }
        ]
        this.goatSpecial = [
            {
                'name': 'Goat Masala',
                'price': 12.99
            },
            {
                'name': 'Bhunna Goat',
                'price': 13.99
            }
        ]
        this.riceAndBiryani = [
            {
                'name': 'Chicken Fried Rice',
                'price': 8.99
            },
            {
                'name': 'Egg Fried Rice',
                'price': 8.99
            },
            {
                'name': 'Shrimp Fried Rice',
                'price': 8.99
            },
            {
                'name': 'Pork Fried Rice',
                'price': 8.99
            },
            {
                'name': 'Veg Biryani',
                'price': 8.99
            }, {
                'name': 'Chicken Buryani',
                'price': 8.99
            },
            {
                'name': 'Goat Biryani',
                'price': 9.99
            },
            {
                'name': 'Lamb Biryani',
                'price': 10.99
            }
        ]
        this.tandooriBreads = [
            {
                'name': 'Naan',
                'price': 1.99
            },
            {
                'name': 'Garlic Naan',
                'price': 2.25
            },
            {
                'name': 'Bullet Naan',
                'price': 3.99
            },
            {
                'name': 'Onion Kulcha',
                'price': 3.99
            },
            {
                'name': 'Aloo Paratha',
                'price': 3.99
            }
        ]
        this.noodles = [
            {
                'name': 'Chicken Chowmein',
                'price': 8.99
            },
            {
                'name': 'Veg/Egg Chowmean',
                'price': 8.99
            },
            {
                'name': 'Pork Chowmein',
                'price': 8.99
            },
            {
                'name': 'Shrimp Chowmein',
                'price': 9.99
            },
            {
                'name': 'Mixed Chowmein',
                'price': 10.99
            }
        ]
        this.peakSpecial = [
            {
                'name': 'American Choupsuey',
                'price': 10.99
            },
            {
                'name': 'Chicken Wings',
                'price': 10.99
            }
        ]
        this.vegetableEntrees = [
            {
                'name': 'Navaratna Korma',
                'price': 11.99
            },
            {
                'name': 'Mushroom Matar M.',
                'price': 11.99
            },
            {
                'name': 'Aloo Chole',
                'price': 7.99
            },
            {
                'name': 'Aloo Rajma',
                'price': 7.99
            },
            {
                'name': 'Daal Fry',
                'price': 7.99
            }, {
                'name': 'Daal Makhani',
                'price': 9.99
            },
            {
                'name': 'Kadhai Paneer',
                'price': 10.99
            },
            {
                'name': 'Aloo/Gobi Matar',
                'price': 10.99
            },
            {
                'name': 'Mixed/Veg Curry',
                'price': 10.99
            }, {
                'name': 'Paneer Matar M.',
                'price': 12.99
            },
            {
                'name': 'Paneer Vindaloo',
                'price': 12.99
            },
            {
                'name': 'Bhindi Masala',
                'price': 9.99
            }
        ]
        this.thakaliThali = [
            {
                'name': 'Veg/Chicken Thali',
                'price': 10.99
            },
            {
                'name': 'Fish/Mutton Thali',
                'price': 12.99
            }
        ]
        this.tibetan = [
            {
                'name': 'Gyuma(Blood Sausage)',
                'price': 9.99
            },
            {
                'name': ' Chilli Gyuma',
                'price': 10.99
            },
            {
                'name': 'Veg Gyanthuk Thukpa',
                'price': 8.99
            },
            {
                'name': 'Chicken/Beef Gyanthuk Thukpa',
                'price': 10.99
            },
            {
                'name': 'Shabhaleh Beef',
                'price': 5.99
            },
            {
                'name': 'Sha Momo/Beef Momo',
                'price': 8.99
            },
            {
                'name': ' Chilli Gyuma',
                'price': 10.99
            },
            {
                'name': 'Cheley Beef Tongue',
                'price': 10.99
            },
            {
                'name': 'Shogok Khatsa/ Aloo Dum (Dry/Gravy)',
                'price': 6.99
            },
            {
                'name': 'Beef Sukuti',
                'price': 10.99
            },
            {
                'name': 'Shapta Beef/ Beef Chilli',
                'price': 9.99
            }
        ]
        this.delight = [
            {
                'name': 'Ras Malai 2Pc',
                'price': 4.99
            },
            {
                'name': 'Gulab Jamum 2 Pc',
                'price': 4.99
            },
            {
                'name': 'Kheer',
                'price': 4.99
            },
            {
                'name': 'Mango/Sweet Lassi',
                'price': 3.99
            },
            {
                'name': 'Black/Lemon Tea',
                'price': 2.99
            },
            {
                'name': 'Soda',
                'price': 1.99
            }
        ]
    }
}