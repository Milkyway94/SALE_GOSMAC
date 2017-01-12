const express = require('express');
module.exports = function (router, axios) {
    const API = 'http://10.0.170.82:85/EmployeeService.asmx';
    router.get('/employee', (req, res) => {
        axios.post(`${API}/GetAllEmp`)
            .then(function (response) {
                res.status(200).json(response.data);
            })
            .catch(function (error) {
                console.log(error);
                res.status(500).send(error)
            });
    });
    router.post('/employeeFromGroup', (req, res) => {
        console.log(req.body);
            axios.post(`${API}/GetEmpFromGroup`, req.body)
                .then(function (response) {
                    var dt=response.data.replace('{"d":null}','');
                    console.log(dt);
                    res.status(200).json(dt);
                })
                .catch(function (error) {
                    console.log(error.response.data.Message);
                    res.status(500).send(error)
                });
    });
    //post
    router.post('/employee', (req, res) => {
        axios.post(`${API}/AddEmp`, req.body)
            .then(function (response) {
                console.log(response.data);
                res.status(200).json(response.data);
            })
            .catch(function (error) {
                console.log(error);
                res.status(500).send(error)
            });
        //post
    });
    router.put('/product', (req, res) => {
        var product = req.query;
        axios.get(`${API}/storageProducts`)
            .then(function (response) {
                res.status(200).json(response.Data);
            })
            .catch(function (error) {
                res.status(500).send(error)
            });
        //post
    });
}
