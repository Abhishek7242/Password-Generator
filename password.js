
let normal=document.getElementById("ninput")
let storage;
// Create a new Date object
const currentDate = new Date();

// Get the current date, month, and year
const date = currentDate.getDate();
const month = currentDate.getMonth() + 1; // Note: JavaScript months are zero-based
const year = currentDate.getFullYear();

// Output the result


let copybtn=document.getElementById("copybtn")
let normalbtn=document.getElementById("normalg")
let numval=document.getElementById('numval')
let passcheck=document.getElementById('passcheck')
let cn=document.getElementById('checknum')
let cuc=document.getElementById('checkuc')
let clc=document.getElementById('checklc')
let cs=document.getElementById('checkspecial')
let text = document.getElementById("text")
let war = document.getElementById("war")
let flex=()=>{
 copybtn.style.display='flex'
 normalbtn.innerText='Generate new password'
 normalbtn.style.background='green'
}
let generate=()=>{
  normalbtn.innerText='Generate'
  normalbtn.style.background='rgb(34, 255, 0)'

}


let index
class password{
  constructor(){
    console.log('Password generator started');
    this.pass=""
  }
  generatepassword(){
let nor=numval.value
    let alpha='abcdefghijklmnopqrstwxyz'
    let alphaupper=alpha.toUpperCase()
    let num='0123456789'
    let unique="!@#$&"
    let i =0


      while (i < nor) {
        if (cn.checked && clc.checked && cuc.checked && cs.checked) {
          // All checkboxes are checked
          this.pass += alpha[Math.floor(Math.random() * alpha.length)];
          this.pass += alphaupper[Math.floor(Math.random() * alphaupper.length)];
          this.pass += num[Math.floor(Math.random() * num.length)];
          this.pass += unique[Math.floor(Math.random() * unique.length)];
      passcheck.innerHTML='Very Strong Password'
      passcheck.classList.remove('strong')
      passcheck.classList.remove('weak')
          passcheck.style.color='black'
         flex()

      passcheck.classList.remove('normal')
      passcheck.classList.add('verystrong')
          i += 4;
        } else if (cn.checked && clc.checked && cuc.checked) {
          // cn, clc, and cuc are checked
          this.pass += num[Math.floor(Math.random() * num.length)];
          this.pass += alpha[Math.floor(Math.random() * alpha.length)];
          this.pass += alphaupper[Math.floor(Math.random() * alphaupper.length)];
          passcheck.innerHTML='Strong Password'
      passcheck.classList.remove('verystrong')
      passcheck.classList.remove('weak')
      passcheck.classList.remove('normal')
          passcheck.style.color='black'
         flex()


          passcheck.classList.add('strong')
          i += 3;
        } else if (cn.checked && clc.checked && cs.checked) {
          // cn, clc, and cs are checked
          this.pass += num[Math.floor(Math.random() * num.length)];
          this.pass += alpha[Math.floor(Math.random() * alpha.length)];
          this.pass += unique[Math.floor(Math.random() * unique.length)];
          passcheck.innerHTML='Strong Password'
          passcheck.classList.add('strong')
          passcheck.style.color='black'
         flex()

          passcheck.classList.remove('verystrong')
      passcheck.classList.remove('weak')
      passcheck.classList.remove('normal')
          i += 3;
        } else if (cn.checked && cuc.checked && cs.checked) {
          // cn, cuc, and cs are checked
          this.pass += num[Math.floor(Math.random() * num.length)];
          this.pass += alphaupper[Math.floor(Math.random() * alphaupper.length)];
          this.pass += unique[Math.floor(Math.random() * unique.length)];
          passcheck.innerHTML='Strong Password'
          passcheck.classList.add('strong')
          passcheck.style.color='black'
         flex()

          passcheck.classList.remove('verystrong')
      passcheck.classList.remove('weak')
      passcheck.classList.remove('normal')
          i += 3;
        } else if (clc.checked && cuc.checked && cs.checked) {
          // clc, cuc, and cs are checked
          this.pass += alpha[Math.floor(Math.random() * alpha.length)];
          this.pass += alphaupper[Math.floor(Math.random() * alphaupper.length)];
          this.pass += unique[Math.floor(Math.random() * unique.length)];
          passcheck.innerHTML='Strong Password'
          passcheck.classList.remove('verystrong')
      passcheck.classList.remove('weak')
      passcheck.classList.remove('normal')
          passcheck.style.color='black'
         flex()

          passcheck.classList.add('strong')
          i += 3;
        } else if (cn.checked && clc.checked) {
          // cn and clc are checked
          this.pass += num[Math.floor(Math.random() * num.length)];
          this.pass += alpha[Math.floor(Math.random() * alpha.length)];
          passcheck.innerHTML='Normal Password'
          passcheck.classList.add('normal')
          passcheck.style.color='black'
         flex()

          passcheck.classList.remove('verystrong')
      passcheck.classList.remove('weak')
      passcheck.classList.remove('strong')
          i += 2;
        } else if (cn.checked && cuc.checked) {
          // cn and cuc are checked
          this.pass += num[Math.floor(Math.random() * num.length)];
          this.pass += alphaupper[Math.floor(Math.random() * alphaupper.length)];
          passcheck.innerHTML='Normal Password'
          passcheck.classList.add('normal')
          passcheck.style.color='black'
         flex()

          passcheck.classList.remove('verystrong')
          passcheck.classList.remove('weak')
          passcheck.classList.remove('strong')
          i += 2;
        } else if (cn.checked && cs.checked) {
          // cn and cs are checked
          this.pass += num[Math.floor(Math.random() * num.length)];
          this.pass += unique[Math.floor(Math.random() * unique.length)];
          passcheck.innerHTML='Strong Password'
          passcheck.classList.remove('normal')
          passcheck.style.color='black'
         flex()

          passcheck.classList.remove('verystrong')
          passcheck.classList.remove('weak')
          passcheck.classList.add('strong')
          i += 2;
        } else if (clc.checked && cuc.checked) {
          // clc and cuc are checked
          this.pass += alpha[Math.floor(Math.random() * alpha.length)];
          this.pass += alphaupper[Math.floor(Math.random() * alphaupper.length)];
          passcheck.innerHTML='Normal Password'
          passcheck.classList.add('normal')
          passcheck.style.color='black'
         flex()

          passcheck.classList.remove('verystrong')
          passcheck.classList.remove('weak')
          passcheck.classList.remove('strong')
          i += 2;
        } else if (clc.checked && cs.checked) {
          // clc and cs are checked
          this.pass += alpha[Math.floor(Math.random() * alpha.length)];
          this.pass += unique[Math.floor(Math.random() * unique.length)];
          passcheck.innerHTML='Strong Password'
          passcheck.classList.remove('normal')
             passcheck.classList.remove('verystrong')
      passcheck.classList.remove('weak')
          passcheck.style.color='black'
flex()
      passcheck.classList.add('strong')
          i += 2;
        } else if (cuc.checked && cs.checked) {
          // cuc and cs are checked
          this.pass += alphaupper[Math.floor(Math.random() * alphaupper.length)];
          this.pass += unique[Math.floor(Math.random() * unique.length)];
          passcheck.innerHTML='Strong Password'
          passcheck.classList.remove('normal')
             passcheck.classList.remove('verystrong')
      passcheck.classList.remove('weak')
          passcheck.style.color='black'

flex()
passcheck.classList.add('strong')
          i += 2;
        } else if (cn.checked) {
          // Only cn is checked
          this.pass += num[Math.floor(Math.random() * num.length)];
          passcheck.innerHTML='Weak Password'
          passcheck.classList.add('weak')
          passcheck.style.color='black'
          flex()

          passcheck.classList.remove('verystrong')
          passcheck.classList.remove('normal')
          passcheck.classList.remove('strong')
          i += 1;
        } else if (clc.checked) {
          // Only clc is checked
          this.pass += alpha[Math.floor(Math.random() * alpha.length)];
          passcheck.innerHTML='Weak Password'
          passcheck.classList.add('weak')
        
          passcheck.style.color='black'
          flex()

          passcheck.classList.remove('verystrong')
          passcheck.classList.remove('normal')
          passcheck.classList.remove('strong')
          i += 1;
        } else if (cuc.checked) {
          // Only cuc is checked
          this.pass += alphaupper[Math.floor(Math.random() * alphaupper.length)];
          passcheck.innerHTML='Weak Password'
          passcheck.classList.add('weak')
          passcheck.style.color='black'
          flex()

          passcheck.classList.remove('verystrong')
          passcheck.classList.remove('normal')
          passcheck.classList.remove('strong')
          i += 1;
        } 
        else if (cs.checked) {
          // Only cs is checked
          this.pass += unique[Math.floor(Math.random() * unique.length)];
          passcheck.innerHTML='Strong Password'
          passcheck.classList.remove('weak')
          passcheck.classList.remove('verystrong')
          passcheck.style.color='black'
          flex()

          passcheck.classList.remove('normal')
          passcheck.classList.add('strong')
          i += 1;
        }
        
        else if (!cs.checked) {
          // Only cs is checked
   
          passcheck.style.color='red'
          copybtn.style.display='none'
   generate()
          passcheck.innerHTML='Add some Thing'
          text.innerHTML=''
       passcheck.classList.add('white')
          passcheck.classList.remove('verystrong')
          passcheck.classList.remove('normal')
          passcheck.classList.remove('strong')
          passcheck.classList.remove('weak')

          break;
        }
        else if (!clc.checked) {
          // Only cs is checked
   generate()
          passcheck.innerHTML='Add some Thing'
          text.innerHTML=''
          passcheck.style.color='red'
          copybtn.style.display='none'

       passcheck.classList.add('white')
          passcheck.classList.remove('verystrong')
          passcheck.classList.remove('normal')
          passcheck.classList.remove('strong')
          passcheck.classList.remove('weak')

          break;
        }
        else if (!cuc.checked) {
          // Only cs is checked
          text.innerHTML=''
          passcheck.style.color='red'
          copybtn.style.display='none'
generate()
          this.pass += unique[Math.floor(Math.random() * unique.length)];
          passcheck.innerHTML='Add some Thing'
       passcheck.classList.add('white')
          passcheck.classList.remove('verystrong')
          passcheck.classList.remove('normal')
          passcheck.classList.remove('strong')
          passcheck.classList.remove('weak')

          break;
        }
        else if (!cn.checked) {
          // Only cs is checked
          text.innerHTML=''
          copybtn.style.display='none'
generate()
          passcheck.innerHTML='Add some Thing'
       passcheck.classList.add('white')
       passcheck.style.color='red'
          passcheck.classList.remove('verystrong')
          passcheck.classList.remove('normal')
          passcheck.classList.remove('strong')
          passcheck.classList.remove('weak')
    
          break;
        }
        
        // Add other conditions if needed
      
        // Break the loop if desired number of characters is reached
        // if (this.pass.length >= nor) {
        //   break;
        // }
      }
      this.pass= this.pass.slice(0,nor)
  return this.pass
     }
      
  
  
    }
    
    normalbtn.addEventListener('click',()=>{
  let a=new password()
  console.log(a.generatepassword())
  copybtn.innerText = 'Save & Copy';
  copybtn.style.background='rgb(0, 255, 0)'
  copybtn.addEventListener('click', handleClick);

flex()
console.log("Text copied to clipboard!");

    text.innerHTML=`${a.generatepassword()} `
    // normalbtn.innerText='Generated'
    // normalbtn.style.background='green'
    // text.style.color='black'

    //   // text.innerHTML=`${a.generatepassword()} `
    //   // normalbtn.innerText='Generated'
    //   // normalbtn.style.background='green'
    // }
    // else{
      if(numval.value<6){
        text.innerHTML=''
              normalbtn.innerText='Generate'
          normalbtn.style.background='rgb(34, 255, 0)'
          copybtn.style.display='none'
passcheck.style.display='none'

passcheck.innerHTML=''
        setTimeout(()=>{
          war.style.display='none'
          war.style.top='0px'
        
        
        },3000)
        war.innerText='6 Characters are required'
war.style.top='-30px'
war.style.display='flex'
   
      }
      else if(numval.value>20){
        war.innerText='Not more then 20 Characters'
        war.style.display='flex'
        war.style.top='-30px'
        copybtn.style.display='none'
        passcheck.innerHTML=''
passcheck.style.display='none'
        text.innerHTML=''
        normalbtn.innerText='Generate'
        normalbtn.style.background='rgb(34, 255, 0)'
        setTimeout(()=>{
          war.style.display='none'
          war.style.top='0px'
        
        
        },3000)
      }
      else{
        war.style.top='0px'
        war.style.display='none'
      }
      numval.addEventListener('click',()=>{
        // text.innerHTML=`${a.generatepassword()} `
        copybtn.style.display='none'
        passcheck.style.display='none'

        text.innerHTML=''
        if(numval.value<=6){
          setTimeout(()=>{
            war.style.display='none'
            war.style.top='0px'
          
          
          },3000)
          war.innerText='6 Characters are required'
  war.style.top='-30px'
  war.style.display='flex'
     
        }
        else if(numval.value>=20){
          war.innerText='Not more then 20 Characters'
          war.style.display='flex'
          war.style.top='-30px'
          setTimeout(()=>{
            war.style.display='none'
            war.style.top='0px'
          
          
          },3000)
        }
        else{
        text.style.color='black'
          
        }
          normalbtn.innerText='Generate'
          normalbtn.style.background='rgb(34, 255, 0)'
        
        })


      cn.addEventListener('click',()=>{
        a=new password()
        text.innerHTML=`${a.generatepassword()} `
        // text.innerHTML=''
        copybtn.innerText = 'Save & Copy';
  copybtn.addEventListener('click', handleClick);

        copybtn.style.background='rgb(0, 255, 0)'
        if(text.innerText.trim()===''){
          generate()
                  }
                  else{
          
                    flex()
                  }
          // normalbtn.innerText='Generate'
          // normalbtn.style.background='rgb(34, 255, 0)'
        
        })
      cuc.addEventListener('click',()=>{
        a=new password()
        text.innerHTML=`${a.generatepassword()} `
  copybtn.addEventListener('click', handleClick);

        // text.innerHTML=''
        copybtn.innerText = 'Save & Copy';
        copybtn.style.background='rgb(0, 255, 0)'
        if(text.innerText.trim()===''){
          generate()
                  }
                  else{
          
                    flex()
                  }
      
          // normalbtn.innerText='Generate'
          // normalbtn.style.background='rgb(34, 255, 0)'
        
        })
      clc.addEventListener('click',()=>{
        a=new password()
        text.innerHTML=`${a.generatepassword()} `
  copybtn.addEventListener('click', handleClick);

        // text.innerHTML=''
        copybtn.innerText = 'Save & Copy';
        copybtn.style.background='rgb(0, 255, 0)'
        if(text.innerText.trim()===''){
          generate()
                  }
                  else{
          
                    flex()
                  }
      
          // normalbtn.innerText='Generate'
          // normalbtn.style.background='rgb(34, 255, 0)'
        
        })
      cs.addEventListener('click',()=>{
        a=new password()
        text.innerHTML=`${a.generatepassword()} `
  copybtn.addEventListener('click', handleClick);

        // text.innerHTML=''
        copybtn.innerText = 'Save & Copy';
        copybtn.style.background='rgb(0, 255, 0)'
        if(text.innerText.trim()===''){
generate()
        }
        else{

          flex()
        }
      
          // normalbtn.innerText='Generate'
          // normalbtn.style.background='rgb(34, 255, 0)'
        
        })
      
      // }
      
    })
    numval.addEventListener('click',()=>{
      if(numval.value<=6){
        setTimeout(()=>{
          war.style.display='none'
          war.style.top='0px'
        
        
        },3000)
        war.innerText='6 Characters are required'
war.style.top='-30px'
war.style.display='flex'
   
      }
      else if(numval.value>=20){
        war.innerText='Not more then 30 Characters'
        war.style.display='flex'
        war.style.top='-30px'
        setTimeout(()=>{
          war.style.display='none'
          war.style.top='0px'
        
        
        },3000)
      }
      else{
        war.style.top='0px'
        war.style.display='none'
      }

        // normalbtn.innerText='Generate'
        // normalbtn.style.background='rgb(34, 255, 0)'
      
      })
      index=localStorage.length
      copybtn.addEventListener('click', handleClick);

      function handleClick() {
        // text = text.innerText;
        localStorage.setItem('pass' + index, text.innerText);
        localStorage.setItem('date' + index, date);
        localStorage.setItem('month' + index, month);
        localStorage.setItem('year' + index, year);
        navigator.clipboard.writeText(text.innertext)
          .then(function() {
            copybtn.innerText = 'Copied';
            copybtn.style.background = 'green';
            console.log("Text copied to clipboard!");
          index++
            copybtn.removeEventListener('click', handleClick);
          })
          .catch(function(error) {
            console.error("Unable to copy text: ", error);
          });
      }
      
      