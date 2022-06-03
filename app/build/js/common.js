"use strict";function _toConsumableArray(a){return _arrayWithoutHoles(a)||_iterableToArray(a)||_unsupportedIterableToArray(a)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(a,b){if(a){if("string"==typeof a)return _arrayLikeToArray(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);return"Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c?Array.from(a):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?_arrayLikeToArray(a,b):void 0}}function _iterableToArray(a){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(a))return Array.from(a)}function _arrayWithoutHoles(a){if(Array.isArray(a))return _arrayLikeToArray(a)}function _arrayLikeToArray(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=Array(b);c<b;c++)d[c]=a[c];return d}var slide=document.querySelectorAll(".slide"),slideLeft=document.querySelectorAll(".slide__img-left"),slideRight=document.querySelectorAll(".slide__img-right"),slideArr=_toConsumableArray(document.querySelectorAll(".slide")),header=document.querySelector(".header"),link=document.querySelectorAll(".header__nav-link"),burger=document.querySelector(".header__nav-burger"),line=document.querySelectorAll(".header__nav-line"),linkList=document.querySelector(".header__nav-list"),content=document.querySelectorAll(".slide__content"),dots=document.querySelectorAll(".dot"),choosebtn=document.querySelectorAll(".main__book_choose-btn"),chooseArr=_toConsumableArray(choosebtn),selctbtn=document.querySelectorAll(".select__cards-btn"),fillDetails=document.querySelectorAll(".main__details_fill-input");if(link.forEach(function(a,b){a.classList.remove("active"),location.pathname==link[b].getAttribute("href").slice(1,link[b].length)?link[b].classList.add("active"):""}),"/"==location.pathname||location.pathname==link[0].getAttribute("href").slice(1,link[0].length)){var prev=function(){for(var a=slideArr.findIndex(function(a){return a.classList.contains("active")}),b=0;b<slide.length;b++)slide[b].classList.remove("active");dots.forEach(function(a){return a.classList.remove("active")}),dots[a-1].classList.add("active"),slide[a-1].classList.add("active"),slide[a-1].classList.remove("disconnect")},next=function(){for(var a=slideArr.findIndex(function(a){return a.classList.contains("active")}),b=0;b<slide.length;b++)slide[b].classList.remove("active");dots.forEach(function(a){return a.classList.remove("active")}),dots[a+1].classList.add("active"),slide[a].classList.add("disconnect"),slide[a+1].classList.add("active")},allSliderEvent=function(a){var b=!0;return function(c){var d=slideArr.findIndex(function(a){return a.classList.contains("active")});"touchstart"==c.type&&(startY=c.targetTouches[0].pageY),"touchend"==c.type&&(endY=c.changedTouches[0].pageY),b&&((0>c.deltaY||"ArrowUp"==c.code||"prev"==c.srcElement.id||startY<endY&&"touchend"==c.type)&&0!=d?prev():(0<c.deltaY||"ArrowDown"==c.code||"next"==c.srcElement.id||startY>endY&&"touchend"==c.type)&&10!=d&&next(),b=!1,setTimeout(function(){b=!0},a))}};link[0].classList.add("active");var projects=[{content:"We take photos as a return ticket to a moment otherwise gone",btnInner:"Book now",image:"./images/bg.webp"},{title:"beauty",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut.",btnInner:"Take a look \t&#8594;",image:"./images/beauty_slide.webp"},{title:"potrait",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut.",btnInner:"Take a look \t&#8594;",image:"./images/protrait_slide.webp"},{title:"fashion",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut.",btnInner:"Take a look \t&#8594;",image:"./images/fashion_slide.webp"},{title:"meetings",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut.",btnInner:"Take a look \t&#8594;",image:"./images/meetings_slide.webp"},{title:"people",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut.",btnInner:"Take a look \t&#8594;",image:"./images/people_slide.webp"},{title:"product",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut.",btnInner:"Take a look \t&#8594;",image:"./images/product_slide.webp"},{title:"couple",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut.",btnInner:"Take a look \t&#8594;",image:"./images/couple_slide.webp"},{title:"nature",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut.",btnInner:"Take a look \t&#8594;",image:"./images/nature_slide.webp"},{title:"birthdays",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper ornare odio ultrices elementum ut.",btnInner:"Take a look \t&#8594;",image:"./images/birthdays_slide.webp"},{experienceNum:25,experienceDesc:"Years experience of freelance photography",projectsNum:49,projectsDesc:"Projects worked on and counting",bookNum:36,bookDesc:"Stable client currently trust us and are booked",btnInner:"Book now"}],container=document.querySelector(".container"),x=document.querySelector(".top");x.style="\n                right: ".concat(container.getBoundingClientRect().left+15,"px;"),window.addEventListener("resize",function(){x.style=" \n                    right: ".concat(container.getBoundingClientRect().left+15,"px;")});var border=document.querySelectorAll(".border");border.forEach(function(a){return a.style="\n                                    position: absolute;\n                                    top:30px;\n                                    left:40px;\n                                    bottom:30px;\n                                    right:40;\n                                    border: 1px solid var(--yellow);\n                                    width: ".concat(innerWidth-90,"px;\n                                    height: ").concat(innerHeight-60,"px;\n                                    z-index: 99;\n                                    ")}),window.addEventListener("resize",function(){border.forEach(function(a){return a.style="\n                                    position: absolute;\n                                    top:30px;\n                                    left:40px;\n                                    bottom:30px;\n                                    right:40;\n                                    border: 1px solid var(--yellow);\n                                    width: ".concat(innerWidth-80,"px;\n                                    height: ").concat(innerHeight-60,"px;\n                                    z-index: 99;\n                                    ")})});var slideTitle=document.querySelectorAll(".slide__content-title"),slideContentBtn=document.querySelectorAll(".slide__content-btn"),slideDesc=document.querySelectorAll(".slide__content-desc"),slideProjectNum=document.querySelectorAll(".slide__project-num"),slideProjectDesc=document.querySelectorAll(".slide__project-desc"),gradient=document.querySelectorAll(".gradient");content[1].style.top="15%",content[2].style.top="25%",content[3].style.top="12%",content[4].style.top="12%",content[5].style.top="12%",content[6].style.top="12%",content[7].style.top="30%",content[8].style.top="35%",content[9].style.top="20%",projects.forEach(function(a,b){var c=a.title,d=a.content,e=a.image,f=a.btnInner,g=a.experienceNum,h=a.experienceDesc,i=a.projectsNum,j=a.projectsDesc,k=a.bookNum,l=a.bookDesc;slideContentBtn[b].innerHTML=f,0==b&&slide[b].classList.add("active"),0<b&&10>b&&(slideTitle[b-1].innerHTML=c),10>b&&(1==b?(slideLeft[b].style.backgroundImage="url(".concat(e,")"),slideRight[b].style.backgroundImage="url(".concat(e,")"),gradient[b-1].style.background="radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.44) 100%)"):2==b?(slideLeft[b].style.backgroundImage="url(".concat(e,")"),slideRight[b].style.backgroundImage="url(".concat(e,")"),gradient[b-1].style.background="radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.44) 100%)"):3==b||7==b?(slideLeft[b].style.backgroundImage="url(".concat(e,")"),slideRight[b].style.backgroundImage="url(".concat(e,")"),gradient[b-1].style.background="radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.8) 100%)"):3<b&&7>b&&(slideLeft[b].style.backgroundImage="url(".concat(e,")"),slideRight[b].style.backgroundImage="url(".concat(e,")"),gradient[b-1].style.background="radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%)"),8==b||9==b?(slideLeft[b].style.backgroundImage="url(".concat(e,")"),slideRight[b].style.backgroundImage="url(".concat(e,")"),gradient[b-1].style.background="radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%)"):(slideLeft[b].style.backgroundImage="url(".concat(e,")"),slideRight[b].style.backgroundImage="url(".concat(e,")")),slideDesc[b].innerHTML=d),10==b&&(slideProjectNum[0].innerHTML=g,slideProjectDesc[0].innerHTML=h,slideProjectNum[1].innerHTML=i,slideProjectDesc[1].innerHTML=j,slideProjectNum[2].innerHTML=k,slideProjectDesc[2].innerHTML=l)});var startY=0,endY=0;window.addEventListener("wheel",allSliderEvent(2200)),window.addEventListener("touchstart",allSliderEvent(2200)),window.addEventListener("touchend",allSliderEvent(2200)),dots.forEach(function(a){a.addEventListener("click",function(a){dots.forEach(function(a){return a.classList.remove("active")}),a.target.classList.add("active");var b=_toConsumableArray(dots),c=b.findIndex(function(a){return a.classList.contains("active")});slide.forEach(function(a){return a.classList.remove("active")}),slide[c].classList.add("active")})})}else"/book.html"==location.pathname&&(header.style.background="var(--black)");burger.addEventListener("click",function(){line.forEach(function(a){return a.classList.toggle("active")}),2==linkList.classList.length?linkList.classList.remove("active"):linkList.classList.add("active")});var chooseIndex=0;choosebtn.forEach(function(a){return a.addEventListener("click",function(b){2==b.target.classList.length?(a.classList.remove("active"),chooseIndex--):(a.classList.add("active"),chooseIndex++),choosebtn.forEach(function(a){if(2==a.classList.length){"".concat(a.innerText,", ")}})})}),selctbtn.forEach(function(a){a.addEventListener("click",function(a){selctbtn.forEach(function(a){return a.classList.remove("active")}),a.target.classList.add("active")})});var orderInput=document.querySelectorAll(".main__order_info-input");orderInput.forEach(function(a){a.addEventListener("click",function(){a==orderInput[0]?orderInput[0].setAttribute("type","date"):a==orderInput[1]&&orderInput[1].setAttribute("type","time")})});var bookBtn=document.querySelector(".main__btn-inner");"/book.html"==location.pathname&&bookBtn.addEventListener("click",function(){if(0<chooseIndex&&""!=orderInput[0].value&&""!=fillDetails[0].value&&""!=fillDetails[1].value&&""!=fillDetails[2].value){var a="",b="";choosebtn.forEach(function(b){2==b.classList.length&&(a+="".concat(b.innerText,", "))}),selctbtn.forEach(function(a){2==a.classList.length&&(1==a?b="Basic":2==a?b="Standart":2==a&&(b="Premium"))}),fetch("https://api.telegram.org/bot1479089608:AAEAgLcW44H2YU6lMLHBxgpHqMqy1Y_OrCQ/sendMessage?chat_id=-430451129_mode=html&text= \n        Photoshoot: ".concat(a,"\n        %0A\n        Date: ").concat(orderInput[0].value,"\n        %0A\n        Time: ").concat(orderInput[1].value,"\n        %0A\n        Address: ").concat(orderInput[2].value,"\n        %0A\n        Package: ").concat(b,"\n        %0A\n        Name: ").concat(fillDetails[0].value,"\n        %0A\n        Phone: ").concat(fillDetails[1].value,"\n        %0A\n        Email: ").concat(fillDetails[2].value,"\n        "))}else alert("Fill all gaps!!!!");location.reload()});var formBtn=document.querySelector(".main__form-btn"),formInput=document.querySelectorAll(".main__form-input"),formTextarea=document.querySelector(".main__form-textarea");"/contact.html"==location.pathname&&formBtn.addEventListener("click",function(){""!=formTextarea.value&&""!=formInput[0].value&&""!=formInput[1].value?fetch("https://api.telegram.org/bot1479089608:AAEAgLcW44H2YU6lMLHBxgpHqMqy1Y_OrCQ/sendMessage?chat_id=-430451129_mode=html&text= \n        %0A\n        Name: ".concat(formInput[0].value,"\n        %0A\n        Email: ").concat(formInput[1].value,"\n        %0A\n        Massage: ").concat(formTextarea.value,"\n        ")):alert("Fill all gaps!!!!"),location.reload()});