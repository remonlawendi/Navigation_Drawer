 var toggle = document.querySelector('.toggle');
 var navigate  = document.querySelector('.navigator')

 function toggleHandler(){   
    if(
        toggle.classList.contains('active')
    )
        {
            toggle.classList.remove('active')
            navigate.classList.remove('active')
            console.log('Active class is removed')
        }
    else{
            toggle.classList.add('active')
            navigate.classList.add('active')
            console.log('Active class is added')
        }
 }
 toggle.addEventListener("click",toggleHandler)
 console.log(navigate)
 navigate.addEventListener("click",toggleHandler)
