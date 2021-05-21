let totalValue = 0;  //기본차량가액 + 옵션금액
let totalTag; //최종차량가액 표시할 객체

window.onload = function(){  //문서 로딩해오기
    //console.log(document.getElementById("total"));
    totalTag = document.getElementById("total");
    totalValue = parseInt(totalTag.value);   //0 + 2천만원
    //console.log(totalValue+999);   //연산되는지 확인
    console.log("현재 총 가격:"+totalValue);
};  
function compute(opt) {
    //console.log("compute() 실행: "+opt.id);
    let optValue = parseInt(opt.value);
    console.log("optValue: "+optValue)
    if(opt.checked) {   //옵션 체크 상태: 금액 더하기
        totalValue += optValue;
    } else {    //옵션 체크 해제 상태: 금액 빼주기
        totalValue -= optValue;
    }
    console.log("현재 총 가격:"+totalValue);

    //화면에 결과값 표시
    totalTag.value = totalValue;
};