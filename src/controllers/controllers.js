import  mongoose  from 'mongoose';
import {newSchema} from './model.js';

const Product = mongoose.model('Product',newSchema);

export const addNewProduct = (req,res) => {
    const newProduct = new Product(req.body);
    newProduct.save((err,Product)=>{
        if (err) throw "Error!";
        else res.json(Product);
    })
}
