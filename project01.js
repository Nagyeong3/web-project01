var total1=52;//e,i 성향 비율
var total2=83;//n,s 성향 비율
var total3=21;//t,f 성향 비율
var total4=92;//j,p 성향 비율
$(document).ready(function(){
    calcMBTI();
    addIMG();
    addTEXT1();
    addTEXT2();
})
function calcMBTI(){
    if(total1>=50){
        $("#first").append("E");
    }else{
        $("#first").text("I");
    }
    if(total2>=50){
        $("#second").text("N");
    }else{
        $("#second").text("S");
    }
    if(total3>=50){
        $("#third").text("T");
    }else{
        $("#third").text("F");
    }
    if(total4>=50){
        $("#fourth").text("J");
    }else{
        $("#fourth").text("P");
    }
}
function addIMG(){
    var img = $("<img/>");
    var str = $("#first").text()+$("#second").text()+$("#third").text()+$("#fourth").text();
    img.attr({
        "src":"kuImg/"+str+".png",
        "height":"350px"
    });
  
    $("#container2").append(img);   
}
function addTEXT1(){
    var str ="<p>"+"지나가버린 어린시절에 풍선을 타고 날아가는 예쁜 꿈도 꾸었지 지나가버린 어린시절에 풍선을 타고 날아가는 예쁜 꿈도 꾸었지 지나가버린 어린시절에 풍선을 타고 날아가는 예쁜 꿈도 꾸었지 지나가버린 어린시절에 풍선을 타고 날아가는 예쁜 꿈도 꾸었지 지나가버린 어린시절에 풍선을 타고 날아가는 예쁜 꿈도 꾸었지 지나가버린 어린시절에 풍선을 타고 날아가는 예쁜 꿈도 꾸었지 지나가버린 어린시절에 풍선을 타고 날아가는 예쁜 꿈도 꾸었지"+"</p>";
    $("#container2").append(str);
}
function addTEXT2(){
    var str = $("#first").text()+$("#second").text()+$("#third").text()+$("#fourth").text();
    var good,bad;
    if(str=="ESTJ") {
        good="ISFP, ISTP";
        bad="INFP, ENFP, INFJ, ENFJ";
    }
    else if(str=="ESTP"){
        good="ISFJ, ISTJ";
        bad="INFP, ENFP, INFJ, ENFJ"
    }
    else if(str=="ESFJ"){
        good="ISFP, ISTP";
        bad="INFP, ENFP, INFJ, ENFJ"
    }
    else if(str=="ESFP"){
        good="ISFJ, ISTJ";
        bad="INFP, ENFP, INFJ, ENFJ"
    }
    else if(str=="ENTJ"){
        good="INFP, INTP"
        bad="??없음(추가조사 필요)"
    }
    else if(str=="ENTP"){
        good="INFJ, INTJ";
        bad="??없음(추가조사 필요)"
    }
    else if(str=="ENFJ"){
        good="INFP, ISFP";
        bad="ESFP, ISTP, ESTP, ISFJ"
    }
    else if(str=="ENFP"){
        good="INFJ, INTJ";
        bad="ISFP, ESFP, ISTP, ESTP"
    }
    else if(str=="ISTJ"){
        good="ESFP, ESTP";
        bad="INFP, ENFP, INFJ, ENFJ"
    }
    else if(str=="ISTP"){
        good="ESFJ, ESTJ";
        bad="INFP, ENFP, INFJ, ENFJ"
    }
    else if(str=="ISFJ"){
        good="ESFP, ESTJ";
        bad="INFP, ENFP, INFJ, ENFJ"
    }
    else if(str=="ISFP"){
        good="ENFJ, ESFJ, ESTJ";
        bad="INFP, ENFP, INFJ"
    }
    else if(str=="INTJ"){
        good="ENFP, ENTP";
        bad="INFP, INFJ, ENFJ, INTJ"
    }
    else if(str=="INTP"){
        good="ENTJ, ESTJ";
        bad="INFP, ENFP, INFJ, ENFJ"
    }
    else if(str=="INFJ"){
        good="ENFP, ENTP";
        bad="INFP, INFJ, ISTP, ESTP"
    }
    else if(str=="INFP"){
        good="ENTJ, ESTJ";
        bad="INFP, ENFP, INFJ, INTJ"
    }

    var output = "<p><b>"+"나와 잘 맞는 mbti : "+good+"<br> 나와 안 맞는 mbti : "+bad;
    $("#container3").append(output);
}