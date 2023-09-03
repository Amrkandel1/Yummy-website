//^------------ Loading-Page ------------------
$(document).ready(function(){
    $('.loading').fadeOut(500,function(){
       $('body').css('overflow' , 'auto')

       $('.loading').remove()
    })
})
//^------------ Loading-Page ------------------


//^----- sideBar-JS-Start--------
let sidebarInnerWidth=$('.inner-div').innerWidth();
$('#sideBar').css('left' ,-sidebarInnerWidth)

$('#openIcon').click(function(){
    let sidebarInnerWidth=$('.inner-div').innerWidth();
    if($('#sideBar').css('left') == "0px"){
        //^----close Navber------
        $('#sideBar').animate({left:-sidebarInnerWidth},500)
        //^----close Navber------

        //^-----change Icon------
        $('#openIcon').html('<i class="fa-solid fa-bars fs-2"></i>')
        //^-----change Icon------
       
        //^-----animation-Navbar-Links------
        $('li').eq(0).animate({top:"300px"} ,500)
        $('li').eq(1).animate({top:"300px"} ,600)
        $('li').eq(2).animate({top:"300px"} ,700)
        $('li').eq(3).animate({top:"300px"} ,800)
        $('li').eq(4).animate({top:"300px"} ,900)
        //^-----animation-Navbar-Links------
    }else{
        //^----open Navber------
        $('#sideBar').animate({left:"0px"},500) 
        //^----open Navber------

        //^-----change Icon------
        $('#openIcon').html('<i class="fa-solid fa-x fs-2"></i>')
        //^-----change Icon------

        //^-----animation-Navbar-Links------
        $('li').eq(0).animate({top:"0px"} ,500)
        $('li').eq(1).animate({top:"0px"} ,600)
        $('li').eq(2).animate({top:"0px"} ,700)
        $('li').eq(3).animate({top:"0px"} ,800)
        $('li').eq(4).animate({top:"0px"} ,900)
        //^-----animation-Navbar-Links------

    }
})
//^----- sideBar-JS-end--------



//^----main-Page-After-Open-Js-start------
let mainPageContent=document.getElementById('photosTemplet')

let mealsArr=[];
async function displayMainScreenMeals(){

    let mainScreenMeals=await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    let apiReturn=await mainScreenMeals.json();
    mealsArr=apiReturn.meals


    let box="";

    for(let i=0 ; i<mealsArr.length ; i++){
        box+=`
        <div class="col-md-3 gy-4">
        <div onclick="getMealDetails('${mealsArr[i].idMeal}')" class="img-div">               
                <img class="w-100 rounded-1" src="${mealsArr[i].strMealThumb}" alt="">
                <div class="overflow-div  rounded-1 d-flex align-items-center">
                    <h3 class="ms-2">${mealsArr[i].strMeal}</h3>
                </div>
            </div>       
        </div>
        `      
    }


    mainPageContent.innerHTML=box 

}

displayMainScreenMeals()
//^----main-Page-After-Open-Js-end------


//^---------------- Get-MeaL-Details -------------------
 let mealDetailsArr=[];
async function getMealDetails(mealID){
    let mealDetails=await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    let mealDetailsReturn=await mealDetails.json();
    mealDetailsArr=(mealDetailsReturn.meals)


    mainPageContent.innerHTML="";

    $('.inner-loading').fadeIn(500)
    

    
    let sandook="";

    sandook+=`
            <div class="col-md-4  ">

                <img class="w-100 rounded-1" src="${mealDetailsArr[0].strMealThumb}" alt="">
                <h2 class="text-white">${mealDetailsArr[0].strMeal}</h2>

            </div>

            <div class="col-md-8 text-white ">

                <h2>Instructions</h2>
                <p>${mealDetailsArr[0].strInstructions}</p>
                <h3><span class="fw-bolder">Area : </span>${mealDetailsArr[0].strArea}</h3>
                <h3><span class="fw-bolder">Category : </span>${mealDetailsArr[0].strCategory}</h3>
                <h3>Recipes :</h3>
                <ul id="list" class="list-unstyled d-flex g-3 flex-wrap">                   
                </ul>
        
                <h3>Tags :</h3>

                <ul id="strTags" class="list-unstyled d-flex g-3 flex-wrap"> 
                </ul>
        
                <a target="_blank" href="${mealDetailsArr[0].strSource}" class="btn btn-success">Source</a>
                <a target="_blank" href="${mealDetailsArr[0].strYoutube}" class="btn btn-danger">Youtube</a>
                </div>
    
    `
    
    let box7="";

    if(mealDetailsArr[0].strTags  != null && mealDetailsArr[0].strTags  != ''){
            box7+=`
            <li class="alert alert-danger m-2 p-1">${mealDetailsArr[0].strTags}</li>
            `
    }
   

    let RecipesList =[]

    RecipesList.push(mealDetailsArr[0].strMeasure1)
    RecipesList.push(mealDetailsArr[0].strMeasure2)
    RecipesList.push(mealDetailsArr[0].strMeasure3)
    RecipesList.push(mealDetailsArr[0].strMeasure4)
    RecipesList.push(mealDetailsArr[0].strMeasure5)
    RecipesList.push(mealDetailsArr[0].strMeasure6)
    RecipesList.push(mealDetailsArr[0].strMeasure7)
    RecipesList.push(mealDetailsArr[0].strMeasure8)
    RecipesList.push(mealDetailsArr[0].strMeasure9)
    RecipesList.push(mealDetailsArr[0].strMeasure10)
    RecipesList.push(mealDetailsArr[0].strMeasure11)
    RecipesList.push(mealDetailsArr[0].strMeasure12)
    RecipesList.push(mealDetailsArr[0].strMeasure13)
    RecipesList.push(mealDetailsArr[0].strMeasure14)
    RecipesList.push(mealDetailsArr[0].strMeasure15)
    RecipesList.push(mealDetailsArr[0].strMeasure16)
    RecipesList.push(mealDetailsArr[0].strMeasure17)
    RecipesList.push(mealDetailsArr[0].strMeasure18)
    RecipesList.push(mealDetailsArr[0].strMeasure19)
    RecipesList.push(mealDetailsArr[0].strMeasure20)



    let recip=[];

    recip.push(mealDetailsArr[0].strIngredient1)
    recip.push(mealDetailsArr[0].strIngredient2)
    recip.push(mealDetailsArr[0].strIngredient3)
    recip.push(mealDetailsArr[0].strIngredient4)
    recip.push(mealDetailsArr[0].strIngredient5)
    recip.push(mealDetailsArr[0].strIngredient6)
    recip.push(mealDetailsArr[0].strIngredient7)
    recip.push(mealDetailsArr[0].strIngredient8)
    recip.push(mealDetailsArr[0].strIngredient9)
    recip.push(mealDetailsArr[0].strIngredient10)
    recip.push(mealDetailsArr[0].strIngredient11)
    recip.push(mealDetailsArr[0].strIngredient12)
    recip.push(mealDetailsArr[0].strIngredient13)
    recip.push(mealDetailsArr[0].strIngredient14)
    recip.push(mealDetailsArr[0].strIngredient15)
    recip.push(mealDetailsArr[0].strIngredient16)
    recip.push(mealDetailsArr[0].strIngredient17)
    recip.push(mealDetailsArr[0].strIngredient18)
    recip.push(mealDetailsArr[0].strIngredient19)
    recip.push(mealDetailsArr[0].strIngredient20)


    let Recipeslists="";
    
    for(let i = 0 ; i < 20 ; i++){
        if(RecipesList[i] && recip[i] != null && RecipesList[i] && recip[i] != ''){
            Recipeslists +=`
            <li class="alert alert-info m-2 p-1">${RecipesList[i]} ${recip[i]}</li>
            `           
        }   
    }


    mainPageContent.innerHTML=sandook
    $('#list').html(Recipeslists)
    $('#strTags').html(box7)
    $('#searchPhotosTemplet').html(" ")
    $('.inner-loading').fadeOut(500)

}
//^---------------- Get-Meal-Details -------------------


//^--------------- Search-Page ---------------------
 function searchPage(){

    if($('#sideBar').css('left') == "0px"){
        $('#sideBar').animate({left:-sidebarInnerWidth},500)
        $('#openIcon').html('<i class="fa-solid fa-bars fs-2"></i>')
    }

    mainPageContent.innerHTML="";

    let sandook=""
    
    sandook+=`
            <div class="col-md-6">
                <input class="form-control searchName" placeholder="Search By Name" onkeyup="searchName(this.value)" type="text">
            </div>

            <div class="col-md-6">
                <input class="form-control searchName lettersearch" placeholder="Search By letter" onkeyup="searchLetter(this.value)" type="text">
            </div>
    `
    
    mainPageContent.innerHTML=sandook;
}
//^--------------- Search-Page ---------------------


//^------------------ Search-By-Name --------------------
let searchArr=[];
async function searchName(name){

    $('.inner-loading').fadeIn(500)

    let searchApi=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    let searchApiReturn=await searchApi.json();
    searchArr=(searchApiReturn.meals);


    let box=""


    for(let i=0 ; i<searchArr.length ;i++){
        box+=`
        <div class="col-md-3 gy-4">
                <div onclick="getMealDetails('${searchArr[i].idMeal}')" class="img-div">               
                    <img class="w-100 rounded-1" src="${searchArr[i].strMealThumb}" alt="">
                        <div class="overflow-div  rounded-1 d-flex align-items-center">
                            <h3 class="ms-2">${searchArr[i].strMeal}</h3>
                        </div>
                </div>       
        </div>
        `
    }


$('#searchPhotosTemplet').html(box)  

$('.inner-loading').fadeOut(500)

}
//^------------------ Search-By-Name --------------------


//^------------------ Search-By-Letter --------------------
 let searchLetterArr=[];
 async function searchLetter(letter){

    $('.inner-loading').fadeIn(500)

     let searchLettApi=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`)
     let searchLettApiReturn=await searchLettApi.json();
     searchLetterArr=(searchLettApiReturn.meals);
 
 
     let box=""
 
 
     for(let i=0 ; i<searchLetterArr.length ;i++){
         box+=`
         <div class="col-md-3 gy-4">
                 <div onclick="getMealDetails('${searchLetterArr[i].idMeal}')" class="img-div">               
                     <img class="w-100 rounded-1" src="${searchLetterArr[i].strMealThumb}" alt="">
                         <div class="overflow-div  rounded-1 d-flex align-items-center">
                             <h3 class="ms-2">${searchLetterArr[i].strMeal}</h3>
                         </div>
                 </div>       
         </div>
         `
     }


 $('#searchPhotosTemplet').html(box)  

 $('.inner-loading').fadeOut(500)

}
//^------------------ Search-By-Letter --------------------


//^---------------------- Categories-Page -------------------
let categoriesArr=[];
async function categoriesPage(){

    $('.inner-loading').fadeIn(500)

    if($('#sideBar').css('left') == "0px"){
        $('#sideBar').animate({left:-sidebarInnerWidth},500)
        $('#openIcon').html('<i class="fa-solid fa-bars fs-2"></i>')
    }


    mainPageContent.innerHTML="";

    
    let categoriesApi=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    let categoriesApiReturn=await categoriesApi.json();
    categoriesArr=(categoriesApiReturn.categories)
    

    let box="";
    let paragsplit;


    for(let i=0 ; i<categoriesArr.length ; i++){
        if(categoriesArr[i].strCategoryDescription != null){
            paragsplit=await categoriesArr[i].strCategoryDescription.split(" ").slice(0,20).join(" ");
        }
        box+=`
        <div class="col-md-3 gy-4">
        <div onclick="getcategoriesMealDetails('${categoriesArr[i].strCategory}')" class="img-div">               
                <img class="w-100 rounded-1" src="${categoriesArr[i].strCategoryThumb}" alt="">
                <div class="overflow-div text-center rounded-1 d-flex flex-column align-items-center ">
                    <h3 class="mt-4 pb-0 mb-0">${categoriesArr[i].strCategory}</h3>
                    <p class="">${paragsplit}</p>

                </div>
            </div>       
        </div>
        `      
    }


    mainPageContent.innerHTML=box


    $('.inner-loading').fadeOut(500)
}
//^---------------------- Categories-Page -------------------


//^-------------------- Get-Categories-Meal-Details -------------
let getcategoriesMealArr=[];
async function getcategoriesMealDetails(categoriesMeal){

    $('.inner-loading').fadeIn(500)

    let categoriesMealsApi=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoriesMeal}`)
    let categoriesMealsReturn= await categoriesMealsApi.json();
    getcategoriesMealArr=(categoriesMealsReturn.meals);

    mainPageContent.innerHTML=" "

    let box="";

    for(let i=0 ; i<getcategoriesMealArr.length ; i++){
        box+=`
        <div class="col-md-3 gy-4">
        <div onclick="getMealDetails('${getcategoriesMealArr[i].idMeal}')" class="img-div">               
                <img class="w-100 rounded-1" src="${getcategoriesMealArr[i].strMealThumb}" alt="">
                <div class="overflow-div  rounded-1 d-flex align-items-center">
                    <h3 class="ms-2">${getcategoriesMealArr[i].strMeal}</h3>
                </div>
            </div>       
        </div>
        `      
    }


    mainPageContent.innerHTML=box;

    $('.inner-loading').fadeOut(500)

}
//^-------------------- Get-Categories-Meal-Details -------------


//^--------------- Area-Page -----------------
let areaPageArr=[];
async function areaPage(){

    $('.inner-loading').fadeIn(500)

    if($('#sideBar').css('left') == "0px"){
        $('#sideBar').animate({left:-sidebarInnerWidth},500)
        $('#openIcon').html('<i class="fa-solid fa-bars fs-2"></i>')
    }

    mainPageContent.innerHTML="";


    let areaPageApi=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let areaPageApiReturn=await areaPageApi.json();
    areaPageArr=(areaPageApiReturn.meals);


    let box="";

    for(let i=0 ; i<areaPageArr.length ; i++){
        box+=`
        <div class="col-md-3 text-white">
        <div onclick="getAreaFilter('${areaPageArr[i].strArea}')" class="inner-layer2 rounded-2 p-5  position-relative flex-column d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-house-laptop "></i>
            <h3>${areaPageArr[i].strArea}</h3>
        </div>
    </div>
        `      
    }

    mainPageContent.innerHTML=box;

    $('.inner-loading').fadeOut(500)

}
//^--------------- Area-Page -----------------


//^--------------- Get-Area-Filter -------------
let areaFilterArr=[];
async function getAreaFilter(areaName){

    $('.inner-loading').fadeIn(500)

    let areaPageFilterApi=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`)
    let areaPageFilterApiReturn=await areaPageFilterApi.json();
    areaFilterArr=(areaPageFilterApiReturn.meals);

    mainPageContent.innerHTML="";


    let box="";


    for(let i=0 ; i<areaFilterArr.length ; i++){
        box+=`
        <div class="col-md-3 gy-4">
        <div onclick="getMealDetails('${areaFilterArr[i].idMeal}')" class="img-div">               
                <img class="w-100 rounded-1" src="${areaFilterArr[i].strMealThumb}" alt="">
                <div class="overflow-div  rounded-1 d-flex align-items-center">
                    <h3 class="ms-2">${areaFilterArr[i].strMeal}</h3>
                </div>
            </div>       
        </div>
        `      
    }


    mainPageContent.innerHTML=box;

    $('.inner-loading').fadeOut(500)
}
//^--------------- Get-Area-Filter -------------


//^--------------- Ingredients-Page -------------
let ingredientsPageArr=[];
async function ingredientsPage(){

    $('.inner-loading').fadeIn(500)

    if($('#sideBar').css('left') == "0px"){
        $('#sideBar').animate({left:-sidebarInnerWidth},500)
        $('#openIcon').html('<i class="fa-solid fa-bars fs-2"></i>')
    }

    mainPageContent.innerHTML="";

    let ingredientsPageApi=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let ingredientsPageApiReturn=await ingredientsPageApi.json();
    ingredientsPageArr=(ingredientsPageApiReturn.meals);


    let box ="";

    let paragsplit;
    for(let i = 0 ; i<20 ; i++){
        if(ingredientsPageArr[i].strDescription != null){
            paragsplit=await ingredientsPageArr[i].strDescription.split(" ").slice(0,20).join(" ");
        }
        box +=`
        <div class="col-md-3 text-white text-center">
        <div onclick="ingredientsPageFilter('${ingredientsPageArr[i].strIngredient}')" class="inner-layer2 rounded-2  position-relative flex-column  d-flex justify-content-center align-items-center">
            <i class="fa-solid fa-drumstick-bite"></i>
            <h3 class="fs-3">${ingredientsPageArr[i].strIngredient}</h3>
            <p>${paragsplit}</p>
        </div>
        </div>
        `
    }

    mainPageContent.innerHTML=box;

    $('.inner-loading').fadeOut(500)

}
//^--------------- Ingredients-Page -------------


//^----------------- Ingredients-Page-Filter -----------
let ingredientsPageFilterArr=[];
async function ingredientsPageFilter(mainIngredient){

    $('.inner-loading').fadeIn(500)

    let ingredientsPageFilterApi=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mainIngredient}`)
    let ingredientsPageFilterApiReturn=await ingredientsPageFilterApi.json();
    ingredientsPageFilterArr=(ingredientsPageFilterApiReturn.meals);


    mainPageContent.innerHTML="";

    let box="";

    for(let i=0 ; i<ingredientsPageFilterArr.length ; i++){
        box+=`
        <div class="col-md-3 gy-4">
        <div onclick="getMealDetails('${ingredientsPageFilterArr[i].idMeal}')" class="img-div">               
                <img class="w-100 rounded-1" src="${ingredientsPageFilterArr[i].strMealThumb}" alt="">
                <div class="overflow-div  rounded-1 d-flex align-items-center">
                    <h3 class="ms-2">${ingredientsPageFilterArr[i].strMeal}</h3>
                </div>
            </div>       
        </div>
        `      
    }


    mainPageContent.innerHTML=box;

    $('.inner-loading').fadeOut(500)

}
//^----------------- Ingredients-Page-Filter -----------






//?------------------------ contact-page-start --------------------------

function contactUsPage(){

    if($('#sideBar').css('left') == "0px"){
        $('#sideBar').animate({left:-sidebarInnerWidth},500)
        $('#openIcon').html('<i class="fa-solid fa-bars fs-2"></i>')
    }

    mainPageContent.innerHTML="";

    let box="";

    box+=`
    <div class="row" id="rowData"><div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput" onkeyup="inputsValidation()" type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" onkeyup="inputsValidation()" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" onkeyup="inputsValidation()" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" onkeyup="inputsValidation()" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input id="passwordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password Minimum eight characters, at least one letter and one number:
                </div>
            </div>
            <div class="col-md-6">
                <input id="repasswordInput" onkeyup="inputsValidation()" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled="" class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div>
</div>
    `


    mainPageContent.innerHTML=box;


    submitBtn = document.getElementById("submitBtn")

    document.getElementById("nameInput").addEventListener("focus", () => {
        nameInputTouched = true
    })

    document.getElementById("emailInput").addEventListener("focus", () => {
        emailInputTouched = true
    })

    document.getElementById("phoneInput").addEventListener("focus", () => {
        phoneInputTouched = true
    })

    document.getElementById("ageInput").addEventListener("focus", () => {
        ageInputTouched = true
    })

    document.getElementById("passwordInput").addEventListener("focus", () => {
        passwordInputTouched = true
    })

    document.getElementById("repasswordInput").addEventListener("focus", () => {
        repasswordInputTouched = true
    })
}


let nameInputTouched = false;
let emailInputTouched = false;
let phoneInputTouched = false;
let ageInputTouched = false;
let passwordInputTouched = false;
let repasswordInputTouched = false;

function inputsValidation(){


    if (nameInputTouched) {
        if(nameValidation()){
            document.getElementById("nameAlert").classList.replace("d-block", "d-none")
        }else{
            document.getElementById('nameAlert').classList.replace('d-none','d-block')
        }
    }

    if (emailInputTouched) {

        if (emailValidation()) {
            document.getElementById("emailAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("emailAlert").classList.replace("d-none", "d-block")

        }
    }

    if (phoneInputTouched) {
        if (phoneValidation()) {
            document.getElementById("phoneAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("phoneAlert").classList.replace("d-none", "d-block")

        }
    }

    if (ageInputTouched) {
        if (ageValidation()) {
            document.getElementById("ageAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("ageAlert").classList.replace("d-none", "d-block")

        }
    }

    if (passwordInputTouched) {
        if  (passwordValidation()){
                document.getElementById("passwordAlert").classList.replace("d-block", "d-none")
            } else {
                document.getElementById('passwordAlert').classList.replace('d-none','d-block')
            }
    }

    if (repasswordInputTouched) {
        if (repasswordValidation()) {
            document.getElementById("repasswordAlert").classList.replace("d-block", "d-none")
        } else {
            document.getElementById("repasswordAlert").classList.replace("d-none", "d-block")

        }
    }


    if (nameValidation() && emailValidation() && phoneValidation() && ageValidation() && passwordValidation() && repasswordValidation()){
        submitBtn.removeAttribute("disabled")
    } else {
        submitBtn.setAttribute("disabled", true)
    }
}


function nameValidation(){
    let regex=/[A-Za-z]{3,15}$/
    return regex.test(document.getElementById('nameInput').value);
}


function emailValidation(){
    let regex=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/
    return regex.test(document.getElementById('emailInput').value);
}


function phoneValidation(){
    let regex=/^01[0-2]{1}[0-9]{8}$/
    return regex.test(document.getElementById('phoneInput').value);
}


function ageValidation(){
    let regex=/^(1[89]|[2-9][0-9]|1[0-4][0-9]|150)$/
    return regex.test(document.getElementById('ageInput').value);
}


function passwordValidation() {
    return (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{}[\]|;:'",.<>/?]).{8,}$/.test(document.getElementById('passwordInput').value))
}


function repasswordValidation(){
 return document.getElementById('repasswordInput').value == document.getElementById('passwordInput').value
        
}

//?------------------------ contact-page-end --------------------------