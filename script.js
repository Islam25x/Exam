let inp1 = document.querySelector('#in1')
let inp2 = document.querySelector('#in2')
let res = document.getElementById('res')
let qes_num = document.querySelector('.Q-num span')
let qes = document.getElementById('qes')
let tit = document.getElementById('title')
let button = document.querySelector('button')
let hen = document.getElementById('hent')
let Next = document.getElementById('next')
let sum = 0
let exam =
[  
    {
        'id': 1,
        'title': 'Area of triangle',
        'q':'This Application Allows Users To Input The Base And Height Values Then It Calculates And Provides The Area Of The Triangle. ',
        'btn': 'CALCULATE',
        'Placeholder1':'Enter Base',
        'Placeholder2':'Enter Height',
        'hent' : 'The Area Of Triangle = (1 ÷ 2 × (Base × Height))',
        'solve' :function(){
            button.addEventListener('click',function(){
                if(isNaN(inp1.value) == true || isNaN(inp2.value) == true){
                    res.innerHTML = `Plz Enter number`
                }
                else{
                    res.innerHTML = `Results = 1 ÷ 2 (${inp1.value} X ${inp2.value})= ${(1 / 2)*(inp1.value * inp2.value)} Square Units`
                    Next.style.display = 'inline'
                }
            })
        }
    },
    {
        'id': 2,
        'title': 'Age Conversion (Years - Days):',
        'q':'This application takes age input in years and seamlessly converts it into the corresponding number of days. ',
        'btn': 'Add',
        'inpStyle': 'none',
        'Placeholder1':'Your age',

        'hent' : 'AGE IN DAYS = (AGE IN YEARS ) × (365.25 DAYS)',
        'solve' : function(){
            button.addEventListener('click',function(){
            if(isNaN(inp1.value) == true){
                res.innerHTML = `Plz Enter number`
            }
            else{
                res.innerHTML = `AGE IN DAYS = (${inp1.value}) × (365.25 DAYS) =${inp1.value * 365.25} days`
                Next.style.display = 'inline'
            }
        })
    }
    },
    {
        'id': 3,
        'title': 'Full Name Display:',
        'q':"This Application Requests The User's First And Family Names, And In Response, It Provides The Complete Full Name. ",
        'btn': 'DISPLAY',
        'inpStyle': 'block',
        'hent' : '',
        'Placeholder1':'Enter your First Name',
        'Placeholder2':'Enter your Family Name',
        'solve' : function(){
            button.addEventListener('click',function(){
                res.innerHTML = `Your Name: ${inp1.value} ${inp2.value}`
                Next.style.display = 'inline'
        })
        }
    },
    {
        'id': 4,
        'title': 'Converting Hours To Seconds:',
        'q':'This application accepts input for the number of hours from the user and subsequently converts and returns the result in seconds. ',
        'btn': 'Convert',
        'Placeholder1':'HOURS',
        'inpStyle': 'none',
        'hent' : 'HOURS IN SECONDS = (HOURS ) × (3600 SECONDS)',
        'solve' :function(){
            button.addEventListener('click',function(){
                if(isNaN(inp1.value) == true){
                    res.innerHTML = `Plz Enter number`
                }
                else{
                    res.innerHTML = `HOURS IN SECONDS = (${inp1.value}) × (3600 SECONDS) =${inp1.value * 3600} SECONDS`
                    Next.style.display = 'inline'
                }
            })
        }
    },
    {
        'id': 5,
        'title': 'Number Checker:',
        'q':'This application takes a number as input and evaluates whether it is equal to zero. If the number is zero, it returns True; otherwise, it returns False. ',
        'btn': 'Add',
        'Placeholder1':'Enter number',
        'hent' : '',
        'solve' :function(){
            button.addEventListener('click',function(){
                if(isNaN(inp1.value) == true){
                    res.innerHTML = `Plz Enter number`
                }
                else if(inp1.value == '0'){
                    res.innerHTML = `True`
                    Next.style.display = 'inline'
                }
                else{
                    res.innerHTML = `False`
                    Next.style.display = 'inline'
                }
            })
        }
    },
    {
        'id': 6,
        'title': 'Modulus of Two numbers:',
        'q':'This Application Prompts Users To Input Two Numbers And Returns The Modulus (Remainder) Of Their Division. ',
        'inpStyle': 'block',
        'btn': 'CALCULATE',
        'Placeholder1':'Enter first Number',
        'Placeholder2':'Enter second Name',
        'hent' : 'The Reminder = First Number % Second Number',
        'solve' :function(){
            button.addEventListener('click',function(){
                if(isNaN(inp1.value) == true || isNaN(inp2.value) == true){
                    res.innerHTML = `Plz Enter number`
                }
                else{
                    res.innerHTML = `Results = (${inp1.value} % ${inp2.value})= ${(inp1.value % inp2.value)}`
                    Next.style.display = 'inline'
                }
            })
        }
    },
    {
        'id': 7,
        'title': 'Find the largest of two number:',
        'q':'This Application Takes Two Parameters, Num1 And Num2, And Prints The Greater Number. If The Two Numbers Are Equal, It Prints A Message Indicating That They Are Equal. ',
        'btn': 'CALCULATE',
        'hent' : 'The Reminder = Compration Of Two Numbers:',
        'Placeholder1':'Enter first Number',
        'Placeholder2':'Enter second Name',
        'solve' :function(){
            button.addEventListener('click',function(){
                if(isNaN(inp1.value) == true || isNaN(inp2.value) == true){
                    res.innerHTML = `Plz Enter number`
                }
                else if(inp1.value == inp2.value){
                    res.innerHTML = `two number are equal`
                    Next.style.display = 'inline'
                }
                else if(inp1.value > inp2.value){
                    res.innerHTML = `${inp1.value} is greater than ${inp2.value}`
                    Next.style.display = 'inline'
                }
                else if(inp1.value < inp2.value){
                    res.innerHTML = `${inp2.value} is greater than ${inp1.value}`
                    Next.style.display = 'inline'
                }
            })
        }
    },
    {
        'id': 8,
        'title': 'Number Checker:',
        'q':'This application accepts input from the user and subsequently check if the input is a number or not. ',
        'btn': 'Check',
        'hent' : 'The input is a number :)',
        'inpStyle': 'none',
        'Placeholder1':'Enter number plz',
        'solve' : function(){
            button.addEventListener('click',function(){
                if(isNaN(inp1.value) == true){
                    res.innerHTML = `${inp1.value} Is not number`
                }
                else if(inp1.value == ''){
                    res.innerHTML = `Plz Enter a number`
                }
                else{
                    res.innerHTML = `${inp1.value} Is number`
                }
                Next.style.display = 'inline'
        })
        }
    },
    {
        'id': 9,
        'title': 'Date Dispay:',
        'q':'This application displays the current date. ',
        'btn': 'Get Date',
        'hent' : `1. Full Date: Wed Jan 10 2024 16:24:53 GMT+0300 (Arabian Standard Time)<br>
                2. The current month is 0<br>
                3. Today's Day is 3<br>
                4. Time in Hours 16<br>
                5. Time in minutes 24<br>
                6. Times in Seconds 53<br>
                7. Times in miliseconds is 845`,
        'hent_style': 'left',
        'inp1Style' : 'none',
        'solve' :function(){
            button.addEventListener('click',function(){
                const currentDate = new Date();
            
                // Extracting the required information
                const fullDate = currentDate.toString();
                const currentMonth = currentDate.getMonth(); // Months are zero-indexed (0-11)
                const todayDay = currentDate.getDay(); // Days are zero-indexed (0-6)
                const hours = currentDate.getHours();
                const minutes = currentDate.getMinutes();
                const seconds = currentDate.getSeconds();
                const milliseconds = currentDate.getMilliseconds();
                res.innerHTML = `1. Full Date: ${fullDate}<br>
                2. The current month is ${currentMonth+1}<br>
                3. Today's Day is ${todayDay}<br>
                4. Time in Hours ${hours}<br>
                5. Time in minutes ${minutes}<br>
                6. Times in Seconds ${seconds}<br>
                7. Times in miliseconds is ${milliseconds}`
                Next.style.display = 'none'
            })
        }
    }
]


qes_num.textContent = exam[0].id 
qes.textContent = exam[0].q 
tit.textContent = exam[0].title 
button.textContent = exam[0].btn 
hen.innerHTML = exam[0].hent 
res.innerHTML = exam[0].solve()
inp1.placeholder = exam[0].Placeholder1 
inp2.placeholder = exam[0].Placeholder2
res.innerHTML = ''
Next.addEventListener('click',function(){
    let i =0 
    i++
    sum +=i
    inp1.value = ''
    inp2.value = ''
    qes_num.textContent = exam[sum].id 
    qes.textContent = exam[sum].q 
    tit.textContent = exam[sum].title 
    button.textContent = exam[sum].btn 
    hen.innerHTML = exam[sum].hent 
    hen.style.textAlign =exam[sum].hent_style
    inp2.style.display = exam[sum].inpStyle
    inp1.placeholder = exam[sum].Placeholder1 
    inp2.placeholder = exam[sum].Placeholder2
    inp1.style.display = exam[sum].inp1Style
    res.innerHTML = exam[sum].solve()
    res.innerHTML = ''
    Next.style = 'none'

})
