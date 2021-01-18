let aside = document.querySelector(`aside`);
let main = document.querySelector(`main`);

aside.addEventListener(`click`, function (event) {
    let target = event.target;

    if (target.tagName != `H3`) {
        return;
    } else {
        target.parentElement.classList.toggle(`hide`);
    }
});

main.addEventListener(`click`, function (event) {
    let target = event.target;

    if (target.tagName != `H3`) {
        return;
    } else {
        target.parentElement.classList.toggle(`hide`);
    }
});
