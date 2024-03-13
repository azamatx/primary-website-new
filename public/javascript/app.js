

let vertikalTab  = document.querySelectorAll('#vertikalTab')
let vertikalTabTitle  = document.querySelectorAll('#vertikalTab h3')
let vertikalTabText  = document.querySelectorAll('#vertikalTab #vertikalTabText')


vertikalTabText.forEach(function(item , index){
  item.classList.add('h-0')
  vertikalTab[index].classList.add('opacity-25')
})

vertikalTabTitle.forEach(function(item , index){
  item.addEventListener('click',function(){
    vertikalTab.forEach(function(item , index){
      item.classList.remove('active')
    })
    vertikalTab[index].classList.add('active')
  })
})