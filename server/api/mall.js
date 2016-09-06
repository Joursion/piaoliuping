"use strict"

var Mall = require('../lib/mall')

//Mall 数据缓存
var MallMgr = {}

function *getGoods() {
    if(!MallMgr) {
        MallMgr = yield Mall.getMall()
    }
    let data = yield Mall.getMall()
    console.log("mall data...", data);
    console.log("MallMgr", MallMgr);
    this.body = {
        status: "ok",
        goods: data
    }
}

exports.getGoods = getGoods

function * exchangeGoods(params) {
    
}

// {
//     name: "iPad Air 2",
//     imgUrl: "http://img12.360buyimg.com/n7/jfs/t2101/229/821600048/131700/737964b5/562e0716N4e7c4b39.jpg",
//     description: "平板电脑 9.7英寸（64G WLAN版/A8X 芯片/Retina显示屏/Touch ID技术 MH182CH）金色",
//     rest: 3,
//     price: 20000
// }

// {
//     name: "微软（Microsoft）Surface Pro 4",
//     imgUrl: "http://img11.360buyimg.com/n7/jfs/t2257/177/1123017414/143066/52c5344a/5641e6e7Nc88a5347.jpg",
//     rest: 1,
//     description: "平板电脑 12.3英寸（Intel i5 4G内存 128G存储 触控笔 预装Win10）",
//     price: 500000
// }