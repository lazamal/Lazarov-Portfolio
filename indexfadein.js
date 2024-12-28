// Index fade in animation

window.onload = () => {
    const introText = document.getElementById('intro-container')
    introText.style.opacity = 0
    setTimeout(() => {
        introText.style.transition = 'opacity 3s'
        introText.style.opacity = 1
    }, 200)
}
