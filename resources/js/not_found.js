const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

function show_reason() {
    const reason = urlParams.get('reason');
    console.log('reason', reason);
    const reason_div = document.createElement('div');
    reason_div.setAttribute('class', 'reason');
    const reason_text = document.createTextNode(reason);
    reason_div.appendChild(reason_text);
    document.getElementById('not_found').appendChild(reason_div);
}

show_reason();