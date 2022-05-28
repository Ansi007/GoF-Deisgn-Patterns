/*
The Client must associate one of the builder objects with the director. Usually, it’s done just once, via parameters of the director’s constructor. Then the director uses that builder object for all further construction.
*/
import { NovelDirector } from "./Directors/NovelDirector"
import { DewaanDirector } from "./Directors/DewaanDirector";
import { NovelBuilder } from "./ConcreteBuilders/NovelBuilder"
import { DewaanBuilder } from "./ConcreteBuilders/DewaanBuilder";

const novelDirector = new NovelDirector();
const dewaanDirector = new DewaanDirector();

function BuildNovels(novelDirector:NovelDirector)
{
   const Builder = new NovelBuilder();
   console.log("Building a traditional Novel Booklet!\n");
   novelDirector.TraditionalNovelBooklet();
   Builder.getNovel().DisplayNovel();
   console.log("\t\t****************");
   console.log("Building a Modren Novel Booklet!\n");
   novelDirector.ModrenNovelBooklet();
   Builder.getNovel().DisplayNovel();
}

function BuildDewaan(dewaanDirector:DewaanDirector)
{
   const Builder = new DewaanBuilder();
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
