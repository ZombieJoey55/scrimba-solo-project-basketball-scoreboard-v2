let homeEl = document.getElementById("score_home_num")
let minuteEL = document.getElementById("minute_num")
let secondEL = document.getElementById("second_num")
let awayEl = document.getElementById("score_away_num")
let homeShotEL = document.getElementById("home_shot_num")
let homeCornerEL = document.getElementById("home_corner_num")
let homeSaveEL = document.getElementById("home_save_num")
let periodHeaderEL = document.getElementById("period_header")
let periodNumEL = document.getElementById("period_num")
let awayShotEL = document.getElementById("away_shot_num")
let awayCornerEL = document.getElementById("away_corner_num")
let awaySaveEL = document.getElementById("away_save_num")

let firstHalfEL = document.getElementById("period_1_btn")
let secondHalfEL = document.getElementById("period_2_btn")
let firstHalfExEL = document.getElementById("period_1_extra_time_btn")
let secondHalfExEL = document.getElementById("period_2_extra_time_btn")
let pensEL = document.getElementById("penalties_btn")
let periodButtons = [firstHalfEL, secondHalfEL, firstHalfExEL, secondHalfExEL, pensEL]

let home_count = 0
let minute_count = 0
let second_count = 0
let away_count = 0
let home_shot_count = 0
let home_corner_count = 0
let home_save_count = 0
let away_shot_count = 0
let away_corner_count = 0
let away_save_count = 0

function updatePeriodAria(activeButton) {
    periodButtons.forEach(function(button) {
        button.setAttribute("aria-pressed", String(button === activeButton))
    })
}

//new game
function new_game() {
    //reset score
    home_count = 0
    homeEl.textContent = home_count
    away_count = 0
    awayEl.textContent = away_count
    //reset timer
    minute_count = 0
    minuteEL.textContent = String(minute_count).padStart(2, '0')
    second_count = 0
    secondEL.textContent = String(second_count).padStart(2, '0')
    //reset home stats
    home_shot_count = 0
    homeShotEL.textContent = home_shot_count
    home_corner_count = 0
    homeCornerEL.textContent = home_corner_count
    home_save_count = 0
    homeSaveEL.textContent = home_save_count
    //reset away stats
    away_shot_count = 0
    awayShotEL.textContent = away_shot_count
    away_corner_count = 0
    awayCornerEL.textContent = away_corner_count
    away_save_count = 0
    awaySaveEL.textContent = away_save_count
    //period
    periodNumEL.textContent = 1
    periodHeaderEL.textContent = "Period"
    periodHeaderEL.style.fontSize = "50px"
    firstHalfEL.classList.add("btn_active");
    secondHalfEL.classList.remove("btn_active");
    firstHalfExEL.classList.remove("btn_active");
    secondHalfExEL.classList.remove("btn_active");
    pensEL.classList.remove("btn_active");
    updatePeriodAria(firstHalfEL)
    updateWinner();
    
}

// home score

function decrement_home_1() {
    home_count = Math.max(0, home_count-1);
    homeEl.textContent = home_count
    updateWinner();
}

function increment_home_1() {
    home_count += 1
    homeEl.textContent = home_count
    updateWinner();
}

// timer

function increment_minute_1() {
    minute_count += 1
    minuteEL.textContent = String(minute_count).padStart(2, '0')
}

function decrement_minute_1() {
    minute_count = Math.max(0, minute_count-1);
    minuteEL.textContent = String(minute_count).padStart(2, '0')
}

function increment_second_1() {
    second_count += 1
    if (second_count > 59) {
        second_count = 0
        minute_count += 1
        minuteEL.textContent = String(minute_count).padStart(2, '0')
    }
    secondEL.textContent = String(second_count).padStart(2, '0')
}

function decrement_second_1() {
    if (second_count === 0) {
        if (minute_count > 0) {
            minute_count -= 1
            second_count = 59
            minuteEL.textContent = String(minute_count).padStart(2, '0')
        }
    } else {
        second_count -= 1
    }
    secondEL.textContent = String(second_count).padStart(2, '0')
}

// away score

function decrement_away_1() {
    away_count = Math.max(0, away_count-1);
    awayEl.textContent = away_count
    updateWinner();
}

function increment_away_1() {
    away_count += 1
    awayEl.textContent = away_count
    updateWinner();
}

// stats
// home
function decrement_shots_home_1() {
    home_shot_count = Math.max(0, home_shot_count-1);
    homeShotEL.textContent = home_shot_count
}

function increment_shots_home_1() {
    home_shot_count += 1
    homeShotEL.textContent = home_shot_count
}

function decrement_corners_home_1() {
    home_corner_count = Math.max(0, home_corner_count-1);
    homeCornerEL.textContent = home_corner_count
}

function increment_corners_home_1() {
    home_corner_count += 1
    homeCornerEL.textContent = home_corner_count
}

function decrement_saves_home_1() {
    home_save_count = Math.max(0, home_save_count-1);
    homeSaveEL.textContent = home_save_count
}

function increment_saves_home_1() {
    home_save_count += 1
    homeSaveEL.textContent = home_save_count
}

// period
function period_1() {
    periodNumEL.textContent = 1
    periodHeaderEL.textContent = "Period"
    periodHeaderEL.style.fontSize = "50px"
    firstHalfEL.classList.add("btn_active");
    secondHalfEL.classList.remove("btn_active");
    firstHalfExEL.classList.remove("btn_active");
    secondHalfExEL.classList.remove("btn_active");
    pensEL.classList.remove("btn_active");
    updatePeriodAria(firstHalfEL)
}

function period_2() {
    periodNumEL.textContent = 2
    periodHeaderEL.textContent = "Period"
    periodHeaderEL.style.fontSize = "50px"
    firstHalfEL.classList.remove("btn_active");
    secondHalfEL.classList.add("btn_active");
    firstHalfExEL.classList.remove("btn_active");
    secondHalfExEL.classList.remove("btn_active");
    pensEL.classList.remove("btn_active");
    updatePeriodAria(secondHalfEL)
}

function period_1_extra_time() {
    periodNumEL.textContent = 1
    periodHeaderEL.textContent = "Extra-Time"
    periodHeaderEL.style.fontSize = "30px"
    firstHalfEL.classList.remove("btn_active");
    secondHalfEL.classList.remove("btn_active");
    firstHalfExEL.classList.add("btn_active");
    secondHalfExEL.classList.remove("btn_active");
    pensEL.classList.remove("btn_active");
    updatePeriodAria(firstHalfExEL)
}

function period_2_extra_time() {
    periodNumEL.textContent = 2
    periodHeaderEL.textContent = "Extra-Time"
    periodHeaderEL.style.fontSize = "30px"
    firstHalfEL.classList.remove("btn_active");
    secondHalfEL.classList.remove("btn_active");
    firstHalfExEL.classList.remove("btn_active");
    secondHalfExEL.classList.add("btn_active");
    pensEL.classList.remove("btn_active");
    updatePeriodAria(secondHalfExEL)
}

function penalties(){
    periodHeaderEL.textContent = "Penalties"
    periodNumEL.textContent = ""
    periodHeaderEL.style.fontSize = "35px"
    firstHalfEL.classList.remove("btn_active");
    secondHalfEL.classList.remove("btn_active");
    firstHalfExEL.classList.remove("btn_active");
    secondHalfExEL.classList.remove("btn_active");
    pensEL.classList.add("btn_active");
    updatePeriodAria(pensEL)
}

// away
function decrement_shots_away_1() {
    away_shot_count = Math.max(0, away_shot_count-1);
    awayShotEL.textContent = away_shot_count
}

function increment_shots_away_1() {
    away_shot_count += 1
    awayShotEL.textContent = away_shot_count
}

function decrement_corners_away_1() {
    away_corner_count = Math.max(0, away_corner_count-1);
    awayCornerEL.textContent = away_corner_count
}

function increment_corners_away_1() {
    away_corner_count += 1
    awayCornerEL.textContent = away_corner_count
}

function decrement_saves_away_1() {
    away_save_count = Math.max(0, away_save_count-1);
    awaySaveEL.textContent = away_save_count
}

function increment_saves_away_1() {
    away_save_count += 1
    awaySaveEL.textContent = away_save_count
}

//updateWinner function
function updateWinner() {
  homeEl.classList.remove("winner");
  awayEl.classList.remove("winner");

  if (home_count > away_count) {
    homeEl.classList.add("winner");
  } else if (away_count > home_count) {
    awayEl.classList.add("winner");
  }
}
