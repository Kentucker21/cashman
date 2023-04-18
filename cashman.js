let Senbtn=document.querySelector('.SendFormBtn')
let principal=document.querySelector('.principalfield')
let processfee=document.querySelector('.processfeefield')
let interest=document.querySelector('.interestfield')
let years=document.querySelector('.yearsfield')
let result=document.querySelector('.result')


function CalculateARP(principal,processfee,interest,years){
    let principalvalue=parseInt(principal.value)
    let processvalue=parseInt(processfee.value)
    let interestvalue=parseFloat(interest.value)
    let yearsvalue=parseInt(years.value) 

    if(principalvalue<=2_000_000||principalvalue>=15_000_000){
        window.alert('principal should be between 2000000-15000000')
       return
    }

    if(processfee<=4000||processfee>=20000){
        
        window.alert('proccess fee should be between 4000-20000')
        return
    }
    if(interestvalue<=4.25||interestvalue>=12){
        
        window.alert('interest must be between 4.25-12%')
        return
    }
    if(yearsvalue<=2||yearsvalue>=30){
        
        window.alert('years of repayment must be between 2-30 years')
        return
    }

    function calc(){
        let totalMonths=yearsvalue*12
        let totalDays=yearsvalue*365
        let yearlyInterest=principalvalue*(interestvalue/100)
        let totalInterest=yearlyInterest*yearsvalue
        let totalMoneyPaid=totalInterest+processvalue+principalvalue
        let totalMoneyMade=totalMoneyPaid-principalvalue
        let CustomerMonthlyPayments=(totalInterest+principalvalue)/totalMonths
        let ARP=((((processvalue+totalInterest)/principalvalue)/totalDays)*365)*100
        result.innerHTML=`total months:${totalMonths} <br>
                           total days:${totalDays} <br>
                           yearly interest:$${yearlyInterest} <br>
                           total Interest:$${totalInterest} <br>
                            Total to be Paid:$${totalMoneyPaid} <br>
                            Total money made:$${totalMoneyMade} <br>
                            ARP:${Math.round(ARP*10)/10}% <br>
                            Monthly Payments:$${Math.round(CustomerMonthlyPayments) }`
    }
    calc()
}

Senbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    CalculateARP(principal,processfee,interest,years)  }
    )