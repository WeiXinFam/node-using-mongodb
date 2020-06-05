import {addnewProduct, getProducts, getProductWithID} from '../controllers/controllers';

const routes = app =>{
    app.route('/products')
        //Post EndPoint
        .post(addnewProduct)

        //Get Endpoint
        .get(getProducts);

    // New route
    app.route('/products/:ProductID')
        // Get Endpoint
        .get(getProductWithID);

}

export default routes;