/*Imagine you are wirking for a digital banking platform,and your team is tasked with improving the security of customer
accounts.Your challenge is to create a function that generates a random-digit OTp(one time password)
for authentication purposes.  */



function generateOtp(){
    const otp = Math.floor(Math.random()*8999) + 1000;
    return otp.toString();
}

console.log(`Here is your otp : ${generateOtp()}`)















