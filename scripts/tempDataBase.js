let cityDatabase = [
  {
    name: "Peabody, MA,",
    latitude: 42.536457,
    longitude: -70.985786,
  },
  {
    name: "Northampton, MA,",
    latitude: 42.328674,
    longitude: -72.664658,
  },
  {
    name: "Newton, MA,",
    latitude: 42.341042,
    longitude: -71.217133,
  },
  {
    name: "Newburyport, MA,",
    latitude: 42.810356,
    longitude: -70.893875,
  },
  {
    name: "New Bedford, MA,",
    latitude: 41.638409,
    longitude: -70.941208,
  },
  {
    name: "Medford, MA,",
    latitude: 42.419331,
    longitude: -71.11972,
  },
  {
    name: "Malden, MA,",
    latitude: 42.429752,
    longitude: -71.071022,
  },
  {
    name: "Leominster, MA,",
    latitude: 42.525482,
    longitude: -71.764183,
  },
  {
    name: "Lawrence, MA,",
    latitude: 42.701283,
    longitude: -71.175682,
  },
  {
    name: "Holyoke, MA,",
    latitude: 42.203217,
    longitude: -72.625481,
  },
  {
    name: "Greenfield, MA,",
    latitude: 42.587334,
    longitude: -72.603416,
  },
  {
    name: "Framingham, MA,",
    latitude: 42.280418,
    longitude: -71.423233,
  },
  {
    name: "Fitchburg, MA,",
    latitude: 42.586716,
    longitude: -71.814468,
  },
  {
    name: "Everett, MA,",
    latitude: 42.408623,
    longitude: -71.056999,
  },
  {
    name: "Chelsea, MA,",
    latitude: 42.392925,
    longitude: -71.037109,
  },
  {
    name: "Amesbury, MA,",
    latitude: 42.856842,
    longitude: -70.96344,
  },
  {
    name: "Takoma Park, MD,",
    latitude: 38.981544,
    longitude: -77.010674,
  },
  {
    name: "Salisbury, MD,",
    latitude: 38.36335,
    longitude: -75.605919,
  },
  {
    name: "Rockville, MD,",
    latitude: 39.086437,
    longitude: -77.161263,
  },
  {
    name: "Hagerstown, MD,",
    latitude: 39.644207,
    longitude: -77.73143,
  },
  {
    name: "Greenbelt, MD,",
    latitude: 38.998318,
    longitude: -76.896332,
  },
  {
    name: "Cumberland, MD,",
    latitude: 39.649109,
    longitude: -78.769714,
  },
  {
    name: "Cambridge, MD,",
    latitude: 38.563461,
    longitude: -76.085251,
  },
  {
    name: "Aberdeen, MD,",
    latitude: 39.514877,
    longitude: -76.17411,
  },
  {
    name: "Presque Isle, ME,",
    latitude: 46.680672,
    longitude: -68.023521,
  },
  {
    name: "Portland, ME,",
    latitude: 43.680031,
    longitude: -70.310425,
  },
  {
    name: "Lewiston, ME,",
    latitude: 44.101902,
    longitude: -70.21711,
  },
  {
    name: "Gardiner, ME,",
    latitude: 44.230553,
    longitude: -69.779633,
  },
  {
    name: "Eastport, ME,",
    latitude: 44.90691,
    longitude: -66.996201,
  },
  {
    name: "Calais, ME,",
    latitude: 45.188042,
    longitude: -67.282753,
  },
  {
    name: "Biddeford, ME,",
    latitude: 43.489849,
    longitude: -70.469711,
  },
  {
    name: "Belfast, ME,",
    latitude: 44.42477,
    longitude: -69.01062,
  },
  {
    name: "Bath, ME,",
    latitude: 43.917503,
    longitude: -69.829712,
  },
  {
    name: "Augusta, ME,",
    latitude: 44.331493,
    longitude: -69.788994,
  },
  {
    name: "Auburn, ME,",
    latitude: 44.090008,
    longitude: -70.271439,
  },
  {
    name: "Thibodaux, LA,",
    latitude: 29.795111,
    longitude: -90.82814,
  },
  {
    name: "St Martinville, LA,",
    latitude: 30.124033,
    longitude: -91.833435,
  },
  {
    name: "Morgan City, LA,",
    latitude: 29.706043,
    longitude: -91.206917,
  },
  {
    name: "Monroe, LA,",
    latitude: 32.50993,
    longitude: -92.121742,
  },
  {
    name: "Gretna, LA,",
    latitude: 29.916653,
    longitude: -90.057854,
  },
  {
    name: "Bastrop, LA,",
    latitude: 32.778889,
    longitude: -91.919243,
  },
  {
    name: "Alexandria, LA,",
    latitude: 31.284788,
    longitude: -92.471176,
  },
  {
    name: "Richmond, KY,",
    latitude: 37.74688,
    longitude: -84.30146,
  },
  {
    name: "Paris, KY,",
    latitude: 38.206348,
    longitude: -84.270172,
  },
  {
    name: "Owensboro, KY,",
    latitude: 37.760586,
    longitude: -87.127686,
  },
  {
    name: "Newport, KY,",
    latitude: 39.08897,
    longitude: -84.500786,
  },
  {
    name: "Middlesboro, KY,",
    latitude: 36.616894,
    longitude: -83.739494,
  },
  {
    name: "Mayfield, KY,",
    latitude: 36.739876,
    longitude: -88.646523,
  },
  {
    name: "Hodgenville, KY,",
    latitude: 37.569702,
    longitude: -85.743095,
  },
  {
    name: "Hazard, KY,",
    latitude: 37.250626,
    longitude: -83.195503,
  },
  {
    name: "Harrodsburg, KY,",
    latitude: 37.76627,
    longitude: -84.852119,
  },
  {
    name: "Harlan, KY,",
    latitude: 36.843681,
    longitude: -83.324593,
  },
  {
    name: "Frankfort, KY,",
    latitude: 38.192902,
    longitude: -84.883942,
  },
  {
    name: "Elizabethtown, KY,",
    latitude: 37.703224,
    longitude: -85.871674,
  },
  {
    name: "Covington, KY,",
    latitude: 39.067719,
    longitude: -84.516426,
  },
  {
    name: "Campbellsville, KY,",
    latitude: 37.344158,
    longitude: -85.346436,
  },
  {
    name: "Bowling Green, KY,",
    latitude: 36.976524,
    longitude: -86.456017,
  },
  {
    name: "Berea, KY,",
    latitude: 37.569199,
    longitude: -84.299782,
  },
  {
    name: "Bardstown, KY,",
    latitude: 37.820415,
    longitude: -85.467949,
  },
  {
    name: "Barbourville, KY,",
    latitude: 36.869038,
    longitude: -83.892479,
  },
  {
    name: "Ashland, KY,",
    latitude: 38.460304,
    longitude: -82.649666,
  },
  {
    name: "Smith Center, KS,",
    latitude: 39.779823,
    longitude: -98.787064,
  },
  {
    name: "Salina, KS,",
    latitude: 38.826633,
    longitude: -97.616257,
  },
  {
    name: "Pittsburg, KS,",
    latitude: 37.406769,
    longitude: -94.705528,
  },
  {
    name: "Ottawa, KS,",
    latitude: 38.604465,
    longitude: -95.271301,
  },
  {
    name: "Osawatomie, KS,",
    latitude: 38.497746,
    longitude: -94.960602,
  },
  {
    name: "Newton, KS,",
    latitude: 38.047016,
    longitude: -97.350304,
  },
  {
    name: "Leavenworth, KS,",
    latitude: 39.313015,
    longitude: -94.941147,
  },
  {
    name: "Lawrence, KS,",
    latitude: 38.960213,
    longitude: -95.27739,
  },
  {
    name: "Junction City, KS,",
    latitude: 39.026646,
    longitude: -96.852814,
  },
  {
    name: "Hays, KS,",
    latitude: 38.88509,
    longitude: -99.326202,
  },
  {
    name: "Great Bend, KS,",
    latitude: 38.364895,
    longitude: -98.7743,
  },
  {
    name: "Fort Scott, KS,",
    latitude: 37.838108,
    longitude: -94.710022,
  },
  {
    name: "Emporia, KS,",
    latitude: 38.405903,
    longitude: -96.188339,
  },
  {
    name: "Dodge City, KS,",
    latitude: 37.753098,
    longitude: -100.024872,
  },
  {
    name: "Council Grove, KS,",
    latitude: 38.661697,
    longitude: -96.492599,
  },
  {
    name: "Chanute, KS,",
    latitude: 37.679878,
    longitude: -95.459778,
  },
  {
    name: "Atchison, KS,",
    latitude: 39.563606,
    longitude: -95.125549,
  },
  {
    name: "West Des Moines, IA,",
    latitude: 41.57983,
    longitude: -93.791328,
  },
  {
    name: "Webster City, IA,",
    latitude: 42.464397,
    longitude: -93.829056,
  },
  {
    name: "Waterloo, IA,",
    latitude: 42.499504,
    longitude: -92.358665,
  },
  {
    name: "Sioux City, IA,",
    latitude: 42.495132,
    longitude: -96.40007,
  },
  {
    name: "Ottumwa, IA,",
    latitude: 41.016621,
    longitude: -92.43055,
  },
  {
    name: "Oskaloosa, IA,",
    latitude: 41.299023,
    longitude: -92.653198,
  },
  {
    name: "Newton, IA,",
    latitude: 41.703957,
    longitude: -93.054817,
  },
  {
    name: "Mount Pleasant, IA,",
    latitude: 40.969242,
    longitude: -91.55542,
  },
  {
    name: "Keokuk, IA,",
    latitude: 40.407204,
    longitude: -91.410805,
  },
  {
    name: "Grinnell, IA,",
    latitude: 41.746952,
    longitude: -92.729362,
  },
  {
    name: "Fort Dodge, IA,",
    latitude: 42.512745,
    longitude: -94.188148,
  },
  {
    name: "Estherville, IA,",
    latitude: 43.4035,
    longitude: -94.843323,
  },
  {
    name: "Dubuque, IA,",
    latitude: 42.516033,
    longitude: -90.718506,
  },
  {
    name: "Council Bluffs, IA,",
    latitude: 41.250854,
    longitude: -95.882042,
  },
  {
    name: "Clinton, IA,",
    latitude: 41.827965,
    longitude: -90.249619,
  },
  {
    name: "Cherokee, IA,",
    latitude: 42.754681,
    longitude: -95.557831,
  },
  {
    name: "Charles City, IA,",
    latitude: 43.066807,
    longitude: -92.683464,
  },
  {
    name: "Burlington, IA,",
    latitude: 40.810947,
    longitude: -91.131844,
  },
  {
    name: "Boone, IA,",
    latitude: 42.06065,
    longitude: -93.88549,
  },
  {
    name: "Wabash, IN,",
    latitude: 40.800262,
    longitude: -85.830887,
  },
  {
    name: "Vincennes, IN,",
    latitude: 38.678299,
    longitude: -87.522491,
  },
  {
    name: "Valparaiso, IN,",
    latitude: 41.483845,
    longitude: -87.063965,
  },
  {
    name: "Terre Haute, IN,",
    latitude: 39.472298,
    longitude: -87.401917,
  },
  {
    name: "Shelbyville, IN,",
    latitude: 39.524483,
    longitude: -85.786476,
  },
  {
    name: "Richmond, IN,",
    latitude: 39.828354,
    longitude: -84.894196,
  },
  {
    name: "Plymouth, IN,",
    latitude: 41.345619,
    longitude: -86.316971,
  },
  {
    name: "Peru, IN,",
    latitude: 40.754417,
    longitude: -86.071426,
  },
  {
    name: "New Castle, IN,",
    latitude: 39.924065,
    longitude: -85.379021,
  },
  {
    name: "New Albany, IN,",
    latitude: 38.313908,
    longitude: -85.835434,
  },
  {
    name: "Mishawaka, IN,",
    latitude: 41.66853,
    longitude: -86.173042,
  },
  {
    name: "Marion, IN,",
    latitude: 40.55648,
    longitude: -85.68277,
  },
  {
    name: "Kokomo, IN,",
    latitude: 40.481205,
    longitude: -86.141815,
  },
  {
    name: "Jeffersonville, IN,",
    latitude: 38.279888,
    longitude: -85.740524,
  },
  {
    name: "Greenfield, IN,",
    latitude: 39.790737,
    longitude: -85.782951,
  },
  {
    name: "Goshen, IN,",
    latitude: 41.582092,
    longitude: -85.842979,
  },
  {
    name: "Elwood, IN,",
    latitude: 40.279053,
    longitude: -85.844749,
  },
  {
    name: "East Chicago, IN,",
    latitude: 41.649212,
    longitude: -87.472565,
  },
  {
    name: "Crawfordsville, IN,",
    latitude: 40.044075,
    longitude: -86.911057,
  },
  {
    name: "Connersville, IN,",
    latitude: 39.653687,
    longitude: -85.147896,
  },
  {
    name: "Bloomington, IN,",
    latitude: 39.168804,
    longitude: -86.536659,
  },
  {
    name: "Bedford, IN,",
    latitude: 38.866512,
    longitude: -86.511833,
  },
  {
    name: "Zion, IL,",
    latitude: 42.450806,
    longitude: -87.845978,
  },
  {
    name: "Wood River, IL,",
    latitude: 38.864758,
    longitude: -90.102638,
  },
  {
    name: "Wheaton, IL,",
    latitude: 41.860985,
    longitude: -88.124168,
  },
  {
    name: "Waukegan, IL,",
    latitude: 42.365627,
    longitude: -87.872139,
  },
  {
    name: "Virden, IL,",
    latitude: 39.501575,
    longitude: -89.772629,
  },
  {
    name: "Vandalia, IL,",
    latitude: 38.970127,
    longitude: -89.115585,
  },
  {
    name: "Urbana, IL,",
    latitude: 40.113159,
    longitude: -88.211105,
  },
  {
    name: "Streator, IL,",
    latitude: 41.13052,
    longitude: -88.844597,
  },
  {
    name: "Shawneetown, IL,",
    latitude: 37.717564,
    longitude: -88.18988,
  },
  {
    name: "Rock Island, IL,",
    latitude: 41.487076,
    longitude: -90.589691,
  },
  {
    name: "Quincy, IL,",
    latitude: 39.93549,
    longitude: -91.408241,
  },
  {
    name: "Pontiac, IL,",
    latitude: 40.880894,
    longitude: -88.642799,
  },
  {
    name: "Petersburg, IL,",
    latitude: 40.014156,
    longitude: -89.855278,
  },
  {
    name: "Park Ridge, IL,",
    latitude: 42.017452,
    longitude: -87.861786,
  },
  {
    name: "Ottawa, IL,",
    latitude: 41.345505,
    longitude: -88.848846,
  },
  {
    name: "North Chicago, IL,",
    latitude: 42.326439,
    longitude: -87.851089,
  },
  {
    name: "Nauvoo, IL,",
    latitude: 40.54789,
    longitude: -91.390503,
  },
  {
    name: "Mount Vernon, IL,",
    latitude: 38.319221,
    longitude: -88.925255,
  },
  {
    name: "Monmouth, IL,",
    latitude: 40.915249,
    longitude: -90.654694,
  },
  {
    name: "Mattoon, IL,",
    latitude: 39.485355,
    longitude: -88.390404,
  },
  {
    name: "Macomb, IL,",
    latitude: 40.458427,
    longitude: -90.677963,
  },
  {
    name: "Lake Forest, IL,",
    latitude: 42.245686,
    longitude: -87.867012,
  },
  {
    name: "La Salle, IL,",
    latitude: 41.362553,
    longitude: -89.065414,
  },
  {
    name: "Kewanee, IL,",
    latitude: 41.243195,
    longitude: -89.93824,
  },
  {
    name: "Kankakee, IL,",
    latitude: 41.123634,
    longitude: -87.872742,
  },
  {
    name: "Herrin, IL,",
    latitude: 37.805065,
    longitude: -89.038292,
  },
  {
    name: "Harrisburg, IL,",
    latitude: 37.736668,
    longitude: -88.559456,
  },
  {
    name: "Galena, IL,",
    latitude: 42.420296,
    longitude: -90.4356,
  },
  {
    name: "Freeport, IL,",
    latitude: 42.289551,
    longitude: -89.647018,
  },
  {
    name: "East Saint Louis, IL,",
    latitude: 38.616405,
    longitude: -90.159821,
  },
  {
    name: "East Moline, IL,",
    latitude: 41.511295,
    longitude: -90.460213,
  },
  {
    name: "Dixon, IL,",
    latitude: 41.845261,
    longitude: -89.491661,
  },
  {
    name: "DeKalb, IL,",
    latitude: 41.93037,
    longitude: -88.757355,
  },
  {
    name: "Danville, IL,",
    latitude: 40.144653,
    longitude: -87.634216,
  },
  {
    name: "Collinsville, IL,",
    latitude: 38.675953,
    longitude: -90.003471,
  },
  {
    name: "Chicago Heights, IL,",
    latitude: 41.510395,
    longitude: -87.644287,
  },
  {
    name: "Chester, IL,",
    latitude: 37.915825,
    longitude: -89.829262,
  },
  {
    name: "Arkansas City, KS,",
    latitude: 37.069611,
    longitude: -97.05072,
  },
  {
    name: "Charleston, IL,",
    latitude: 39.491936,
    longitude: -88.185867,
  },
  {
    name: "Centralia, IL,",
    latitude: 38.530453,
    longitude: -89.141502,
  },
  {
    name: "Carthage, IL,",
    latitude: 40.41478,
    longitude: -91.141708,
  },
  {
    name: "Carlinville, IL,",
    latitude: 39.28056,
    longitude: -89.890327,
  },
  {
    name: "Canton, IL,",
    latitude: 40.560329,
    longitude: -90.046028,
  },
  {
    name: "Calumet City, IL,",
    latitude: 41.611603,
    longitude: -87.551186,
  },
  {
    name: "Cairo, IL,",
    latitude: 37.007828,
    longitude: -89.184265,
  },
  {
    name: "Bloomington, IL,",
    latitude: 40.478821,
    longitude: -88.992706,
  },
  {
    name: "Belvidere, IL,",
    latitude: 42.259529,
    longitude: -88.865211,
  },
  {
    name: "Alton, IL,",
    latitude: 38.908852,
    longitude: -90.169662,
  },
  {
    name: "Sun Valley, ID,",
    latitude: 43.697662,
    longitude: -114.352829,
  },
  {
    name: "Rexburg, ID,",
    latitude: 43.825386,
    longitude: -111.792824,
  },
  {
    name: "Pocatello, ID,",
    latitude: 42.880363,
    longitude: -112.452911,
  },
  {
    name: "Lewiston, ID,",
    latitude: 46.392014,
    longitude: -117.010826,
  },
  {
    name: "Kellogg, ID,",
    latitude: 47.538658,
    longitude: -116.129227,
  },
  {
    name: "Coeur d’Alene, ID,",
    latitude: 47.702465,
    longitude: -116.796883,
  },
  {
    name: "Caldwell, ID,",
    latitude: 43.661766,
    longitude: -116.691559,
  },
  {
    name: "Bonners Ferry, ID,",
    latitude: 48.692551,
    longitude: -116.319862,
  },
  {
    name: "Blackfoot, ID,",
    latitude: 43.195194,
    longitude: -112.35453,
  },
  {
    name: "Washington, GA,",
    latitude: 33.740253,
    longitude: -82.745857,
  },
  {
    name: "Warner Robins, GA,",
    latitude: 32.615692,
    longitude: -83.633667,
  },
  {
    name: "Toccoa, GA,",
    latitude: 34.578903,
    longitude: -83.331581,
  },
  {
    name: "Plains, GA,",
    latitude: 32.033638,
    longitude: -84.398224,
  },
  {
    name: "Gainesville, GA,",
    latitude: 34.298409,
    longitude: -83.832855,
  },
  {
    name: "Fort Valley, GA,",
    latitude: 32.559334,
    longitude: -83.904587,
  },
  {
    name: "Fitzgerald, GA,",
    latitude: 31.717707,
    longitude: -83.262657,
  },
  {
    name: "Douglas, GA,",
    latitude: 31.504131,
    longitude: -82.86779,
  },
  {
    name: "Darien, GA,",
    latitude: 31.375116,
    longitude: -81.436729,
  },
  {
    name: "Dalton, GA,",
    latitude: 34.775517,
    longitude: -84.986244,
  },
  {
    name: "Carrollton, GA,",
    latitude: 33.584045,
    longitude: -85.10112,
  },
  {
    name: "Brunswick, GA,",
    latitude: 31.164404,
    longitude: -81.5056,
  },
  {
    name: "Blairsville, GA,",
    latitude: 34.878166,
    longitude: -83.961349,
  },
  {
    name: "Bainbridge, GA,",
    latitude: 30.903612,
    longitude: -84.585205,
  },
  {
    name: "Americus, GA,",
    latitude: 32.072433,
    longitude: -84.233978,
  },
  {
    name: "Winter Park, FL,",
    latitude: 28.598797,
    longitude: -81.358315,
  },
  {
    name: "Venice, FL,",
    latitude: 27.109644,
    longitude: -82.448792,
  },
  {
    name: "Sebring, FL,",
    latitude: 27.479319,
    longitude: -81.456017,
  },
  {
    name: "Saint Augustine, FL,",
    latitude: 29.908072,
    longitude: -81.324791,
  },
  {
    name: "New Smyrna Beach, FL,",
    latitude: 29.036013,
    longitude: -80.964966,
  },
  {
    name: "Melbourne, FL,",
    latitude: 28.118488,
    longitude: -80.670372,
  },
  {
    name: "Lake City, FL,",
    latitude: 30.189375,
    longitude: -82.648254,
  },
  {
    name: "Hallandale Beach, FL,",
    latitude: 25.987219,
    longitude: -80.153206,
  },
  {
    name: "Fort Pierce, FL,",
    latitude: 27.450266,
    longitude: -80.339951,
  },
  {
    name: "Delray Beach, FL,",
    latitude: 26.459763,
    longitude: -80.105545,
  },
  {
    name: "Rockledge, FL,",
    latitude: 28.316528,
    longitude: -80.74659,
  },
  {
    name: "Boca Raton, FL,",
    latitude: 26.376032,
    longitude: -80.12236,
  },
  {
    name: "New Castle, DE,",
    latitude: 39.668564,
    longitude: -75.586189,
  },
  {
    name: "Milford, DE,",
    latitude: 38.917534,
    longitude: -75.441925,
  },
  {
    name: "Lewes, DE,",
    latitude: 38.781082,
    longitude: -75.15715,
  },
  {
    name: "Roswell, NM,",
    latitude: 33.400322,
    longitude: -104.534897,
  },
  {
    name: "West Haven, CT,",
    latitude: 41.275898,
    longitude: -72.975739,
  },
  {
    name: "Torrington, CT,",
    latitude: 41.806595,
    longitude: -73.130592,
  },
  {
    name: "Shelton, CT,",
    latitude: 41.306583,
    longitude: -73.143768,
  },
  {
    name: "Norwalk, CT,",
    latitude: 41.12188,
    longitude: -73.436432,
  },
  {
    name: "New Britain, CT,",
    latitude: 41.681408,
    longitude: -72.794746,
  },
  {
    name: "Middletown, CT,",
    latitude: 41.562794,
    longitude: -72.68161,
  },
  {
    name: "Belle Glade, FL,",
    latitude: 26.687412,
    longitude: -80.681831,
  },
  {
    name: "Bartow, FL,",
    latitude: 27.891005,
    longitude: -81.847359,
  },
  {
    name: "Atlantic City, NJ,",
    latitude: 39.370121,
    longitude: -74.438942,
  },
  {
    name: "Albany, GA,",
    latitude: 31.594915,
    longitude: -84.224236,
  },
  {
    name: "Jacksonville, IL,",
    latitude: 39.74155,
    longitude: -90.256218,
  },
  {
    name: "Idaho City, ID,",
    latitude: 43.82885,
    longitude: -115.83786,
  },
  {
    name: "Coral Gables, FL,",
    latitude: 25.750156,
    longitude: -80.27964,
  },
  {
    name: "Derby, CT,",
    latitude: 41.329334,
    longitude: -73.094406,
  },
  {
    name: "Bristol, CT,",
    latitude: 41.685173,
    longitude: -72.962708,
  },
  {
    name: "Ansonia, CT,",
    latitude: 41.346439,
    longitude: -73.084938,
  },
  {
    name: "Walsenburg, CO,",
    latitude: 37.630322,
    longitude: -104.790543,
  },
  {
    name: "Sterling, CO,",
    latitude: 40.626743,
    longitude: -103.217026,
  },
  {
    name: "Steamboat Springs, CO,",
    latitude: 40.490429,
    longitude: -106.842384,
  },
  {
    name: "Ouray, CO,",
    latitude: 38.025131,
    longitude: -107.67588,
  },
  {
    name: "Leadville, CO,",
    latitude: 39.247478,
    longitude: -106.300194,
  },
  {
    name: "Gunnison, CO,",
    latitude: 38.547871,
    longitude: -106.938622,
  },
  {
    name: "Fort Morgan, CO,",
    latitude: 40.255306,
    longitude: -103.803062,
  },
  {
    name: "Panama City, FL,",
    latitude: 30.193626,
    longitude: -85.683029,
  },
  {
    name: "Miami Beach, FL,",
    latitude: 25.793449,
    longitude: -80.139198,
  },
  {
    name: "Cripple Creek, CO,",
    latitude: 38.749077,
    longitude: -105.18306,
  },
  {
    name: "Central City, CO,",
    latitude: 39.803318,
    longitude: -105.51683,
  },
  {
    name: "Cañon City, CO,",
    latitude: 38.444931,
    longitude: -105.24572,
  },
  {
    name: "Brighton, CO,",
    latitude: 39.969753,
    longitude: -104.836723,
  },
  {
    name: "Stuttgart, AR,",
    latitude: 34.497196,
    longitude: -91.560921,
  },
  {
    name: "Osceola, AR,",
    latitude: 35.705608,
    longitude: -89.992729,
  },
  {
    name: "Newport, AR,",
    latitude: 35.618671,
    longitude: -91.271286,
  },
  {
    name: "Forrest City, AR,",
    latitude: 35.010712,
    longitude: -90.797783,
  },
  {
    name: "Crossett, AR,",
    latitude: 33.132671,
    longitude: -91.971634,
  },
  {
    name: "Camden, AR,",
    latitude: 33.586617,
    longitude: -92.842979,
  },
  {
    name: "Blytheville, AR,",
    latitude: 35.934574,
    longitude: -89.92617,
  },
  {
    name: "Window Rock, AZ,",
    latitude: 35.67897,
    longitude: -109.067413,
  },
  {
    name: "Globe, AZ,",
    latitude: 33.395844,
    longitude: -110.793739,
  },
  {
    name: "Palmer, AK,",
    latitude: 61.600803,
    longitude: -149.125259,
  },
  {
    name: "Tuskegee, AL,",
    latitude: 32.429066,
    longitude: -85.715233,
  },
  {
    name: "Troy, AL,",
    latitude: 31.806484,
    longitude: -85.968628,
  },
  {
    name: "Scottsboro, AL,",
    latitude: 34.650826,
    longitude: -86.088501,
  },
  {
    name: "Ozark, AL,",
    latitude: 31.463181,
    longitude: -85.647202,
  },
  {
    name: "Waukesha, WI,",
    latitude: 43.0186,
    longitude: -88.259773,
  },
  {
    name: "Jasper, AL,",
    latitude: 33.834263,
    longitude: -87.280708,
  },
  {
    name: "Guntersville, AL,",
    latitude: 34.361664,
    longitude: -86.305595,
  },
  {
    name: "Eufaula, AL,",
    latitude: 31.89818,
    longitude: -85.16021,
  },
  {
    name: "Enterprise, AL,",
    latitude: 31.335653,
    longitude: -85.865448,
  },
  {
    name: "Demopolis, AL,",
    latitude: 32.510178,
    longitude: -87.855392,
  },
  {
    name: "Atmore, AL,",
    latitude: 31.025837,
    longitude: -87.506462,
  },
  {
    name: "Alexander City, AL,",
    latitude: 32.940945,
    longitude: -85.970024,
  },
  {
    name: "Whittier, CA,",
    latitude: 33.982506,
    longitude: -118.040962,
  },
  {
    name: "South San Francisco, CA,",
    latitude: 37.662937,
    longitude: -122.433014,
  },
  {
    name: "Sausalito, CA,",
    latitude: 37.865894,
    longitude: -122.498055,
  },
  {
    name: "San Rafael, CA,",
    latitude: 37.986076,
    longitude: -122.534752,
  },
  {
    name: "San Marino, CA,",
    latitude: 34.1213,
    longitude: -118.132607,
  },
  {
    name: "San Luis Obispo, CA,",
    latitude: 35.270378,
    longitude: -120.680656,
  },
  {
    name: "Ojai, CA,",
    latitude: 34.456936,
    longitude: -119.25444,
  },
  {
    name: "Merced, CA,",
    latitude: 37.325954,
    longitude: -120.499992,
  },
  {
    name: "Marysville, CA,",
    latitude: 39.152321,
    longitude: -121.593994,
  },
  {
    name: "Martinez, CA,",
    latitude: 37.997417,
    longitude: -122.133598,
  },
  {
    name: "Malibu, CA,",
    latitude: 34.031246,
    longitude: -118.788193,
  },
  {
    name: "Lodi, CA,",
    latitude: 38.130123,
    longitude: -121.290443,
  },
  {
    name: "Garden Grove, CA,",
    latitude: 33.785645,
    longitude: -117.97348,
  },
  {
    name: "Eureka, CA,",
    latitude: 40.785114,
    longitude: -124.183922,
  },
  {
    name: "Culver City, CA,",
    latitude: 34.010124,
    longitude: -118.415016,
  },
  {
    name: "Coronado, CA,",
    latitude: 32.631718,
    longitude: -117.136772,
  },
  {
    name: "Claremont, CA,",
    latitude: 34.132236,
    longitude: -117.739929,
  },
  {
    name: "Buena Park, CA,",
    latitude: 33.8689,
    longitude: -118.012741,
  },
  {
    name: "Belmont, CA,",
    latitude: 37.524174,
    longitude: -122.304199,
  },
  {
    name: "Watervliet, NY,",
    latitude: 42.729637,
    longitude: -73.708778,
  },
  {
    name: "Utica, NY,",
    latitude: 43.107204,
    longitude: -75.252312,
  },
  {
    name: "Troy, NY,",
    latitude: 42.728104,
    longitude: -73.687576,
  },
  {
    name: "Fairfield, IA,",
    latitude: 41.00695,
    longitude: -91.973419,
  },
  {
    name: "Tonawanda, NY,",
    latitude: 43.01519,
    longitude: -78.891663,
  },
  {
    name: "Schenectady, NY,",
    latitude: 42.813297,
    longitude: -73.941177,
  },
  {
    name: "Saratoga Springs, NY,",
    latitude: 43.083313,
    longitude: -73.809898,
  },
  {
    name: "Rye, NY,",
    latitude: 40.981613,
    longitude: -73.691925,
  },
  {
    name: "Rome, NY,",
    latitude: 43.227978,
    longitude: -75.484924,
  },
  {
    name: "Rensselaer, NY,",
    latitude: 42.644516,
    longitude: -73.747253,
  },
  {
    name: "Plattsburgh, NY,",
    latitude: 44.699764,
    longitude: -73.471428,
  },
  {
    name: "Peekskill, NY,",
    latitude: 41.292282,
    longitude: -73.930725,
  },
  {
    name: "Oneida, NY,",
    latitude: 43.095654,
    longitude: -75.669487,
  },
  {
    name: "New Rochelle, NY,",
    latitude: 40.922794,
    longitude: -73.791809,
  },
  {
    name: "Mount Vernon, NY,",
    latitude: 40.916695,
    longitude: -73.836815,
  },
  {
    name: "Middletown, NY,",
    latitude: 41.450123,
    longitude: -74.429253,
  },
  {
    name: "Lockport, NY,",
    latitude: 43.170048,
    longitude: -78.710464,
  },
  {
    name: "Lackawanna, NY,",
    latitude: 42.820339,
    longitude: -78.843399,
  },
  {
    name: "Kingston, NY,",
    latitude: 41.931828,
    longitude: -74.011108,
  },
  {
    name: "Johnstown, NY,",
    latitude: 43.010265,
    longitude: -74.383682,
  },
  {
    name: "Gloversville, NY,",
    latitude: 43.052845,
    longitude: -74.363762,
  },
  {
    name: "Glens Falls, NY,",
    latitude: 43.311825,
    longitude: -73.655975,
  },
  {
    name: "Geneva, NY,",
    latitude: 42.868473,
    longitude: -76.99649,
  },
  {
    name: "Dunkirk, NY,",
    latitude: 42.481365,
    longitude: -79.343887,
  },
  {
    name: "Cortland, NY,",
    latitude: 42.604729,
    longitude: -76.18737,
  },
  {
    name: "Corning, NY,",
    latitude: 42.148773,
    longitude: -77.062103,
  },
  {
    name: "Cohoes, NY,",
    latitude: 42.774475,
    longitude: -73.708412,
  },
  {
    name: "South Lake Tahoe, CA,",
    latitude: 38.936604,
    longitude: -119.986649,
  },
  {
    name: "Binghamton, NY,",
    latitude: 42.098843,
    longitude: -75.920647,
  },
  {
    name: "Amsterdam, NY,",
    latitude: 42.940933,
    longitude: -74.200806,
  },
  {
    name: "Mason, OH,",
    latitude: 39.36834,
    longitude: -84.32959,
  },
  {
    name: "Carpinteria, CA,",
    latitude: 34.395958,
    longitude: -119.521042,
  },
  {
    name: "Madeira Beach, FL,",
    latitude: 27.798244,
    longitude: -82.798462,
  },
  {
    name: "Hoboken, NJ,",
    latitude: 40.745255,
    longitude: -74.034775,
  },
  {
    name: "Port Hueneme, CA",
    latitude: 34.155834,
    longitude: -119.202789,
  },
  {
    name: "Auburn, NY,",
    latitude: 42.933334,
    longitude: -76.566666,
  },
  {
    name: "Jamestown, NY",
    latitude: 42.095554,
    longitude: -79.238609,
  },
  {
    name: "Fulton, MO,",
    latitude: 38.846668,
    longitude: -91.948059,
  },
  {
    name: "Bedford, OH",
    latitude: 41.392502,
    longitude: -81.534447,
  },
  {
    name: "Stuart, FL,",
    latitude: 27.192223,
    longitude: -80.243057,
  },
  {
    name: "San Angelo, TX,",
    latitude: 31.442778,
    longitude: -100.450279,
  },
  {
    name: "Woodbridge, NJ,",
    latitude: 40.560001,
    longitude: -74.290001,
  },
  {
    name: "Vista, CA,",
    latitude: 33.193611,
    longitude: -117.241112,
  },
  {
    name: "South Bend, IN,",
    latitude: 41.676388,
    longitude: -86.250275,
  },
  {
    name: "Davenport, IA,",
    latitude: 41.543056,
    longitude: -90.590836,
  },
  {
    name: "Sparks, NV,",
    latitude: 39.554443,
    longitude: -119.735558,
  },
  {
    name: "Green Bay, WI",
    latitude: 44.513332,
    longitude: -88.015831,
  },
  {
    name: "San Mateo, CA,",
    latitude: 37.554169,
    longitude: -122.313057,
  },
  {
    name: "Tyler, TX,",
    latitude: 32.349998,
    longitude: -95.300003,
  },
  {
    name: "League City, TX,",
    latitude: 29.499722,
    longitude: -95.089722,
  },
  {
    name: "Lewisville, TX,",
    latitude: 33.038334,
    longitude: -97.006111,
  },
  {
    name: "Meridian, ID,",
    latitude: 43.614166,
    longitude: -116.398888,
  },
  {
    name: "Waterbury, CT,",
    latitude: 41.55611,
    longitude: -73.041389,
  },
  {
    name: "Jurupa Valley, CA,",
    latitude: 34.0,
    longitude: -117.48333,
  },
  {
    name: "West Palm Beach, FL,",
    latitude: 26.709723,
    longitude: -80.064163,
  },
  {
    name: "Antioch, CA,",
    latitude: 38.005001,
    longitude: -121.805832,
  },
  {
    name: "High Point, NC,",
    latitude: 35.970554,
    longitude: -79.997498,
  },
  {
    name: "Miami Gardens, FL,",
    latitude: 25.942122,
    longitude: -80.26992,
  },
  {
    name: "Murrieta, CA,",
    latitude: 33.569443,
    longitude: -117.202499,
  },
  {
    name: "Springfield, IL,",
    latitude: 39.799999,
    longitude: -89.650002,
  },
  {
    name: "El Monte, CA,",
    latitude: 34.073334,
    longitude: -118.027496,
  },
  {
    name: "West Jordan, UT,",
    latitude: 40.606388,
    longitude: -111.976112,
  },
  {
    name: "College Station, TX,",
    latitude: 30.601389,
    longitude: -96.314445,
  },
  {
    name: "Fairfield, CA,",
    latitude: 38.257778,
    longitude: -122.054169,
  },
  {
    name: "Evansville, IN,",
    latitude: 37.977222,
    longitude: -87.550552,
  },
  {
    name: "Cambridge, MA,",
    latitude: 42.373611,
    longitude: -71.110558,
  },
  {
    name: "Richardson, TX,",
    latitude: 32.965557,
    longitude: -96.715836,
  },
  {
    name: "Berkeley, CA,",
    latitude: 37.871666,
    longitude: -122.272781,
  },
  {
    name: "Columbia, MO,",
    latitude: 38.951561,
    longitude: -92.328636,
  },
  {
    name: "Athens, GA,",
    latitude: 33.950001,
    longitude: -83.383331,
  },
  {
    name: "Lafayette, LA,",
    latitude: 30.216667,
    longitude: -92.033333,
  },
  {
    name: "Sterling Heights, MI,",
    latitude: 42.580276,
    longitude: -83.030281,
  },
  {
    name: "Visalia, CA,",
    latitude: 36.316666,
    longitude: -119.300003,
  },
  {
    name: "Hampton, VA,",
    latitude: 37.034946,
    longitude: -76.360123,
  },
  {
    name: "West Valley City, UT,",
    latitude: 40.689167,
    longitude: -111.993889,
  },
  {
    name: "Surprise, AZ,",
    latitude: 33.630554,
    longitude: -112.366669,
  },
  {
    name: "Thornton, CO,",
    latitude: 39.903057,
    longitude: -104.954445,
  },
  {
    name: "Miramar, FL,",
    latitude: 25.978889,
    longitude: -80.282501,
  },
  {
    name: "Murfreesboro, TN,",
    latitude: 35.846111,
    longitude: -86.391945,
  },
  {
    name: "Pasadena, CA,",
    latitude: 34.156113,
    longitude: -118.131943,
  },
  {
    name: "Bridgeport, CT,",
    latitude: 41.18639,
    longitude: -73.195557,
  },
  {
    name: "Paterson, NJ,",
    latitude: 40.914745,
    longitude: -74.162827,
  },
  {
    name: "Rockford, Il",
    latitude: 42.259445,
    longitude: -89.064445,
  },
  {
    name: "Joliet, Illinois,",
    latitude: 41.520557,
    longitude: -88.150558,
  },
  {
    name: "Escondido, CA,",
    latitude: 33.124722,
    longitude: -117.080833,
  },
  {
    name: "Kansas City, KS,",
    latitude: 39.106667,
    longitude: -94.676392,
  },
  {
    name: "Springfield, MA,",
    latitude: 42.101391,
    longitude: -72.590279,
  },
  {
    name: "Springfield, MO,",
    latitude: 37.210388,
    longitude: -93.297256,
  },
  {
    name: "Corona, CA,",
    latitude: 33.866669,
    longitude: -117.566666,
  },
  {
    name: "Pembroke Pines, FL,",
    latitude: 26.012501,
    longitude: -80.313614,
  },
  {
    name: "Elk Grove, CA,",
    latitude: 38.438332,
    longitude: -121.381943,
  },
  {
    name: "Oceanside, CA",
    latitude: 33.211666,
    longitude: -117.325836,
  },
  {
    name: "Newport News, VA,",
    latitude: 37.070831,
    longitude: -76.484444,
  },
  {
    name: "Sioux Falls, South Dakota",
    longitude: 43.536388,
    latitude: -96.731667,
  },
  {
    name: "Vancouver, WA,",
    latitude: 45.633331,
    longitude: -122.599998,
  },
  {
    name: "Worcester, MA,",
    latitude: 42.271389,
    longitude: -71.798889,
  },
  {
    name: "Tallahassee, FL,",
    latitude: 30.455,
    longitude: -84.253334,
  },
  {
    name: "Columbus, GA,",
    latitude: 32.492222,
    longitude: -84.940277,
  },
  {
    name: "Augusta, GA,",
    latitude: 33.466667,
    longitude: -81.966667,
  },
  {
    name: "Montgomery, AL,",
    latitude: 32.361668,
    longitude: -86.279167,
  },
  {
    name: "Aurora, IL,",
    latitude: 41.763889,
    longitude: -88.290001,
  },
  {
    name: "Amarillo, TX,",
    latitude: 35.199165,
    longitude: -101.845276,
  },
  {
    name: "Modesto, CA,",
    latitude: 37.639492,
    longitude: -121.015099,
  },
  {
    name: "Garland, TX,",
    latitude: 32.907223,
    longitude: -96.635277,
  },
  {
    name: "Irvine, CA",
    latitude: 33.669445,
    longitude: -117.823059,
  },
  {
    name: "Aurora, CO,",
    latitude: 39.710835,
    longitude: -104.8125,
  },
  {
    name: "Arlington, TX,",
    latitude: 32.705002,
    longitude: -97.12278,
  },
  {
    name: "Kansas City, MO,",
    latitude: 39.099724,
    longitude: -94.578331,
  },
  {
    name: "Memphis, TN,",
    latitude: 35.1175,
    longitude: -89.971107,
  },
  {
    name: "Indianapolis, IN,",
    latitude: 39.791,
    longitude: -86.148003,
  },
  {
    name: "Columbus, OH,",
    latitude: 39.983334,
    longitude: -82.98333,
  },
  {
    name: "Austin, TX",
    latitude: 30.266666,
    longitude: -97.73333,
  },
  {
    name: "Dallas, TX",
    latitude: 32.779167,
    longitude: -96.808891,
  },
  {
    name: "Redwood City, CA,",
    latitude: 37.487846,
    longitude: -122.236115,
  },
  {
    name: "Gastonia, NC, the",
    latitude: 35.25528,
    longitude: -81.180275,
  },
  {
    name: "New Braunfels, TX, the",
    latitude: 29.700001,
    longitude: -98.116669,
  },
  {
    name: "Palm Beach Gardens, FL,",
    latitude: 26.838619,
    longitude: -80.129967,
  },
  {
    name: "Forestville, CA,",
    latitude: 38.473625,
    longitude: -122.889992,
  },
  {
    name: "Houston, TX,",
    latitude: 29.749907,
    longitude: -95.358421,
  },
  {
    name: "Muncie, IN,",
    latitude: 40.191891,
    longitude: -85.401695,
  },
  {
    name: "Palm Springs, CA,",
    latitude: 33.830517,
    longitude: -116.545601,
  },
  {
    name: "Hot Springs, AR,",
    latitude: 34.496212,
    longitude: -93.05722,
  },
  {
    name: "Hackett, AR,",
    latitude: 35.188503,
    longitude: -94.412239,
  },
  {
    name: "Richmond, VA,",
    latitude: 37.54129,
    longitude: -77.434769,
  },
  {
    name: "Fayetteville, AR,",
    latitude: 36.082157,
    longitude: -94.171852,
  },
  {
    name: "Yuma, AZ,",
    latitude: 32.698437,
    longitude: -114.650398,
  },
  {
    name: "Peoria, AZ,",
    latitude: 33.580944,
    longitude: -112.237068,
  },
  {
    name: "Tempe, AZ,",
    latitude: 33.427204,
    longitude: -111.939896,
  },
  {
    name: "Diamond Bar, CA,",
    latitude: 34.028622,
    longitude: -117.810333,
  },
  {
    name: "Auburn, AL,",
    latitude: 32.609856,
    longitude: -85.480782,
  },
  {
    name: "Hoover, AL,",
    latitude: 33.405746,
    longitude: -86.811546,
  },
  {
    name: "Decatur, AL,",
    latitude: 34.603817,
    longitude: -86.985039,
  },
  {
    name: "Seward, AK,",
    latitude: 60.102924,
    longitude: -149.442139,
  },
  {
    name: "Bloomington, MN,",
    latitude: 44.840797,
    longitude: -93.298279,
  },
  {
    name: "Utqiagvik, AK,",
    latitude: 71.290558,
    longitude: -156.788605,
  },
  {
    name: "Milledgeville, GA,",
    latitude: 33.080929,
    longitude: -83.228668,
  },
  {
    name: "Fargo, ND,",
    latitude: 46.877186,
    longitude: -96.789803,
  },
  {
    name: "Odessa, TX,",
    latitude: 31.845682,
    longitude: -102.367645,
  },
  {
    name: "Orangeburg, SC,",
    latitude: 33.493317,
    longitude: -80.855415,
  },
  {
    name: "Rogers, AR,",
    latitude: 36.333412,
    longitude: -94.125809,
  },
  {
    name: "DeLand, FL,",
    latitude: 29.028318,
    longitude: -81.303116,
  },
  {
    name: "McAllen, TX,",
    latitude: 26.203407,
    longitude: -98.230011,
  },
  {
    name: "Foster, RI,",
    latitude: 41.85371,
    longitude: -71.758125,
  },
  {
    name: "Mannford, OK,",
    latitude: 36.133411,
    longitude: -96.354454,
  },
  {
    name: "Springfield, OH,",
    latitude: 39.925751,
    longitude: -83.806694,
  },
  {
    name: "Pasadena, TX,",
    latitude: 29.691063,
    longitude: -95.209099,
  },
  {
    name: "Lake Worth, FL,",
    latitude: 26.616756,
    longitude: -80.068451,
  },
  {
    name: "Novi, MI,",
    latitude: 42.480591,
    longitude: -83.475494,
  },
  {
    name: "Rochester, MN,",
    latitude: 44.016369,
    longitude: -92.475395,
  },
  {
    name: "London, KY,",
    latitude: 37.129986,
    longitude: -84.084122,
  },
  {
    name: "Sturgis, South Dakota,",
    latitude: 44.409706,
    longitude: -103.509079,
  },
  {
    name: "Mandeville, LA,",
    latitude: 30.358252,
    longitude: -90.065628,
  },
  {
    name: "Mt Sterling, KY,",
    latitude: 38.056469,
    longitude: -83.943253,
  },
  {
    name: "Santa Clarita, CA,",
    latitude: 34.391663,
    longitude: -118.542587,
  },
  {
    name: "Overland Park, KS,",
    latitude: 38.984764,
    longitude: -94.677658,
  },
  {
    name: "St Cloud, MN,",
    latitude: 45.56023,
    longitude: -94.172852,
  },
  {
    name: "Sanford, NC,",
    latitude: 35.479961,
    longitude: -79.18058,
  },
  {
    name: "Sanford, FL,",
    latitude: 28.807674,
    longitude: -81.274948,
  },
  {
    name: "Juneau, AK,",
    latitude: 58.305801,
    longitude: -134.433304,
  },
  {
    name: "Albany, OR,",
    latitude: 44.636513,
    longitude: -123.105927,
  },
  {
    name: "Santee, CA,",
    latitude: 32.838383,
    longitude: -116.973915,
  },
  {
    name: "Bay Point, CA,",
    latitude: 38.033878,
    longitude: -121.960709,
  },
  {
    name: "Longmont, CO,",
    latitude: 40.167206,
    longitude: -105.101929,
  },
  {
    name: "Issaquah, WA,",
    latitude: 47.530102,
    longitude: -122.032616,
  },
  {
    name: "Akron, OH,",
    latitude: 41.081757,
    longitude: -81.511452,
  },
  {
    name: "Hammond, IN,",
    latitude: 41.58466,
    longitude: -87.50016,
  },
  {
    name: "Youngstown, OH,",
    latitude: 41.10297,
    longitude: -80.647247,
  },
  {
    name: "Hugo, MN,",
    latitude: 45.159966,
    longitude: -92.99334,
  },
  {
    name: "Yorba Linda, CA,",
    latitude: 33.888504,
    longitude: -117.813255,
  },
  {
    name: "Rapid City, SD,",
    latitude: 44.080544,
    longitude: -103.231018,
  },
  {
    name: "Hillsboro, OR,",
    latitude: 45.522896,
    longitude: -122.98983,
  },
  {
    name: "Elkhart, IN,",
    latitude: 41.681992,
    longitude: -85.976669,
  },
  {
    name: "Providence, RI,",
    latitude: 41.825226,
    longitude: -71.418884,
  },
  {
    name: "Rancho Cucamonga, CA,",
    latitude: 34.110489,
    longitude: -117.594429,
  },
  {
    name: "Orange, CA,",
    latitude: 33.787914,
    longitude: -117.853104,
  },
  {
    name: "Madison, WI,",
    latitude: 43.073051,
    longitude: -89.40123,
  },
  {
    name: "Yonkers, NY,",
    latitude: 40.93121,
    longitude: -73.89875,
  },
  {
    name: "Indio, CA,",
    latitude: 33.720577,
    longitude: -116.215561,
  },
  {
    name: "Jersey City, NJ,",
    latitude: 40.719074,
    longitude: -74.050552,
  },
  {
    name: "Bradenton, FL,",
    latitude: 27.498928,
    longitude: -82.574821,
  },
  {
    name: "South Burlington, VT,",
    latitude: 44.466995,
    longitude: -73.170959,
  },
  {
    name: "Long Beach, CA,",
    latitude: 33.77005,
    longitude: -118.193741,
  },
  {
    name: "Greenville, NC,",
    latitude: 35.612659,
    longitude: -77.366356,
  },
  {
    name: "Edison, NJ,",
    latitude: 40.522964,
    longitude: -74.411674,
  },
  {
    name: "Jonesboro, AR,",
    latitude: 35.835575,
    longitude: -90.705025,
  },
  {
    name: "Turrell, AR,",
    latitude: 35.379807,
    longitude: -90.257874,
  },
  {
    name: "Racine, WI,",
    latitude: 42.722702,
    longitude: -87.784225,
  },
  {
    name: "Las Cruces, NM,",
    latitude: 32.346596,
    longitude: -106.78772,
  },
  {
    name: "Alameda, CA,",
    latitude: 37.765205,
    longitude: -122.241638,
  },
  {
    name: "Walnut Creek, CA,",
    latitude: 37.910076,
    longitude: -122.065186,
  },
  {
    name: "Naples, FL,",
    latitude: 26.177624,
    longitude: -81.806946,
  },
  {
    name: "Temecula, CA,",
    latitude: 33.487007,
    longitude: -117.143784,
  },
  {
    name: "Bozeman, MT,",
    latitude: 45.676998,
    longitude: -111.042931,
  },
  {
    name: "Eastlake, OH,",
    latitude: 41.653934,
    longitude: -81.450394,
  },
  {
    name: "Yakima, WA,",
    latitude: 46.60207,
    longitude: -120.505898,
  },
  {
    name: "Dunedin, FL,",
    latitude: 28.018349,
    longitude: -82.764473,
  },
  {
    name: "St Paul, MN,",
    latitude: 44.949642,
    longitude: -93.093124,
  },
  {
    name: "St. Augustine, FL,",
    latitude: 29.901243,
    longitude: -81.312431,
  },
  {
    name: "Kent, WA,",
    latitude: 47.380932,
    longitude: -122.23484,
  },
  {
    name: "Dearborn Heights, MI,",
    latitude: 42.336983,
    longitude: -83.273262,
  },
  {
    name: "Chester, SC,",
    latitude: 34.704929,
    longitude: -81.210251,
  },
  {
    name: "Muskegon, MI,",
    latitude: 43.224194,
    longitude: -86.235809,
  },
  {
    name: "Hesperia, CA,",
    latitude: 34.426388,
    longitude: -117.30088,
  },
  {
    name: "Oakland, CA,",
    latitude: 37.804363,
    longitude: -122.271111,
  },
  {
    name: "Lancaster, CA,",
    latitude: 34.686787,
    longitude: -118.15416,
  },
  {
    name: "Homestead, FL,",
    latitude: 25.468721,
    longitude: -80.477554,
  },
  {
    name: "Norfolk, VA,",
    latitude: 36.850769,
    longitude: -76.285873,
  },
  {
    name: "Santa Cruz, CA,",
    latitude: 36.974117,
    longitude: -122.030792,
  },
  {
    name: "Daly City, CA,",
    latitude: 37.687923,
    longitude: -122.470207,
  },
  {
    name: "Newport, RI,",
    latitude: 41.490578,
    longitude: -71.310196,
  },
  {
    name: "Santa Barbara, CA,",
    latitude: 34.42083,
    longitude: -119.698189,
  },
  {
    name: "Cheektowaga, NY,",
    latitude: 42.902615,
    longitude: -78.744576,
  },
  {
    name: "Eldorado Springs, CO,",
    latitude: 39.932117,
    longitude: -105.281639,
  },
  {
    name: "Twin Falls, Idaho,",
    latitude: 42.562786,
    longitude: -114.460503,
  },
  {
    name: "Huntington, WV,",
    latitude: 38.413651,
    longitude: -82.446732,
  },
  {
    name: "Decatur, IL,",
    latitude: 39.842468,
    longitude: -88.953148,
  },
  {
    name: "Beverly Hills, CA,",
    latitude: 34.07362,
    longitude: -118.400352,
  },
  {
    name: "Danbury, CT,",
    latitude: 41.394966,
    longitude: -73.454079,
  },
  {
    name: "Des Moines, Iowa,",
    latitude: 41.619549,
    longitude: -93.598022,
  },
  {
    name: "New Haven, CT,",
    latitude: 41.308273,
    longitude: -72.927887,
  },
  {
    name: "Fairbanks, AK,",
    latitude: 64.835365,
    longitude: -147.776749,
  },
  {
    name: "Nampa, Idaho,",
    latitude: 43.565468,
    longitude: -116.560822,
  },
  {
    name: "New Iberia, LA,",
    latitude: 30.005417,
    longitude: -91.818665,
  },
  {
    name: "Wilkes-Barre, PA,",
    latitude: 41.245708,
    longitude: -75.881241,
  },
  {
    name: "Petersburg, VA,",
    latitude: 37.227928,
    longitude: -77.401924,
  },
  {
    name: "Grand Rapids, MI,",
    latitude: 42.963795,
    longitude: -85.670006,
  },
  {
    name: "Lexington, Kentucky",
    latitude: 38.047989,
    longitude: -84.50164,
  },

  {
    name: "Hamden, CT,",
    latitude: 41.385826,
    longitude: -72.904243,
  },
  {
    name: "Moscow, Idaho,",
    latitude: 46.731705,
    longitude: -116.999939,
  },
  {
    name: "Pine Bluff, AR,",
    latitude: 34.2244,
    longitude: -92.019211,
  },
  {
    name: "Bellevue, WA,",
    latitude: 47.610378,
    longitude: -122.200676,
  },
  {
    name: "Lynchburg, VA,",
    latitude: 37.412762,
    longitude: -79.146042,
  },
  {
    name: "Dover, DE,",
    latitude: 39.161079,
    longitude: -75.525681,
  },
  {
    name: "Tuba City, Arizona,",
    latitude: 36.136906,
    longitude: -111.240173,
  },
  {
    name: "Medford, OR,",
    latitude: 42.326515,
    longitude: -122.875595,
  },
  {
    name: "Franklin, TN,",
    latitude: 35.925064,
    longitude: -86.868889,
  },
  {
    name: "Portland, OR,",
    latitude: 45.523064,
    longitude: -122.676483,
  },
  {
    name: "Philadelphia, PA,",
    latitude: 39.952583,
    longitude: -75.165222,
  },
  {
    name: "Miami, FL,",
    latitude: 25.761681,
    longitude: -80.191788,
  },
  {
    name: "Boston, MA,",
    latitude: 42.361145,
    longitude: -71.057083,
  },
  {
    name: "Phoenix, AZ,",
    latitude: 33.448376,
    longitude: -112.074036,
  },
  {
    name: "Erie, PA,",
    latitude: 42.129223,
    longitude: -80.08506,
  },
  {
    name: "Victorville, CA,",
    latitude: 34.536217,
    longitude: -117.292763,
  },
  {
    name: "Wilmington, DE,",
    latitude: 39.739071,
    longitude: -75.539787,
  },
  {
    name: "Fontana, CA,",
    latitude: 34.092232,
    longitude: -117.435051,
  },
  {
    name: "Jacksonville, FL,",
    latitude: 30.332184,
    longitude: -81.655647,
  },
  {
    name: "Soulsbyville, CA,",
    latitude: 37.984646,
    longitude: -120.263802,
  },
  {
    name: "Corvallis, OR,",
    latitude: 44.564568,
    longitude: -123.262047,
  },
  {
    name: "Lincoln, IL,",
    latitude: 40.148376,
    longitude: -89.364815,
  },
  {
    name: "North Pole, AK,",
    latitude: 64.751114,
    longitude: -147.349442,
  },
  {
    name: "Des Plaines, IL,",
    latitude: 42.033363,
    longitude: -87.8834,
  },
  {
    name: "Richmond, CA,",
    latitude: 37.935757,
    longitude: -122.347748,
  },
  {
    name: "Grifton, NC,",
    latitude: 35.372662,
    longitude: -77.437462,
  },
  {
    name: "Redmond, WA,",
    latitude: 47.673988,
    longitude: -122.121513,
  },
  {
    name: "San Leandro, Oakland, CA,",
    latitude: 37.725685,
    longitude: -122.15683,
  },
  {
    name: "East Point, GA,",
    latitude: 33.679554,
    longitude: -84.439369,
  },
  {
    name: "Russellville, AL,",
    latitude: 34.501942,
    longitude: -87.731789,
  },
  {
    name: "Dothan, AL,",
    latitude: 31.223812,
    longitude: -85.393356,
  },
  {
    name: "Georgetown, KY,",
    latitude: 38.20443,
    longitude: -84.560326,
  },
  {
    name: "Tampa, FL,",
    latitude: 27.964157,
    longitude: -82.452606,
  },
  {
    name: "Kenosha, WI,",
    latitude: 42.588081,
    longitude: -87.822899,
  },
  {
    name: "Keene, NH,",
    latitude: 42.934307,
    longitude: -72.283859,
  },
  {
    name: "Springfield, OR,",
    latitude: 44.046204,
    longitude: -123.023346,
  },
  {
    name: "Revere, MA,",
    latitude: 42.408428,
    longitude: -71.011993,
  },
  {
    name: "New Haven, CT,",
    latitude: 41.310726,
    longitude: -72.929916,
  },
  {
    name: "Port Orange, FL,",
    latitude: 29.138315,
    longitude: -80.995613,
  },
  {
    name: "Manhattan, KS,",
    latitude: 39.183609,
    longitude: -96.571671,
  },
  {
    name: "Jeannette, PA,",
    latitude: 40.328125,
    longitude: -79.615318,
  },
  {
    name: "Baldwin Park, CA,",
    latitude: 34.085285,
    longitude: -117.960899,
  },
  {
    name: "Sandusky, OH,",
    latitude: 41.450642,
    longitude: -82.706604,
  },
  {
    name: "El Centro, CA,",
    latitude: 32.793877,
    longitude: -115.561516,
  },
  {
    name: "Lakewood, CO,",
    latitude: 39.71085,
    longitude: -105.081505,
  },
  {
    name: "Fall River, MA,",
    latitude: 41.696629,
    longitude: -71.149994,
  },
  {
    name: "Mt Prospect, IL,",
    latitude: 42.066418,
    longitude: -87.937294,
  },
  {
    name: "Katy, TX,",
    latitude: 29.785786,
    longitude: -95.824394,
  },
  {
    name: "Cary, NC,",
    latitude: 35.791538,
    longitude: -78.78112,
  },
  {
    name: "Toms River, NJ,",
    latitude: 39.954639,
    longitude: -74.198456,
  },
  {
    name: "Tigard, Portland, OR,",
    latitude: 45.431767,
    longitude: -122.770454,
  },
  {
    name: "Clarksville, TN,",
    latitude: 36.531364,
    longitude: -87.353767,
  },
  {
    name: "Kent, WA,",
    latitude: 47.37801,
    longitude: -122.237381,
  },
  {
    name: "North Las Vegas, NV,",
    latitude: 36.201946,
    longitude: -115.120216,
  },
  {
    name: "Walker, LA,",
    latitude: 30.487968,
    longitude: -90.861488,
  },
  {
    name: "Canton, OH,",
    latitude: 40.798946,
    longitude: -81.378448,
  },
  {
    name: "Macon, GA,",
    latitude: 32.838131,
    longitude: -83.634705,
  },
  {
    name: "Bartlett, TN,",
    latitude: 35.204441,
    longitude: -89.87381,
  },
  {
    name: "San Bernardino, CA,",
    latitude: 34.115784,
    longitude: -117.302399,
  },
  {
    name: "Lynn, MA,",
    latitude: 42.466763,
    longitude: -70.949493,
  },
  {
    name: "Poway, CA,",
    latitude: 32.96273,
    longitude: -117.03624,
  },
  {
    name: "Coffeyville, KS,",
    latitude: 37.036064,
    longitude: -95.620537,
  },
  {
    name: "Rio Linda, CA,",
    latitude: 38.691013,
    longitude: -121.448563,
  },
  {
    name: "LaGrange, GA,",
    latitude: 33.03788,
    longitude: -85.03006,
  },
  {
    name: "Bellflower, CA,",
    latitude: 33.88221,
    longitude: -118.117981,
  },
  {
    name: "Westland, MI,",
    latitude: 42.324268,
    longitude: -83.399017,
  },
  {
    name: "Garden City, MI,",
    latitude: 42.325569,
    longitude: -83.330933,
  },
  {
    name: "Meridian, ID,",
    latitude: 43.612343,
    longitude: -116.393707,
  },
  {
    name: "Roswell, GA,",
    latitude: 34.022003,
    longitude: -84.361549,
  },
  {
    name: "Johns Creek, GA,",
    latitude: 34.028927,
    longitude: -84.198578,
  },
  {
    name: "New London, CT,",
    latitude: 41.355423,
    longitude: -72.10276,
  },
  {
    name: "Hanford, CA",
    latitude: 36.327728,
    longitude: -119.645912,
  },
  {
    name: "Saint Charles, MO,",
    latitude: 38.788105,
    longitude: -90.497437,
  },
  {
    name: "Carrollton, TX,",
    latitude: 32.974586,
    longitude: -96.8899,
  },
  {
    name: "Stamford, CT,",
    latitude: 41.053429,
    longitude: -73.538734,
  },
  {
    name: "Ames, IA,",
    latitude: 42.034534,
    longitude: -93.620369,
  },
  {
    name: "Inglewood, CA,",
    latitude: 33.961018,
    longitude: -118.35537,
  },
  {
    name: "Maryville, TN,",
    latitude: 35.760059,
    longitude: -83.96685,
  },
  {
    name: "Charleston, WV,",
    latitude: 38.349819,
    longitude: -81.632622,
  },
  {
    name: "Las Cruces, NM,",
    latitude: 32.326595,
    longitude: -106.775436,
  },
  {
    name: "Rochester Hills, MI,",
    latitude: 42.658516,
    longitude: -83.152725,
  },
  {
    name: "Centennial, CO,",
    latitude: 39.579231,
    longitude: -104.876694,
  },
  {
    name: "Lompoc, CA,",
    latitude: 34.639149,
    longitude: -120.457939,
  },
  {
    name: "North Richland Hills, TX,",
    latitude: 32.834293,
    longitude: -97.228905,
  },
  {
    name: "Lowell, MA,",
    latitude: 42.640999,
    longitude: -71.316711,
  },
  {
    name: "Round Rock, TX,",
    latitude: 30.508255,
    longitude: -97.678894,
  },
  {
    name: "Torrance, CA,",
    latitude: 33.840763,
    longitude: -118.345413,
  },
  {
    name: "Champaign, IL,",
    latitude: 40.116421,
    longitude: -88.243385,
  },
  {
    name: "Gary, IN,",
    latitude: 41.595161,
    longitude: -87.356934,
  },
  {
    name: "Port Charlotte, FL,",
    latitude: 26.979605,
    longitude: -82.075424,
  },
  {
    name: "Cedar Falls, IA,",
    latitude: 42.534901,
    longitude: -92.445312,
  },
  {
    name: "Great Falls, MT,",
    latitude: 47.506187,
    longitude: -111.283691,
  },
  {
    name: "Brentwood, TN,",
    latitude: 36.033115,
    longitude: -86.782776,
  },
  {
    name: "Syracuse, NY,",
    latitude: 43.088947,
    longitude: -76.15448,
  },
  {
    name: "Grand Saline, TX,",
    latitude: 32.673466,
    longitude: -95.709404,
  },
  {
    name: "Ponte Vedra Beach, FL,",
    latitude: 30.240005,
    longitude: -81.385262,
  },
  {
    name: "Abilene, TX,",
    latitude: 32.448734,
    longitude: -99.733147,
  },
  {
    name: "Valdosta, GA,",
    latitude: 30.832703,
    longitude: -83.278488,
  },
  {
    name: "The Villages, FL,",
    latitude: 28.927019,
    longitude: -82.003761,
  },
  {
    name: "Casa Grande, AZ,",
    latitude: 32.881893,
    longitude: -111.768036,
  },
  {
    name: "Carmel-by-the-Sea, CA,",
    latitude: 36.555241,
    longitude: -121.923286,
  },
  {
    name: "Gresham Terrace, Gresham, OR,",
    latitude: 45.502842,
    longitude: -122.427444,
  },
  {
    name: "Roseville, CA,",
    latitude: 38.752125,
    longitude: -121.28801,
  },
  {
    name: "Eau Claire, WI,",
    latitude: 44.811348,
    longitude: -91.498497,
  },
  {
    name: "Lake Charles, LA,",
    latitude: 30.212942,
    longitude: -93.21891,
  },
  {
    name: "Biloxi, MS,",
    latitude: 30.396032,
    longitude: -88.885307,
  },
  {
    name: "Perris, CA,",
    latitude: 33.78252,
    longitude: -117.228645,
  },
  {
    name: "Beaverton, OR,",
    latitude: 45.485168,
    longitude: -122.804489,
  },
  {
    name: "Mission Viejo, CA,",
    latitude: 33.600021,
    longitude: -117.671997,
  },
  {
    name: "Madera, CA,",
    latitude: 36.95953,
    longitude: -120.062866,
  },
  {
    name: "Bend, OR,",
    latitude: 44.058174,
    longitude: -121.315308,
  },
  {
    name: "Greenville, SC,",
    latitude: 34.852619,
    longitude: -82.394012,
  },
  {
    name: "North Fort Myers, FL,",
    latitude: 26.667294,
    longitude: -81.880089,
  },
  {
    name: "Vacaville, CA,",
    latitude: 38.356579,
    longitude: -121.987747,
  },
  {
    name: "Elgin, IL,",
    latitude: 42.035408,
    longitude: -88.28257,
  },
  {
    name: "Hyrum, UT,",
    latitude: 41.632893,
    longitude: -111.85112,
  },
  {
    name: "Cape Canaveral, Florida,",
    latitude: 28.396837,
    longitude: -80.605659,
  },
  {
    name: "Encinitas, CA,",
    latitude: 33.039139,
    longitude: -117.295425,
  },
  {
    name: "Ocala, FL,",
    latitude: 29.187199,
    longitude: -82.140091,
  },
  {
    name: "Fremont, CA,",
    latitude: 37.548271,
    longitude: -121.988571,
  },
  {
    name: "Gainesville, FL,",
    latitude: 29.651634,
    longitude: -82.324829,
  },
  {
    name: "Fayetteville, NC,",
    latitude: 35.052666,
    longitude: -78.878357,
  },
  {
    name: "O'Fallon, MO,",
    latitude: 38.810608,
    longitude: -90.699844,
  },
  {
    name: "West Covina, CA,",
    latitude: 34.068623,
    longitude: -117.93895,
  },
  {
    name: "Pico Rivera, CA,",
    latitude: 33.98307,
    longitude: -118.096733,
  },
  {
    name: "Haines City, FL,",
    latitude: 28.114183,
    longitude: -81.617851,
  },
  {
    name: "Joplin, Missouri,",
    latitude: 37.084229,
    longitude: -94.513283,
  },
  {
    name: "Rock Hill, SC,",
    latitude: 34.924866,
    longitude: -81.025078,
  },
  {
    name: "Lee's Summit, MO,",
    latitude: 38.910843,
    longitude: -94.382172,
  },
  {
    name: "Dearborn, MI,",
    latitude: 42.322262,
    longitude: -83.176315,
  },
  {
    name: "Newark, NJ,",
    latitude: 40.735657,
    longitude: -74.172363,
  },
  {
    name: "Pontiac, MI,",
    latitude: 42.638924,
    longitude: -83.291046,
  },
  {
    name: "Salem, MA,",
    latitude: 42.519539,
    longitude: -70.896713,
  },
  {
    name: "Chattanooga, TN,",
    latitude: 35.045631,
    longitude: -85.309677,
  },
  {
    name: "Palmdale, CA,",
    latitude: 34.579449,
    longitude: -118.109291,
  },
  {
    name: "Redondo Beach, CA,",
    latitude: 33.849182,
    longitude: -118.388405,
  },
  {
    name: "Tuscaloosa, AL,",
    latitude: 33.189281,
    longitude: -87.565155,
  },
  {
    name: "Davie, FL,",
    latitude: 26.076477,
    longitude: -80.252113,
  },
  {
    name: "Hattiesburg, MS,",
    latitude: 31.32712,
    longitude: -89.290337,
  },
  {
    name: "Victoria, TX,",
    latitude: 28.798952,
    longitude: -97.028503,
  },
  {
    name: "Casas Adobes, AZ,",
    latitude: 32.319054,
    longitude: -111.001053,
  },
  {
    name: "Big Spring, TX,",
    latitude: 32.250992,
    longitude: -101.479073,
  },
  {
    name: "Battle Creek, MI,",
    latitude: 42.321152,
    longitude: -85.17971,
  },
  {
    name: "Eugene, OR,",
    latitude: 44.052071,
    longitude: -123.086754,
  },
  {
    name: "Marrero, LA,",
    latitude: 29.899372,
    longitude: -90.100349,
  },
  {
    name: "Castle Rock, CO,",
    latitude: 39.374912,
    longitude: -104.853859,
  },
  {
    name: "Old Bridge Township, NJ,",
    latitude: 40.402714,
    longitude: -74.305428,
  },
  {
    name: "Huntington Beach, CA,",
    latitude: 33.660057,
    longitude: -117.99897,
  },
  {
    name: "Havertown, PA,",
    latitude: 39.981461,
    longitude: -75.309387,
  },
  {
    name: "Brea, CA,",
    latitude: 33.916679,
    longitude: -117.900063,
  },
  {
    name: "Virginia Beach, VA,",
    latitude: 36.86314,
    longitude: -76.015778,
  },
  {
    name: "Warren, MI,",
    latitude: 42.491943,
    longitude: -83.023888,
  },
  {
    name: "Anderson, SC,",
    latitude: 34.503441,
    longitude: -82.650131,
  },
  {
    name: "White Plains, NY,",
    latitude: 41.033985,
    longitude: -73.762909,
  },
  {
    name: "Lansing, MI,",
    latitude: 42.732536,
    longitude: -84.555534,
  },
  {
    name: "Bismarck, ND,",
    latitude: 46.825905,
    longitude: -100.778275,
  },
  {
    name: "Kissimmee, FL,",
    latitude: 28.291956,
    longitude: -81.40757,
  },
  {
    name: "Eden Prairie, MN,",
    latitude: 44.852463,
    longitude: -93.475113,
  },
  {
    name: "Louisville, KY,",
    latitude: 38.328732,
    longitude: -85.764771,
  },
  {
    name: "Florence, SC,",
    latitude: 34.195435,
    longitude: -79.762566,
  },
  {
    name: "Nashua, NH,",
    latitude: 42.765366,
    longitude: -71.467567,
  },
  {
    name: "Greece, NY,",
    latitude: 43.209785,
    longitude: -77.693062,
  },
  {
    name: "Bolingbrook, IL,",
    latitude: 41.698643,
    longitude: -88.068398,
  },
  {
    name: "Midland, TX,",
    latitude: 32.000507,
    longitude: -102.077408,
  },
  {
    name: "El Cajon, CA,",
    latitude: 32.794773,
    longitude: -116.962524,
  },
  {
    name: "Chula Vista, CA,",
    latitude: 32.639954,
    longitude: -117.106705,
  },
  {
    name: "Raleigh, NC,",
    latitude: 35.787743,
    longitude: -78.644257,
  },
  {
    name: "Tewksbury, MA,",
    latitude: 42.610649,
    longitude: -71.234222,
  },
  {
    name: "Williamsport, PA,",
    latitude: 41.242451,
    longitude: -77.002831,
  },
  {
    name: "Olympia, WA,",
    latitude: 47.037872,
    longitude: -122.900696,
  },
  {
    name: "Alhambra, CA,",
    latitude: 34.095287,
    longitude: -118.127014,
  },
  {
    name: "Sandy Springs, GA,",
    latitude: 33.935101,
    longitude: -84.360924,
  },
  {
    name: "Frederick, MD,",
    latitude: 39.412327,
    longitude: -77.425461,
  },
  {
    name: "Erie, PA,",
    latitude: 42.129223,
    longitude: -80.08506,
  },
  {
    name: "Mountain View, CA,",
    latitude: 37.386051,
    longitude: -122.083855,
  },
  {
    name: "Eagle, ID,",
    latitude: 43.695442,
    longitude: -116.354012,
  },
  {
    name: "Sugar Land, TX,",
    latitude: 29.619678,
    longitude: -95.634949,
  },
  {
    name: "Jackson, MS,",
    latitude: 32.298756,
    longitude: -90.184807,
  },
  {
    name: "Harrisburg, PA,",
    latitude: 40.26368,
    longitude: -76.890739,
  },
  {
    name: "Edina, MN,",
    latitude: 44.889687,
    longitude: -93.349953,
  },
  {
    name: "Metairie, LA,",
    latitude: 29.984093,
    longitude: -90.152855,
  },
  {
    name: "Rancho Cordova, CA,",
    latitude: 38.589073,
    longitude: -121.302727,
  },
  {
    name: "Mobile, AL,",
    latitude: 30.695366,
    longitude: -88.039894,
  },
  {
    name: "San Diego, CA,",
    latitude: 32.715736,
    longitude: -117.161087,
  },
  {
    name: "East Peoria, IL,",
    latitude: 40.666149,
    longitude: -89.580101,
  },
  {
    name: "North Charleston, SC,",
    latitude: 32.854622,
    longitude: -79.974808,
  },
  {
    name: "Gulfport, MS,",
    latitude: 30.36742,
    longitude: -89.092819,
  },
  {
    name: "Cherry Hill, NJ,",
    latitude: 39.926811,
    longitude: -75.024628,
  },
  {
    name: "Cincinnati, OH,",
    latitude: 39.103119,
    longitude: -84.512016,
  },
  {
    name: "Glendale, CA,",
    latitude: 34.142509,
    longitude: -118.255074,
  },
  {
    name: "Reading, PA,",
    latitude: 40.335648,
    longitude: -75.926872,
  },
  {
    name: "Burien, WA,",
    latitude: 47.470379,
    longitude: -122.346794,
  },
  {
    name: "Largo, FL,",
    latitude: 27.909468,
    longitude: -82.787323,
  },
  {
    name: "Palm Harbor, FL,",
    latitude: 28.078072,
    longitude: -82.76371,
  },
  {
    name: "Turlock, CA,",
    latitude: 37.494656,
    longitude: -120.846596,
  },
  {
    name: "Camilla, GA,",
    latitude: 31.231293,
    longitude: -84.210464,
  },
  {
    name: "Flagstaff, AZ,",
    latitude: 35.198284,
    longitude: -111.651299,
  },
  {
    name: "Napa, CA,",
    latitude: 38.297539,
    longitude: -122.286865,
  },
  {
    name: "Greenwich, CT,",
    latitude: 41.027054,
    longitude: -73.620071,
  },
  {
    name: "Flower Mound, TX,",
    latitude: 33.014568,
    longitude: -97.096954,
  },
  {
    name: "Plano, TX,",
    latitude: 33.019844,
    longitude: -96.698883,
  },
  {
    name: "Atlanta, GA,",
    latitude: 33.753746,
    longitude: -84.38633,
  },
  {
    name: "Marietta, GA,",
    latitude: 33.952602,
    longitude: -84.549934,
  },
  {
    name: "Hopkinsville, KY,",
    latitude: 36.865601,
    longitude: -87.488617,
  },
  {
    name: "Thousand Oaks, CA,",
    latitude: 34.170563,
    longitude: -118.837593,
  },
  {
    name: "Omaha, NE,",
    latitude: 41.25716,
    longitude: -95.995102,
  },
  {
    name: "Newark, CA,",
    latitude: 37.529659,
    longitude: -122.040237,
  },
  {
    name: "Haltom City, TX,",
    latitude: 32.799576,
    longitude: -97.26918,
  },
  {
    name: "Smithtown, NY,",
    latitude: 40.85593,
    longitude: -73.200668,
  },
  {
    name: "Burbank, CA,",
    latitude: 34.18084,
    longitude: -118.308968,
  },
  {
    name: "La Crosse, WI,",
    latitude: 43.801357,
    longitude: -91.239578,
  },
  {
    name: "Brookfield, WI,",
    latitude: 43.061615,
    longitude: -88.107948,
  },
  {
    name: "Arden-Arcade, CA,",
    latitude: 38.600807,
    longitude: -121.377037,
  },
  {
    name: "Mercer Island, WA,",
    latitude: 47.570656,
    longitude: -122.222069,
  },
  {
    name: "Petaluma, CA,",
    latitude: 38.244923,
    longitude: -122.626991,
  },
  {
    name: "Yorktown, VA,",
    latitude: 37.238754,
    longitude: -76.509674,
  },
  {
    name: "Avon, CO,",
    latitude: 39.633068,
    longitude: -106.522217,
  },
  {
    name: "Weston, FL,",
    latitude: 26.103039,
    longitude: -80.401382,
  },
  {
    name: "Novato, CA,",
    latitude: 38.108086,
    longitude: -122.57515,
  },
  {
    name: "Winona, MN,",
    latitude: 44.049999,
    longitude: -91.633331,
  },
  {
    name: "Auburn, WA,",
    latitude: 47.307323,
    longitude: -122.228455,
  },
  {
    name: "Murray, UT,",
    latitude: 40.666893,
    longitude: -111.887993,
  },
  {
    name: "Lehi, UT,",
    latitude: 40.391617,
    longitude: -111.850769,
  },
  {
    name: "Altadena, CA,",
    latitude: 34.190163,
    longitude: -118.131317,
  },
  {
    name: "Clovis, CA,",
    latitude: 36.82523,
    longitude: -119.702919,
  },
  {
    name: "Mohave Valley, AZ,",
    latitude: 34.93306,
    longitude: -114.588852,
  },
  {
    name: "Dundalk, MD,",
    latitude: 39.250664,
    longitude: -76.520515,
  },
  {
    name: "Newark, DE,",
    latitude: 39.683723,
    longitude: -75.749657,
  },
  {
    name: "Gilroy, CA,",
    latitude: 37.005783,
    longitude: -121.568275,
  },
  {
    name: "St. Petersburg, FL,",
    latitude: 27.773056,
    longitude: -82.639999,
  },
  {
    name: "Doral, FL,",
    latitude: 25.819542,
    longitude: -80.355331,
  },
  {
    name: "Cheyenne, WY,",
    latitude: 41.161079,
    longitude: -104.80545,
  },
  {
    name: "Dublin, CA,",
    latitude: 37.702152,
    longitude: -121.935791,
  },
  {
    name: "Hayward, CA,",
    latitude: 37.668819,
    longitude: -122.080795,
  },
  {
    name: "Livermore, CA,",
    latitude: 37.681873,
    longitude: -121.768005,
  },
  {
    name: "St. George, UT,",
    latitude: 37.095169,
    longitude: -113.575974,
  },
  {
    name: "Brownsville, TX,",
    latitude: 25.901747,
    longitude: -97.497482,
  },
  {
    name: "Centreville, VA,",
    latitude: 38.840389,
    longitude: -77.428879,
  },
  {
    name: "Tracy, CA,",
    latitude: 37.739651,
    longitude: -121.425224,
  },
  {
    name: "Fort Collins, CO,",
    latitude: 40.585258,
    longitude: -105.084419,
  },
  {
    name: "Port Arthur, TX,",
    latitude: 29.884951,
    longitude: -93.939949,
  },
  {
    name: "Moab, UT,",
    latitude: 38.573315,
    longitude: -109.549843,
  },
  {
    name: "Henderson, NV,",
    latitude: 36.039524,
    longitude: -114.98172,
  },
  {
    name: "Allen, TX,",
    latitude: 33.103172,
    longitude: -96.670547,
  },
  {
    name: "Redding, CA,",
    latitude: 40.58654,
    longitude: -122.391678,
  },
  {
    name: "Chico, CA,",
    latitude: 39.728493,
    longitude: -121.837479,
  },
  {
    name: "DeSoto, TX,",
    latitude: 32.596287,
    longitude: -96.862679,
  },
  {
    name: "Milpitas, CA,",
    latitude: 37.432335,
    longitude: -121.899574,
  },
  {
    name: "Flint, MI,",
    latitude: 43.016193,
    longitude: -83.705521,
  },
  {
    name: "Zephyrhills, FL,",
    latitude: 28.23362,
    longitude: -82.181198,
  },
  {
    name: "Quincy, MA,",
    latitude: 42.255459,
    longitude: -71.002579,
  },
  {
    name: "Killeen, TX,",
    latitude: 31.117119,
    longitude: -97.727798,
  },
  {
    name: "Scranton, PA,",
    latitude: 41.40897,
    longitude: -75.662415,
  },
  {
    name: "Williston, ND,",
    latitude: 48.146969,
    longitude: -103.617973,
  },
  {
    name: "Little Rock, AR,",
    latitude: 34.746483,
    longitude: -92.289597,
  },
  {
    name: "Morgantown, WV,",
    latitude: 39.629524,
    longitude: -79.955894,
  },
  {
    name: "Scranton, PA,",
    latitude: 41.414925,
    longitude: -75.669708,
  },
  {
    name: "Dayton, OH,",
    latitude: 39.758949,
    longitude: -84.191605,
  },
  {
    name: "Norwalk, CA,",
    latitude: 33.902237,
    longitude: -118.081734,
  },
  {
    name: "Northside, Jacksonville, FL,",
    latitude: 30.49015,
    longitude: -81.647346,
  },
  {
    name: "Friendswood, TX,",
    latitude: 29.5294,
    longitude: -95.201042,
  },
  {
    name: "Michigan City, IN,",
    latitude: 41.723541,
    longitude: -86.899284,
  },
  {
    name: "Bangor, ME,",
    latitude: 44.808147,
    longitude: -68.795013,
  },
  {
    name: "Deerfield Beach, FL,",
    latitude: 26.329422,
    longitude: -80.088615,
  },
  {
    name: "Hempstead, NY,",
    latitude: 40.706928,
    longitude: -73.621788,
  },
  {
    name: "Provo, UT,",
    latitude: 40.233845,
    longitude: -111.658531,
  },
  {
    name: "Birmingham, AL,",
    latitude: 33.543682,
    longitude: -86.779633,
  },
  {
    name: "Owasso, OK,",
    latitude: 36.269539,
    longitude: -95.854713,
  },
  {
    name: "Oak Ridge, TN,",
    latitude: 36.010357,
    longitude: -84.269646,
  },
  {
    name: "Concord, CA,",
    latitude: 37.989128,
    longitude: -122.043686,
  },
  {
    name: "Titusville, FL,",
    latitude: 28.612219,
    longitude: -80.807556,
  },
  {
    name: "Jackson, MI,",
    latitude: 42.245777,
    longitude: -84.405968,
  },
  {
    name: "Canonsburg, PA,",
    latitude: 40.262569,
    longitude: -80.187279,
  },
  {
    name: "Tarrant, AL,",
    latitude: 33.589027,
    longitude: -86.768127,
  },
  {
    name: "Minneapolis, MN,",
    latitude: 44.986656,
    longitude: -93.258133,
  },
  {
    name: "Dana Point, CA,",
    latitude: 33.466972,
    longitude: -117.698105,
  },
  {
    name: "Wilmington, NC,",
    latitude: 34.225727,
    longitude: -77.94471,
  },
  {
    name: "Commerce City, CO,",
    latitude: 39.813019,
    longitude: -104.93351,
  },
  {
    name: "Puyallup, WA,",
    latitude: 47.185379,
    longitude: -122.2929,
  },
  {
    name: "La Habra, CA,",
    latitude: 33.931957,
    longitude: -117.946175,
  },
  {
    name: "Norman, OK,",
    latitude: 35.222569,
    longitude: -97.439476,
  },
  {
    name: "Niagara Falls, NY,",
    latitude: 43.092461,
    longitude: -79.04715,
  },
  {
    name: "Norwich, CT,",
    latitude: 41.532227,
    longitude: -72.088852,
  },
  {
    name: "Alief, Houston, TX,",
    latitude: 29.68272,
    longitude: -95.593239,
  },
  {
    name: "Suitland, Suitland-Silver Hill, MD,",
    latitude: 38.84861,
    longitude: -76.924446,
  },
  {
    name: "Covina, CA,",
    latitude: 34.090008,
    longitude: -117.890343,
  },
  {
    name: "New Orleans, LA,",
    latitude: 29.951065,
    longitude: -90.071533,
  },
  {
    name: "Prescott Valley, AZ,",
    latitude: 34.610023,
    longitude: -112.31572,
  },
  {
    name: "Levittown, NY,",
    latitude: 40.725933,
    longitude: -73.51429,
  },
  {
    name: "Arvada, CO,",
    latitude: 39.803261,
    longitude: -105.090408,
  },
  {
    name: "Prichard, Mobile, AL,",
    latitude: 30.73918,
    longitude: -88.080482,
  },
  {
    name: "San Tan Valley, AZ,",
    latitude: 33.170277,
    longitude: -111.57222,
  },
  {
    name: "Livonia, MI,",
    latitude: 42.36837,
    longitude: -83.352707,
  },
  {
    name: "Conroe, TX,",
    latitude: 30.311876,
    longitude: -95.456055,
  },
  {
    name: "Marion, IA,",
    latitude: 42.033279,
    longitude: -91.596893,
  },
  {
    name: "Helena, MT,",
    latitude: 46.595806,
    longitude: -112.027031,
  },
  {
    name: "Saint Paul, MN,",
    latitude: 44.953705,
    longitude: -93.089958,
  },
  {
    name: "Irving, TX,",
    latitude: 32.819595,
    longitude: -96.945419,
  },
  {
    name: "Pomona, CA,",
    latitude: 34.055103,
    longitude: -117.749992,
  },
  {
    name: "Avondale, AZ,",
    latitude: 33.435596,
    longitude: -112.349602,
  },
  {
    name: "Portsmouth, VA,",
    latitude: 36.835426,
    longitude: -76.298271,
  },
  {
    name: "West Lafayette, IN,",
    latitude: 40.425869,
    longitude: -86.908066,
  },
  {
    name: "Newport Beach, CA,",
    latitude: 33.628342,
    longitude: -117.927933,
  },
  {
    name: "Ventura, CA,",
    latitude: 34.274647,
    longitude: -119.229034,
  },
  {
    name: "Meridian, MS,",
    latitude: 32.364311,
    longitude: -88.703659,
  },
  {
    name: "Springdale, AR,",
    latitude: 36.186745,
    longitude: -94.128815,
  },
  {
    name: "Palo Alto, CA,",
    latitude: 37.468319,
    longitude: -122.143936,
  },
  {
    name: "Spokane, WA,",
    latitude: 47.658779,
    longitude: -117.426048,
  },
  {
    name: "Moreno Valley, CA,",
    latitude: 33.942467,
    longitude: -117.229675,
  },
  {
    name: "Gilbert, AZ,",
    latitude: 33.360355,
    longitude: -111.801682,
  },
  {
    name: "Lawton, OK,",
    latitude: 34.603565,
    longitude: -98.395927,
  },
  {
    name: "Meriden, CT,",
    latitude: 41.546616,
    longitude: -72.78923,
  },
  {
    name: "Annapolis, MD,",
    latitude: 38.978443,
    longitude: -76.49218,
  },
  {
    name: "Rochester, NY,",
    latitude: 43.16103,
    longitude: -77.610924,
  },
  {
    name: "Nacogdoches, TX,",
    latitude: 31.603514,
    longitude: -94.655487,
  },
  {
    name: "Daphne, AL,",
    latitude: 30.603525,
    longitude: -87.903603,
  },
  {
    name: "Dorchester, Boston, MA,",
    latitude: 42.302708,
    longitude: -71.072105,
  },
  {
    name: "Oakton, VA,",
    latitude: 38.880943,
    longitude: -77.300819,
  },
  {
    name: "Myrtle Beach, SC,",
    latitude: 33.68906,
    longitude: -78.886696,
  },
  {
    name: "Huntington Park, CA,",
    latitude: 33.984932,
    longitude: -118.227821,
  },
  {
    name: "Cedar Park, TX,",
    latitude: 30.505198,
    longitude: -97.82029,
  },
  {
    name: "St. Peters, MO,",
    latitude: 38.787472,
    longitude: -90.62989,
  },
  {
    name: "Grand Island, NE,",
    latitude: 40.929077,
    longitude: -98.368149,
  },
  {
    name: "Shawnee, KS,",
    latitude: 39.022846,
    longitude: -94.715187,
  },
  {
    name: "Glenwood Springs, CO,",
    latitude: 39.563354,
    longitude: -107.332993,
  },
  {
    name: "Hawthorne, CA,",
    latitude: 33.919434,
    longitude: -118.353996,
  },
  {
    name: "Buffalo Grove, IL,",
    latitude: 42.166283,
    longitude: -87.963135,
  },
  {
    name: "Temple, TX,",
    latitude: 31.105862,
    longitude: -97.353287,
  },
  {
    name: "Silver Spring, MD,",
    latitude: 38.994373,
    longitude: -77.029778,
  },
  {
    name: "Mira Mesa, San Diego, CA,",
    latitude: 32.918476,
    longitude: -117.138237,
  },
  {
    name: "Sunrise Manor, NV,",
    latitude: 36.211082,
    longitude: -115.073059,
  },
  {
    name: "Manchester, NH,",
    latitude: 43.008663,
    longitude: -71.454391,
  },
  {
    name: "Baton Rouge, LA,",
    latitude: 30.471165,
    longitude: -91.147385,
  },
  {
    name: "Bakersfield, CA,",
    latitude: 35.393528,
    longitude: -119.043732,
  },
  {
    name: "San Juan Capistrano, CA,",
    latitude: 33.501694,
    longitude: -117.662552,
  },
  {
    name: "San Marcos, TX,",
    latitude: 29.890661,
    longitude: -97.91153,
  },
  {
    name: "Grand Prairie, TX,",
    latitude: 32.738773,
    longitude: -97.003098,
  },
  {
    name: "Greeley, CO,",
    latitude: 40.391537,
    longitude: -104.681168,
  },
  {
    name: "Broomfield, CO,",
    latitude: 39.92054,
    longitude: -105.086647,
  },
  {
    name: "Boulder, CO,",
    latitude: 40.014984,
    longitude: -105.270546,
  },
  {
    name: "Ken Caryl, CO,",
    latitude: 39.575821,
    longitude: -105.112206,
  },
  {
    name: "Westminster, CO,",
    latitude: 39.842285,
    longitude: -105.043716,
  },
  {
    name: "Arvada, CO,",
    latitude: 39.802765,
    longitude: -105.087486,
  },
  {
    name: "Costa Mesa, CA,",
    latitude: 33.641132,
    longitude: -117.918671,
  },
  {
    name: "Santa Monica, Los Angeles,",
    latitude: 34.024212,
    longitude: -118.496475,
  },
  {
    name: "Santa Clara, CA,",
    latitude: 37.354107,
    longitude: -121.955238,
  },
  {
    name: "Anchorage, AK,",
    latitude: 61.217381,
    longitude: -149.863129,
  },
  {
    name: "Ridgecrest, CA,",
    latitude: 35.633862,
    longitude: -117.679367,
  },
  {
    name: "Idaho Falls, ID,",
    latitude: 43.49165,
    longitude: -112.033966,
  },
  {
    name: "Carbondale, IL,",
    latitude: 37.701206,
    longitude: -89.22821,
  },
  {
    name: "Cape Coral, FL,",
    latitude: 26.562855,
    longitude: -81.949532,
  },
  {
    name: "Belleville, IL,",
    latitude: 38.526684,
    longitude: -89.991074,
  },
  {
    name: "Midland, MI,",
    latitude: 43.618183,
    longitude: -84.234238,
  },
  {
    name: "McKinney, TX,",
    latitude: 33.214561,
    longitude: -96.614456,
  },
  {
    name: "Lawndale, CA,",
    latitude: 33.888088,
    longitude: -118.353477,
  },
  {
    name: "Bethesda, MD,",
    latitude: 38.984653,
    longitude: -77.094711,
  },
  {
    name: "Westlake, OH,",
    latitude: 41.46331,
    longitude: -81.915436,
  },
  {
    name: "Loveland, CO,",
    latitude: 40.398857,
    longitude: -105.052643,
  },
  {
    name: "Galesburg, IL,",
    latitude: 40.953976,
    longitude: -90.362549,
  },
  {
    name: "Jefferson City, MO,",
    latitude: 38.579575,
    longitude: -92.174782,
  },
  {
    name: "Durham, NC,",
    latitude: 35.994034,
    longitude: -78.898621,
  },
  {
    name: "Ashland, OR,",
    latitude: 42.194576,
    longitude: -122.70948,
  },
  {
    name: "Florence, AL,",
    latitude: 34.799809,
    longitude: -87.677254,
  },
  {
    name: "Tacoma, WA,",
    latitude: 47.258728,
    longitude: -122.465973,
  },
  {
    name: "Daytona Beach, FL,",
    latitude: 29.218103,
    longitude: -81.031723,
  },
  {
    name: "Fond du Lac, WI,",
    latitude: 43.774071,
    longitude: -88.455734,
  },
  {
    name: "Beaumont, TX,",
    latitude: 30.080173,
    longitude: -94.126556,
  },
  {
    name: "Mansfield, OH,",
    latitude: 40.763901,
    longitude: -82.503891,
  },
  {
    name: "Frisco, TX,",
    latitude: 33.155373,
    longitude: -96.818733,
  },
  {
    name: "Cedar Rapids, IA,",
    latitude: 41.977879,
    longitude: -91.665627,
  },
  {
    name: "Salinas, CA,",
    latitude: 36.677738,
    longitude: -121.655502,
  },
  {
    name: "Kingman, AZ,",
    latitude: 35.189442,
    longitude: -114.053009,
  },
  {
    name: "San Clemente, CA,",
    latitude: 33.426971,
    longitude: -117.611992,
  },
  {
    name: "Billings, MT,",
    latitude: 45.787636,
    longitude: -108.489304,
  },
  {
    name: "Dunwoody, GA,",
    latitude: 33.946213,
    longitude: -84.334648,
  },
  {
    name: "Buffalo, NY,",
    latitude: 42.88023,
    longitude: -78.878738,
  },
  {
    name: "Pensacola, FL,",
    latitude: 30.433283,
    longitude: -87.240372,
  },
  {
    name: "Denver, CO,",
    latitude: 39.742043,
    longitude: -104.991531,
  },
  {
    name: "Edmond, OK,",
    latitude: 35.657295,
    longitude: -97.478256,
  },
  {
    name: "Walnut, CA,",
    latitude: 34.02029,
    longitude: -117.865341,
  },
  {
    name: "Stratford, CT,",
    latitude: 41.18454,
    longitude: -73.133163,
  },
  {
    name: "Compton, CA,",
    latitude: 33.895847,
    longitude: -118.22007,
  },
  {
    name: "Georgetown, TX,",
    latitude: 30.633263,
    longitude: -97.677986,
  },
  {
    name: "Cooper City, FL,",
    latitude: 26.05731,
    longitude: -80.271713,
  },
  {
    name: "Carmel, Indiana",
    latitude: 39.978371,
    longitude: -86.118042,
  },
  {
    name: "Pearland, TX,",
    latitude: 29.563902,
    longitude: -95.28511,
  },
  {
    name: "Lakeland, FL,",
    latitude: 28.039465,
    longitude: -81.949806,
  },
  {
    name: "Lafayette, IN,",
    latitude: 40.416702,
    longitude: -86.87529,
  },
  {
    name: "Palm Coast, FL,",
    latitude: 29.584452,
    longitude: -81.20787,
  },
  {
    name: "St. Louis, MO,",
    latitude: 38.627003,
    longitude: -90.199402,
  },
  {
    name: "Everett, WA,",
    latitude: 47.982567,
    longitude: -122.193375,
  },
  {
    name: "Cleveland, TN,",
    latitude: 35.159519,
    longitude: -84.87661,
  },
  {
    name: "Lake Forest, CA,",
    latitude: 33.650066,
    longitude: -117.6931,
  },
  {
    name: "Key West, FL,",
    latitude: 24.555059,
    longitude: -81.779984,
  },
  {
    name: "Olathe, KS,",
    latitude: 38.881397,
    longitude: -94.81913,
  },
  {
    name: "Carlsbad, TX,",
    latitude: 31.604727,
    longitude: -100.640228,
  },
  {
    name: "Roanoke, VA,",
    latitude: 37.270969,
    longitude: -79.941429,
  },
  {
    name: "Apache Junction, AZ,",
    latitude: 33.415051,
    longitude: -111.549576,
  },
  {
    name: "West Hartford, CT,",
    latitude: 41.762085,
    longitude: -72.742012,
  },
  {
    name: "Renton, WA,",
    latitude: 47.48288,
    longitude: -122.217064,
  },
  {
    name: "Rohnert Park, CA,",
    latitude: 38.339638,
    longitude: -122.701096,
  },
  {
    name: "Nashville, TN,",
    latitude: 36.174465,
    longitude: -86.76796,
  },
  {
    name: "Fort Lauderdale, FL,",
    latitude: 26.122438,
    longitude: -80.137314,
  },
  {
    name: "Pompano Beach, FL,",
    latitude: 26.247236,
    longitude: -80.106125,
  },
  {
    name: "Winston-Salem, NC,",
    latitude: 36.099861,
    longitude: -80.244217,
  },
  {
    name: "Sunnyvale, CA,",
    latitude: 37.368832,
    longitude: -122.036346,
  },
  {
    name: "Shoreline, WA,",
    latitude: 47.755653,
    longitude: -122.341515,
  },
  {
    name: "Eagan, MN,",
    latitude: 44.804131,
    longitude: -93.166885,
  },
  {
    name: "Monterey, CA,",
    latitude: 36.603954,
    longitude: -121.89846,
  },
  {
    name: "Orem, Utah",
    latitude: 40.296898,
    longitude: -111.694649,
  },

  {
    name: "Riverside, CA,",
    latitude: 33.95335,
    longitude: -117.396156,
  },
  {
    name: "Milwaukee, WI,",
    latitude: 43.038902,
    longitude: -87.906471,
  },
  {
    name: "Iowa City, IA,",
    latitude: 41.661129,
    longitude: -91.530167,
  },
  {
    name: "Mio, MI,",
    latitude: 44.652237,
    longitude: -84.12973,
  },
  {
    name: "Burlington, VT,",
    latitude: 44.475883,
    longitude: -73.212074,
  },
  {
    name: "Gardena, CA,",
    latitude: 33.893787,
    longitude: -118.307991,
  },
  {
    name: "Lincoln, NE,",
    latitude: 40.806862,
    longitude: -96.681679,
  },
  {
    name: "Charleston, SC,",
    latitude: 32.776566,
    longitude: -79.930923,
  },
  {
    name: "Fitchburg, WI,",
    latitude: 43.002316,
    longitude: -89.424095,
  },
  {
    name: "Bossier City, LA,",
    latitude: 32.515984,
    longitude: -93.732124,
  },
  {
    name: "Hyattsville, MD,",
    latitude: 38.955944,
    longitude: -76.945534,
  },
  {
    name: "Destin, FL,",
    latitude: 30.393534,
    longitude: -86.495781,
  },
  {
    name: "Pueblo, CO,",
    latitude: 38.276463,
    longitude: -104.604607,
  },
  {
    name: "Aiken, SC,",
    latitude: 33.566574,
    longitude: -81.719398,
  },
  {
    name: "Greensboro, NC,",
    latitude: 36.044659,
    longitude: -79.766235,
  },
  {
    name: "Enid, OK,",
    latitude: 36.395588,
    longitude: -97.878387,
  },
  {
    name: "Seattle, WA,",
    latitude: 47.608013,
    longitude: -122.335167,
  },
  {
    name: "Port St. Lucie, FL,",
    latitude: 27.29369,
    longitude: -80.353317,
  },
  {
    name: "Cleveland, OH,",
    latitude: 41.505493,
    longitude: -81.68129,
  },
  {
    name: "Hartford, CT,",
    latitude: 41.76371,
    longitude: -72.685097,
  },
  {
    name: "Grand Junction, CO,",
    latitude: 39.071445,
    longitude: -108.549728,
  },
  {
    name: "Ogdensburg, NY,",
    latitude: 44.694229,
    longitude: -75.486336,
  },
  {
    name: "Ruston, LA,",
    latitude: 32.523205,
    longitude: -92.637924,
  },
  {
    name: "Hialeah, FL,",
    latitude: 25.857595,
    longitude: -80.278107,
  },
  {
    name: "Tucson, AZ,",
    latitude: 32.25346,
    longitude: -110.911789,
  },
  {
    name: "Poughkeepsie, NY,",
    latitude: 41.70829,
    longitude: -73.923912,
  },
  {
    name: "Southaven, MS,",
    latitude: 34.988983,
    longitude: -90.012589,
  },
  {
    name: "Santa Ana, CA,",
    latitude: 33.745571,
    longitude: -117.867836,
  },
  {
    name: "Mesa, AZ,",
    latitude: 33.424564,
    longitude: -111.833267,
  },
  {
    name: "Bountiful, UT,",
    latitude: 40.889389,
    longitude: -111.880768,
  },
  {
    name: "Wichita Falls, TX,",
    latitude: 33.930828,
    longitude: -98.484879,
  },
  {
    name: "Tulsa, OK,",
    latitude: 36.15398,
    longitude: -95.992775,
  },
  {
    name: "Texarkana, AR,",
    latitude: 33.441792,
    longitude: -94.037689,
  },
  {
    name: "Lakewood Township, NJ,",
    latitude: 40.087528,
    longitude: -74.208183,
  },
  {
    name: "Anaheim, CA,",
    latitude: 33.835293,
    longitude: -117.914505,
  },
  {
    name: "Mableton, GA,",
    latitude: 33.818718,
    longitude: -84.582436,
  },
  {
    name: "Milford, CT,",
    latitude: 41.230698,
    longitude: -73.064034,
  },
  {
    name: "Logan Square, Chicago, IL,",
    latitude: 41.923122,
    longitude: -87.70929,
  },
  {
    name: "Haverhill, MA,",
    latitude: 42.776199,
    longitude: -71.077278,
  },
  {
    name: "Brockton, MA,",
    latitude: 42.083431,
    longitude: -71.018379,
  },
  {
    name: "Duluth, MN,",
    latitude: 46.786671,
    longitude: -92.100487,
  },
  {
    name: "Wylie, TX,",
    latitude: 33.015572,
    longitude: -96.536346,
  },
  {
    name: "Oshkosh, WI,",
    latitude: 44.034294,
    longitude: -88.547745,
  },
  {
    name: "Scottsdale, AZ,",
    latitude: 33.501324,
    longitude: -111.925278,
  },
  {
    name: "Chandler, Arizona,",
    latitude: 33.307575,
    longitude: -111.84494,
  },
  {
    name: "Fort Lauderdale, FL,",
    latitude: 26.139412,
    longitude: -80.133591,
  },
  {
    name: "Schaumburg, IL,",
    latitude: 42.03336,
    longitude: -88.083405,
  },
  {
    name: "Shreveport, LA,",
    latitude: 32.523659,
    longitude: -93.763504,
  },
  {
    name: "Ozark, Arkansas,",
    latitude: 35.489746,
    longitude: -93.824272,
  },
  {
    name: "Brookings, SD,",
    latitude: 44.311356,
    longitude: -96.798386,
  },
  {
    name: "Kingsport, TN,",
    latitude: 36.548435,
    longitude: -82.561821,
  },
  {
    name: "Huntsville, AL,",
    latitude: 34.738228,
    longitude: -86.601791,
  },
  {
    name: "Jal, NM,",
    latitude: 32.113182,
    longitude: -103.193512,
  },
  {
    name: "Vero Beach, FL,",
    latitude: 27.638643,
    longitude: -80.39727,
  },
  {
    name: "Glendale, AZ,",
    latitude: 33.548264,
    longitude: -112.191696,
  },
  {
    name: "Carlsbad, CA,",
    latitude: 33.158092,
    longitude: -117.350594,
  },
  {
    name: "Attleboro, MA,",
    latitude: 41.944546,
    longitude: -71.285606,
  },
  {
    name: "Santa Maria, CA,",
    latitude: 34.963623,
    longitude: -120.424576,
  },
  {
    name: "Columbus, IN,",
    latitude: 39.201439,
    longitude: -85.921379,
  },
  {
    name: "Woodbridge, VA,",
    latitude: 38.658707,
    longitude: -77.257919,
  },
  {
    name: "Union, NJ,",
    latitude: 40.702503,
    longitude: -74.261398,
  },
  {
    name: "Moore, OK,",
    latitude: 35.339508,
    longitude: -97.486702,
  },
  {
    name: "Bowling Green, OH,",
    latitude: 41.374775,
    longitude: -83.651321,
  },
  {
    name: "Watertown, NY,",
    latitude: 43.974785,
    longitude: -75.910759,
  },
  {
    name: "Pembroke, MA,",
    latitude: 42.071491,
    longitude: -70.809196,
  },
  {
    name: "Paso Robles, CA,",
    latitude: 35.640556,
    longitude: -120.680008,
  },
  {
    name: "El Paso, TX,",
    latitude: 31.772543,
    longitude: -106.460953,
  },
  {
    name: "Fresno, CA,",
    latitude: 36.746841,
    longitude: -119.772591,
  },
  {
    name: "Oxford, AL,",
    latitude: 33.614269,
    longitude: -85.834969,
  },
  {
    name: "South Gate, CA,",
    latitude: 33.956032,
    longitude: -118.211349,
  },
  {
    name: "Fort Worth, TX,",
    latitude: 32.768799,
    longitude: -97.309341,
  },
  {
    name: "Methuen, Massachusetts,",
    latitude: 42.7262,
    longitude: -71.190895,
  },
  {
    name: "Farmington, NM,",
    latitude: 36.733379,
    longitude: -108.213272,
  },
  {
    name: "Paducah, Kentucky,",
    latitude: 37.086678,
    longitude: -88.60405,
  },
  {
    name: "San Pedro, Los Angeles, CA,",
    latitude: 33.736061,
    longitude: -118.292244,
  },
  {
    name: "Albuquerque, NM,",
    latitude: 35.106766,
    longitude: -106.629181,
  },
  {
    name: "Laurel, MD,",
    latitude: 39.109818,
    longitude: -76.840439,
  },
  {
    name: "Elizabeth, NJ,",
    latitude: 40.666058,
    longitude: -74.200974,
  },
  {
    name: "Sammamish, WA,",
    latitude: 47.618198,
    longitude: -122.054672,
  },
  {
    name: "Alexandria, VA,",
    latitude: 38.82045,
    longitude: -77.050552,
  },
  {
    name: "Chino Hills, California",
    latitude: 33.989819,
    longitude: -117.732582,
  },

  {
    name: "Orlando, FL,",
    latitude: 28.538336,
    longitude: -81.379234,
  },
  {
    name: "Fredericksburg, VA,",
    latitude: 38.309875,
    longitude: -77.466316,
  },
  {
    name: "Fort Wayne, IN,",
    latitude: 41.093842,
    longitude: -85.139236,
  },
  {
    name: "Wichita, KS,",
    latitude: 37.697948,
    longitude: -97.314835,
  },
  {
    name: "Peoria, Il,",
    latitude: 40.703545,
    longitude: -89.579086,
  },
  {
    name: "Lancaster, PA,",
    latitude: 40.044437,
    longitude: -76.306229,
  },
  {
    name: "Chester, PA,",
    latitude: 39.853886,
    longitude: -75.358658,
  },
  {
    name: "Baltimore, MD,",
    latitude: 39.299236,
    longitude: -76.609383,
  },
  {
    name: "Manassas Park, VA,",
    latitude: 38.784225,
    longitude: -77.45945,
  },
  {
    name: "Chicago, IL,",
    latitude: 41.881832,
    longitude: -87.623177,
  },
  {
    name: "Bemidji, MN,",
    latitude: 47.481018,
    longitude: -94.888229,
  },
  {
    name: "New York City, NY,",
    latitude: 40.73061,
    longitude: -73.935242,
  },
  {
    name: "Clinton, MD,",
    latitude: 38.768005,
    longitude: -76.897087,
  },
  {
    name: "Savannah, GA,",
    latitude: 32.076176,
    longitude: -81.088371,
  },
  {
    name: "La Puente, CA,",
    latitude: 34.020012,
    longitude: -117.949509,
  },
  {
    name: "Minnetonka, MN,",
    latitude: 44.921185,
    longitude: -93.46875,
  },
  {
    name: "Cedar City, UT,",
    latitude: 37.680492,
    longitude: -113.061722,
  },
  {
    name: "Allentown, Pennsylvania,",
    latitude: 40.610306,
    longitude: -75.477104,
  },
  {
    name: "Elizabeth City, NC,",
    latitude: 36.302952,
    longitude: -76.245804,
  },
  {
    name: "Pocahontas, Arkansas,",
    latitude: 36.264206,
    longitude: -90.96199,
  },
  {
    name: "Chicopee, Massachusetts,",
    latitude: 42.155258,
    longitude: -72.60006,
  },
  {
    name: "Broken Arrow, OK,",
    latitude: 36.056561,
    longitude: -95.783516,
  },
  {
    name: "Los Angeles, CA,",
    latitude: 34.052235,
    longitude: -118.243683,
  },
  {
    name: "Sacramento, CA,",
    latitude: 38.590576,
    longitude: -121.489906,
  },
  {
    name: "Bellingham, WA,",
    latitude: 48.769768,
    longitude: -122.485886,
  },
  {
    name: "Fullerton, CA,",
    latitude: 33.876118,
    longitude: -117.92141,
  },
  {
    name: "Honolulu, HI,",
    latitude: 21.315603,
    longitude: -157.858093,
  },
  {
    name: "Sarasota, FL,",
    latitude: 27.341274,
    longitude: -82.528267,
  },
  {
    name: "Downey, CA,",
    latitude: 33.945068,
    longitude: -118.12809,
  },
  {
    name: "Clearwater, FL,",
    latitude: 27.972572,
    longitude: -82.796745,
  },
  {
    name: "Bowie, MD",
    latitude: 39.013313,
    longitude: -76.776924,
  },

  {
    name: "Pompano Beach, FL,",
    latitude: 26.24354,
    longitude: -80.122948,
  },
  {
    name: "Kalamazoo, MI,",
    latitude: 42.299152,
    longitude: -85.591736,
  },
  {
    name: "Federal Way, WA,",
    latitude: 47.322323,
    longitude: -122.312622,
  },
  {
    name: "Enid, OK,",
    latitude: 36.395588,
    longitude: -97.878387,
  },
  {
    name: "Palm Bay, FL,",
    latitude: 28.040169,
    longitude: -80.59433,
  },
  {
    name: "Las Vegas, NV,",
    latitude: 36.114647,
    longitude: -115.172813,
  },
  {
    name: "Saratoga, CA,",
    latitude: 37.266949,
    longitude: -122.025146,
  },
  {
    name: "Redlands, CA,",
    latitude: 34.055569,
    longitude: -117.182541,
  },
  {
    name: "Brick, NJ,",
    latitude: 40.060272,
    longitude: -74.139343,
  },
  {
    name: "Henderson, KY,",
    latitude: 37.840427,
    longitude: -87.578888,
  },
  {
    name: "Ontario, CA,",
    latitude: 34.068871,
    longitude: -117.651215,
  },
  {
    name: "Fresno, TX,",
    latitude: 29.540457,
    longitude: -95.448189,
  },
  {
    name: "Mount Juliet, TN,",
    latitude: 36.200928,
    longitude: -86.519737,
  },
  {
    name: "Independence, Missouri",
    latitude: 39.091118,
    longitude: -94.415504,
  },

  {
    name: "Lebanon, IN,",
    latitude: 40.052059,
    longitude: -86.470642,
  },
  {
    name: "Hyattsville, MD,",
    latitude: 38.956341,
    longitude: -76.941719,
  },
  {
    name: "Salem, OR,",
    latitude: 44.944099,
    longitude: -123.040283,
  },
  {
    name: "Rio Rancho, New Mexico,",
    latitude: 35.226997,
    longitude: -106.675461,
  },
  {
    name: "Calhoun, GA,",
    latitude: 34.50169,
    longitude: -84.939697,
  },
  {
    name: "Charlotte, NC,",
    latitude: 35.227085,
    longitude: -80.843124,
  },
  {
    name: "Needham, MA,",
    latitude: 42.28093,
    longitude: -71.237755,
  },
  {
    name: "Charleston, South Carolina,",
    latitude: 32.784618,
    longitude: -79.940918,
  },
  {
    name: "Stockton, CA,",
    latitude: 37.961632,
    longitude: -121.275604,
  },
  {
    name: "Beaumont, TX,",
    latitude: 30.081987,
    longitude: -94.118637,
  },
  {
    name: "Oxnard, CA,",
    latitude: 34.196411,
    longitude: -119.170898,
  },
  {
    name: "Leawood, KS,",
    latitude: 38.966675,
    longitude: -94.616898,
  },
  {
    name: "Perrysburg, OH,",
    latitude: 41.568916,
    longitude: -83.640564,
  },
  {
    name: "Santa Fe, NM,",
    latitude: 35.691544,
    longitude: -105.944183,
  },
  {
    name: "Post Falls, ID,",
    latitude: 47.712257,
    longitude: -116.948364,
  },
  {
    name: "Lubbock, TX,",
    latitude: 33.576698,
    longitude: -101.855072,
  },
  {
    name: "Topeka, KS,",
    latitude: 39.056198,
    longitude: -95.695312,
  },
  {
    name: "Santa Rosa, CA,",
    latitude: 38.44466,
    longitude: -122.720306,
  },
  {
    name: "St. Cloud, FL,",
    latitude: 28.248901,
    longitude: -81.281181,
  },
  {
    name: "Menifee, CA,",
    latitude: 33.680984,
    longitude: -117.1707,
  },
  {
    name: "Longview, TX,",
    latitude: 32.514885,
    longitude: -94.737236,
  },
  {
    name: "Sacramento, CA,",
    latitude: 38.575764,
    longitude: -121.478851,
  },
  {
    name: "Reno, NV,",
    latitude: 39.530895,
    longitude: -119.814972,
  },
  {
    name: "Simi Valley, CA,",
    latitude: 34.269447,
    longitude: -118.781479,
  },
  {
    name: "Cashmere, WA,",
    latitude: 47.522346,
    longitude: -120.469803,
  },
  {
    name: "Colorado Springs, CO,",
    latitude: 38.846127,
    longitude: -104.800644,
  },
  {
    name: "Hermiston, OR,",
    latitude: 45.845543,
    longitude: -119.292641,
  },
  {
    name: "Scranton, PA,",
    latitude: 41.411835,
    longitude: -75.665245,
  },
  {
    name: "Laredo, TX,",
    latitude: 27.506748,
    longitude: -99.502914,
  },
  {
    name: "Brainerd, MN,",
    latitude: 46.355934,
    longitude: -94.201408,
  },
  {
    name: "Colton, CA,",
    latitude: 34.075127,
    longitude: -117.30909,
  },
  {
    name: "Bayonne, NJ,",
    latitude: 40.668713,
    longitude: -74.114311,
  },
  {
    name: "New City, NY,",
    latitude: 41.147594,
    longitude: -73.989304,
  },
  {
    name: "Fort Myers, Florida,",
    latitude: 26.640629,
    longitude: -81.872307,
  },
  {
    name: "Richfield, MN,",
    latitude: 44.883244,
    longitude: -93.28624,
  },
  {
    name: "Allentown, PA,",
    latitude: 40.613953,
    longitude: -75.477791,
  },
  {
    name: "Seminole, TX,",
    latitude: 32.719276,
    longitude: -102.644661,
  },
  {
    name: "Georgetown, SC,",
    latitude: 33.373474,
    longitude: -79.288521,
  },
  {
    name: "Greenwood, IN,",
    latitude: 39.614944,
    longitude: -86.105606,
  },
  {
    name: "Chesapeake, VA,",
    latitude: 36.779591,
    longitude: -76.288376,
  },
  {
    name: "Spanish Fork, UT,",
    latitude: 40.114956,
    longitude: -111.654922,
  },
  {
    name: "Corpus Christi, TX,",
    latitude: 27.800583,
    longitude: -97.396378,
  },
  {
    name: "Wooster, OH,",
    latitude: 40.818714,
    longitude: -81.946564,
  },
  {
    name: "Pittsburgh, PA,",
    latitude: 40.440624,
    longitude: -79.995888,
  },
  {
    name: "Newport, TN,",
    latitude: 35.964279,
    longitude: -83.182152,
  },
  {
    name: "Baytown, TX,",
    latitude: 29.733303,
    longitude: -94.978134,
  },
  {
    name: "Lambertville, NJ,",
    latitude: 40.36594,
    longitude: -74.942947,
  },
  {
    name: "Vallejo, CA,",
    latitude: 38.104088,
    longitude: -122.256638,
  },
  {
    name: "Oklahoma City, OK,",
    latitude: 35.481918,
    longitude: -97.508469,
  },
  {
    name: "Highland Park, IL,",
    latitude: 42.190166,
    longitude: -87.786697,
  },
  {
    name: "Mentor, OH,",
    latitude: 41.659576,
    longitude: -81.372299,
  },
  {
    name: "St Joseph, MO,",
    latitude: 39.766853,
    longitude: -94.834152,
  },
  {
    name: "McGehee, AR,",
    latitude: 33.630165,
    longitude: -91.39666,
  },
  {
    name: "Rolla, MO,",
    latitude: 37.951424,
    longitude: -91.768959,
  },
  {
    name: "Mill Valley, CA,",
    latitude: 37.905182,
    longitude: -122.544006,
  },
  {
    name: "Elizabethton, TN,",
    latitude: 36.352879,
    longitude: -82.207649,
  },
  {
    name: "Cartersville, GA,",
    latitude: 34.16608,
    longitude: -84.800613,
  },
  {
    name: "Denton, TX,",
    latitude: 33.21484,
    longitude: -97.133064,
  },
  {
    name: "Salt Lake City, UT,",
    latitude: 40.758701,
    longitude: -111.876183,
  },
  {
    name: "Suffolk, VA,",
    latitude: 36.73283,
    longitude: -76.579002,
  },
  {
    name: "Knoxville, TN,",
    latitude: 35.964668,
    longitude: -83.926453,
  },
  {
    name: "Pryor Creek, OK,",
    latitude: 36.30724,
    longitude: -95.317642,
  },
  {
    name: "Brandon, MS,",
    latitude: 32.269718,
    longitude: -89.992447,
  },
  {
    name: "York, PA,",
    latitude: 39.962303,
    longitude: -76.727692,
  },
  {
    name: "Saint Paul, MN,",
    latitude: 44.954445,
    longitude: -93.091301,
  },
  {
    name: "Toledo, OH,",
    latitude: 41.651031,
    longitude: -83.541939,
  },
  {
    name: "Hobart, IN,",
    latitude: 41.52914,
    longitude: -87.250328,
  },
  {
    name: "Lawrenceville, GA,",
    latitude: 33.957245,
    longitude: -83.988441,
  },
  {
    name: "Mukilteo, WA,",
    latitude: 47.947079,
    longitude: -122.303864,
  },
  {
    name: "Lindsay, OK,",
    latitude: 34.836693,
    longitude: -97.598434,
  },
  {
    name: "Maysville, KY,",
    latitude: 38.641186,
    longitude: -83.744362,
  },
  {
    name: "Ann Arbor, MI,",
    latitude: 42.279594,
    longitude: -83.732124,
  },
  {
    name: "Anderson, IN,",
    latitude: 40.109589,
    longitude: -85.676964,
  },
  {
    name: "San Francisco, CA,",
    latitude: 37.773972,
    longitude: -122.431297,
  },
  {
    name: "Oakdale, MN,",
    latitude: 44.963219,
    longitude: -92.964417,
  },
  {
    name: "Boise, ID,",
    latitude: 43.618881,
    longitude: -116.215019,
  },
  {
    name: "Hollywood, FL,",
    latitude: 26.01128,
    longitude: -80.142967,
  },
  {
    name: "Pekin, IL,",
    latitude: 40.568459,
    longitude: -89.643028,
  },
  {
    name: "Albany, NY,",
    latitude: 42.65258,
    longitude: -73.756233,
  },
  {
    name: "San Antonio, TX,",
    latitude: 29.424349,
    longitude: -98.491142,
  },
  {
    name: "Uvalde, TX,",
    latitude: 29.209684,
    longitude: -99.786171,
  },
  {
    name: "Detroit, MI,",
    latitude: 42.331429,
    longitude: -83.045753,
  },
  {
    name: "Carthage, MS,",
    latitude: 32.732635,
    longitude: -89.536179,
  },
  {
    name: "Plankinton, SD,",
    latitude: 43.71479,
    longitude: -98.484451,
  },
  {
    name: "Alliance, OH,",
    latitude: 40.915337,
    longitude: -81.105934,
  },
  {
    name: "Concord, NC,",
    latitude: 35.408752,
    longitude: -80.579514,
  },
  {
    name: "Trenton, NJ,",
    latitude: 40.217052,
    longitude: -74.742935,
  },
  {
    name: "Columbus, MS,",
    latitude: 33.495674,
    longitude: -88.427261,
  },
  {
    name: "Lakewood, WA,",
    latitude: 47.171764,
    longitude: -122.518456,
  },
  {
    name: "Suwanee, GA,",
    latitude: 34.051491,
    longitude: -84.071297,
  },
  {
    name: "Yuba City, CA,",
    latitude: 39.136986,
    longitude: -121.607841,
  },
  {
    name: "Massillon, OH,",
    latitude: 40.787819,
    longitude: -81.519585,
  },
  {
    name: "Decorah, IA,",
    latitude: 43.303307,
    longitude: -91.785706,
  },
  {
    name: "Southfield, MI,",
    latitude: 42.475136,
    longitude: -83.221275,
  },
  {
    name: "San Francisco, CA,",
    latitude: 37.733795,
    longitude: -122.446747,
  },
  {
    name: "Richfield, UT,",
    latitude: 38.769287,
    longitude: -112.088409,
  },
  {
    name: "Anderson, TX,",
    latitude: 30.4874,
    longitude: -95.987228,
  },
  {
    name: "Island Park, ID,",
    latitude: 44.429733,
    longitude: -111.440849,
  },
  {
    name: "Durango, CO,",
    latitude: 37.2705,
    longitude: -107.8787,
  },
];
