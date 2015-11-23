/* @author Glen (v0.01) */

// variables set in var.js file

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
    //AdobeEdge.getComposition(wrapperCurrentPage).getStage().$(wrapperCurrentPage)[0].play();
    // need to create an audio file for each scene that's named the same as the inique adobe Edge id the use this commented out line - works in testing
    console.log("sound should be play from pause point");
}

function audioPause() {
    //AdobeEdge.getComposition(wrapperCurrentPage).getStage().$(wrapperCurrentPage)[0].pause();;
    // need to create an audio file for each scene that's named the same as the inique adobe Edge id the use this commented out line - works in testing
    console.log("sound should be paused");
}

// sort through stages and turn off previous scene and on new scene
// direction arguement is either 1 or -1
function superSort(direction) {
    if (sceneSeq + direction < 0) {
        console.log("can't move back - its the beginning");   
    }
    else if (sceneSeq + direction > wrappers.length - 1) {
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

function vc_begin() {
    console.log("returning to beginning of Chapter");
    hideStopComp(sceneSeq, wrapperCurrentPage);
    sceneSeq = 0;
    wrapperCurrentPage = wrappers[sceneSeq];
    showPlayComp(sceneSeq, wrapperCurrentPage)    
}

function vc_end() {
    console.log("going to end of Chapter");
    hideStopComp(sceneSeq, wrapperCurrentPage);
    sceneSeq = wrappers.length -1;
    wrapperCurrentPage = wrappers[sceneSeq];
    showPlayComp(sceneSeq, wrapperCurrentPage)    
}

function vc_next() {
    // hand code each link instance per chapter (at this point - probably easiest)
    window.open(nextChapter, "_self");
}

function vc_menu() {
    // got to upper level html page
    window.open("../index.html", "_self");
}

// hides and stops comp based on sceneNumber and chapterTitle arguments
function hideStopComp(sceneNumber, chapterTitle) {
    console.log("hiding and stopping: " + chapterTitle);
    loadedComps[chapterTitle].$(stages[sceneNumber]).hide();
    loadedComps[chapterTitle].getStage().stopAll(0);
    audioPause();
}

// shows and plays comp based on sceneNumber and chapterTitle arguments
function showPlayComp(sceneNumber, chapterTitle) {
    console.log("showing and playing: " + chapterTitle);
    loadedComps[chapterTitle].$(stages[sceneNumber]).show();						
    loadedComps[chapterTitle].getStage().playAll(0);    
}
