import {addnewProduct} from './controllers.js';

export const routes = app =>{
    app.route('/products').post(addnewProduct);
}