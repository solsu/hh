/*
* @Author: lisheng
* @Date:   2018-06-12 09:23:19
* @Last Modified by:   lisheng
* @Last Modified time: 2018-06-12 10:19:43
*/
window.onload=function(){
	let li=document.querySelectorAll(".imgbox li");
	let btn=document.querySelectorAll(".btn li");
	let index=0;
	console.log(li);
	li[0].style.zIndex=10;
	btn[0].className
	setInterval(move,2000);

	function move(){
		index++;
		if(index==li.length){
			index=0;
		}
		li.forEach(function(elements,index,obj){
			elements.style.zIndex=5;
		})
		li[index].style.zIndex=10;
	}
}