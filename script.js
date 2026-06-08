let DD= document.querySelector(".DD")
let MM= document.querySelector(".MM")
let YYYY= document.querySelector(".YYYY")
let btn=document.querySelector(".btn")
let yearsSpan = document.querySelector(".y span");
let monthsSpan = document.querySelector(".m span");
let daysSpan = document.querySelector(".d span");
let dayLabel = document.querySelector(".day p");
let monthLabel = document.querySelector(".month p");
let yearLabel = document.querySelector(".year p");

btn.addEventListener("click",function () {
     let currentYear= new Date().getFullYear()
    let currentMonth= new Date().getMonth()+1
    let currentDay= new Date().getDate()
      let urBrithYear=currentYear-parseInt(YYYY.value)
        let urBrithMonth=currentMonth-parseInt(MM.value)
    let urBrithDay=currentDay-parseInt(DD.value)
     function validate(input,age,condition){
                let errorMsg=input.nextElementSibling
        if(condition){
         input.classList.add("notvalid")
         age.classList.add("error")
        errorMsg.style.display = "block";
        //  input.insertAdjacentHTML('afterend','<p class="error-msg">Must be a valid day</p>')
                //  return true


        }else{
            input.classList.remove("notvalid")
            age.classList.remove("error")
            errorMsg.style.display = "none"
            // return false
        }
       
        
    }
    validate(YYYY,yearLabel,parseInt(YYYY.value)>currentYear||YYYY.value===""||isNaN(parseInt(YYYY.value)))
    validate(MM,monthLabel,parseInt(MM.value)>12||MM.value===""||isNaN(parseInt(MM.value)))
    validate(DD,dayLabel,parseInt(DD.value)>31||DD.value===""||isNaN(parseInt(DD.value)))
   
    if (urBrithDay<0) {
        urBrithMonth-=1
        urBrithDay+=30
    }
     if (urBrithMonth<0) {
        urBrithYear-=1
        urBrithMonth+=12 
    }
    // if (parseInt(YYYY.value)>currentYear) {
    //     YYYY.classList.add("notvalid")
        
    // }else{
    //             YYYY.classList.remove("notvalid")

    // }
    let arryCheck=[YYYY,MM,DD]
     let check= arryCheck.some(function (e) {
       return  e.classList.contains("notvalid")
        
    })
    if(check){
        return
    }
console.log(check)

  yearsSpan.textContent=urBrithYear
 monthsSpan.textContent=urBrithMonth
 daysSpan.textContent=urBrithDay
    

})
