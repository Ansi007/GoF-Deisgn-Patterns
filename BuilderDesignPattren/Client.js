"use strict";
exports.__esModule = true;
/*
The Client must associate one of the builder objects with the director. Usually, it’s done just once, via parameters of the director’s constructor. Then the director uses that builder object for all further construction.
*/
var NovelDirector_1 = require("./Directors/NovelDirector");
var DewaanDirector_1 = require("./Directors/DewaanDirector");
var NovelBuilder_1 = require("./ConcreteBuilders/NovelBuilder");
var DewaanBuilder_1 = require("./ConcreteBuilders/DewaanBuilder");
var novelDirector = new NovelDirector_1.NovelDirector();
var dewaanDirector = new DewaanDirector_1.DewaanDirector();
function BuildNovels(novelDirector) {
    var Builder = new NovelBuilder_1.NovelBuilder();
    console.log("Building a traditional Novel Booklet!\n");
    novelDirector.setBuilder(Builder);
    novelDirector.TraditionalNovelBooklet();
    Builder.getNovel().DisplayNovel();
    console.log("\t\t****************");
    console.log("Building a Modren Novel Booklet!\n");
    novelDirector.ModrenNovelBooklet();
    Builder.getNovel().DisplayNovel();
}
function BuildDewaan(dewaanDirector) {
    var Builder = new DewaanBuilder_1.DewaanBuilder();
    dewaanDirector.setBuilder(Builder);
    console.log("Building a traditional Dewaan Booklet!\n");
    dewaanDirector.TraditionalDewaanBooklet();
    Builder.getDewaan().DisplayDewaan();
    console.log("\t\t****************");
    console.log("Building a Modren Dewaan Booklet!\n");
    dewaanDirector.ModrenDewaanBooklet();
    Builder.getDewaan().DisplayDewaan();
}
BuildNovels(novelDirector);
BuildDewaan(dewaanDirector);
