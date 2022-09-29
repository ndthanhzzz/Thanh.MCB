function LightOn(){
    let text = "\tBạn vừa yêu cầu BẬT đèn!\n\tNhấn OK để thực hiện hoặc Cancel để hủy yêu cầu. ";
    if (confirm(text) == true) 
        {
            document.getElementById("imageLight").src= "image/light-on.png";
            document.getElementById("bON").style.backgroundColor="rgb(0, 255, 0)";
            document.getElementById("bOFF").style.backgroundColor="gray";
        } 
    else 
        {
            document.getElementById("imageLight").src= "image/light-off.png";
            document.getElementById("bON").style.backgroundColor="gray";
        }
}
function LightOff(){
    let text = "\tBạn vừa yêu cầu TẮT đèn!\n\tNhấn OK để thực hiện hoặc Cancel để hủy yêu cầu.";
    if (confirm(text) == true) 
        {
            document.getElementById("imageLight").src= "image/light-off.png";
            document.getElementById("bOFF").style.backgroundColor="red";
            document.getElementById("bON").style.backgroundColor="gray";
        } 
    else 
        {
            document.getElementById("imageLight").src= "image/light-on.png";
            document.getElementById("bOFF").style.backgroundColor="gray";
        }
}

var input = document.getElementById('toggleswitch');
var outputtext = document.getElementById('status');

input.addEventListener('change',function(){
    if(this.checked)
    {
        let text = "\tBạn vừa yêu cầu BẬT quạt!\n\tNhấn OK để thực hiện hoặc Cancel để hủy yêu cầu. ";
        if (confirm(text) == true) 
            {
                document.getElementById("imageFan").src= "image/fan-on.gif";
            }    
        else 
            {
                document.getElementById("imageFan").src= "image/fan-off.png";
            }
    } 
    else 
    {
        let text = "\tBạn vừa yêu cầu Tắt quạt!\n\tNhấn OK để thực hiện hoặc Cancel để hủy yêu cầu. ";
        if (confirm(text) == true) 
        {
            document.getElementById("imageFan").src= "image/fan-off.png";
        } 
        else 
        {
            document.getElementById("imageFan").src= "image/fan-on.gif";
        }
    }
});