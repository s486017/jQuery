
//  id='btn' 찾으시오.
var btn = document.getElementById('btn');

btn.onclick = function(event) {
    // alert --> 버튼이 클릭되었습니다. 
    window.alert("btn 버튼이 클릭되었습니다!!"); 
};

var p_arr = document.getElementsByTagName('p');  // 배열

// console.log(p_arr);
for(var i in p_arr) {
    // console.log('p_arr : ' + i);
    p_arr[i].onclick = function(event) {
        // alert --> 버튼이 클릭되었습니다. 
        // var text = i+"번째 ";
        window.alert('p tag 클릭되었습니다!!'); 
    };
}
// var name = document.getElementsByName('p');

var btn2_class = document.getElementsByClassName('btn2');
btn2_class[0].onclick = function(event) {
    // alert --> 버튼이 클릭되었습니다. 
    window.alert("btn2 class가 클릭되었습니다!!"); 
};