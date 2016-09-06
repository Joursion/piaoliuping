"use strict"
//import { Bottle, User } from '../lib'
var Bottle = require('../lib/bottle')
var User = require('../lib/user')
var config = require('./config')
var mongoClient = require('mongodb').MongoClient;
var co = require('co');

// 每日用户 可丢,拾取漂流瓶次数
var userInfo = {}
var MAXdailyGetBottleTimes = config.MAXdailyGetBottleTimes
var MAXdailyThrowBottleTimes = config.MAXdailyThrowBottleTimes

// 请求获得一个漂流瓶 0 代表失败,1 代表成功
function * getBottle() {
    let token = this.request.body
    if(! userInfo[token]) {
        let user = yield User.getUserByToken(token)
        userInfo[token].dailyGetBottleTimes = user.dailyGetBottleTimes
        userInfo[token].dailyThrowBottleTimes = user.dailyThrowBottleTimes
    }
    
    if(userInfo[token].dailyGetBottleTimes ++ > MAXdailyGetBottleTimes) {
        this.body = {
            data: {
                status: "3",
                warning: "您今日探索漂流瓶的次数已经用完"
            }
        }
    }

    let radomNum = Math.floor(Math.random() * 10)
    if (radomNum < 4) {
        this.body =  {
            data: {
                status: "0",
                bottle: {content: config.status[radomNum]}
            }
        }
    } else {
     //   let bottle = yield Bottle.getBottle(user.type)
        let bottle = yield Bottle.getBottle(1) 
        if( bottle ) {
            this.body = {
                data: {
                    status: "1",
                    bottle : bottle
                }
            }
        } else {
            this.body = {
                data: {
                    status: "0",
                    bottle: {content: "大海空空的,要不你先扔一个吧"}
                }
            }
        }
    }
}

function * throwBottle() {
    let data = this.request.body


    if(userInfo[token].dailyThrowBottleTimes ++ > MAXdailyThrowBottleTimes) {
        this.body = {
            data: {
                status: "3",
                warning: "您今日丢漂流瓶的次数已经用完"
            }
        }
    }

    console.log("data", data)
    
    Bottle.addBottle(data)
    console.log();
    this.body = {
        data: {
            status : "ok"
        }
    }
}


function * gettt(req, res) {
   this.body = {
        data: {
            status: "1",
            des: "you got it"
        }
    }
}

exports.getBottle = getBottle
exports.throwBottle = throwBottle
exports.gettt = gettt


function *getSSS() {
    var url = [
        {
            name: "test",
            url: "mongodb://127.0.0.1:27017/test"
        },
        {
            name: "test2",
            url: "mongodb://127.0.0.1:27017/test2"
        },
        {
            name: "test3",
            url: "mongodb://127.0.0.1:27017/test3"
        },
    ];

    var resData = [];

/** callback   */
    var ress =   yield url.map(function (v, index) {
            mongoClient.connect(v.url, function (err, db) {
                let collection = db.collection('test');
                collection.findOne({test: "12"}, function(err, doc) {
                    if (err) {
                        console.log(err)
                    }
                    console.log(v.name, "data: ", doc);
                    resData.push(doc)
                })
                db.close()
            })
    });

    // var uuu = url.map(function (v, index) {
    //     mongoClient.connect(v.url, function(err,db){
    //         return db.collection('test').findOne({test: "12"});
    //     })
    // })
    
    // Promise.all(uuu).then(function (data) {
    //     console.log("promise data", data);
    // })


    yield this.body =  ress
    //    yield url.map(function (v, index) {
    //         mongoClient.connect(v.url, function (err, db) {
    //             let collection = db.collection('test');
    //             collection.findOne({test: "12"}, function(err, doc) {
    //                 if (err) {
    //                     console.log(err)
    //                 }
    //                 console.log(v.name, "data: ", doc);
    //                 resData.push(doc)
    //             })
    //             db.close()
    //         })
    // });
    
    // console.log("resData---",resData);

    // var res =  url.map(function (v) {
    //     mongoClient.connect(v.url, function (err, db) {
    //         console.log("connect to db1 ", v.name);
    //         db.collection('test').find({test: "12"}).toArray().then(data =>{
    //             resData.push(data)
    //             console.log(v.name,"data: ", data);
    //         })
    //         db.close()
    //     })
    //     return resData
    // })


}

exports.getSSS = getSSS