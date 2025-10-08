function copyEmail() {
    var copyText = document.getElementById("myInput");
  
    // ไม่ต้องเลือกเพราะไม่แสดง 
    // copyText.select(); 
    // copyText.setSelectionRange(0, 99999); 
    
    // คัดลอกไปยังคลิปบอร์ด
    navigator.clipboard.writeText(copyText.value).then(function() {
        console.log("คัดลอก: " + copyText.value);
        alert("คัดลอกอีเมล: " + copyText.value); // แสดงข้อความยืนยันการคัดลอก
    }).catch(function(err) {
        console.error("Error copying text: ", err);
    });
}