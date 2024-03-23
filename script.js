let names = ['Alex', 'Berta', 'Christian'];

function showNames() {
    let list = document.getElementById('list');

    list.innerHTML = '';

    for (let index = 0; index < names.length; index++) {
        let name = names[index];
        list.innerHTML += `
    <li>${name}</li>
    `;
    }
}

function filterNames() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();

    let list = document.getElementById('list');

    list.innerHTML = '';

    for (let index = 0; index < names.length; index++) {
        let name = names[index];
        if (name.toLowerCase().includes(search)) {
            list.innerHTML += `
            <li>${name}</li>
            `;
        }
    }
}