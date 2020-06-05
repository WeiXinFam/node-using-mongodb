import {addnewProduct, getProducts, getProductWithID, updateProduct, deleteProduct} from '../controllers/controllers';

const routes = app =>{
    app.route('/products')
        //Post EndPoint
        .post(addnewProduct)

        //Get Endpoint
        .get(getProducts);

    // New route
    app.route('/products/:ProductID')
        // Get Endpoint
        .get(getProductWithID)

        //Put Endpoint
        .put(updateProduct);

    //New route
    app.route('/products/:Product')
        //Delete Endpoint
        .delete(deleteProduct);


}

export default routes;