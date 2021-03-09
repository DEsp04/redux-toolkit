import { configureStore } from "@reduxjs/toolkit";


export default configureStore({
  //we will put in all different reducer inside this reducer key
  reducer: {}
});


//For bigger app we will have stores for seperate things or function. Ex: we may have a store for users or another store for the price of items