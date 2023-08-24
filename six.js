 /*You are working for an e-commerce company,and you are given an object constaining product-related information.
 your task is to print the product-related information details as shown in the image below. */



const productDetails={
    name:"Apple 2020 MacBook air Laptop",
    price:82000,
    color:"Grey",
    hardDisk:"256GB",
};

console.log("Below are the product details.");
for(let keys of Object.keys(productDetails)){
    console.log(`${keys}:${productDetails[keys]}`);
}