webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 150:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_source_times__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var HomePage = (function () {
    function HomePage() {
        this.prayersNames = ["fa", "du", "th", "as", "mo", "ish"];
        // catch the changeing time
        this.changeToSommerTime = false;
        this.changeToWinterTime = false;
        this.data = __WEBPACK_IMPORTED_MODULE_1__data_source_times__["a" /* default */];
        this.refreshRate = 30 * 1000;
    }
    // Built the following apk(s): 
    // /Users/aref / ionic / PrayerTimesInBerlin / platforms / android / app / build / outputs / apk / debug / app - debug.apk
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        // this.currentDate = new Date('2019-10-28T05:10:00'); // this is a global value for the whole life cycle of this app.
        this.currentDate = new Date();
        console.log("ngOnInit()...");
        var month = this.currentDate.getMonth() + 1;
        this.currentMonth = this.getMonthName(month);
        var day = this.currentDate.getDate();
        var year = this.currentDate.getFullYear();
        // setting the currentTimeStamp once in the app life-cylce
        var hour = this.currentDate.getHours();
        var minutes = this.currentDate.getMinutes();
        this._currentTimeStamp = (hour * 60) + minutes;
        // getting prayer times for this day
        var dailySchedule = this.data[this.currentMonth][day];
        this.isChangingTime(month, day);
        if (this.changePeriodToSummer) {
            this.todaysPrayersSchedule = this.adjustTimeForChangingPeriods(dailySchedule);
            console.log("changing time = " + this.changePeriodToSummer);
        }
        else if (this.changePeriodToWinter) {
            this.todaysPrayersSchedule = this.adjustTimeForChangingPeriods(dailySchedule);
            console.log("changing time = " + this.changePeriodToWinter);
        }
        else {
            this.todaysPrayersSchedule = dailySchedule;
        }
        this.FEData = this.createFrontEndData(this.todaysPrayersSchedule);
        this.datum = day + " " + this.currentMonth + " " + year;
        this.findCurrentPrayPeriod(this.todaysPrayersSchedule);
        setTimeout(function () {
            _this.ngOnInit();
        }, this.refreshRate);
    };
    HomePage.prototype.createFrontEndData = function (schedule) {
        var lst = [];
        var ll = ['fa', 'du', 'th', 'as', 'mo', 'ish'];
        for (var _i = 0, ll_1 = ll; _i < ll_1.length; _i++) {
            var x = ll_1[_i];
            var obj = { arabicName: "", germanName: "", time: "" };
            switch (x) {
                case 'fa':
                    obj.arabicName = "الفجر";
                    obj.germanName = "Frühlicht";
                    obj.time = schedule.fa;
                    lst.push(obj);
                    break;
                case 'du':
                    obj.arabicName = "الشروق";
                    obj.germanName = "S'Aufgang";
                    obj.time = schedule.du;
                    lst.push(obj);
                    break;
                case 'th':
                    obj.arabicName = "الظهر";
                    obj.germanName = "Mittag";
                    obj.time = schedule.th;
                    lst.push(obj);
                    break;
                case 'as':
                    obj.arabicName = "العصر";
                    obj.germanName = "Nachmittag";
                    obj.time = schedule.as;
                    lst.push(obj);
                    break;
                case 'mo':
                    obj.arabicName = "المغرب";
                    obj.germanName = "Abend";
                    obj.time = schedule.mo;
                    lst.push(obj);
                    break;
                case 'ish':
                    obj.arabicName = "العشاء";
                    obj.germanName = "Nacht";
                    obj.time = schedule.ish;
                    lst.push(obj);
                    break;
            }
        }
        return lst;
    };
    HomePage.prototype.getMonthName = function (n) {
        var monthDictionary = {
            1: "Januar",
            2: "Februar",
            3: "März",
            4: "April",
            5: "Mai",
            6: "Juni",
            7: "Juli",
            8: "August",
            9: "September",
            10: "Oktober",
            11: "November",
            12: "Dezember"
        };
        return monthDictionary[n];
    };
    Object.defineProperty(HomePage.prototype, "currentTimeStamp", {
        get: function () {
            return this._currentTimeStamp;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * find which pray period we are in right now
     * @param schedule todays prayer schedule
     */
    HomePage.prototype.findCurrentPrayPeriod = function (schedule) {
        var lst = [];
        for (var i = 0; i < this.prayersNames.length; i++) {
            var prayerName = this.prayersNames[i];
            var prayerTimeStamp = this.calculatePrayerTime(schedule[prayerName]);
            if (prayerTimeStamp <= this.currentTimeStamp) {
                lst.push(prayerName);
            }
        }
        if (lst.length > 0) {
            this.periodName = this.mappingPrayerName(lst[lst.length - 1]);
        }
        else {
            this.periodName = "Al-Tahadgud";
        }
        this.calculateRemainingTime();
    };
    HomePage.prototype.calculatePrayerTime = function (time) {
        var tt = time.split(":");
        var hour = parseInt(tt[0]) * 60;
        var minutes = parseInt(tt[1]);
        return hour + minutes;
    };
    HomePage.prototype.mappingPrayerName = function (name) {
        var _name;
        switch (name) {
            case "fa":
                _name = "Al-Fajer";
                break;
            case "du":
                _name = "Al-Duha";
                break;
            case "th":
                _name = "Al-Thuher";
                break;
            case "as":
                _name = "Al-Asser";
                break;
            case "mo":
                _name = "Al-Moghreb";
                break;
            case "ish":
                _name = "Al-Ischaa";
                break;
            default:
                console.error("Provided shortcuts are only fa, du, th, as, mo and ish");
        }
        return _name;
    };
    HomePage.prototype.remappingPrayerName = function (name) {
        var _name;
        switch (name) {
            case "Al-Fajer":
                _name = "fa";
                break;
            case "Al-Duha":
                _name = "du";
                break;
            case "Al-Thuher":
                _name = "th";
                break;
            case "Al-Asser":
                _name = "as";
                break;
            case "Al-Moghreb":
                _name = "mo";
                break;
            case "Al-Ischaa":
                _name = "ish";
                break;
            case "Al-Tahadgud":
                _name = "ta";
                break;
            default:
                console.error("Provided shortcuts are only Al-fajer, Al-Duha, Al-Thuher, Al-Asser, Al-Moghreb and Al-Ischaa");
        }
        return _name;
    };
    HomePage.prototype.formateTime = function (num) {
        var h = Math.floor(num / 60);
        var m = num % 60;
        var hour = "";
        var minute = "";
        hour = h < 10 ? "0" + h.toString() : h.toString();
        minute = m < 10 ? "0" + m.toString() : m.toString();
        return hour + ":" + minute;
    };
    HomePage.prototype.calculateRemainingTime = function () {
        var current = this.remappingPrayerName(this.periodName);
        switch (current) {
            case "ish":
                this.remainingTimeNum = (23 * 60) + 59 - this.currentTimeStamp;
                this.remainingTimeStr = this.formateTime(this.remainingTimeNum);
                break;
            case "ta":
                var fajerTime = this.calculatePrayerTime(this.todaysPrayersSchedule["fa"]);
                this.remainingTimeNum = fajerTime - this.currentTimeStamp;
                this.remainingTimeStr = this.formateTime(this.remainingTimeNum);
                break;
            case "fa":
                var duhaTime = this.calculatePrayerTime(this.todaysPrayersSchedule["du"]);
                this.remainingTimeNum = duhaTime - this.currentTimeStamp;
                this.remainingTimeStr = this.formateTime(this.remainingTimeNum);
                break;
            case "du":
                var thuherTime = this.calculatePrayerTime(this.todaysPrayersSchedule["th"]);
                this.remainingTimeNum = thuherTime - this.currentTimeStamp;
                this.remainingTimeStr = this.formateTime(this.remainingTimeNum);
                break;
            case "th":
                var asserTime = this.calculatePrayerTime(this.todaysPrayersSchedule["as"]);
                this.remainingTimeNum = asserTime - this.currentTimeStamp;
                this.remainingTimeStr = this.formateTime(this.remainingTimeNum);
                break;
            case "as":
                var moghrebTime = this.calculatePrayerTime(this.todaysPrayersSchedule["mo"]);
                this.remainingTimeNum = moghrebTime - this.currentTimeStamp;
                this.remainingTimeStr = this.formateTime(this.remainingTimeNum);
                break;
            case "mo":
                var ischaaTime = this.calculatePrayerTime(this.todaysPrayersSchedule["ish"]);
                this.remainingTimeNum = ischaaTime - this.currentTimeStamp;
                this.remainingTimeStr = this.formateTime(this.remainingTimeNum);
                break;
        }
    };
    HomePage.prototype.adjustTimeForChangingPeriods = function (obj) {
        var o = {};
        for (var _i = 0, _a = this.prayersNames; _i < _a.length; _i++) {
            var x = _a[_i];
            var time = this.calculatePrayerTime(obj[x]);
            if (this.changePeriodToSummer) {
                // summer-time add 1 hour = 60 minutes
                o[x] = this.formateTime(time + 60);
            }
            else if (this.changePeriodToWinter) {
                // summer-time substract 1 hour = 60 minutes
                o[x] = this.formateTime(time - 60);
            }
        }
        return o;
    };
    HomePage.prototype.isChangingTime = function (month, day) {
        // Sommer
        if (month == 3 && day >= 25) {
            this.WinterSummerChange("summer", day);
        }
        else if (month == 10 && day >= 25) {
            this.WinterSummerChange("winter", day);
        }
        else {
            this.changePeriodToSummer = false;
            this.changePeriodToWinter = false;
        }
    };
    HomePage.prototype.WinterSummerChange = function (season, day) {
        var daysDict = {
            0: "Su",
            1: "Mo",
            2: "Tu",
            3: "We",
            4: "Th",
            5: "Fr",
            6: "Sa"
        };
        if (season == "summer") {
            //  if we are on Sunday, thus this is the last Sunday in the month
            if (this.currentDate.getDay() == 0) {
                this.changePeriodToSummer = true;
                return this.changePeriodToSummer;
            }
            else if (this.currentDate.getDay() != 0) {
                // it should not be greater than 6 (0-6)
                var diffDayNum = 31 - day;
                var ii = 1; // we know today is not sunday, and we want to check tommorrow!
                var days = [];
                while (diffDayNum > 0) {
                    var dayKey = this.currentDate.getDay() + ii;
                    // reset ii to not exceed the keys in the dictionary
                    if (dayKey > 6) {
                        var x = (dayKey % 6) - 1;
                        days.push(daysDict[x]);
                    }
                    else {
                        days.push(daysDict[this.currentDate.getDay() + ii]);
                    }
                    ii++;
                    diffDayNum--;
                }
                // is Su one of the arr member?
                var position = days.indexOf("Su");
                if (position == -1) {
                    this.changePeriodToSummer = true;
                    return this.changePeriodToSummer;
                }
                else {
                    // the timeseason is not changed yet
                    this.changePeriodToSummer = false;
                    return this.changePeriodToSummer;
                }
            }
        }
        else if (season == "winter") {
            //  if we are on Sunday, thus this is the last Sunday in the month
            if (this.currentDate.getDay() == 0) {
                this.changePeriodToWinter = true;
                return this.changePeriodToWinter;
            }
            else if (this.currentDate.getDay() != 0) {
                // it should not be greater than 6 (0-6)
                var diffDayNum = 31 - day;
                var ii = 1; // we know today is not sunday, and we want to check tommorrow!
                var days = [];
                while (diffDayNum > 0) {
                    var dayKey = this.currentDate.getDay() + ii;
                    // reset ii to not exceed the keys in the dictionary
                    if (dayKey > 6) {
                        var x = (dayKey % 6) - 1;
                        days.push(daysDict[x]);
                    }
                    else {
                        days.push(daysDict[this.currentDate.getDay() + ii]);
                    }
                    ii++;
                    diffDayNum--;
                }
                // is Su one of the arr member?
                var position = days.indexOf("Su");
                if (position == -1) {
                    this.changePeriodToWinter = true;
                    return this.changePeriodToWinter;
                }
                else {
                    // the timeseason is not changed yet
                    this.changePeriodToWinter = false;
                    return this.changePeriodToWinter;
                }
            }
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/aref/ionic/PrayerTimesInBerlin/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title text-center>\n      Gebetszeiten in Berlin\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding (tap)="ngOnInit()">\n\n\n  <div class="date">{{datum}}</div>\n\n  <!-- <div class="tahadgud_div" *ngIf="periodName==\'Al-Tahadgud\'"> -->\n  <ion-card *ngIf="periodName==\'Al-Tahadgud\'">\n    <ion-grid>\n      <ion-row>\n        <ion-col text-left>Al-Tahadgud</ion-col>\n        <ion-col text-right>التهجد</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col text-center>\n          <span class="green" *ngIf="remainingTimeNum > 60">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n          <span class="orange" *ngIf="remainingTimeNum <= 60 && remainingTimeNum > 10">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n          <span class="red" *ngIf="remainingTimeNum <= 10">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <!-- <div>\n    <ion-card *ngFor="let d of FEData">\n      <ion-grid>\n        <ion-row align-items-start>\n          <ion-col>\n            <label>{{d.germanName}}</label>\n          </ion-col>\n          <ion-col>\n            {{d.time}}\n          </ion-col>\n          <ion-col>{{d.arabicName}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col text-center *ngIf="periodName==\'Al-Fajer\'">\n            <span class="green" *ngIf="remainingTimeNum > 60">\n              <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n            <span class="orange" *ngIf="remainingTimeNum <= 60 && remainingTimeNum > 10">\n              <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n            <span class="red" *ngIf="remainingTimeNum <= 10">\n              <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card>\n  </div> -->\n  <ion-card>\n    <ion-grid>\n      <ion-row align-items-start>\n        <ion-col>\n          <label>Frühlicht</label>\n        </ion-col>\n        <ion-col>\n          {{todaysPrayersSchedule.fa}}\n        </ion-col>\n        <ion-col>الفجر</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col text-center *ngIf="periodName==\'Al-Fajer\'">\n          <span class="green" *ngIf="remainingTimeNum > 60">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n          <span class="orange" *ngIf="remainingTimeNum <= 60 && remainingTimeNum > 10">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n          <span class="red" *ngIf="remainingTimeNum <= 10">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-grid align-items-center>\n      <ion-row>\n        <ion-col>\n          <label>S\'Aufgang</label>\n        </ion-col>\n        <ion-col>\n          {{todaysPrayersSchedule.du}}\n        </ion-col>\n        <ion-col>الشروق</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col text-center *ngIf="periodName==\'Al-Duha\'">\n          <span class="green" *ngIf="remainingTimeNum > 60">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n          <span class="orange" *ngIf="remainingTimeNum <= 60 && remainingTimeNum > 10">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n          <span class="red" *ngIf="remainingTimeNum <= 10">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <label>Mittag</label>\n        </ion-col>\n        <ion-col>\n          {{todaysPrayersSchedule.th}}\n        </ion-col>\n        <ion-col>الظهر</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col text-center *ngIf="periodName==\'Al-Thuher\'">\n          <span class="green" *ngIf="remainingTimeNum > 60">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n          <span class="orange" *ngIf="remainingTimeNum <= 60 && remainingTimeNum > 10">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n          <span class="red" *ngIf="remainingTimeNum <= 10">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <label>Nachmittag</label>\n        </ion-col>\n        <ion-col>\n          {{todaysPrayersSchedule.as}}\n        </ion-col>\n        <ion-col>العصر</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col text-center *ngIf="periodName==\'Al-Asser\'">\n          <span class="green" *ngIf="remainingTimeNum > 60">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n          <span class="orange" *ngIf="remainingTimeNum <= 60 && remainingTimeNum > 10">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n          <span class="red" *ngIf="remainingTimeNum <= 10">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <label>Abend</label>\n        </ion-col>\n        <ion-col>\n          {{todaysPrayersSchedule.mo}}\n        </ion-col>\n        <ion-col>المغرب</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col text-center *ngIf="periodName==\'Al-Moghreb\'">\n          <span class="green" *ngIf="remainingTimeNum > 60">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n          <span class="orange" *ngIf="remainingTimeNum <= 60 && remainingTimeNum > 10">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n          <span class="red" *ngIf="remainingTimeNum <= 10">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n  <ion-card>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <label>Nacht</label>\n        </ion-col>\n        <ion-col>\n          {{todaysPrayersSchedule.ish}}\n        </ion-col>\n        <ion-col>العشاء</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col text-center *ngIf="periodName==\'Al-Ischaa\'">\n          <span class="green" *ngIf="remainingTimeNum > 60">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n          <span class="orange" *ngIf="remainingTimeNum <= 60 && remainingTimeNum > 10">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n          <span class="red" *ngIf="remainingTimeNum <= 10">\n            <ion-icon name="timer"></ion-icon> {{remainingTimeStr}}</span>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/aref/ionic/PrayerTimesInBerlin/src/pages/home/home.html"*/
        })
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/aref/ionic/PrayerTimesInBerlin/src/app/app.html"*/'<ion-nav [root]="rootPage">\n\n</ion-nav>'/*ion-inline-end:"/Users/aref/ionic/PrayerTimesInBerlin/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    Januar: {
        1: { fa: "6:31", du: "8:15", th: "12:16", as: "13:52", mo: "16:08", ish: "17:38" },
        2: { fa: "6:31", du: "8:15", th: "12:16", as: "13:52", mo: "16:09", ish: "17:40" },
        3: { fa: "6:31", du: "8:15", th: "12:16", as: "13:53", mo: "16:11", ish: "17:41" },
        4: { fa: "6:31", du: "8:15", th: "12:17", as: "13:54", mo: "16:12", ish: "17:42" },
        5: { fa: "6:31", du: "8:15", th: "12:17", as: "13:55", mo: "16:13", ish: "17:43" },
        6: { fa: "6:31", du: "8:14", th: "12:18", as: "13:56", mo: "16:14", ish: "17:44" },
        7: { fa: "6:30", du: "8:14", th: "12:18", as: "13:57", mo: "16:16", ish: "17:45" },
        8: { fa: "6:30", du: "8:13", th: "12:19", as: "13:58", mo: "16:17", ish: "17:47" },
        9: { fa: "6:30", du: "8:13", th: "12:19", as: "14:00", mo: "16:19", ish: "17:49" },
        10: { fa: "6:29", du: "8:12", th: "12:19", as: "14:01", mo: "16:20", ish: "17:50" },
        11: { fa: "6:29", du: "8:12", th: "12:20", as: "14:02", mo: "16:21", ish: "17:51" },
        12: { fa: "6:29", du: "8:11", th: "12:20", as: "14:03", mo: "16:23", ish: "17:53" },
        13: { fa: "6:28", du: "8:10", th: "12:21", as: "14:04", mo: "16:24", ish: "17:54" },
        14: { fa: "6:28", du: "8:10", th: "12:21", as: "14:05", mo: "16:26", ish: "17:56" },
        15: { fa: "6:27", du: "8:09", th: "12:21", as: "14:07", mo: "16:27", ish: "17:58" },
        16: { fa: "6:27", du: "8:08", th: "12:22", as: "14:08", mo: "16:29", ish: "17:59" },
        17: { fa: "6:26", du: "8:07", th: "12:22", as: "14:09", mo: "16:31", ish: "18:01" },
        18: { fa: "6:25", du: "8:06", th: "12:22", as: "14:11", mo: "16:33", ish: "18:03" },
        19: { fa: "6:24", du: "8:05", th: "12:23", as: "14:12", mo: "16:34", ish: "18:04" },
        20: { fa: "6:24", du: "8:04", th: "12:23", as: "14:13", mo: "16:36", ish: "18:06" },
        21: { fa: "6:23", du: "8:03", th: "12:23", as: "14:15", mo: "16:38", ish: "18:08" },
        22: { fa: "6:22", du: "8:02", th: "12:24", as: "14:16", mo: "16:40", ish: "18:10" },
        23: { fa: "6:21", du: "8:01", th: "12:24", as: "14:18", mo: "16:41", ish: "18:11" },
        24: { fa: "6:20", du: "7:59", th: "12:24", as: "14:19", mo: "16:43", ish: "18:13" },
        25: { fa: "6:19", du: "7:58", th: "12:24", as: "14:21", mo: "16:45", ish: "18:15" },
        26: { fa: "6:18", du: "7:57", th: "12:24", as: "14:22", mo: "16:47", ish: "18:17" },
        27: { fa: "6:17", du: "7:55", th: "12:25", as: "14:23", mo: "16:49", ish: "18:19" },
        28: { fa: "6:16", du: "7:54", th: "12:25", as: "14:25", mo: "16:50", ish: "18:20" },
        29: { fa: "6:15", du: "7:52", th: "12:25", as: "14:26", mo: "16:52", ish: "18:22" },
        30: { fa: "6:13", du: "7:51", th: "12:25", as: "14:28", mo: "16:54", ish: "18:24" },
        31: { fa: "6:12", du: "7:49", th: "12:25", as: "14:29", mo: "16:56", ish: "18:26" },
    },
    Februar: {
        1: { fa: "6:11", du: "7:48", th: "12:26", as: "14:31", mo: "16:56", ish: "18:28" },
        2: { fa: "6:10", du: "7:46", th: "12:26", as: "14:32", mo: "16:58", ish: "18:30" },
        3: { fa: "6:08", du: "7:45", th: "12:26", as: "14:34", mo: "17:00", ish: "18:32" },
        4: { fa: "6:07", du: "7:43", th: "12:26", as: "14:35", mo: "17:02", ish: "18:34" },
        5: { fa: "6:05", du: "7:41", th: "12:26", as: "14:37", mo: "17:04", ish: "18:35" },
        6: { fa: "6:04", du: "7:40", th: "12:26", as: "14:39", mo: "17:07", ish: "18:37" },
        7: { fa: "6:02", du: "7:38", th: "12:26", as: "14:40", mo: "17:09", ish: "18:39" },
        8: { fa: "6:01", du: "7:36", th: "12:26", as: "14:42", mo: "17:11", ish: "18:41" },
        9: { fa: "5:59", du: "7:34", th: "12:26", as: "14:43", mo: "17:13", ish: "18:43" },
        10: { fa: "5:58", du: "7:32", th: "12:26", as: "14:45", mo: "17:15", ish: "18:45" },
        11: { fa: "5:56", du: "7:31", th: "12:26", as: "14:46", mo: "17:17", ish: "18:47" },
        12: { fa: "5:54", du: "7:29", th: "12:26", as: "14:48", mo: "17:19", ish: "18:49" },
        13: { fa: "5:53", du: "7:27", th: "12:26", as: "14:49", mo: "17:19", ish: "18:51" },
        14: { fa: "5:51", du: "7:25", th: "12:26", as: "14:51", mo: "17:21", ish: "18:53" },
        15: { fa: "5:49", du: "7:23", th: "12:26", as: "14:52", mo: "17:24", ish: "18:54" },
        16: { fa: "5:47", du: "7:21", th: "12:26", as: "14:53", mo: "17:26", ish: "18:56" },
        17: { fa: "5:45", du: "7:19", th: "12:26", as: "14:55", mo: "17:28", ish: "18:58" },
        18: { fa: "5:44", du: "7:17", th: "12:26", as: "14:56", mo: "17:29", ish: "19:00" },
        19: { fa: "5:42", du: "7:15", th: "12:26", as: "14:58", mo: "17:32", ish: "19:02" },
        20: { fa: "5:40", du: "7:13", th: "12:26", as: "14:59", mo: "17:34", ish: "19:04" },
        21: { fa: "5:38", du: "7:11", th: "12:25", as: "15:01", mo: "17:36", ish: "19:06" },
        22: { fa: "5:36", du: "7:09", th: "12:25", as: "15:02", mo: "17:38", ish: "19:08" },
        23: { fa: "5:34", du: "7:06", th: "12:25", as: "15:04", mo: "17:40", ish: "19:10" },
        24: { fa: "5:32", du: "7:04", th: "12:25", as: "15:05", mo: "17:41", ish: "19:11" },
        25: { fa: "5:30", du: "7:02", th: "12:25", as: "15:06", mo: "17:43", ish: "19:13" },
        26: { fa: "5:28", du: "7:00", th: "12:25", as: "15:08", mo: "17:45", ish: "19:15" },
        27: { fa: "5:26", du: "6:58", th: "12:25", as: "15:09", mo: "17:47", ish: "19:17" },
        28: { fa: "5:22", du: "6:56", th: "12:24", as: "15:10", mo: "17:49", ish: "19:19" },
        29: { fa: "5:21", du: "6:53", th: "12:24", as: "15:11", mo: "17:50", ish: "19:20" },
    },
    März: {
        1: { fa: "5:19", du: "6:51", th: "12:24", as: "15:12", mo: "17:51", ish: "19:21" },
        2: { fa: "5:17", du: "6:49", th: "12:24", as: "15:13", mo: "17:53", ish: "19:22" },
        3: { fa: "5:15", du: "6:47", th: "12:24", as: "15:14", mo: "17:55", ish: "19:24" },
        4: { fa: "5:12", du: "6:44", th: "12:24", as: "15:16", mo: "17:57", ish: "19:26" },
        5: { fa: "5:10", du: "6:42", th: "12:23", as: "15:17", mo: "17:58", ish: "19:28" },
        6: { fa: "5:08", du: "6:40", th: "12:23", as: "15:18", mo: "18:00", ish: "19:30" },
        7: { fa: "5:05", du: "6:38", th: "12:23", as: "15:20", mo: "18:02", ish: "19:32" },
        8: { fa: "5:03", du: "6:35", th: "12:23", as: "15:21", mo: "18:03", ish: "19:33" },
        9: { fa: "5:01", du: "6:33", th: "12:22", as: "15:22", mo: "18:05", ish: "19:35" },
        10: { fa: "4:58", du: "6:31", th: "12:22", as: "15:23", mo: "18:07", ish: "19:37" },
        11: { fa: "4:56", du: "6:28", th: "12:22", as: "15:24", mo: "18:09", ish: "19:39" },
        12: { fa: "4:54", du: "6:26", th: "12:22", as: "15:26", mo: "18:11", ish: "19:41" },
        13: { fa: "4:51", du: "6:24", th: "12:21", as: "15:27", mo: "18:12", ish: "19:42" },
        14: { fa: "4:49", du: "6:21", th: "12:21", as: "15:28", mo: "18:14", ish: "19:44" },
        15: { fa: "4:46", du: "6:19", th: "12:21", as: "15:29", mo: "18:16", ish: "19:46" },
        16: { fa: "4:44", du: "6:17", th: "12:20", as: "15:30", mo: "18:18", ish: "19:48" },
        17: { fa: "4:41", du: "6:14", th: "12:20", as: "15:31", mo: "18:20", ish: "19:50" },
        18: { fa: "4:39", du: "6:12", th: "12:20", as: "15:32", mo: "18:21", ish: "19:51" },
        19: { fa: "4:36", du: "6:10", th: "12:20", as: "15:34", mo: "18:23", ish: "19:53" },
        20: { fa: "4:34", du: "6:07", th: "12:19", as: "15:35", mo: "18:25", ish: "19:55" },
        21: { fa: "4:31", du: "6:05", th: "12:19", as: "15:36", mo: "18:27", ish: "19:57" },
        22: { fa: "4:28", du: "6:03", th: "12:19", as: "15:37", mo: "18:28", ish: "19:58" },
        23: { fa: "4:26", du: "6:00", th: "12:18", as: "15:38", mo: "18:31", ish: "20:00" },
        24: { fa: "4:23", du: "5:58", th: "12:18", as: "15:39", mo: "18:32", ish: "20:02" },
        25: { fa: "4:21", du: "5:55", th: "12:18", as: "15:40", mo: "18:34", ish: "20:04" },
        26: { fa: "4:18", du: "5:53", th: "12:17", as: "15:41", mo: "18:35", ish: "20:05" },
        27: { fa: "4:15", du: "5:51", th: "12:17", as: "15:42", mo: "18:37", ish: "20:07" },
        28: { fa: "4:12", du: "5:48", th: "12:17", as: "15:43", mo: "18:39", ish: "20:09" },
        29: { fa: "4:10", du: "5:46", th: "12:17", as: "15:44", mo: "18:41", ish: "20:11" },
        30: { fa: "4:07", du: "5:44", th: "12:16", as: "15:45", mo: "18:43", ish: "20:12" },
        31: { fa: "4:04", du: "5:41", th: "12:16", as: "15:46", mo: "18:45", ish: "20:14" },
    },
    April: {
        1: { fa: "5:02", du: "6:39", th: "13:16", as: "16:47", mo: "19:46", ish: "21:16" },
        2: { fa: "4:59", du: "6:37", th: "13:15", as: "16:48", mo: "19:48", ish: "21:18" },
        3: { fa: "4:56", du: "6:34", th: "13:15", as: "16:49", mo: "19:49", ish: "21:19" },
        4: { fa: "4:53", du: "6:32", th: "13:15", as: "16:50", mo: "19:52", ish: "21:21" },
        5: { fa: "4:50", du: "6:30", th: "13:15", as: "16:50", mo: "19:53", ish: "21:23" },
        6: { fa: "4:48", du: "6:27", th: "13:14", as: "16:51", mo: "19:55", ish: "21:25" },
        7: { fa: "4:45", du: "6:25", th: "13:14", as: "16:52", mo: "19:56", ish: "21:26" },
        8: { fa: "4:43", du: "6:23", th: "13:14", as: "16:53", mo: "19:58", ish: "21:28" },
        9: { fa: "4:39", du: "6:20", th: "13:13", as: "16:54", mo: "20:00", ish: "21:30" },
        10: { fa: "4:36", du: "6:18", th: "13:13", as: "16:55", mo: "20:02", ish: "21:32" },
        11: { fa: "4:33", du: "6:16", th: "13:13", as: "16:56", mo: "20:04", ish: "21:33" },
        12: { fa: "4:31", du: "6:14", th: "13:13", as: "16:57", mo: "20:05", ish: "21:35" },
        13: { fa: "4:28", du: "6:11", th: "13:12", as: "16:57", mo: "20:07", ish: "21:37" },
        14: { fa: "4:25", du: "6:09", th: "13:12", as: "16:58", mo: "20:09", ish: "21:39" },
        15: { fa: "4:22", du: "6:07", th: "13:12", as: "16:59", mo: "20:10", ish: "21:40" },
        16: { fa: "4:19", du: "6:05", th: "13:12", as: "17:00", mo: "20:13", ish: "21:42" },
        17: { fa: "4:16", du: "6:02", th: "13:11", as: "17:01", mo: "20:14", ish: "21:44" },
        18: { fa: "4:14", du: "6:00", th: "13:11", as: "17:01", mo: "20:16", ish: "21:46" },
        19: { fa: "4:10", du: "5:58", th: "13:11", as: "17:02", mo: "20:18", ish: "21:47" },
        20: { fa: "4:07", du: "5:56", th: "13:11", as: "17:03", mo: "20:19", ish: "21:49" },
        21: { fa: "4:04", du: "5:54", th: "13:11", as: "17:04", mo: "20:21", ish: "21:51" },
        22: { fa: "4:01", du: "5:51", th: "13:10", as: "17:05", mo: "20:23", ish: "21:53" },
        23: { fa: "3:58", du: "5:49", th: "13:10", as: "17:05", mo: "20:25", ish: "21:54" },
        24: { fa: "3:55", du: "5:47", th: "13:10", as: "17:06", mo: "20:26", ish: "21:56" },
        25: { fa: "3:52", du: "5:45", th: "13:10", as: "17:07", mo: "20:28", ish: "21:58" },
        26: { fa: "3:49", du: "5:43", th: "13:10", as: "17:08", mo: "20:30", ish: "21:59" },
        27: { fa: "3:46", du: "5:41", th: "13:10", as: "17:08", mo: "20:32", ish: "22:01" },
        28: { fa: "3:43", du: "5:39", th: "13:09", as: "17:09", mo: "20:33", ish: "22:03" },
        29: { fa: "3:40", du: "5:37", th: "13:09", as: "17:10", mo: "20:35", ish: "22:05" },
        30: { fa: "3:36", du: "5:35", th: "13:09", as: "17:11", mo: "20:37", ish: "22:06" },
    },
    Mai: {
        1: { fa: "3:33", du: "5:33", th: "13:09", as: "17:11", mo: "20:39", ish: "22:08" },
        2: { fa: "3:30", du: "5:31", th: "13:09", as: "17:12", mo: "20:40", ish: "22:10" },
        3: { fa: "3:27", du: "5:29", th: "13:09", as: "17:13", mo: "20:42", ish: "22:12" },
        4: { fa: "3:24", du: "5:27", th: "13:09", as: "17:13", mo: "20:44", ish: "22:13" },
        5: { fa: "3:21", du: "5:25", th: "13:09", as: "17:14", mo: "20:45", ish: "22:15" },
        6: { fa: "3:17", du: "5:24", th: "13:09", as: "17:15", mo: "20:47", ish: "22:17" },
        7: { fa: "3:14", du: "5:22", th: "13:08", as: "17:16", mo: "20:49", ish: "22:18" },
        8: { fa: "3:11", du: "5:20", th: "13:08", as: "17:16", mo: "20:50", ish: "22:20" },
        9: { fa: "3:10", du: "5:18", th: "13:08", as: "17:17", mo: "20:52", ish: "22:22" },
        10: { fa: "3:10", du: "5:16", th: "13:08", as: "17:18", mo: "20:54", ish: "22:23" },
        11: { fa: "3:09", du: "5:15", th: "13:08", as: "17:18", mo: "20:55", ish: "22:25" },
        12: { fa: "3:08", du: "5:13", th: "13:08", as: "17:19", mo: "20:57", ish: "22:25" },
        13: { fa: "3:07", du: "5:11", th: "13:08", as: "17:20", mo: "20:58", ish: "22:28" },
        14: { fa: "3:06", du: "5:10", th: "13:08", as: "17:20", mo: "21:00", ish: "22:30" },
        15: { fa: "3:05", du: "5:08", th: "13:08", as: "17:21", mo: "21:02", ish: "22:31" },
        16: { fa: "3:05", du: "5:07", th: "13:08", as: "17:21", mo: "21:03", ish: "22:33" },
        17: { fa: "3:04", du: "5:05", th: "13:08", as: "17:22", mo: "21:05", ish: "22:34" },
        18: { fa: "3:03", du: "5:04", th: "13:08", as: "17:23", mo: "21:06", ish: "22:36" },
        19: { fa: "3:03", du: "5:02", th: "13:08", as: "17:23", mo: "21:08", ish: "22:37" },
        20: { fa: "3:02", du: "5:01", th: "13:08", as: "17:24", mo: "21:09", ish: "22:39" },
        21: { fa: "3:01", du: "4:59", th: "13:09", as: "17:25", mo: "21:11", ish: "22:40" },
        22: { fa: "3:01", du: "4:58", th: "13:09", as: "17:25", mo: "21:12", ish: "22:42" },
        23: { fa: "3:00", du: "4:57", th: "13:09", as: "17:26", mo: "21:14", ish: "22:43" },
        24: { fa: "2:59", du: "4:56", th: "13:09", as: "17:26", mo: "21:15", ish: "22:45" },
        25: { fa: "2:59", du: "4:54", th: "13:09", as: "17:27", mo: "21:16", ish: "22:46" },
        26: { fa: "2:58", du: "4:53", th: "13:09", as: "17:27", mo: "21:18", ish: "22:47" },
        27: { fa: "2:58", du: "4:52", th: "13:09", as: "17:28", mo: "21:19", ish: "22:49" },
        28: { fa: "2:57", du: "4:51", th: "13:09", as: "17:28", mo: "21:20", ish: "22:50" },
        29: { fa: "2:57", du: "4:50", th: "13:09", as: "17:29", mo: "21:22", ish: "22:51" },
        30: { fa: "2:57", du: "4:49", th: "13:09", as: "17:30", mo: "21:23", ish: "22:52" },
        31: { fa: "2:56", du: "4:48", th: "13:10", as: "17:30", mo: "21:24", ish: "22:54" },
    },
    Juni: {
        1: { fa: "2:56", du: "4:47", th: "13:10", as: "17:31", mo: "21:25", ish: "22:55" },
        2: { fa: "2:55", du: "4:47", th: "13:10", as: "17:31", mo: "21:26", ish: "22:56" },
        3: { fa: "2:55", du: "4:46", th: "13:10", as: "17:32", mo: "21:27", ish: "22:57" },
        4: { fa: "2:55", du: "4:45", th: "13:10", as: "17:32", mo: "21:28", ish: "22:58" },
        5: { fa: "2:55", du: "4:44", th: "13:10", as: "17:32", mo: "21:29", ish: "22:59" },
        6: { fa: "2:54", du: "4:44", th: "13:11", as: "17:33", mo: "21:30", ish: "23:00" },
        7: { fa: "2:54", du: "4:43", th: "13:11", as: "17:33", mo: "21:31", ish: "23:01" },
        8: { fa: "2:54", du: "4:43", th: "13:11", as: "17:34", mo: "21:32", ish: "23:02" },
        9: { fa: "2:54", du: "4:42", th: "13:11", as: "17:34", mo: "21:33", ish: "23:03" },
        10: { fa: "2:54", du: "4:42", th: "13:11", as: "17:35", mo: "21:34", ish: "23:03" },
        11: { fa: "2:54", du: "4:42", th: "13:12", as: "17:35", mo: "21:34", ish: "23:04" },
        12: { fa: "2:54", du: "4:41", th: "13:12", as: "17:35", mo: "21:35", ish: "23:04" },
        13: { fa: "2:54", du: "4:41", th: "13:12", as: "17:36", mo: "21:36", ish: "23:05" },
        14: { fa: "2:54", du: "4:41", th: "13:12", as: "17:36", mo: "21:36", ish: "23:06" },
        15: { fa: "2:54", du: "4:41", th: "13:12", as: "17:36", mo: "21:37", ish: "23:07" },
        16: { fa: "2:54", du: "4:41", th: "13:13", as: "17:37", mo: "21:37", ish: "23:07" },
        17: { fa: "2:54", du: "4:41", th: "13:13", as: "17:37", mo: "21:38", ish: "23:07" },
        18: { fa: "2:54", du: "4:41", th: "13:13", as: "17:37", mo: "21:38", ish: "23:08" },
        19: { fa: "2:54", du: "4:41", th: "13:13", as: "17:38", mo: "21:38", ish: "23:08" },
        20: { fa: "2:54", du: "4:41", th: "13:14", as: "17:38", mo: "21:39", ish: "23:08" },
        21: { fa: "2:55", du: "4:41", th: "13:14", as: "17:38", mo: "21:39", ish: "23:09" },
        22: { fa: "2:55", du: "4:41", th: "13:14", as: "17:38", mo: "21:39", ish: "23:09" },
        23: { fa: "2:55", du: "4:42", th: "13:14", as: "17:38", mo: "21:39", ish: "23:09" },
        24: { fa: "2:55", du: "4:42", th: "13:14", as: "17:39", mo: "21:39", ish: "23:09" },
        25: { fa: "2:56", du: "4:42", th: "13:15", as: "17:39", mo: "21:39", ish: "23:09" },
        26: { fa: "2:56", du: "4:43", th: "13:15", as: "17:39", mo: "21:39", ish: "23:09" },
        27: { fa: "2:56", du: "4:43", th: "13:15", as: "17:39", mo: "21:39", ish: "23:09" },
        28: { fa: "2:57", du: "4:44", th: "13:15", as: "17:39", mo: "21:39", ish: "23:09" },
        29: { fa: "2:57", du: "4:44", th: "13:15", as: "17:39", mo: "21:39", ish: "23:09" },
        30: { fa: "2:58", du: "4:45", th: "13:16", as: "17:39", mo: "21:38", ish: "23:08" },
    },
    Juli: {
        1: { fa: "2:58", du: "4:46", th: "13:16", as: "17:39", mo: "21:38", ish: "23:08" },
        2: { fa: "2:58", du: "4:47", th: "13:16", as: "17:39", mo: "21:38", ish: "23:08" },
        3: { fa: "2:59", du: "4:47", th: "13:16", as: "17:39", mo: "21:37", ish: "23:07" },
        4: { fa: "2:59", du: "4:48", th: "13:16", as: "17:39", mo: "21:37", ish: "23:07" },
        5: { fa: "3:00", du: "4:49", th: "13:17", as: "17:39", mo: "21:36", ish: "23:06" },
        6: { fa: "3:01", du: "4:50", th: "13:17", as: "17:39", mo: "21:36", ish: "23:06" },
        7: { fa: "3:01", du: "4:51", th: "13:17", as: "17:39", mo: "21:35", ish: "23:05" },
        8: { fa: "3:02", du: "4:52", th: "13:17", as: "17:39", mo: "21:36", ish: "23:04" },
        9: { fa: "3:02", du: "4:53", th: "13:17", as: "17:39", mo: "21:34", ish: "23:04" },
        10: { fa: "3:03", du: "4:54", th: "13:17", as: "17:39", mo: "21:33", ish: "23:03" },
        11: { fa: "3:04", du: "4:55", th: "13:17", as: "17:39", mo: "21:32", ish: "23:02" },
        12: { fa: "3:04", du: "4:56", th: "13:18", as: "17:38", mo: "21:31", ish: "23:01" },
        13: { fa: "3:05", du: "4:57", th: "13:18", as: "17:38", mo: "21:30", ish: "23:00" },
        14: { fa: "3:05", du: "4:59", th: "13:18", as: "17:38", mo: "21:29", ish: "22:59" },
        15: { fa: "3:06", du: "5:00", th: "13:18", as: "17:38", mo: "21:28", ish: "22:58" },
        16: { fa: "3:07", du: "5:01", th: "13:18", as: "17:37", mo: "21:27", ish: "22:57" },
        17: { fa: "3:08", du: "5:03", th: "13:18", as: "17:37", mo: "21:26", ish: "22:56" },
        18: { fa: "3:08", du: "5:04", th: "13:18", as: "17:37", mo: "21:25", ish: "22:56" },
        19: { fa: "3:09", du: "5:05", th: "13:18", as: "17:36", mo: "21:24", ish: "22:54" },
        20: { fa: "3:10", du: "5:07", th: "13:18", as: "17:36", mo: "21:22", ish: "22:52" },
        21: { fa: "3:10", du: "5:08", th: "13:18", as: "17:36", mo: "21:21", ish: "22:51" },
        22: { fa: "3:11", du: "5:09", th: "13:18", as: "17:35", mo: "21:20", ish: "22:50" },
        23: { fa: "3:12", du: "5:11", th: "13:18", as: "17:35", mo: "21:18", ish: "22:48" },
        24: { fa: "3:13", du: "5:12", th: "13:18", as: "17:34", mo: "21:17", ish: "22:47" },
        25: { fa: "3:13", du: "5:14", th: "13:18", as: "17:34", mo: "21:15", ish: "22:45" },
        26: { fa: "3:14", du: "5:15", th: "13:18", as: "17:33", mo: "21:14", ish: "22:44" },
        27: { fa: "3:15", du: "5:17", th: "13:18", as: "17:33", mo: "21:12", ish: "22:42" },
        28: { fa: "3:16", du: "5:18", th: "13:18", as: "17:32", mo: "21:11", ish: "22:41" },
        29: { fa: "3:16", du: "5:20", th: "13:18", as: "17:31", mo: "21:09", ish: "22:39" },
        30: { fa: "3:17", du: "5:21", th: "13:18", as: "17:31", mo: "21:08", ish: "22:38" },
        31: { fa: "3:18", du: "5:23", th: "13:18", as: "17:29", mo: "21:06", ish: "22:36" },
    },
    August: {
        1: { fa: "3:19", du: "5:25", th: "13:18", as: "17:29", mo: "21:04", ish: "22:34" },
        2: { fa: "3:19", du: "5:26", th: "13:18", as: "17:29", mo: "21:03", ish: "22:33" },
        3: { fa: "3:20", du: "5:28", th: "13:18", as: "17:28", mo: "21:01", ish: "22:31" },
        4: { fa: "3:21", du: "5:29", th: "13:18", as: "17:27", mo: "20:59", ish: "22:29" },
        5: { fa: "3:23", du: "5:31", th: "13:18", as: "17:26", mo: "20:57", ish: "22:27" },
        6: { fa: "3:26", du: "5:33", th: "13:18", as: "17:25", mo: "20:55", ish: "22:25" },
        7: { fa: "3:29", du: "5:34", th: "13:18", as: "17:25", mo: "20:53", ish: "22:23" },
        8: { fa: "3:32", du: "5:36", th: "13:18", as: "17:24", mo: "20:52", ish: "22:22" },
        9: { fa: "3:35", du: "5:37", th: "13:17", as: "17:23", mo: "20:50", ish: "22:20" },
        10: { fa: "3:38", du: "5:39", th: "13:17", as: "17:22", mo: "20:48", ish: "22:18" },
        11: { fa: "3:41", du: "5:41", th: "13:17", as: "17:21", mo: "20:46", ish: "22:16" },
        12: { fa: "3:44", du: "5:42", th: "13:17", as: "17:20", mo: "20:44", ish: "22:14" },
        13: { fa: "3:46", du: "5:44", th: "13:17", as: "17:19", mo: "20:42", ish: "22:12" },
        14: { fa: "3:49", du: "5:46", th: "13:17", as: "17:18", mo: "20:40", ish: "22:10" },
        15: { fa: "3:52", du: "5:47", th: "13:16", as: "17:17", mo: "20:38", ish: "22:08" },
        16: { fa: "3:55", du: "5:49", th: "13:16", as: "17:16", mo: "20:36", ish: "22:06" },
        17: { fa: "3:57", du: "5:51", th: "13:16", as: "17:15", mo: "20:34", ish: "22:04" },
        18: { fa: "4:00", du: "5:52", th: "13:16", as: "17:14", mo: "20:31", ish: "22:01" },
        19: { fa: "4:02", du: "5:54", th: "13:15", as: "17:12", mo: "20:29", ish: "21:59" },
        20: { fa: "4:05", du: "5:56", th: "13:15", as: "17:11", mo: "20:27", ish: "21:57" },
        21: { fa: "4:08", du: "5:57", th: "13:15", as: "17:10", mo: "20:25", ish: "21:55" },
        22: { fa: "4:10", du: "5:59", th: "13:15", as: "17:09", mo: "20:23", ish: "21:54" },
        23: { fa: "4:13", du: "6:01", th: "13:14", as: "17:08", mo: "20:21", ish: "21:52" },
        24: { fa: "4:15", du: "6:02", th: "13:14", as: "17:06", mo: "20:18", ish: "21:48" },
        25: { fa: "4:17", du: "6:04", th: "13:14", as: "17:05", mo: "20:16", ish: "21:46" },
        26: { fa: "4:20", du: "6:06", th: "13:14", as: "17:04", mo: "20:14", ish: "21:44" },
        27: { fa: "4:22", du: "6:07", th: "13:13", as: "17:02", mo: "20:12", ish: "21:42" },
        28: { fa: "4:25", du: "6:09", th: "13:13", as: "17:01", mo: "20:09", ish: "21:39" },
        29: { fa: "4:27", du: "6:11", th: "13:13", as: "17:00", mo: "20:07", ish: "21:37" },
        30: { fa: "4:29", du: "6:13", th: "13:12", as: "16:58", mo: "20:05", ish: "21:35" },
        31: { fa: "4:32", du: "6:14", th: "13:12", as: "16:57", mo: "20:03", ish: "21:33" },
    },
    September: {
        1: { fa: "4:34", du: "6:16", th: "13:12", as: "16:56", mo: "20:00", ish: "21:30" },
        2: { fa: "4:36", du: "6:18", th: "13:12", as: "16:54", mo: "19:58", ish: "21:28" },
        3: { fa: "4:38", du: "6:19", th: "13:11", as: "16:53", mo: "19:56", ish: "21:26" },
        4: { fa: "4:40", du: "6:21", th: "13:11", as: "16:51", mo: "19:53", ish: "21:23" },
        5: { fa: "4:43", du: "6:23", th: "13:11", as: "16:50", mo: "19:51", ish: "21:21" },
        6: { fa: "4:45", du: "6:24", th: "13:10", as: "16:48", mo: "19:49", ish: "21:19" },
        7: { fa: "4:47", du: "6:26", th: "13:10", as: "16:47", mo: "19:46", ish: "21:16" },
        8: { fa: "4:49", du: "6:28", th: "13:10", as: "16:45", mo: "19:44", ish: "21:14" },
        9: { fa: "4:51", du: "6:29", th: "13:09", as: "16:44", mo: "19:42", ish: "21:12" },
        10: { fa: "4:53", du: "6:31", th: "13:09", as: "16:42", mo: "19:39", ish: "21:09" },
        11: { fa: "4:55", du: "6:33", th: "13:08", as: "16:40", mo: "19:37", ish: "21:07" },
        12: { fa: "4:57", du: "6:34", th: "13:08", as: "16:39", mo: "19:35", ish: "21:05" },
        13: { fa: "4:59", du: "6:36", th: "13:08", as: "16:37", mo: "19:32", ish: "21:02" },
        14: { fa: "5:01", du: "6:38", th: "13:07", as: "16:36", mo: "19:30", ish: "21:00" },
        15: { fa: "5:03", du: "6:39", th: "13:07", as: "16:34", mo: "19:27", ish: "20:57" },
        16: { fa: "5:05", du: "6:41", th: "13:07", as: "16:32", mo: "19:25", ish: "20:55" },
        17: { fa: "5:07", du: "6:43", th: "13:06", as: "16:31", mo: "19:23", ish: "20:53" },
        18: { fa: "5:09", du: "6:44", th: "13:06", as: "16:29", mo: "19:20", ish: "20:50" },
        19: { fa: "5:11", du: "6:46", th: "13:06", as: "16:27", mo: "19:18", ish: "20:48" },
        20: { fa: "5:13", du: "6:48", th: "13:05", as: "16:26", mo: "19:16", ish: "20:46" },
        21: { fa: "5:15", du: "6:49", th: "13:05", as: "16:24", mo: "19:13", ish: "20:43" },
        22: { fa: "5:17", du: "6:51", th: "13:05", as: "16:22", mo: "19:11", ish: "20:41" },
        23: { fa: "5:19", du: "6:53", th: "13:04", as: "16:21", mo: "19:08", ish: "20:38" },
        24: { fa: "5:21", du: "6:54", th: "13:04", as: "16:19", mo: "19:06", ish: "20:36" },
        25: { fa: "5:23", du: "6:56", th: "13:04", as: "16:17", mo: "19:04", ish: "20:34" },
        26: { fa: "5:25", du: "6:58", th: "13:03", as: "16:15", mo: "19:01", ish: "20:31" },
        27: { fa: "5:26", du: "6:59", th: "13:03", as: "16:14", mo: "18:59", ish: "20:29" },
        28: { fa: "5:28", du: "7:01", th: "13:03", as: "16:12", mo: "18:57", ish: "20:27" },
        29: { fa: "5:30", du: "7:03", th: "13:02", as: "16:10", mo: "18:54", ish: "20:24" },
        30: { fa: "5:32", du: "7:04", th: "13:02", as: "16:08", mo: "18:52", ish: "20:22" },
    },
    Oktober: {
        1: { fa: "5:34", du: "7:06", th: "13:02", as: "16:07", mo: "18:49", ish: "20:19" },
        2: { fa: "5:36", du: "7:08", th: "13:01", as: "16:05", mo: "18:47", ish: "20:17" },
        3: { fa: "5:37", du: "7:10", th: "13:01", as: "16:03", mo: "18:45", ish: "20:15" },
        4: { fa: "5:39", du: "7:11", th: "13:01", as: "16:02", mo: "18:42", ish: "20:12" },
        5: { fa: "5:41", du: "7:13", th: "13:00", as: "16:00", mo: "18:40", ish: "20:10" },
        6: { fa: "5:43", du: "7:15", th: "13:00", as: "15:58", mo: "18:38", ish: "20:08" },
        7: { fa: "5:44", du: "7:16", th: "13:00", as: "15:56", mo: "18:35", ish: "20:05" },
        8: { fa: "5:46", du: "7:18", th: "12:59", as: "15:55", mo: "18:33", ish: "20:03" },
        9: { fa: "5:48", du: "7:20", th: "12:59", as: "15:53", mo: "18:31", ish: "20:01" },
        10: { fa: "5:50", du: "7:22", th: "12:59", as: "15:51", mo: "18:29", ish: "19:59" },
        11: { fa: "5:51", du: "7:23", th: "12:59", as: "15:49", mo: "18:26", ish: "19:56" },
        12: { fa: "5:53", du: "7:25", th: "12:58", as: "15:48", mo: "18:24", ish: "19:54" },
        13: { fa: "5:55", du: "7:27", th: "12:58", as: "15:46", mo: "18:22", ish: "19:52" },
        14: { fa: "5:57", du: "7:29", th: "12:58", as: "15:44", mo: "18:20", ish: "19:50" },
        15: { fa: "5:58", du: "7:30", th: "12:58", as: "15:43", mo: "18:17", ish: "19:47" },
        16: { fa: "6:00", du: "7:32", th: "12:57", as: "15:41", mo: "18:15", ish: "19:45" },
        17: { fa: "6:02", du: "7:34", th: "12:57", as: "15:39", mo: "18:13", ish: "19:43" },
        18: { fa: "6:03", du: "7:36", th: "12:57", as: "15:38", mo: "18:11", ish: "19:41" },
        19: { fa: "6:05", du: "7:38", th: "12:57", as: "15:36", mo: "18:09", ish: "19:39" },
        20: { fa: "6:07", du: "7:39", th: "12:57", as: "15:34", mo: "18:06", ish: "19:36" },
        21: { fa: "6:08", du: "7:41", th: "12:56", as: "15:33", mo: "18:04", ish: "19:34" },
        22: { fa: "6:10", du: "7:43", th: "12:56", as: "15:31", mo: "18:02", ish: "19:32" },
        23: { fa: "6:12", du: "7:45", th: "12:56", as: "15:29", mo: "18:00", ish: "19:30" },
        24: { fa: "6:13", du: "7:47", th: "12:56", as: "15:28", mo: "17:58", ish: "19:28" },
        25: { fa: "6:15", du: "7:48", th: "12:56", as: "15:26", mo: "17:56", ish: "19:26" },
        26: { fa: "6:17", du: "7:50", th: "12:56", as: "15:25", mo: "17:54", ish: "19:24" },
        27: { fa: "6:18", du: "7:52", th: "12:56", as: "15:23", mo: "17:52", ish: "19:22" },
        28: { fa: "6:20", du: "7:54", th: "12:56", as: "15:21", mo: "17:50", ish: "19:20" },
        29: { fa: "6:22", du: "7:56", th: "12:56", as: "15:20", mo: "17:48", ish: "19:18" },
        30: { fa: "6:23", du: "7:58", th: "12:55", as: "15:18", mo: "17:46", ish: "19:16" },
        31: { fa: "6:25", du: "7:59", th: "12:55", as: "15:16", mo: "17:44", ish: "19:14" },
    },
    November: {
        1: { fa: "5:26", du: "7:01", th: "11:55", as: "14:14", mo: "16:42", ish: "18:12" },
        2: { fa: "5:28", du: "7:03", th: "11:55", as: "14:14", mo: "16:40", ish: "18:10" },
        3: { fa: "5:30", du: "7:05", th: "11:55", as: "14:13", mo: "16:38", ish: "18:08" },
        4: { fa: "5:31", du: "7:07", th: "11:55", as: "14:11", mo: "16:37", ish: "18:07" },
        5: { fa: "5:33", du: "7:08", th: "11:55", as: "14:10", mo: "16:35", ish: "18:05" },
        6: { fa: "5:34", du: "7:07", th: "11:55", as: "14:07", mo: "16:33", ish: "18:03" },
        7: { fa: "5:36", du: "7:10", th: "11:56", as: "14:07", mo: "16:31", ish: "18:01" },
        8: { fa: "5:38", du: "7:14", th: "11:56", as: "14:06", mo: "16:29", ish: "18:00" },
        9: { fa: "5:39", du: "7:16", th: "11:56", as: "14:05", mo: "16:28", ish: "17:58" },
        10: { fa: "5:41", du: "7:18", th: "11:56", as: "14:03", mo: "16:26", ish: "17:56" },
        11: { fa: "5:42", du: "7:19", th: "11:56", as: "14:02", mo: "16:24", ish: "17:55" },
        12: { fa: "5:44", du: "7:21", th: "11:56", as: "14:01", mo: "16:23", ish: "17:53" },
        13: { fa: "5:45", du: "7:23", th: "11:56", as: "14:00", mo: "16:22", ish: "17:52" },
        14: { fa: "5:47", du: "7:25", th: "11:56", as: "13:59", mo: "16:20", ish: "17:50" },
        15: { fa: "5:48", du: "7:27", th: "11:56", as: "13:58", mo: "16:19", ish: "17:49" },
        16: { fa: "5:50", du: "7:28", th: "11:57", as: "13:57", mo: "16:17", ish: "17:47" },
        17: { fa: "5:51", du: "7:30", th: "11:57", as: "13:56", mo: "16:16", ish: "17:46" },
        18: { fa: "5:53", du: "7:32", th: "11:57", as: "13:54", mo: "16:14", ish: "17:45" },
        19: { fa: "5:54", du: "7:34", th: "11:57", as: "13:54", mo: "16:13", ish: "17:43" },
        20: { fa: "5:56", du: "7:35", th: "11:58", as: "13:53", mo: "16:12", ish: "17:42" },
        21: { fa: "5:57", du: "7:37", th: "11:58", as: "13:52", mo: "16:11", ish: "17:41" },
        22: { fa: "5:58", du: "7:39", th: "11:58", as: "13:51", mo: "16:10", ish: "17:40" },
        23: { fa: "6:00", du: "7:40", th: "11:58", as: "13:50", mo: "16:09", ish: "17:39" },
        24: { fa: "6:01", du: "7:42", th: "11:59", as: "13:49", mo: "16:07", ish: "17:38" },
        25: { fa: "6:03", du: "7:44", th: "11:59", as: "13:49", mo: "16:07", ish: "17:37" },
        26: { fa: "6:04", du: "7:45", th: "11:59", as: "13:48", mo: "16:05", ish: "17:36" },
        27: { fa: "6:05", du: "7:47", th: "12:00", as: "13:47", mo: "16:05", ish: "17:35" },
        28: { fa: "6:06", du: "7:48", th: "12:00", as: "13:47", mo: "16:04", ish: "17:34" },
        29: { fa: "6:08", du: "7:50", th: "12:00", as: "13:46", mo: "16:03", ish: "17:33" },
        30: { fa: "6:09", du: "7:51", th: "12:01", as: "13:45", mo: "16:02", ish: "17:32" },
    },
    Dezember: {
        1: { fa: "6:10", du: "7:53", th: "12:01", as: "13:45", mo: "16:01", ish: "17:32" },
        2: { fa: "6:11", du: "7:54", th: "12:01", as: "13:44", mo: "16:01", ish: "17:31" },
        3: { fa: "6:12", du: "7:55", th: "12:02", as: "13:44", mo: "16:00", ish: "17:30" },
        4: { fa: "6:14", du: "7:57", th: "12:02", as: "13:44", mo: "16:00", ish: "17:30" },
        5: { fa: "6:15", du: "7:58", th: "12:03", as: "13:43", mo: "15:59", ish: "17:29" },
        6: { fa: "6:16", du: "7:59", th: "12:03", as: "13:43", mo: "15:59", ish: "17:29" },
        7: { fa: "6:17", du: "8:01", th: "12:03", as: "13:43", mo: "15:58", ish: "17:29" },
        8: { fa: "6:18", du: "8:02", th: "12:04", as: "13:43", mo: "15:58", ish: "17:28" },
        9: { fa: "6:19", du: "8:03", th: "12:04", as: "13:43", mo: "15:58", ish: "17:28" },
        10: { fa: "6:20", du: "8:04", th: "12:05", as: "13:43", mo: "15:58", ish: "17:28" },
        11: { fa: "6:21", du: "8:05", th: "12:05", as: "13:43", mo: "15:58", ish: "17:28" },
        12: { fa: "6:22", du: "8:06", th: "12:06", as: "13:43", mo: "15:58", ish: "17:28" },
        13: { fa: "6:22", du: "8:07", th: "12:06", as: "13:43", mo: "15:58", ish: "17:28" },
        14: { fa: "6:23", du: "8:08", th: "12:07", as: "13:43", mo: "15:58", ish: "17:28" },
        15: { fa: "6:24", du: "8:09", th: "12:07", as: "13:43", mo: "15:58", ish: "17:28" },
        16: { fa: "6:25", du: "8:10", th: "12:08", as: "13:43", mo: "15:58", ish: "17:28" },
        17: { fa: "6:25", du: "8:11", th: "12:08", as: "13:43", mo: "15:58", ish: "17:28" },
        18: { fa: "6:26", du: "8:11", th: "12:09", as: "13:44", mo: "15:58", ish: "17:28" },
        19: { fa: "6:27", du: "8:12", th: "12:09", as: "13:44", mo: "15:59", ish: "17:29" },
        20: { fa: "6:27", du: "8:12", th: "12:10", as: "13:44", mo: "15:59", ish: "17:29" },
        21: { fa: "6:28", du: "8:13", th: "12:10", as: "13:45", mo: "16:00", ish: "17:30" },
        22: { fa: "6:28", du: "8:14", th: "12:11", as: "13:45", mo: "16:00", ish: "17:30" },
        23: { fa: "6:29", du: "8:14", th: "12:11", as: "13:46", mo: "16:01", ish: "17:31" },
        24: { fa: "6:29", du: "8:14", th: "12:12", as: "13:46", mo: "16:01", ish: "17:31" },
        25: { fa: "6:29", du: "8:15", th: "12:12", as: "13:47", mo: "16:02", ish: "17:32" },
        26: { fa: "6:30", du: "8:15", th: "12:13", as: "13:48", mo: "16:03", ish: "17:33" },
        27: { fa: "6:30", du: "8:15", th: "12:13", as: "13:48", mo: "16:03", ish: "17:33" },
        28: { fa: "6:30", du: "8:15", th: "12:14", as: "13:48", mo: "16:04", ish: "17:34" },
        29: { fa: "6:31", du: "8:15", th: "12:14", as: "13:49", mo: "16:05", ish: "17:35" },
        30: { fa: "6:31", du: "8:15", th: "12:15", as: "13:50", mo: "16:06", ish: "17:36" },
        31: { fa: "6:31", du: "8:15", th: "12:15", as: "13:51", mo: "16:07", ish: "17:37" },
    }
});
//# sourceMappingURL=times.js.map

/***/ })

},[195]);
//# sourceMappingURL=main.js.map