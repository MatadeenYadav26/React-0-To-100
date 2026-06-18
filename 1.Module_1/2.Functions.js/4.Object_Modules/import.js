// // for import use import key-word: to import note : exporter must be a module or else error ayega!

// // import {greet,PI} from './export.js';
// // import {py,swagat} from './export.js';
// import {py as poi,swagat as welcome} from './export.js';


// // greet();
// // swagat();
// welcome();
// // console.log(PI);
// // console.log(py);
// console.log(poi);

// // to import by default :

// import addfn from "./export.js"
// console.log(addfn(4,5));


// import in bundle of default fncn:

import bundle from "./export.js"

bundle.greet();

console.log(bundle.PI);

console.log(bundle.add(3,3));



