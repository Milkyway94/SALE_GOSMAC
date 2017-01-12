var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');

var userapi = function (router, axios) {
    var API = "http://10.0.170.82:85/api"
    router.post('/authenticate', function (req, res) {
        var user = req.query;
        axios.get(`${API}/login?username=${user.username}&password=${user.password}`)
            .then(function (resp) {
                if (!resp.data.Errorcode === "LOGIN_FAIL") {
                    console.log(resp.data);
                     res.json(resp.data);
                 }
                 else {
                     // Gửi thông tin profile thông qua token
                    var token = jwt.sign(resp.data, 'secret', { algorithm: 'RS256' });
                    console.log(token);
                    res.json({ token: token, message: "Đăng nhập thành công!" });
                }
            })
            .catch(function (err) {
                console.log(err.message);
                res.status(500).send(err)
            });
    });
}
module.exports = userapi;