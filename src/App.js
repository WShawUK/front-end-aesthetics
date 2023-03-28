import React, { useRef, useEffect, useState } from "react"
import ReactDOM from "react-dom/client"
import './index.css'
import arrowRight from './arrow-redo-outline.svg'
import tabForwards from './tab-icon-forwards.png'

function MainHeader() {
  return (
    <header>
      <div>
        <h1>Front-end aesthetics</h1>
      </div>
      <div id="navbar">
        <div>
          <ul>
            <li>option 1</li>
            <li>option 2</li>
            <li>option 3</li>
            <li>option 4</li>
            <li>option 5</li>
            <li>option 6</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>option 1</li>
            <li>option 2</li>
            <li>option 3</li>
            <li>option 4</li>
            <li>option 5</li>
            <li>option 6</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>option 1</li>
            <li>option 2</li>
            <li>option 3</li>
            <li>option 4</li>
            <li>option 5</li>
            <li>option 6</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>option 1</li>
            <li>option 2</li>
            <li>option 3</li>
            <li>option 4</li>
            <li>option 5</li>
            <li>option 6</li>
          </ul>
        </div>
      </div>
    </header>

  )
}

function SideBar() {

  const slideTab = (e) => {
    e.target.parentElement.style.translate = (e.target.parentElement.style.translate === '-90%') ? '0' : '-90%';
  }


  return (
    <div id="sidebar">
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="ion-icon" viewBox="0 0 512 512">
          <title>Bulb</title>
          <path d="M304 384v-24c0-29 31.54-56.43 52-76 28.84-27.57 44-64.61 44-108 0-80-63.73-144-144-144a143.6 143.6 0 00-144 144c0 41.84 15.81 81.39 44 108 20.35 19.21 52 46.7 52 76v24M224 480h64M208 432h96M256 384V256" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
          <path d="M294 240s-21.51 16-38 16-38-16-38-16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
        </svg>
            <p>link 1</p>
            <p>link 2</p>
            <p>link 3</p>
            <p>link 4</p>
            <p>link 5</p>
            <p>link 6</p>
        </div>
        <span onClick={slideTab}>
            <img src={tabForwards}/>
        </span>
    </div>
  )
}

function ExpandableDiv() {
  const thisElement = useRef(null)

  useEffect(() => {
    thisElement.current.firstElementChild.firstElementChild.addEventListener('load', (e) => {
      console.log(thisElement.current.firstElementChild.clientHeight)
      thisElement.current.style.maxHeight = thisElement.current.firstElementChild.clientHeight + 'px'
    })
    // thisElement.current.style.maxHeight = thisElement.current.firstElementChild.clientHeight + 'px'

    window.addEventListener('resize', () => {
      thisElement.current.style.maxHeight = thisElement.current.firstElementChild.clientHeight + 'px'
      thisElement.current.querySelector('img').classList.remove('arrow-down')
    })
    
  }, []);

  const arrowClick = (e) => {
    e.target.classList.toggle('arrow-down')
    const heightOfVisibleBox = e.target.parentElement.clientHeight
    thisElement.current.style.maxHeight = (thisElement.current.style.maxHeight === `${heightOfVisibleBox}px`) ? '400px' : `${heightOfVisibleBox}px`
  }


  return (
    <div className='expandable-div' ref={thisElement}>
      <div>
        <img onClick = {arrowClick} src={arrowRight}/>
        <h1>click to expand</h1>
      </div>
      <div>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <p>lorem ipsum</p>
        <div className="wave-div">
            <p>l</p>
            <p>o</p>
            <p>r</p>
            <p>e</p>
            <p>m</p>
            <p>&nbsp;</p>
            <p>i</p>
            <p>p</p>
            <p>s</p>
            <p>u</p>
            <p>m</p>
        </div>
        <p>lorem ipsum</p>
      </div>
    </div>
  )
}

function NeonForm() {
  return (
    <form id="neon-form">
        <div>
            <input name="radio-buttons" type="radio" />
            <input name="radio-buttons" type="radio" />
            <input name="radio-buttons" type="radio" />
        </div>
        <div>
            <input type="checkbox" />
            <input type="checkbox" />
            <input type="checkbox" />
        </div>
        <div>
            <input type="range" />
            <input type="range" />
            <input type="range" />
        </div>
    </form>
  )
}

function FlashingDivWithButtons() {

  const thisElement = useRef(null)

  useEffect(() => {
    const animatedButtons = thisElement.current.querySelectorAll('button')
    console.table(animatedButtons)
    for (let button of animatedButtons){
        button.addEventListener('click', (e) => {
            let rect = e.target.getBoundingClientRect();
            let xPosition = Math.ceil(e.clientX - rect.left)
            let yPosition = Math.ceil(e.clientY - rect.top)
            console.log(xPosition, yPosition)
            let newBubble = document.createElement('div')
            newBubble.classList.add('animated-bubble')
            newBubble.style.top = yPosition + 'px'
            newBubble.style.left = xPosition +'px'
            button.appendChild(newBubble)
            setTimeout(() => {button.removeChild(newBubble)}, 1000)
        })
    }
    
  }, []);

  return (
    <div ref={thisElement} id="flashing-div">
        <div id="animated-button-div">
          <button>button</button>
          <button>button</button>
        </div>
    </div>
  )
}

function RadialMenu() {
  const thisElement = useRef(null)

  const [allTriangles, setAllTriangles] = useState()
  const [allIcons, setAllIcons] = useState()
  let [triangleToIconRelation, setTriangleToIconRelation] = useState({})


  useEffect(() => {
    setAllTriangles(thisElement.current.querySelectorAll('.triangle'))
    setAllIcons(thisElement.current.querySelectorAll('.ion-icon'))

    let triangleToIconRelationCopy = triangleToIconRelation

    for (let triangle of thisElement.current.querySelectorAll('.triangle')){  //establishes triangleToIconRelation
      let indexOfTriangle = Array.from(thisElement.current.querySelectorAll('.triangle')).indexOf(triangle)
      triangleToIconRelationCopy[indexOfTriangle] = thisElement.current.querySelectorAll('.ion-icon')[indexOfTriangle]
      setTriangleToIconRelation(triangleToIconRelationCopy)
    }
  }, []);

  const triangleClick = (e) => {
    console.table(triangleToIconRelation)
    
    console.log(e.target.parentElement.getAttribute('data-id')) // HERE just do index
    for (let triangle of thisElement.current.querySelectorAll('.triangle')){
      if (triangle != e.target.parentElement){
        triangle.classList.remove('triangle-is-selected')
      }
    }
    e.target.parentElement.classList.toggle('triangle-is-selected')

    const indexOfTriangle = Array.from(allTriangles).indexOf(e.target.parentElement)
    for (let icon of thisElement.current.querySelectorAll('.ion-icon')){
      if (icon != triangleToIconRelation[indexOfTriangle]){
        icon.classList.remove('icon-is-selected')
      }
    }
  
    
    triangleToIconRelation[indexOfTriangle].classList.toggle('icon-is-selected')

  }

  return ( 
    <div ref={thisElement} id="radial-menu">
        <svg onClick={triangleClick} className='triangle' viewBox="0 0 300 260" height="55%" width='55%'> 
            <polygon points="0,0 150,260 300,0"/>
        </svg> 
        <svg onClick={triangleClick} className='triangle' viewBox="0 0 300 260" height="55%" width='55%'>
            <polygon points="0,0 150,260 300,0"/>
        </svg> 
        <svg onClick={triangleClick} className='triangle' viewBox="0 0 300 260" height="55%" width='55%'>
            <polygon points="0,0 150,260 300,0"/>
        </svg> 
        <svg onClick={triangleClick} className='triangle' viewBox="0 0 300 260" height="55%" width='55%'>
            <polygon points="0,0 150,260 300,0"/>
        </svg> 
        <svg onClick={triangleClick} className='triangle' viewBox="0 0 300 260" height="55%" width='55%'>
            <polygon points="0,0 150,260 300,0"/>
        </svg> 
        <svg onClick={triangleClick} className='triangle' viewBox="0 0 300 260" height="55%" width='55%'>
            <polygon points="0,0 150,260 300,0"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" className="ion-icon" viewBox="0 0 512 512">
          <title>Gift</title>
          <path d="M256 104v56h56a56 56 0 10-56-56zM256 104v56h-56a56 56 0 1156-56z" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/>
          <rect x="64" y="160" width="384" height="112" rx="32" ry="32" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
          <path d="M416 272v144a48 48 0 01-48 48H144a48 48 0 01-48-48V272M256 160v304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" className="ion-icon" viewBox="0 0 512 512">
          <title>Telescope</title>
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M39.93 327.56l-4.71-8.13A24 24 0 0144 286.64l86.87-50.07a16 16 0 0121.89 5.86l12.71 22a16 16 0 01-5.86 21.85l-86.85 50.07a24.06 24.06 0 01-32.83-8.79z"/>
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M170.68 273.72L147.12 233a24 24 0 018.8-32.78l124.46-71.75a16 16 0 0121.89 5.86l31.57 54.59a16 16 0 01-5.84 21.84L203.51 282.5a24 24 0 01-32.83-8.78zM341.85 202.21l-46.51-80.43a24 24 0 018.8-32.78l93.29-53.78A24.07 24.07 0 01430.27 44l46.51 80.43a24 24 0 01-8.8 32.79L374.69 211a24.06 24.06 0 01-32.84-8.79zM127.59 480l96.14-207.99M271.8 256.02L368.55 448"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" className="ion-icon" viewBox="0 0 512 512">
          <title>Restaurant</title>
          <path d="M57.49 47.74l368.43 368.43a37.28 37.28 0 010 52.72h0a37.29 37.29 0 01-52.72 0l-90-91.55a32 32 0 01-9.2-22.43v-5.53a32 32 0 00-9.52-22.78l-11.62-10.73a32 32 0 00-29.8-7.44h0a48.53 48.53 0 01-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32"/>
          <path d="M400 32l-77.25 77.25A64 64 0 00304 154.51v14.86a16 16 0 01-4.69 11.32L288 192M320 224l11.31-11.31a16 16 0 0111.32-4.69h14.86a64 64 0 0045.26-18.75L480 112M440 72l-80 80M200 368l-99.72 100.28a40 40 0 01-56.56 0h0a40 40 0 010-56.56L128 328" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/>
        </svg>


        <svg xmlns="http://www.w3.org/2000/svg" className="ion-icon" viewBox="0 0 512 512">
          <title>Nutrition</title>
          <path d="M352 128c-32.26-2.89-64 16-96 16s-63.75-19-96-16c-64 6-96 64-96 160 0 80 64 192 111.2 192s51.94-24 80.8-24 33.59 24 80.8 24S448 368 448 288c0-96-29-154-96-160z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
          <path d="M323.92 83.14c-21 21-45.66 27-58.82 28.79a8 8 0 01-9.1-8.73 97.6 97.6 0 0128.61-59.33c22-22 46-26.9 58.72-27.85a8 8 0 018.67 8.92 98 98 0 01-28.08 58.2z"/>
          <ellipse cx="216" cy="304" rx="24" ry="48"/>
          <ellipse cx="296" cy="304" rx="24" ry="48"/>
        </svg>


        <svg xmlns="http://www.w3.org/2000/svg" className="ion-icon" viewBox="0 0 512 512">
          <title>Bluetooth</title>
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M144 352l224-192L256 48v416l112-112-224-192"/>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" className="ion-icon" viewBox="0 0 512 512">
          <title>Flashlight</title>
          <path d="M456.64 162.86L349.12 55.36c-13.15-13.14-28.68-7.17-41.82 6l-11.95 12c-26.13 26.13-27.62 58.38-29.42 83.31-.89 12.24-9.78 27.55-18.51 36.28L58.58 381.67c-16.35 16.33-12.69 39.42 3.73 55.84l12.17 12.17c16.36 16.35 39.43 20.16 55.86 3.74l188.83-188.8c8.74-8.74 24-17.55 36.29-18.52 24.87-1.86 58.62-4.85 83.26-29.49l11.94-11.94c13.15-13.14 19.12-28.67 5.98-41.81z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" />
          <circle cx="224.68" cy="287.28" r="20" stroke="currentColor" />
          <path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M289 81l142 142" />
        </svg>
    </div>
  )
}

function ImageCarousel() {
  const thisElement = useRef(null)

  const [carouselImages, setcarouselImages] = useState()
  const [currentCarouselImage, setCurrentCarouselImage] = useState(1)



  useEffect(() => {
    let carouselImagesCopy = []
    for (let i = 1; i < 14; i++){
      carouselImagesCopy[i] = new Image()
      carouselImagesCopy[i].src = require(`./carousel-images/${i}.jpg`)
      carouselImagesCopy[i].classList.add('displayed-image')
    }
    setcarouselImages(carouselImagesCopy)
  }, []);

  const carouselButtonClickBackwards = () => {
    let currentCarouselImageCopy = currentCarouselImage - 1
    setCurrentCarouselImage(currentCarouselImage - 1)
    if (currentCarouselImageCopy < 1){
      setCurrentCarouselImage(13)
      currentCarouselImageCopy = 13
    }
    console.log(currentCarouselImageCopy)

    thisElement.current.children[1].firstElementChild.style.translate = '100%'
    thisElement.current.children[1].firstElementChild.style.opacity = '0'
    setTimeout(() => {
        thisElement.current.children[1].firstElementChild.remove()

        let imageToAdd = carouselImages[currentCarouselImageCopy]
        imageToAdd.style.translate = '-100%'
        imageToAdd.style.opacity = '0'
        thisElement.current.children[1].appendChild(imageToAdd)

        setTimeout(() => {
            imageToAdd.style.translate = '0%'
            imageToAdd.style.opacity = '1'
        }, 20)
    }, 500)
  }

  const carouselButtonClickForwards = () => {
    let currentCarouselImageCopy = currentCarouselImage + 1
    setCurrentCarouselImage(currentCarouselImage + 1)
    if (currentCarouselImageCopy > 13){
      setCurrentCarouselImage(1)
      currentCarouselImageCopy = 1
    }
    console.log(currentCarouselImageCopy)

    thisElement.current.children[1].firstElementChild.style.translate = '-100%'
    thisElement.current.children[1].firstElementChild.style.opacity = '0'
    setTimeout(() => {
        thisElement.current.children[1].firstElementChild.remove()

        let imageToAdd = carouselImages[currentCarouselImageCopy]
        imageToAdd.style.translate = '100%'
        imageToAdd.style.opacity = '0'
        thisElement.current.children[1].appendChild(imageToAdd)

        setTimeout(() => {
            imageToAdd.style.translate = '0%'
            imageToAdd.style.opacity = '1'
        }, 20)
    }, 500)
  }

  return (
    <div ref={thisElement} id="image-carousel-div">
      <button onClick={carouselButtonClickBackwards}></button>
      <div><img src={require('./carousel-images/1.jpg')} className="displayed-image" /></div>
      <button onClick={carouselButtonClickForwards}></button>
    </div>
  )
}

function ObservedSlidingElements() {

  const thisElement = useRef(null)

  useEffect(() => {
    let allSlidingElements = thisElement.current.querySelectorAll('.scroll-slides-in-left, .scroll-slides-in-right')

    const scrollInObserver = new IntersectionObserver((entries) => {
      for (let entry of entries) {
          if (entry.isIntersecting) {
              entry.target.classList.add('scroll-slides-in-shown')
          }
          else {
              entry.target.classList.remove('scroll-slides-in-shown')
          }
      }
  })

    for (let slidingElement of allSlidingElements){
      scrollInObserver.observe(slidingElement)
    }
  }, []);

  return (
    <div ref={thisElement} id='sliding-elements-div'>
      <div className="scroll-slides-in-left" id="first-slid">
        <img src={require('./carousel-images/10.jpg')}/>
        <p>this slides in when scrolled to</p>
      </div>
      <div className="scroll-slides-in-right">
        <img src={require('./carousel-images/11.jpg')}/>
        <p>this slides in when scrolled to</p>
      </div>

      <div id="big-sliding-icons-div">
        <div className="scroll-slides-in-left">
          <svg xmlns="http://www.w3.org/2000/svg" className="ion-icon" viewBox="0 0 512 512">
            <title>Chatbox Ellipses</title>
            <path d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="32" />
            <circle cx="160" cy="216" r="32" />
            <circle cx="256" cy="216" r="32" />
            <circle cx="352" cy="216" r="32" />
          </svg>
          <p>information thematically related to icon</p>
        </div>

        <div className="scroll-slides-in-left">
          <svg xmlns="http://www.w3.org/2000/svg" className="ion-icon" viewBox="0 0 512 512">
            <title>Boat</title>
            <path d="M461.93 261.05c-2-4.76-6.71-7.83-11.67-9.49l-187.18-74.48a23.78 23.78 0 00-14.17 0l-187 74.52c-5 1.56-9.83 4.77-11.81 9.53s-2.94 9.37-1 15.08l46.53 119.15a7.46 7.46 0 007.47 4.64c26.69-1.68 50.31-15.23 68.38-32.5a7.66 7.66 0 0110.49 0C201.29 386 227 400 256 400s54.56-14 73.88-32.54a7.67 7.67 0 0110.5 0c18.07 17.28 41.69 30.86 68.38 32.54a7.45 7.45 0 007.46-4.61l46.7-119.16c1.98-4.78.99-10.41-.99-15.18z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32" />
            <path d="M416 473.14a6.84 6.84 0 00-3.56-6c-27.08-14.55-51.77-36.82-62.63-48a10.05 10.05 0 00-12.72-1.51c-50.33 32.42-111.61 32.44-161.95.05a10.09 10.09 0 00-12.82 1.56c-10.77 11.28-35.19 33.3-62.43 47.75a7.15 7.15 0 00-3.89 5.73 6.73 6.73 0 007.92 7.15c20.85-4.18 41-13.68 60.2-23.83a8.71 8.71 0 018-.06A185.14 185.14 0 00340 456a8.82 8.82 0 018.09.06c19.1 10 39.22 19.59 60 23.8a6.72 6.72 0 007.95-6.71z" />
            <path d="M320 96V72a24.07 24.07 0 00-24-24h-80a24.07 24.07 0 00-24 24v24M416 233v-89a48.14 48.14 0 00-48-48H144a48.14 48.14 0 00-48 48v92M256 183.6v212.85" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          </svg>
          <p>information thematically related to icon</p>
        </div>

        <div className="scroll-slides-in-left">
          <svg xmlns="http://www.w3.org/2000/svg" className="ion-icon" viewBox="0 0 512 512">
            <title>Language</title>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M48 112h288M192 64v48M272 448l96-224 96 224M301.5 384h133M281.3 112S257 206 199 277 80 384 80 384" />
            <path d="M256 336s-35-27-72-75-56-85-56-85" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" />
          </svg>
          <p>information thematically related to icon</p>
        </div>

      </div>
    </div>
  )
}

function BlobHeader() {
  const thisElement = useRef(null)

  const rectTopValue = useRef(null);

  useEffect(() => {
    rectTopValue.current = thisElement.current.getBoundingClientRect().top 
    console.log('initial set', thisElement.current.getBoundingClientRect().top)

    window.addEventListener('resize', () => {
      rectTopValue.current = thisElement.current.getBoundingClientRect().top
    })

    let timerID
    document.addEventListener("scroll", () => {
        clearTimeout(timerID)
        timerID = setTimeout(() => {
          rectTopValue.current = thisElement.current.getBoundingClientRect().top
          console.log('on scroll', thisElement.current.getBoundingClientRect().top)
        }, 50);
    })

    thisElement.current.addEventListener('mousemove', (e) => {
      let xPosition = e.pageX - 50
      let yPosition = e.clientY - rectTopValue.current
      console.log(e.clientY, rectTopValue.current)

      if (xPosition > (window.innerWidth - 120)){
          xPosition = (window.innerWidth - 120)
      }
      document.getElementById('header-blob') .style.setProperty('--blob-position-X', `${xPosition}px`)
      document.getElementById('header-blob') .style.setProperty('--blob-position-Y', `${50 - yPosition}px`)
      
  })
  }, []);

  return (
    <div id='blob-header' ref={thisElement}>
        <img src={require("./blob.png")} id="header-blob" />
        <a>link1</a>
        <a>link2</a>
        <a>link3</a>
        <a>link4</a>
    </div>
  )
}









function AddableStuff() {

  const ThingToAdd = (args) => {
    return (
      <div className="thing-to-add thing-to-add-fade-in" style={{zIndex: args.negativeIndex}}>
        <div>
          <input type={'text'} defaultValue={args.name}></input>
        </div>
        <div>
          <button onClick={RemoveButton}>
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512" pointerEvents={'none'}>
              <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="black" strokeMiterlimit="10" strokeWidth="32" />
              <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M336 256H176" />
            </svg>
          </button>
          <div className="pallet-div">
            <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512">
              <path d="M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 11.99-36.6.1-47.7z" fill="none" stroke="black" strokeMiterlimit="10" strokeWidth="32" />
              <circle cx="144" cy="208" r="32" />
              <circle cx="152" cy="311" r="32" />
              <circle cx="224" cy="144" r="32" />
              <circle cx="256" cy="367" r="48" />
              <circle cx="328" cy="144" r="32" />
            </svg>
            <div onClick={ChangeColorOfThing} className="pallet-option"></div>
            <div onClick={ChangeColorOfThing} className="pallet-option"></div>
            <div onClick={ChangeColorOfThing} className="pallet-option"></div>
            <div onClick={ChangeColorOfThing} className="pallet-option"></div>
            <div onClick={ChangeColorOfThing} className="pallet-option"></div>
            <div onClick={ChangeColorOfThing} className="pallet-option"></div>
            <div onClick={ChangeColorOfThing} className="pallet-option"></div>
            <div onClick={ChangeColorOfThing} className="pallet-option"></div>
            <div onClick={ChangeColorOfThing} className="pallet-option"></div>
            <div onClick={ChangeColorOfThing} className="pallet-option"></div>
            <div onClick={ChangeColorOfThing} className="pallet-option"></div>
            <div onClick={ChangeColorOfThing} className="pallet-option"></div>
            <div onClick={ChangeColorOfThing} className="pallet-option"></div>
            <div onClick={ChangeColorOfThing} className="pallet-option"></div>
            <div onClick={ChangeColorOfThing} className="pallet-option"></div>
          </div>
        </div>
    </div>
    )
  }

  const [itemList, setItemList] = useState([<ThingToAdd name={'list item'} key={0} negativeIndex = {-1}/>, <ThingToAdd name={'list item'} key={1} negativeIndex = {-2}/>, <ThingToAdd name={'list item'} key={2} negativeIndex = {-3}/>])
  const [itemKey, setItemKey] = useState(3)
  const [descendingZIndex, setDescendingZIndex] = useState(-4)


  const ChangeColorOfThing = (e) => {
    const colorToChangeTo = window.getComputedStyle(e.target).getPropertyValue('background-color')
    e.target.parentElement.parentElement.parentElement.style.setProperty('--color-of-thing', colorToChangeTo)
  }

  const RemoveButton = (e) => {
    console.log(e.target)
    e.target.parentElement.children[1].style.pointerEvents = 'none'
    e.target.parentElement.parentElement.style.opacity = 0
    e.target.parentElement.parentElement.style.height = '0px'
    e.target.parentElement.parentElement.style.margin = '0px'
    e.target.parentElement.parentElement.style.translate = '0 -30px'
    setTimeout(() => {
      e.target.parentElement.parentElement.remove()
    }, 500);
  }

  const [timerID, setTimerID] = useState(null)
  const AddItemButton = (e) => {
    if (!timerID){
      console.log('no timmer')
      const inputValue = document.getElementById('add-list-item-input').value
      const nameToPass = (inputValue) ? inputValue : 'list item';
      // add random colour
      setItemList([...itemList, <ThingToAdd name={nameToPass} key={itemKey} negativeIndex={descendingZIndex}/>])
      setItemKey(itemKey + 1)
      setDescendingZIndex(descendingZIndex - 1)
      setTimerID(setTimeout(() => {
        setTimerID(null)
      }, 250))
    }
  }


  return (
    <div id="addable-stuff-div">
      <div>
        <input id='add-list-item-input' type={'text'} placeholder='add item name here...'></input>
        <button onClick={AddItemButton}>
          <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" viewBox="0 0 512 512" pointerEvents={'none'}>
            <path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="black" strokeMiterlimit="10" strokeWidth="32" />
            <path fill="none" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 176v160M336 256H176" />
          </svg>
        </button>
      </div>
      {itemList.map((thingToAdd) => thingToAdd)}
    </div>
  )
}






function EntirePage() {
  return (
    <>
      <MainHeader />
      <SideBar />
      <div id='expandable-div-container'>
        <ExpandableDiv />
        <ExpandableDiv />
        <ExpandableDiv />
      </div>
      <NeonForm />
      
      <ImageCarousel />
      <ObservedSlidingElements />
      <RadialMenu />
      <FlashingDivWithButtons />
      <AddableStuff />
      <BlobHeader />
    </>
  )
}

export default EntirePage
