/* @author Glen (v0.01) */

// var file is unique for each Chapter

// variables unique for each Chapter - edit per Chapter
// set var to first page
var wrapperCurrentPage = "CH02A_02";
console.log("setting initial page:" + wrapperCurrentPage);

// array fo all the comps in the page - needs to match declared html divs
var stages = ["#StageA", "#StageB", "#StageC", "#StageD", "#StageE", "#StageF", "#StageG", "#StageH", "#StageI", "#StageJ", "#StageK",];
console.log(stages);
              
// setting next chapter link variable 
var nextChapter = "../chapter03/chapter03.html";              

              
// variables work for every Chapter - no need to edit              
//creating object to hold Adobe Edge Comps
var loadedComps = {};

// wrapper array is filled on intialization of Edge Comps - code works for all chapters
var wrappers = [];
console.log("declaring wrappers as empty array:" + wrappers);

var sceneSeq = 0;