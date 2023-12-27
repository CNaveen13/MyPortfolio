var typed = new Typed(".text", {
    strings: ["Hello", "Welcome to Naveen portfolio website,from this web we can know about naveen skills,services and also personal information,you can contact him by sending message through website(click contact naveen) " , "Have a good day!"],
    typeSpeed: 70,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

let p1=document.getElementById("p1");
let counter=0;
setInterval(()=>
{
    if(counter==70)
    {
        clearInterval();
    }
    else{
        counter+=1;
        p1.innerHTML=counter +"%";
    }
},20)

let p2=document.getElementById("p2");
let counter1=0;
setInterval(()=>
{
    if(counter1==70)
    {
        clearInterval();
    }
    else{
        counter1+=1;
        p2.innerHTML=counter1 +"%";
    }
},20)

let p3=document.getElementById("p3");
let counter3=0;
setInterval(()=>
{
    if(counter3==50)
    {
        clearInterval();
    }
    else{
        counter3+=1;
        p3.innerHTML=counter3 +"%";
    }
},20)

let p4=document.getElementById("p4");
let counter4=0;
setInterval(()=>
{
    if(counter4==50)
    {
        clearInterval();
    }
    else{
        counter4+=1;
        p4.innerHTML=counter4 +"%";
    }
},20)




