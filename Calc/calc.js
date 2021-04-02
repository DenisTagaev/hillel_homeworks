const btnAdd = document.querySelector('#addnew');

let race = [];

btnAdd.onclick = function() {
    const form = document.querySelector('#Race-form');
    let newOne = {};

    function addMember() {
        newOne = {
            time: form.elements[2].value,
            Track: form.elements[1].value,
            Name: form.elements[0].value
        };
        let min = +newOne.time.split(":")[1]*60000;
        let sec = +newOne.time.split(":")[2]*1000;
        let ms = +newOne.time.split(".")[1];
        let res = min + sec + ms;
        newOne.res = res;
    };
    addMember();
    race.push(newOne);
    // console.log(newOne);
}

const btnShowList = document.querySelector('#group');

btnShowList.onclick = function() {
    let ol = document.querySelector('#race-list');
    
    if (race.length !== 0) {
        race.sort( (a, b) => a.res - b.res );
        list = race.map(el => `<li> ${el.Name + " " + el.Track + " " + el.time}</li>`).join('');
        ol.innerHTML = `<h3>Race Results</h3> ${list}`;
        ol.style.display = 'block';
        btnShowList.innerHTML = "Update group";
    } else {
        throw {
            name:'Error',
            message: `Group is empty`,
        }
    }
}