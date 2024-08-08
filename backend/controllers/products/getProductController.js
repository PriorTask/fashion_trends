// INITIAL CODE - 6th jul
// const mongoose = require("mongoose");
// const productCollection = require('../../models/productschema');
// const getProductController = async(req,res) =>{
//     try{
//         const product = await productCollection.find()
//         res.status(200).send(product);
//         console.log("Data fetched successfully.")
//     }
//     catch(error){
//         res.status(504).send({
//             message: "Error fetching products",
//         });
//         console.log(`Error occured:${error}`);
//     }
// };
// module.exports = getProductController;

// CODE MODIFIED - 7th jul
const mongoose = require("mongoose");
const ProductCollection = require("../../models/ProductSchema");
const getproductcontroller = async (req, res) => {
    try {
        const { id, category, name, sub_category } = req.params
        console.log(req.params);
        let product
        if (category) {
            const searchcategory = category.toLowerCase()
            product = await ProductCollection.find({ category: { $regex: new RegExp(searchcategory, "i") } })

        }
        else if (name) {
            const searchname = name.toLowerCase()
            product = await ProductCollection.find({ name: { $regex: new RegExp(searchname, "i") } })
        }
        else if (req.path.includes("/random")) {
            product = await ProductCollection.aggregate([
                {
                    $example: {
                        size: 9,
                    },
                },
            ])
        }
        else if (req.path.includes("/top-rated")) {
            product = await ProductCollection.find().sort({rating:-1}).limit(9);//-1 for desc order
        }
        else if (req.path.includes("/low-to-high")) {
            product = await ProductCollection.find().sort({new_price: 1}).limit(9);
        }
        else if (req.path.includes("/high-to-low")) {
            product = await ProductCollection.find().sort({new_price:-1}).limit(9);
        }
        else if(sub_category) {
            const searchsub_category = sub_category.toLowerCase()
            product = await ProductCollection.find({ sub_category: { $regex: new RegExp(searchsub_category, "i") } })
        }
        else if(id){
            product = await ProductCollection.find({_id:id});
        }
        else {
            product = await ProductCollection.find()
            console.log("Product Fetched Successfully");

        }
        if (!product || product.length === 0)
            return res.status(404).send({ message: "Product not found" })
            res.status(200).send(product);
    } catch (error) {
        res.status(504).send({
            message: "Error fetching products",
        });
        console.log(`Error Occured : ${error}`)
    }
};
module.exports = getproductcontroller;
