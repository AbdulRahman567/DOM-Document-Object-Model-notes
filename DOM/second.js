// alert("A gaye ho....!");
// console.log("hello !");
//console.dir(document.body.childNodes[1]);
//document.body.childNodes[3].innerText="abcd";


/************          DOM (MANIPULATIONS)         **************/
//     *****     selecting with id
// let heading =document.getElementById("heading");
// console.dir(heading);
//console.log(heading);
// let heading2=document.getElementById("heading2")
// console.dir(heading2);


//     *****       selecting with class
// let clas=document.getElementsByClassName("color");
// console.dir(clas);
// console.log(clas);


//     ******      selecting with tags
// let para=document.getElementsByTagName("p");
// console.dir(para);


//      ******     query selector    (we can select class , id , and tags )
// let element=document.querySelector("p");    //for first element
// console.dir(element);
// let allElement=document.querySelectorAll("p");    //for all elements
// console.dir(allElement);


// let allElementForClass=document.querySelectorAll(".color");    //for all elements
// console.dir(allElementForClass);


// let elementForId=document.querySelectorAll("#heading");    //for all elements
// console.dir(elementForId);

/****************    properties     ******************/
//          *****     tagName
// let ele = document.querySelectorAll(".color");
// console.dir(ele);


//        ******      inner text
// let div=document.querySelector("div");          //  In console write "div.innerText"
// console.dir(div);

//       *****      inner HTML
// let ndiv=document.querySelector("div");          //   In In console write "div.innerHTML
// console.dir(ndiv);



/*************         practice question           ******************/
// let h2=document.querySelector("h2")
// console.dir(h2.innerText);
// h2.innerText=h2.innerText + " From apna college";
// console.dir(h2.innerText);

//      question 2
// let idx=0;
// let divs=document.querySelectorAll(".box");
// for(div of divs){
//     div.innerText=`uniqye value ${idx}`;
//     idx++;
//}

// divs[0].innerText="new unique id 1";
// divs[1].innerText="new unique id 2";
// divs[2].innerText="new unique id 3";


/***************      DOM manipulation    ***********/
//        (attributes) getAttribute(attr)    and   setAttribute(attr , value)
// let div=document.querySelector("div");
// console.log(div);
// let name=div.getAttribute("name");
// console.log(name);
// let a=document.querySelector("p");
// console.log(a.getAttribute("class"));

// let set=document.querySelector("p");
// console.log(set.setAttribute("class","newPara"));

//         (style)
// let div=document.querySelector("div");
// div.style.backgroundColor="gray";
// div.style.backgroundColor="green";
// div.style.fontSize="25px";
// div.innerText="OHO !";
// div.style.visibility="hidden";   //to hide object


//           (insert elements)
// let newBtn=document.createElement("button");
// newBtn.innerText="click-me";    
// console.log(newBtn);
// let div=document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

// let newHeading =document.createElement("h1");
// newHeading.innerHTML="<i> hey i am in italic </i>";
// document.querySelector("body").prepend(newHeading);
// document.querySelector("body").append(newHeading);
// document.querySelector("body").before(newHeading);
// document.querySelector("body").after(newHeading);


// let list=document.querySelector("ul");      //home work(append child,remove child)
// list.remove(); 



/**********     practice question     **************/

//       question 1
// let newBtn=document.createElement("button");
// newBtn.innerText="Click-me ! ";
// newBtn.style.color = "white";
// newBtn.style.backgroundColor="red";
// document.querySelector("body").prepend(newBtn);

//       question 2
// let fir=document.querySelector("p");
// //fir.setAttribute("class","newClass");
// fir.classList.add("newClass");
// fir.classList.remove("newClass");