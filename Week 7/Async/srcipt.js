/*function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

let myPromise = new Promise(function (myResolve, myReject) {
    myResolve();
    myReject();
});

myPromise.then(
    function (value) {
        console.log('promise was resolved');
    },
    function (error) {
        console.log('promise was rejected', reason);
    }
)


function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function (resolve, reject) {
    const burger = ["Zinger", "Chicken", "Beef"];
    
    let i = burger.indexOf("Chicken"); 

    if (i !== -1) {
        resolve('Promise Handled Successfully');
    } else {
        reject('Error in promise');
    }
});

myPromise.then(
    function (value) {
        myDisplayer(value);
    },

    function (error) {
        myDisplayer(error);
    }
)
*/

const urlGET = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8WNv70IZopewNg7O8fju/scores/';

const sc = document.getElementById('sc');
const fetchData = () => {
    fetch(urlGET, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    .then((response) => {
        if(!response.ok) {
            throw new Error('Network Response was no OK');
        }
        return response.json();
    })

        .then((data) => {
            console.log(data);
            
        })
}

fetchData();


