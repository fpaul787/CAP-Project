var courseNames = ["MAC2311", "CHM1001", "CHM2002", "MAC2312", "PHY2048", "PHY2048L", "PHY2049", "PHY2049L", "STA3033", "CDA3102", "COP2210", "CGA1920", "ENC3249", "CGS3095", "COP3337", "COP3530", "COP4610", "COP4338", "COP4610", "CEN4010", "CIS4911", "CAP4104", "COP4710", "CAP4506", "COP4534", "CAP4770", "MAD3305", "CAP4630"];
    
    var selectedCourses = [];
    
    for (var i = 0; i < 28; i++){
        selectedCourses.push(false);
    }
    
function getValue() {
    let allfalse = true;
    let str = '';
    
    
    for ( var i = 0; i < 28; i++) {
        if (selectedCourses[i] == true){
            str += courseNames[i] + ' ';
            allfalse = false;
        }
    }
    
    if (allfalse) {
        alert('No courses selected');
    } else {
        alert('Courses selected: ' + str);
    }
}
    
    function reply_click(clicked_id) { 
    var e = document.getElementById(clicked_id);
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(204, 204, 204)" || c === "rgb(245,250,202)") {
        document.getElementById(clicked_id).style.background = "#18d68d";
        selectedCourses[clicked_id-1] = true;
} else{
    document.getElementById(clicked_id).style.background = "#ccc";
    selectedCourses[clicked_id-1] = false;
}
}