var onlyButton = document.querySelector('.clickhere');
onlyButton.addEventListener('click', function() {
  document.getElementById('emptyParagraph').classList.add('pinkMonkey');
});

console.log(onlyButton);

document.getElementById('emptyParagraph').innerHTML = "I was just added";
