let fluidImg = document.getElementsByClassName("img-fluid")
// console.log(fluidImg)

fluidImg[0].addEventListener("mouseenter", () => {
    fluidImg[0].style.transform ='scale(1.2)'
    fluidImg[0].style.transition = 'transform 0.3s'
});

fluidImg[0].addEventListener("mouseleave", () => {
    fluidImg[0].style.transform ='scale(1.0)'
    fluidImg[0].style.transition = 'transform 0.3s'
});

fluidImg[1].addEventListener("mouseenter", () => {
    fluidImg[1].style.transform ='scale(1.2)'
    fluidImg[1].style.transition = 'transform 0.3s'
});

fluidImg[1].addEventListener("mouseleave", () => {
    fluidImg[1].style.transform ='scale(1.0)'
    fluidImg[1].style.transition = 'transform 0.3s'
});

let links = document.getElementsByTagName('a');
console.log(links);

let linksArray = Array.from(links);
console.log(linksArray)

linksArray.forEach(link => {
    link.addEventListener("mouseenter", () =>{
       link.style.color ="hotpink";    
    })
})

linksArray.forEach(link => {
    link.addEventListener("mouseleave", () =>{
       link.style.color ="black";    
    })
})

const logo = document.getElementsByClassName('logo-heading')
console.log(logo)
logo[0].addEventListener("click", () =>{
    logo[0].style.color ="hotPink";
})

const sectionTitles = document.getElementsByTagName('h2');
const sectionTitlesArray = Array.from(sectionTitles);
console.log(sectionTitlesArray)

sectionTitlesArray.forEach(title => {
    title.addEventListener("click", () => {
        title.style.color ='hotPink'
    })
})
