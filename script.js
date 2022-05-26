const but = document.querySelector('.button');

function check(i) {
    return Math.floor(Math.random() * i.length);
}

but.addEventListener('click', () => {
    const symbolCollection = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    let color1 = '',
        color2 = '',
        symbol = 0;

    for(let i = 0; i < 6; i++) {
        symbol = check(symbolCollection);
        color1 += symbolCollection[symbol];

        symbol = check(symbolCollection);
        color2 += symbolCollection[symbol];
    }

    document.body.style.background = `linear-gradient(45deg, #${color1}, #${color2})`;
});

