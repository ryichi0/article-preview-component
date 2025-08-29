let shareBtn = document.getElementById('share-btn')
let links = document.getElementById('link-active-state')

shareBtn.addEventListener('click', displaySharingIcons)
function displaySharingIcons() {
  console.log(links)
  links.style = 'display:flex'
}