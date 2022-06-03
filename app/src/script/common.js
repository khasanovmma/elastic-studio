const slide = document.querySelectorAll('.slide')
const slideLeft = document.querySelectorAll('.slide__img-left')
const slideRight = document.querySelectorAll('.slide__img-right')
const slideArr = [...document.querySelectorAll('.slide')]
const header = document.querySelector('.header')
const link = document.querySelectorAll('.header__nav-link')
const burger = document.querySelector('.header__nav-burger')
const line = document.querySelectorAll('.header__nav-line')
const linkList = document.querySelector('.header__nav-list')
const content = document.querySelectorAll('.slide__content')
const dots = document.querySelectorAll('.dot')
const choosebtn = document.querySelectorAll('.main__book_choose-btn')
const chooseArr = [...choosebtn]
const selctbtn = document.querySelectorAll('.select__cards-btn')
const fillDetails = document.querySelectorAll('.main__details_fill-input')

link.forEach(function (links, i) {
    links.classList.remove('active')
    location.pathname == link[i].getAttribute('href').slice(1, link[i].length) ? link[i].classList.add('active') : ''

})

if (location.pathname == '/' || location.pathname == link[0].getAttribute('href').slice(1, link[0].length)) {
    link[0].classList.add('active')
    let projects = [{
        content: 'We take photos as a return ticket to a moment otherwise gone',
        btnInner: 'Book now',
        image: './images/bg.webp'
    },
    {
        title: 'beauty',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut.',
        btnInner: 'Take a look 	&#8594;',
        image: './images/beauty_slide.webp'
    },
    {
        title: 'potrait',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut.',
        btnInner: 'Take a look 	&#8594;',
        image: './images/protrait_slide.webp'
    },
    {
        title: 'fashion',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut.',
        btnInner: 'Take a look 	&#8594;',
        image: './images/fashion_slide.webp'
    },
    {
        title: 'meetings',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut.',
        btnInner: 'Take a look 	&#8594;',
        image: './images/meetings_slide.webp'
    },
    {
        title: 'people',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut.',
        btnInner: 'Take a look 	&#8594;',
        image: './images/people_slide.webp'
    },
    {
        title: 'product',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut.',
        btnInner: 'Take a look 	&#8594;',
        image: './images/product_slide.webp'
    },
    {
        title: 'couple',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut.',
        btnInner: 'Take a look 	&#8594;',
        image: './images/couple_slide.webp'
    },
    {
        title: 'nature',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut.',
        btnInner: 'Take a look 	&#8594;',
        image: './images/nature_slide.webp'
    },
    {
        title: 'birthdays',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut.',
        btnInner: 'Take a look 	&#8594;',
        image: './images/birthdays_slide.webp'
    },
    {
        experienceNum: 25,
        experienceDesc: 'Years experience of freelance photography',
        projectsNum: 49,
        projectsDesc: 'Projects worked on and counting',
        bookNum: 36,
        bookDesc: 'Stable client currently trust us and are booked',
        btnInner: 'Book now',
    }
    ]
    const container = document.querySelector('.container')
    const x = document.querySelector('.top')
    x.style = `
                right: ${container.getBoundingClientRect().left + 15}px;`

    window.addEventListener('resize', () => {
        x.style = ` 
                    right: ${container.getBoundingClientRect().left + 15}px;`


    })
    const border = document.querySelectorAll('.border')
    border.forEach(all => all.style = `
                                    position: absolute;
                                    top:30px;
                                    left:40px;
                                    bottom:30px;
                                    right:40;
                                    border: 1px solid var(--yellow);
                                    width: ${innerWidth - 90}px;
                                    height: ${innerHeight - 60}px;
                                    z-index: 99;
                                    `)
    window.addEventListener('resize', function resize() {
        border.forEach(all => all.style = `
                                    position: absolute;
                                    top:30px;
                                    left:40px;
                                    bottom:30px;
                                    right:40;
                                    border: 1px solid var(--yellow);
                                    width: ${innerWidth - 80}px;
                                    height: ${innerHeight - 60}px;
                                    z-index: 99;
                                    `)

    })
    const slideTitle = document.querySelectorAll('.slide__content-title')
    const slideContentBtn = document.querySelectorAll('.slide__content-btn')
    const slideDesc = document.querySelectorAll('.slide__content-desc')
    const slideProjectNum = document.querySelectorAll('.slide__project-num')
    const slideProjectDesc = document.querySelectorAll('.slide__project-desc')
    const gradient = document.querySelectorAll('.gradient')
    content[1].style.top = '15%'
    content[2].style.top = '25%'
    content[3].style.top = '12%'
    content[4].style.top = '12%'
    content[5].style.top = '12%'
    content[6].style.top = '12%'
    content[7].style.top = '30%'
    content[8].style.top = '35%'
    content[9].style.top = '20%'
    projects.forEach(({ title, content, image, btnInner, experienceNum, experienceDesc, projectsNum, projectsDesc, bookNum, bookDesc }, i) => {
        slideContentBtn[i].innerHTML = btnInner;

        if (i == 0) {
            slide[i].classList.add('active');
        }

        if (i > 0 && i < 10) {
            slideTitle[i - 1].innerHTML = title;

        }
        if (i < 10) {
            if (i == 1) {
                slideLeft[i].style.backgroundImage = `url(${image})`
                slideRight[i].style.backgroundImage = `url(${image})`


                gradient[i - 1].style.background = 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.44) 100%)'
            } else if (i == 2) {
                slideLeft[i].style.backgroundImage = `url(${image})`
                slideRight[i].style.backgroundImage = `url(${image})`
                gradient[i - 1].style.background = 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.44) 100%)'
            } else if (i == 3 || i == 7) {
                slideLeft[i].style.backgroundImage = `url(${image})`
                slideRight[i].style.backgroundImage = `url(${image})`
                gradient[i - 1].style.background = 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%)'
            } else if (i > 3 && i < 7) {
                slideLeft[i].style.backgroundImage = `url(${image})`
                slideRight[i].style.backgroundImage = `url(${image})`
                gradient[i - 1].style.background = 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%)'
            } if (i == 8 || i == 9) {
                slideLeft[i].style.backgroundImage = `url(${image})`
                slideRight[i].style.backgroundImage = `url(${image})`
                gradient[i - 1].style.background = 'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)'
            } else {
                slideLeft[i].style.backgroundImage = `url(${image})`
                slideRight[i].style.backgroundImage = `url(${image})`
            }

            slideDesc[i].innerHTML = content
        }
        if (i == 10) {
            slideProjectNum[0].innerHTML = experienceNum;
            slideProjectDesc[0].innerHTML = experienceDesc;
            slideProjectNum[1].innerHTML = projectsNum;
            slideProjectDesc[1].innerHTML = projectsDesc;
            slideProjectNum[2].innerHTML = bookNum;
            slideProjectDesc[2].innerHTML = bookDesc;
        }


    });
    function prev() {
        const slideIndex = slideArr.findIndex(items => items.classList.contains('active'))
        for (let i = 0; i < slide.length; i++) {
            slide[i].classList.remove('active')
        }
        dots.forEach(i => i.classList.remove('active'))
        dots[slideIndex - 1].classList.add('active')
        slide[slideIndex - 1].classList.add('active')
        slide[slideIndex - 1].classList.remove('disconnect')
    }

    function next() {
        const slideIndex = slideArr.findIndex(items => items.classList.contains('active'))
        for (let i = 0; i < slide.length; i++) {
            slide[i].classList.remove('active')
        }
        dots.forEach(i => i.classList.remove('active'))
        dots[slideIndex + 1].classList.add('active')
        slide[slideIndex].classList.add('disconnect')
        slide[slideIndex + 1].classList.add('active')
    }

    let startY = 0;
    let endY = 0;
    window.addEventListener('wheel', allSliderEvent(2200))
    window.addEventListener('touchstart', allSliderEvent(2200))
    window.addEventListener('touchend', allSliderEvent(2200))
    function allSliderEvent(milliseconds) {
        let status = true;
        return (e) => {
            const slideIndex = slideArr.findIndex(items => items.classList.contains('active'))
            if (e.type == 'touchstart') {
                startY = e.targetTouches[0].pageY
            }
            if (e.type == 'touchend') {
                endY = e.changedTouches[0].pageY
            }
            if (status) {
                if ((e.deltaY < 0 || e.code == 'ArrowUp' || e.srcElement.id == 'prev' || (startY < endY && e.type == 'touchend')) && slideIndex != 0) {
                    prev();
                } else if ((e.deltaY > 0 || e.code == 'ArrowDown' || e.srcElement.id == 'next' || (startY > endY && e.type == 'touchend')) && slideIndex != 10) {
                    next();
                }
                status = false;
                setTimeout(() => {
                    status = true;
                }, milliseconds);

            }
        }
    }
    dots.forEach(function (dot) {
        dot.addEventListener('click', (e) => {
            if (true) {
                dots.forEach(i => i.classList.remove('active'));
                e.target.classList.add('active')
                let arrDots = [...dots]
                let indexDot = arrDots.findIndex(items => items.classList.contains('active'))
                slide.forEach(i => i.classList.remove('active'));
                slide[indexDot].classList.add('active')
            }
        })
    })
} else if (location.pathname == '/book.html') {
    header.style.background = 'var(--black)'

}

burger.addEventListener('click', () => {
    line.forEach(lines => lines.classList.toggle('active'))
    if (linkList.classList.length == 2) {
        linkList.classList.remove('active')
    } else {
        linkList.classList.add('active')
    }
})
let chooseIndex = 0

choosebtn.forEach(chBtn => chBtn.addEventListener('click', (e) => {
    if (e.target.classList.length == 2) {
        chBtn.classList.remove('active')
        chooseIndex--
    } else {
        chBtn.classList.add('active')
        chooseIndex++
    }
    choosebtn.forEach(function(i){
        if(i.classList.length == 2){
           let text = "" 
           text += `${i.innerText}, `
        }
    })
}))

selctbtn.forEach(function (sBtn) {
    sBtn.addEventListener('click', (e) => {
        selctbtn.forEach(i => i.classList.remove('active'))
        e.target.classList.add('active')
    })
})

const orderInput = document.querySelectorAll('.main__order_info-input')
orderInput.forEach(function (oInput) {
    oInput.addEventListener('click', () => {
        if (oInput == orderInput[0]) {
            orderInput[0].setAttribute('type', 'date')
        } else if (oInput == orderInput[1]) {
            orderInput[1].setAttribute('type', 'time')
        }
    })
}
)

const bookBtn = document.querySelector('.main__btn-inner')
if (location.pathname == '/book.html') {
bookBtn.addEventListener('click', () => {
    if (chooseIndex > 0 && orderInput[0].value != '' && fillDetails[0].value != '' && fillDetails[1].value != '' && fillDetails[2].value != '' ) {
        let text = "" 
        let select = ""
        choosebtn.forEach(function(i){
            if(i.classList.length == 2){
               text += `${i.innerText}, `
            }
        })
        
        selctbtn.forEach(function(i){
            if(i.classList.length == 2){
               if(i==1) {
                select = 'Basic'
               } else if (i==2){
                select = 'Standart'
               }
                else if (i==2){
                select = 'Premium'
               }
            }
        })
        fetch(`https://api.telegram.org/bot1479089608:AAEAgLcW44H2YU6lMLHBxgpHqMqy1Y_OrCQ/sendMessage?chat_id=-430451129_mode=html&text= 
        Photoshoot: ${text}
        %0A
        Date: ${orderInput[0].value}
        %0A
        Time: ${orderInput[1].value}
        %0A
        Address: ${orderInput[2].value}
        %0A
        Package: ${select}
        %0A
        Name: ${fillDetails[0].value}
        %0A
        Phone: ${fillDetails[1].value}
        %0A
        Email: ${fillDetails[2].value}
        `)
    }else {
        alert('Fill all gaps!!!!')
    }
    location.reload();
})}

const formBtn = document.querySelector('.main__form-btn')
const formInput = document.querySelectorAll('.main__form-input')
const formTextarea = document.querySelector('.main__form-textarea')
if (location.pathname == '/contact.html'){
formBtn.addEventListener('click', () => {
    if (formTextarea.value != '' && formInput[0].value != '' && formInput[1].value != '') {
    fetch(`https://api.telegram.org/bot1479089608:AAEAgLcW44H2YU6lMLHBxgpHqMqy1Y_OrCQ/sendMessage?chat_id=-430451129_mode=html&text= 
        %0A
        Name: ${formInput[0].value}
        %0A
        Email: ${formInput[1].value}
        %0A
        Massage: ${formTextarea.value}
        `) 
    }else {
        alert('Fill all gaps!!!!')
    }
    location.reload();
})
}