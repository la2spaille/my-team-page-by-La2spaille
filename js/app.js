const allImg = Array.from(document.querySelectorAll('.w-gallery-elements'))
let currentIndex = 0 
allImg.forEach((img,index) => {
    img.addEventListener('mouseenter', (e) => {
        currentIndex = index
        allImg.forEach((img, index) =>{
            if (currentIndex != index) {
                img.classList.add('blur')
            }
        })
        e.stopPropagation()
    })
    img.addEventListener('mouseleave', (e) => {
        allImg.forEach((img, index) =>{
            if (currentIndex != index) {
                img.classList.remove('blur')
            }
        })
        e.stopPropagation()
    })
    
})
window.addEventListener('load', (e) => {
    document.querySelectorAll('.loader').forEach(loader  => {
        loader.classList.add('load')
    })
    e.stopPropagation()
})
