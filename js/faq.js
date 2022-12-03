let faq = [
    ['How much are you going to charge me?', 'I\'m not here to rip you off, just trying to make an honest living. The price will depend on the scale of the project.'],
    ['What is the best way of contacting you?', "I'm most active on <a href='mailto:petr.bohac@tul.cz'>email</a>, but you can also reach me on <a href='https://twitter.com/pycrs_' target='_blank'>twitter</a>."],
    ['What is your favorite color?', 'Blue.'],
    ['What is the meaning of life?', '42.'],
    ['What happens if I don\'t pay you?', 'I\'ll send my lawyers after you.'],
    ['What happens after you finish the project?', 'I\'ll be happy to help you with any future updates.'],
    ['Do you use GitHub Copilot?', 'You bet I do, in fact I\'m using it right now.'],
]

const container = document.querySelector('#faq');

for (let [index, [q, a]] of faq.entries()) {
    container.innerHTML += questionHTML(index, q, a);
}


function questionHTML(index, q, a) {
    return `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                                    ${q}
                                </button>
                            </div>
                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#faq">
                                <div class="card-body">
                                    ${a}
                                </div>
                            </div>
                        </div>`
}