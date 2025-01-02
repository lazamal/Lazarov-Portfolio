// creating the header component

const headerDiv = document.createElement('header')
headerDiv.className = 'main-header'
headerDiv.id = 'header'
headerDiv.innerHTML = `<nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <div id="products-container">
               <button id="products">Projects</button>
                        <div class="dropdown-content">
                            <a href="Products1.html">
                                Hachaluz League
                                </a> 
                                <a href="Products2.html">
                                Youth Movement CMS system
                                </a>
                         
                         </div>
                </div>
                <li><a href="articles.html">Articles</a></li>
                <li><a href="contact.html">Contact</a></li>
               
            
            </ul>
        </nav>
            <div class="logo"></div> `

// creating the footer component

const footerDiv = document.createElement('footer')
footerDiv.id = 'footer'
footerDiv.innerHTML = ` <h2>Get in Touch</h2>
            <p>Let's build something great together.</p>
            <p>Lazamal@gmail.com</p>
            <a href="https://www.linkedin.com/in/dor-lazarov-65601287/" style="border:none; text-decoration:none;"
                class="btn">LinkedIn</a>`

// creating the responsive menu
const hamMenu = document.createElement('nav')
hamMenu.innerHTML = `<div class="ham-menu">
<span></span>
<span></span>
<span></span>
</div>`
hamMenu.id = 'hamMenu'

const offScreenMenu = document.createElement('div')
offScreenMenu.innerHTML = `   <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="Products1.html">Hachaluz League</a></li>
        <li><a href="Products2.html">Youth-movement CMS</a></li>
         <li><a href="articles.html">Articles</a></li>
         <li><a href="contact.html">Contact</a></li>
      </ul>`
offScreenMenu.className = 'off-screen-menu'

// inserting the header and footer components
document.body.prepend(offScreenMenu)
document.body.prepend(headerDiv)
document.body.prepend(hamMenu)
document.body.append(footerDiv)

// clicking the mobile navbar
hamMenu.addEventListener('click', function () {
    hamMenu.classList.toggle('active')
    offScreenMenu.classList.toggle('active')
})
