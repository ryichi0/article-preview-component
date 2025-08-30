let shareBtn = document.getElementById('share-btn')
let links = document.getElementById('active')

console.log(links.style.display = 'none')
shareBtn.addEventListener('click', displaySharingIcons)
function displaySharingIcons() {
  if (links.style.display = 'none') {
    links.style.display = 'flex';
  }  
}
