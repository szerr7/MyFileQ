

window.onload = function(){

          const registration = document.getElementById("all") ;
          
          registration.onsubmit = function(event){
          
                    event.defaultPrevented() ; 
          
          
                    const buildingNumber = document.getElementById("buildingNo")
                    const FloorNo =  document.getElementById("floorNo")
          
                    const appartmentNumber = document.getElementById("apartmentNo")
          
          
          
                    const title = document.getElementById("title") ;
          
                    const fullName = document.getElementById("fullNames") ;
          
                    const phoneNumber = document.getElementById("phoneNo") ;
          
                    const email = document.getElementById("email") ;
          
                    const driverNumber = document.getElementById("driversLicenceNo") ;
          
          
          
                    const titleMain = title.value ;
          
                    const fullNameMain = fullName.value ;
          
                    const phoneNumberMain  =  phoneNumber.value ; 
          
                    const emailMain = email.value ; 
          
                    const driverNumberMain = driverNumber.value ; 
          
          
                    console.log(titleMain) ;
          
          
          
                    titleMain.focus() ;
          
          
          
          
          
                    
          
          
          
                    
                    
                    
          
          
          
          
          
                   
          
          
          }
          
          
          }
          
          console.log("hello")