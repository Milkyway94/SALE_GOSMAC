var sql = require('mssql');
var bodyParser = require("body-Parser");
var execquery = {
    SelectAllProduct: function (res, sqlstring) {
        var connection = new sql.Connection({
            user: 'sa',
            password: '12345aA@',
            server: '123.30.236.230',
            database: 'phuongbello_data'
        });
        connection.connect(function (err) {
            if (err) throw err;
            var request = new sql.Request(connection);
            request.query(sqlstring, function (err, recordset) {
                if (err) console.log(err);
                res.send(recordset);
                connection.close();
            });
        });
    },
    InsertProduct : function(){
        
    }
}
module.exports = execquery;