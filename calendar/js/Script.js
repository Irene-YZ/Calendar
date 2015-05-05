
var events = [
	 { start: 30, end: 150 },
	 { start: 540, end: 600 },
	 { start: 560, end: 620 },
	 { start: 610, end: 670 }
];


var events1 = [
	 { start: 10, end: 150 },
	 { start: 360, end: 480 },
	 { start: 450, end: 600 },
	 { start: 420, end: 510 }
];


var events2 = [
	 { start: 30, end: 250 },
	 { start: 100, end: 400 },
	 { start: 150, end: 650 },
     { start: 200, end: 350 },
	 { start: 560, end: 630 }
];
var events3 = [
	 { start: 30, end: 150 },
	 { start: 540, end: 600 },
	 { start: 590, end: 670 },
	 { start: 610, end: 650 }
];
var events4 = [
	 { start: 30, end: 150 },
	 { start: 330, end: 480 },
	 { start: 360, end: 420 },
	 { start: 450, end: 580 }
];
var events5 = [
	 { start: 30, end: 240 },
	 { start: 100, end: 200 },
	 { start: 150, end: 650 },
     { start: 200, end: 350 },
	 { start: 600, end: 660 }
];

var events6 = [
  { start: 30, end: 100 },
  { start: 150, end: 280 },
  { start: 170, end: 320 },
  { start: 200, end: 380 },
  { start: 400, end: 440 },
  { start: 450, end: 500 },
  { start: 480, end: 580 },
  { start: 520, end: 600 },
  { start: 630, end: 680 }
];

var events7 = [
  { start: 30, end: 600 },
  { start: 150, end: 280 },
  { start: 170, end: 400 },
  { start: 200, end: 380 },
  { start: 400, end: 450 },
  { start: 450, end: 500 },
  { start: 480, end: 580 },
  { start: 520, end: 600 },
  { start: 630, end: 680 }
];
var events8 = [
  { start: 30, end: 600 },
  { start: 150, end: 280 },
  { start: 170, end: 580 },
  { start: 200, end: 380 },
  { start: 400, end: 600 },
  { start: 450, end: 500 },
  { start: 480, end: 580 },
  { start: 520, end: 600 },
  { start: 630, end: 680 }
];
var events21 = [
	 { start: 30, end: 70 },
	 { start: 100, end: 200 },
	 { start: 150, end: 650 },
     { start: 200, end: 350 },
	 { start: 560, end: 630 }
];
var events22 = [
	 { start: 30, end: 150 },
	 { start: 100, end: 200 },
	 { start: 150, end: 650 },
     { start: 200, end: 350 },

];
var events23 = [
	 { start: 30, end: 250 },
	 { start: 100, end: 200 },
	 { start: 150, end: 650 },
       { start: 200, end: 350 },
	 { start: 560, end: 630 }
];
var events24 = [
	 { start: 10, end: 150 },
	 { start: 360, end: 480 },
	 { start: 450, end: 600 },
	 { start: 420, end: 510 }
];
var events25 = [
	 { start: 30, end: 150 },
	 { start: 540, end: 600 },
	 { start: 590, end: 670 },
	 { start: 610, end: 650 }
];
var events26 = [
	 { start: 30, end: 150 },
	 { start: 540, end: 670 },
	 { start: 560, end: 600 },
	 { start: 610, end: 670 }
];
var events27 = [
	 { start: 30, end: 150 },
	 { start: 540, end: 600 },
	 { start: 560, end: 620 },
	 { start: 610, end: 670 }
];




var events28 = [
  { start: 30, end: 300 },
  { start: 150, end: 280 },
  { start: 170, end: 480 },
  { start: 200, end: 380 },
  { start: 240, end: 480 },
  { start: 450, end: 700 },
  { start: 480, end: 600 },
  { start: 520, end: 600 },
  { start: 400, end: 700 },
  { start: 520, end: 600 },
  { start: 340, end: 460 },
  { start: 450, end: 550 },
  { start: 480, end: 600 },
  { start: 520, end: 600 },
  { start: 630, end: 700 }
];



function layOutDay(events) {

    var W = 600;
    var L = 100;
    var H = 720;
    /* Sort events by start points*/
    events.sort(function (a, b) {
        if (a.start > b.start) {
            return 1;
        }
        if (a.start < b.start) {
            return -1;
        }
        return 0;
    });


    console.log(events);


    /* Event Object for storing each event information */
    function event(s, e) {
        this.id = 0;
        this.start = s;
        this.end = e;
        this.width = 100;
       // this.left = 100;
        this.colNum = 0;
    };

    /* eventObjects Array to store event Object */
    var eventObjects = [];


    /* passing events into eventObjects Array*/
    for (var i = 0; i < events.length; i++) {
        eventObjects[i] = new event(events[i].start, events[i].end);
        eventObjects[i].id = i;
    }

    console.log(eventObjects);

/*get OverlapFlags from current event to the last one */
    var getoverlapflags = function () {
        var flags = [];
        for (var i = 0; i < events.length; i++) {
            flags[i] = 1;
        }
        var sortedEvents = events.sort();

        for (var i = 0; i < (events.length - 1) ; i++) {
            for (var j = (i + 1) ; j < events.length; j++) {
                if (events[i].start == events[j].start) {
                    flags[i]++;
                }
                else if (events[i].start < events[j].start && events[i].end >= events[j].start) {

                    flags[i]++;
                }

            }
        }
        return flags;
    };

    var overlapflags = getoverlapflags();
    console.log(overlapflags);

/*  get Histogram   */
    var getHistogram = function () {
        var hist = [L];
        for (var i = 0; i < H; i++) {
            hist[i] = 0;
        }


        for (var i = 0; i < events.length; i++) {

            for (var k = events[i].start; k < events[i].end; k++) {
                hist[k]++;
            }
        }
        return hist;
    }

    var histogram = getHistogram();

    //console.log(histogram);
/* get group edge of start and end points */
   var getGroup = function () {
        var fill = false;
        var le = [];
        for (var i = 0; i < H; i++) {
            if (histogram[i] != 0 && fill == false) {
                le.push(i);
                fill = true;
            }
            else if (histogram[i] == 0 && fill == true) {
                le.push(i);
                fill = false;
            }

        }
        return le;
    }
    console.log("show length");
    var len = getGroup();
    console.log(len);
    /* Get Groups of overlap events in the time */
    var getGroups = function () {
        var G = function (a, b) { this.a = a; this.b = b; }
        var T = [];
        var i = 0;
        while (i != len.length) {

            T.push(new G(len[i], len[i + 1]));
            i = i + 2;

        }
        return T;
    }

    var Groups = getGroups();
    console.log("show Groups");
    console.log(Groups);
/*get event stacks if event in the group */
    var getStacks = function () {
        var stacks = [Groups.length];
        for (var i = 0; i < Groups.length; i++) {
            stacks[i] = [];

        }
        for (var i = 0; i < eventObjects.length; i++) {

            for (var j = 0; j < Groups.length; j++) {


                if (eventObjects[i].start >= Groups[j].a && eventObjects[i].end <= Groups[j].b) {

                    stacks[j].push(eventObjects[i]);
                   // console.log(stacks[j]);
                }


            }
        }
        return stacks;
    }
    eventStacks = getStacks();
    console.log(eventStacks);
    /* get the max column in each group */
    var getVolumn = function () {

        var vol = [];
        var max = 0;
        for (var i = 0; i < H; i++) {

            if (histogram[i] != 0) {

                if (max < histogram[i])
                    max = histogram[i];
            }
            else {
                if (max != 0) {
                    vol.push(max);
                }
                max = 0;
            }

        }
        return vol;
    };

    var volNumber = getVolumn();

    console.log(volNumber);

    /*get EventWidth */
    var getEventWidth = function () {

        var eWidth = [];

        for (var i = 0; i < volNumber.length; i++) {
            eWidth.push(W / volNumber[i]);
        }
        return eWidth;

    }

    var eventWidth = getEventWidth();
    console.log(eventWidth);

    /*set event Width to event object stacks */
    var setWidth = function () {

        for (var i = 0; i < eventStacks.length; i++) {

            for (var j = 0; j < eventStacks[i].length; j++) {
                eventStacks[i][j].width = eventWidth[i];
            }


        }

    };

    setWidth();

    function MinEnd() {
        this.ind = 0;
        this.value = 0;

        this.getMinEnd = function (e) {
            this.value = e[0];
            for (var i = 1; i < e.length; i++) {
               // console.log(e);
                if (e[i] < this.value) {
                    this.value = e[i];
                    this.ind = i;
                }
              //  console.log(this.value);
            }

            //  getMinEnd;
            return this;
        }

    }
    // console.log(eventStacks);

    var getEventLeft = function () {
        var counteventinstack;
        var endofline = [];     

        for (i = 0; i < eventStacks.length; i++) {       
            console.log("colomn " + volNumber[i]);
            counteventinstack = 0;
            endofline = [];

            for (var j = 0; j < volNumber[i]; j++) {
                eventStacks[i][j].colNum = j;
                console.log("id " + eventStacks[i][j].id + " colNum  " + eventStacks[i][j].colNum);
                counteventinstack++;

                endofline.push(eventStacks[i][j].end);

            }
            console.log("count " + counteventinstack);

            while (counteventinstack < eventStacks[i].length) {

                var minE = new MinEnd(endofline);
                minE.getMinEnd(endofline);
           
                console.log(minE);
                eventStacks[i][counteventinstack].colNum = minE.ind;

                endofline[minE.ind] = eventStacks[i][counteventinstack].end;



                counteventinstack++;
            }
        }
    };



    getEventLeft();



    console.log(eventStacks);



    var text = "";
    console.log(eventStacks.length);
    for (var i = 0; i < eventStacks.length; i++) {

        for (var j = 0; j < eventStacks[i].length; j++) {
            text += " <div class=\"event\" style=\" width:" + (eventStacks[i][j].width - 15) + "px; left: " + (eventStacks[i][j].colNum * W / volNumber[i]) + "px; top: " + eventStacks[i][j].start + "px; height: " + (eventStacks[i][j].end - eventStacks[i][j].start - 7) + "px\">" +
                     " <div class=\"eventHead\"><strong>Sample Item</strong></div>" +
                     " <div class=\"eventContent\">Sample Location</div>" +
                     " </div>";
        }

    }

    document.getElementById("event-container").innerHTML += text;

}

layOutDay(events);


//layOutDay(events1);
//layOutDay(events2);
//layOutDay(events3);
//layOutDay(events4);
//layOutDay(events5);
//layOutDay(events6);
//layOutDay(events7);
//layOutDay(events8);
//layOutDay(events21);
//layOutDay(events22);
//layOutDay(events23);
//layOutDay(events24);
//layOutDay(events25);
//layOutDay(events26);
//layOutDay(events27);
//layOutDay(events28);