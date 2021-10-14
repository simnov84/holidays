async function getData(val1, val2, val3) {
    const user = await fetch(
        `https://holidays.abstractapi.com/v1/?api_key=872dc7a9bb304f549003f2b53f0382ed&country=IN&year=${val3}&month=${val2}&day=${val1}`
    );
    const data = await user.json();

    data.forEach(el => {
        let Div = document.createElement('div');
        Div.classList.add('card');
        Div.innerHTML =
            `
            <div>Holiday</div>
            <div>${el.name}</div>
            <div>Date</div>
            <div>${el.date}</div>
            <div>Weekday</div>
            <div class="week">${el.week_day}</div>
            <div>Type</div>
            <div>${el.type}</div>
            `;
        main.append(Div);
    });
}
let main = document.getElementById('content');
function search() {
    let val1 = document.getElementById('date1').value;

    let val0 = document.getElementById('month');
    let val2 = val0.options[val0.selectedIndex].value;

    let val3 = document.getElementById('year').value;

    if (val1 < 32 && val3 < 2100) {
        getData(val1, val2, val3);
        main.innerHTML = "";
    }
    else {
        alert('Please Enter the Date and Year')
    }
}