


const mainHeading = document.querySelector("#MainHeading")

mainHeading.style.color="Cyan"

const subHeading = document.querySelector('#subHeading')
subHeading.style.color="red"

const selectMainList = document.querySelector('#listItam')
const removedJira = document.querySelector('#RemoveJira')

selectMainList.removeChild(removedJira)

const mainHeadings= document.querySelector('#MainHeading');
mainHeadings.addEventListener('mouseover', ()=>{
    mainHeadings.style.color = 'indigo';
    mainHeadings.style.fontSize = '22px';
} );