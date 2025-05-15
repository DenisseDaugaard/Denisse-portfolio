import '/src/style/style.scss'
import '/src/style/_darkMode.scss'
import '/src/style/_hamMenu.scss'

import darkMode from '../darkMode.js'
import typed from './typed.js'
import menu from './hamMenu.js'
import validateForm from './form-validation.js'

document.querySelector("#portfolio").innerHTML = `
<header>
    <nav>
         <span class="name">Denisse Daugaard
         <div class="ham-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
         </span>
        
        <ul class="menu">
            <li>About me</li>
            <li>My projects</li>
            <li>Contact</li>
        </ul>   

            <figure class="darkmode__icon__container">
               <img class="darkmode__icon" src="/img/darkmode.svg">
            </figure> 
    </nav>    

</header>
<main> 
    <article class="about__me">
        <section class="presentation">
            <div>
                <h3>Hello there  &#128075; !</h3>
                <h3 class="auto-type"></h3>
            </div>
             <figure class="presentation__img__container">
                <img src="/img/profolio_pic.jpg" alt="">
             </figure>   
        </section>     
            
            <p class="introduction">I'm currently pursuing an EUD (Erhvervsuddannelse) in Web Development at Roskilde Tekniske Skole in Denmark. My education focuses on designing and building modern, responsive websites and web applications, with practical training in front-end and back-end technologies, user experience design, and programming languages such as HTML, CSS, JavaScript, and more.</p>
       
    </article>

    <article class="my__skills">
            <figure class="skill">
            <img src="/img//icons8-html-5-48.png" alt="html icon">
            <figcaption>html</figcaption>
            </figure>
            <figure class="skill">
                <img src="/img/icons8-css-48.png" alt="css icon">
                <figcaption>css</figcaption>
            </figure>
            <figure class="skill">
                <img src="/img//icons8-javascript-48.png" alt="java script icon">
                 <figcaption>javascript</figcaption>
            </figure>
            <figure class="skill">
                <img src="/img/icons8-prisma-orm-48.png" alt="prisma icon">
                 <figcaption>prisma</figcaption>
            </figure>
            <figure class="skill">
                <img src="/img/icons8-nodejs-48.png" alt="node icon">
                 <figcaption>node</figcaption>
            </figure>
            <figure class="skill">
                <img src="/img/icons8-sass-48.png" alt="sass icon">
                <figcaption>sass</figcaption>
            </figure>
            <figure class="skill">
                <img src="/img/react-icon.png" alt="react icon">
                <figcaption>react</figcaption>
            </figure>
    </article>

    <article class="contact">
       <form action="https://formspree.io/f/xgvkrrbo" method="POST" novalidate>

            <h2>Contact me!</h2>
            <div class="grupform">
                <input type="text"  name="name" placeholder="John Nilsen">
                <span class="error"></span>
            </div>
            <div class="grupform">
                <input type="email"  name="email" placeholder="john@gmail.com">
                <span class="error"></span>
            </div>
            <div class="grupform">
                <textarea class="message" name="message" id="" rows="10" placeholder="Leave your messagr here...."></textarea>
                <span class="error"></span>
            </div>
            
            <button class="contact__send__btn">Send</button>
        </form>
    </article>
</main>
<footer></footer>
`
document.addEventListener("DOMContentLoaded", () => {
    darkMode()

    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm);
    console.log(form);
    
  })
  
  typed()
  menu()
  
