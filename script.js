var istranger=document.querySelector("h5");
 
var addFriend=document.querySelector("#add");


var count=0;
addFriend.addEventListener("click",function(){

if(count==0){
    istranger.innerHTML="Friends"
    istranger.style.color="green"
     addFriend.innerHTML="Remove "
     
    count=1;
}else{
    istranger.innerHTML="Stranger"
    istranger.style.color="red"
    addFriend.innerHTML="Add Friend"
    count=0;

}


});