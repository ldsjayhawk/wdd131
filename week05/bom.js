//..declare variables..//
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChaptersList() || [];

//..loop through chapter list..//
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

//..when button is clicked, add chapter..//
button.addEventListener('click', () => {
    if (input.value !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
        return ("Chapter Added");
    } else {
        return ("Enter Chapter")
    };
});

function displayList(item) {
    let li = document.createElement('li');
    let delButton = document.createElement('button');
    li.textcontent = item;
    delButton.textContent = '❌';
    delButton.classList.add('delete')
    li.append(delButton);
    list.append(li);
    delButton.addEventListener('click', function() {
        list.removeChild('li');
        deleteChapter(li.textcontent);
        input.focus();
    });
    console.log('I like to copy codeiinstead of typing it out...')
};

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item != chapter);
    setChapterList();
};

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
  }

function getChapterList() {
    return JSON.parse(localStorage.getItem('myfavBOMList'));
}

