
const accordians = document.querySelectorAll('.accordian');

let openedAccordians = [];

accordians.forEach((accordian, index) => {

    const question = accordian.querySelector('.question');
    const icon = accordian.querySelector('.accordianIcon');

    question.addEventListener('click', () => {
        if(!question.classList.contains('active_question')) {
            question.classList.add('active_question');
            accordian.style.maxHeight = accordian.scrollHeight+'px';
            icon.classList.add('active_accordianIcon');
            openedAccordians.push(index);
        }
        if(openedAccordians.length == 2) {
            closePreveousAccordian(openedAccordians[0]);
        }
    })
})

function closePreveousAccordian(preOpenedAccordian) {
    const accordian = accordians[preOpenedAccordian];

    const question = accordian.querySelector('.question');
    const icon = accordian.querySelector('.accordianIcon');

    question.classList.remove('active_question');
    icon.classList.remove('active_accordianIcon');
    accordian.style.maxHeight = '50px';

    openedAccordians.shift();
}
