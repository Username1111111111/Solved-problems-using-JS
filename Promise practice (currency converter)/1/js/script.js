let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', './js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.onreadystatechange = function () {
        let promise = new Promise( (resolve, reject) => {
            if (request.readyState === 4 && request.status == 200) {
                resolve();
            } else {
                reject();
            }
        });

        promise
            .then(() => {
                let data = JSON.parse(request.response);
                inputUsd.value = inputRub.value / data.usd;
            })
            .catch(() => {
                inputUsd.value = "Что-то пошло не так!";
            });
    };
});