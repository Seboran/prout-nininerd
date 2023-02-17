const tamerElement = document.getElementsByClassName('tamer')[0]
const displayTamer = function () {
  tamerElement.setAttribute('style', 'display: unset;')
}
document.getElementsByTagName('button')[0].addEventListener('click', displayTamer)
