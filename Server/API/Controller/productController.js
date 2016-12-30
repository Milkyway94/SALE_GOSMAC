var execute = require('../../ConnectionDB/execquery');

var productApi={
    getProducts: function(res){
        execute.SelectAllProduct(res, "Select * from StorageProduct");
    },
    addProduct: function(req, res){
        var param=req.body;
        var sql="Insert into StorageProduct(P_ID, P_Name, P_Code, P_BuyPrice) values (NEWID(),'"+param.Name+"', '"+param.Code+", "+param.BuyPrice+")";
         execute.SelectAllProduct(res, sql);
    }
}

module.exports = productApi;
