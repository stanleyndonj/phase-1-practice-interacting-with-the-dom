let counter = 0;
let timerId;

const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('plus');
const decrementButton = document.getElementById('minus');
const likeButton = document.getElementById('heart');
const likesList = document.querySelector('.likes');
const pauseButton = document.getElementById('pause');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsList = document.getElementById('list');

function startTimer() {
    timerId = setInterval(() => {
        counter++;
        counterElement.textContent = counter;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', () => {
    startTimer();
});

incrementButton.addEventListener('click', () => {
    counter++;
    counterElement.textContent = counter;
});

decrementButton.addEventListener('click', () => {
    counter--;
    counterElement.textContent = counter;
});

likeButton.addEventListener('click', () => {
    let likeItem = document.querySelector(`[data-num="${counter}"]`);
    if (likeItem) {
        let likeCount = likeItem.querySelector('.like-count');
        likeCount.textContent = parseInt(likeCount.textContent) + 1;
    } else {
        likeItem = document.createElement('li');
        likeItem.setAttribute('data-num', counter);
        likeItem.innerHTML = `${counter} has been liked <span class="like-count">1</span> times`;
        likesList.appendChild(likeItem);
    }
});

pauseButton.addEventListener('click', () => {
    if (pauseButton.textContent === 'pause') {
        clearInterval(timerId);
        pauseButton.textContent = 'resume';
        disableButtons(true);
    } else {
        startTimer();
        pauseButton.textContent = 'pause';
        disableButtons(false);
    }
});

function disableButtons(disable) {
    incrementButton.disabled = disable;
    decrementButton.disabled = disable;
    likeButton.disabled = disable;
}

commentForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const comment = document.createElement('p');
    comment.textContent = commentInput.value;
    commentsList.appendChild(comment);
    commentInput.value = '';
});
