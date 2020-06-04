import {addnewProduct} from '../controllers/controllers';

const routes = app =>{
    app.route('/products')
        //Post EndPoint
        .post(addnewProduct);
}

export default routes;