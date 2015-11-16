/* @author Glen (v0.01) */

// set var to first page - edit per chapter
var wrapperCurrentPage = "CH02A_02";
console.log("setting initial page:" + wrapperCurrentPage);
var loadedComps = {};
// wrapper array is filled on intialization of Edge Comps - code works for all chapters
var wrappers = [];
console.log("declaring wrappers as empty array:" + wrappers);
// needs to match html divs - edit per chapter
var stages = ["#StageA", "#StageB", "#StageC", "#StageD", "#StageE", "#StageF", "#StageG", "#StageH", "#StageI", "#StageJ", "#StageK",];
console.log(stages);
var sceneSeq = 0;

// play functionality
function vc_play() {
    loadedComps[wrapperCurrentPage].getStage().playAll();
    audioPlay();
}              
              
// pause functionality
function vc_stop() {
    loadedComps[wrapperCurrentPage].getStage().stopAll();
    console.log("current playhead: " + loadedComps[wrapperCurrentPage].getStage().getPosition());
    console.log("duration: " +  loadedComps[wrapperCurrentPage].getStage().getDuration());
    audioPause();
}

function audioPlay() {
    AdobeEdge.getComposition(wrapperCurrentPage).getStage().$(wrapperCurrentPage)[0].play();
    // need to create an audio file for each scene that's named the same as the inique adobe Edge id the use this commented out line - works in testing
    console.log("sound should be play from pause point");
}

function audioPause() {
    AdobeEdge.getComposition(wrapperCurrentPage).getStage().$(wrapperCurrentPage)[0].pause();;
    // need to create an audio file for each scene that's named the same as the inique adobe Edge id the use this commented out line - works in testing
    console.log("sound should be paused");
}

// sort through stages and turn off previous scene and on new scene
// direction arguement is either 1 or -1
function superSort(direction) {
    if (sceneSeq + direction < 0) {
        console.log("can't move back - its the beginning");   
    }
    else if (sceneSeq + direction > stages.length - 1) {
        console.log("can't move forward - its the end");        
    }
    else {
        console.log("current Scene Seq = " + sceneSeq);
        console.log("moving scene seq " + direction);              
        loadedComps[wrapperCurrentPage].$(stages[sceneSeq]).hide();
        loadedComps[wrapperCurrentPage].getStage().stopAll(0);
        console.log("stopping comp: " + wrapperCurrentPage);
        sceneSeq += direction;
        console.log("new Scene Seq = " + sceneSeq);
        wrapperCurrentPage = wrappers[sceneSeq];
        console.log("updated wrapperCurrentPage to: " + wrapperCurrentPage);
        console.log("loading new comp: " + wrapperCurrentPage);
        loadedComps[wrapperCurrentPage].$(stages[sceneSeq]).show();						
        loadedComps[wrapperCurrentPage].getStage().playAll(0);
    }
}

function vc_back() {
    superSort(-1);
}

function vc_forward() {
    superSort(1);    
}   


