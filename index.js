
var navbar = document.createElement('nav')
navbar.setAttribute('class','navbar navbar-light bg-light')

var form = document.createElement('form')
form.setAttribute('class','form-inline')

var button1 = document.createElement('button')
button1 .setAttribute('class','btn btn-light ')
button1.setAttribute('type','button')
button1.setAttribute('area-pressed','true')
button1.id ='home'
button1.innerHTML ="HOME"
button1.setAttribute('onclick','Homeclick()')

var button2 = document.createElement('button')
button2 .setAttribute('class','btn btn-light')
button2.setAttribute('type','button')
button2.id ='world'
button2.innerHTML ='WORLD'
button2.setAttribute('onclick','worldclick()')

var button3 = document.createElement('button')
button3 .setAttribute('class','btn btn-light')
button3.setAttribute('type','button')
button3.id ='politics'
button3.innerHTML ='POLITICS'
button3.setAttribute('onclick','politicsclick()')

var button4 = document.createElement('button')
button4 .setAttribute('class','btn btn-light')
button4.setAttribute('type','button')
button4.id ='magazine'
button4.innerHTML ='MAGAZINE'
button4.setAttribute('onclick','magazineclick()')

var button5 = document.createElement('button')
button5 .setAttribute('class','btn btn-light')
button5.setAttribute('type','button')
button5.id ='technology'
button5.innerHTML ='TECHNOLOGY'
button5.setAttribute('onclick','techclick()')

var button6 = document.createElement('button')
button6 .setAttribute('class','btn btn-light')
button6.setAttribute('type','button')
button6.id ='science'
button6.innerHTML ='SCIENCE'
button6.setAttribute('onclick','sciclick()')

var button7 = document.createElement('button')
button7 .setAttribute('class','btn btn-light')
button7.setAttribute('type','button')
button7.id ='health'
button7.innerHTML ='HEALTH'
button7.setAttribute('onclick','healthclick()')

var button8 = document.createElement('button')
button8 .setAttribute('class','btn btn-light')
button8.setAttribute('type','button')
button8.id ='sports'
button8.innerHTML ='SPORTS'
button8.setAttribute('onclick','sportsclick()')

var button9 = document.createElement('button')
button9 .setAttribute('class','btn btn-light')
button9.setAttribute('type','button')
button9.id ='arts'
button9.innerHTML ='ARTS'
button9.setAttribute('onclick','artsclick()')

var button10 = document.createElement('button')
button10 .setAttribute('class','btn btn-light')
button10.setAttribute('type','button')
button10.id ='fashion'
button10.innerHTML ='FASHION'
button10.setAttribute('onclick','fashionclick()')

var button11 = document.createElement('button')
button11 .setAttribute('class','btn btn-light')
button11.setAttribute('type','button')
button11.id ='food'
button11.innerHTML ='FOOD'
button11.setAttribute('onclick','foodclick()')

var button12 = document.createElement('button')
button12 .setAttribute('class','btn btn-light')
button12.setAttribute('type','button')
button12.id ='travel'
button12.innerHTML ='TRAVEL'
button12.setAttribute('onclick','travelclick()')

form.append(button1,button2,button3,button4,button5,button6,button7,button8,button9,button10,button11,button12)
navbar.appendChild(form)
document.body.appendChild(navbar) 

myFetch('https://api.nytimes.com/svc/topstories/v2//home.json?api-key=alTrF0t8yIrlW4jnbVT5N8pA7TaGnlHa')  
function Homeclick()
{
myFetch('https://api.nytimes.com/svc/topstories/v2//home.json?api-key=alTrF0t8yIrlW4jnbVT5N8pA7TaGnlHa')  
}
function worldclick()
{
myFetch('https://api.nytimes.com/svc/topstories/v2//world.json?api-key=alTrF0t8yIrlW4jnbVT5N8pA7TaGnlHa')  
}
function politicsclick()
{
myFetch('https://api.nytimes.com/svc/topstories/v2//politics.json?api-key=alTrF0t8yIrlW4jnbVT5N8pA7TaGnlHa')  
}
function magazineclick()
{
myFetch('https://api.nytimes.com/svc/topstories/v2//magazine.json?api-key=alTrF0t8yIrlW4jnbVT5N8pA7TaGnlHa')  
}
function techclick()
{
myFetch('https://api.nytimes.com/svc/topstories/v2//technology.json?api-key=alTrF0t8yIrlW4jnbVT5N8pA7TaGnlHa')  
}
function sciclick()
{
myFetch('https://api.nytimes.com/svc/topstories/v2//science.json?api-key=alTrF0t8yIrlW4jnbVT5N8pA7TaGnlHa')  
}
function healthclick()
{
myFetch('https://api.nytimes.com/svc/topstories/v2//health.json?api-key=alTrF0t8yIrlW4jnbVT5N8pA7TaGnlHa')  
}
function sportsclick()
{
myFetch('https://api.nytimes.com/svc/topstories/v2//sports.json?api-key=alTrF0t8yIrlW4jnbVT5N8pA7TaGnlHa')  
}
function artsclick()
{
myFetch('https://api.nytimes.com/svc/topstories/v2//arts.json?api-key=alTrF0t8yIrlW4jnbVT5N8pA7TaGnlHa')  
}
function fashionclick()
{
myFetch('https://api.nytimes.com/svc/topstories/v2//fashion.json?api-key=alTrF0t8yIrlW4jnbVT5N8pA7TaGnlHa')  
}
function foodclick()
{
myFetch('https://api.nytimes.com/svc/topstories/v2//food.json?api-key=alTrF0t8yIrlW4jnbVT5N8pA7TaGnlHa')  
}
function travelclick()
{
myFetch('https://api.nytimes.com/svc/topstories/v2//travel.json?api-key=alTrF0t8yIrlW4jnbVT5N8pA7TaGnlHa')  
}






        
      
                            




var container1 = document.createElement('div')
container1.setAttribute('class','container-fluid p-0 mt-5 ')

var card1 = document.createElement('div')
card1.setAttribute('class','card shadow')
    var row1 = document.createElement('div')
    row1.setAttribute('class','row no-gutters')

        var column1 = document.createElement('div')
        column1.setAttribute('class','col-md-8')

            

                var cardbody1 = document.createElement('div')
                cardbody1.setAttribute('class','card-body mb-0')
            

                        var sectionCard1 = document.createElement('p')
                        sectionCard1.setAttribute('class','section-card mb-0')
                        sectionCard1.style ='text-transform:uppercase'

                        var titleCard1= document.createElement('p')
                        titleCard1.setAttribute('class','titlecard mb-0')

                        var dateCard1 = document.createElement('p')
                        dateCard1.setAttribute('class','date-card mb-0')

                        var abstractCard1 = document.createElement('p')
                        abstractCard1.setAttribute('class','abstract-card mb-0')

                        var continueReading1 = document.createElement('a')
                        continueReading1.setAttribute('href','')
                        continueReading1.setAttribute('class','continueReading mb-0')

                cardbody1.append(sectionCard1,titleCard1,dateCard1,abstractCard1,continueReading1)
        column1.appendChild(cardbody1)
        var column2 = document.createElement('div')
        column2.setAttribute('class','col-md-4')  
                        
                
                                var image1 = document.createElement('img')
                                image1.setAttribute('src','')
                                image1.setAttribute('class','card-img-bottom')
                                image1.style ='height:10rem;background-size: cover;';     
                                
                                
                                
        column2.appendChild(image1)
                            
                
    row1.append(column1,column2)
card1.appendChild(row1) 

       
                    
var card2 = document.createElement('div')
card2.setAttribute('class','card shadow')
                                
    var row2 = document.createElement('div')
    row2.setAttribute('class','row no-gutters')
                    
        var column3 = document.createElement('div')
        column3.setAttribute('class','col-md-8')        
                    
                                var cardbody2 = document.createElement('div')
                                cardbody2.setAttribute('class','card-body mb-0')
                                
                    
                                    var sectionCard2 = document.createElement('p')
                                    sectionCard2.setAttribute('class','section-card mb-0')
                                    sectionCard2.style ='text-transform:uppercase'
                                    var titleCard2= document.createElement('p')
                                    titleCard2.setAttribute('class','titlecard mb-0')
                                    var dateCard2 = document.createElement('p')
                                    dateCard2.setAttribute('class','date-card mb-0')
                                    var abstractCard2 = document.createElement('p')
                                    abstractCard2.setAttribute('class','abstract-card mb-0')
                                    var continueReading2 = document.createElement('a')
                                    continueReading2.setAttribute('href','')
                                    continueReading2.setAttribute('class','continueReading mb-0')
                                                
                                cardbody2.append(sectionCard2,titleCard2,dateCard2,abstractCard2,continueReading2)
        column3.appendChild(cardbody2)
   
                    
        var column4 = document.createElement('div')
        column4.setAttribute('class','col-md-4')  
                            
                    
                                    var image2 = document.createElement('img')
                                    image2.setAttribute('src','')
                                    image2.setAttribute('class','card-img-bottom')
                                    image2.style ='height:10rem;background-size: cover;';

                                 
                    
                                              
         column4.appendChild(image2)
                    
    row2.append(column3,column4)
card2.appendChild(row2)

var card3 = document.createElement('div')
card3.setAttribute('class','card shadow')
    var row3 = document.createElement('div')
    row3.setAttribute('class','row no-gutters')
                    
        var column5 = document.createElement('div')
        column5.setAttribute('class','col-md-8')
                    
                
                    
                                var cardbody3 = document.createElement('div')
                                cardbody3.setAttribute('class','card-body mb-0')
                                
                    
                                    var sectionCard3 = document.createElement('p')
                                    sectionCard3.setAttribute('class','section-card mb-0')
                                    sectionCard3.style ='text-transform:uppercase'
                                    var titleCard3= document.createElement('p')
                                    titleCard3.setAttribute('class','titlecard mb-0')
                                    var dateCard3 = document.createElement('p')
                                    dateCard3.setAttribute('class','date-card mb-0')
                                    var abstractCard3 = document.createElement('p')
                                    abstractCard3.setAttribute('class','abstract-card mb-0')
                                    var continueReading3 = document.createElement('a')
                                    continueReading3.setAttribute('href','')
                                    continueReading3.setAttribute('class','continueReading mb-0')
                                                
                                cardbody3.append(sectionCard3,titleCard3,dateCard3,abstractCard3,continueReading3)
        column5.appendChild(cardbody3)
     
                    
        var column6 = document.createElement('div')
        column6.setAttribute('class','col-md-4')  
                            
                    
                                    var image3 = document.createElement('img')
                                    image3.setAttribute('src','')
                                    image3.setAttribute('class','card-img-bottom')
                                    image3.style ='height:10rem;background-size: cover;';


                                    
async function myFetch(url)
{
   
    await fetch(url)
       .then((resp)=>{
       return resp.json();
       })
       .then((data)=>{

        sectionCard1.innerHTML = data.section;
        titleCard1.innerHTML = data.results[0].title;
        dateCard1.innerHTML = data.results[0].created_date;
        abstractCard1.innerHTML = data.results[0].abstract;
        continueReading1.innerHTML = "continue Reading";
        continueReading1.href = data.results[0].url;
        image1.src =data.results[0].multimedia[0].url;


        sectionCard2.innerHTML = data.section;
        titleCard2.innerHTML = data.results[1].title;
        dateCard2.innerHTML = data.results[1].created_date;
        abstractCard2.innerHTML = data.results[1].abstract;
        continueReading2.innerHTML = "continue Reading";
        continueReading2.href = data.results[0].url;
        image2.src =data.results[1].multimedia[0].url;


                                    sectionCard3.innerHTML = data.section;
                                    titleCard3.innerHTML = data.results[2].title;
                                    dateCard3.innerHTML = data.results[2].created_date;
                                    abstractCard3.innerHTML = data.results[2].abstract;
                                    continueReading3.innerHTML = "continue Reading";
                                    continueReading3.href = data.results[2].url;
                                    image3.src =data.results[2].multimedia[0].url;
   
})
.catch((err)=>{
console.log(err);
})
}
                                              
         column6.appendChild(image3)
                    
    row3.append(column5,column6)

card3.appendChild(row3)
                                    
container1.append(card1,card2,card3) 


                                    
document.body.appendChild(container1) 

