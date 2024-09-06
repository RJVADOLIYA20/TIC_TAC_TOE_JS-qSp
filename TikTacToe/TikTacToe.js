let player = 'X';
let inputs = document.getElementsByTagName('input');
let msg = document.getElementById('msg')
let btn = document.getElementById('btn')

btn.addEventListener('click',()=>{
    location.reload(); //It will Reload the Page it's location method
})

for(let i=0; i<inputs.length;i++){
    inputs[i].addEventListener('click',()=>{
        console.log('click')
        if(player =='X'){
            inputs[i].value = 'X';
            player ='O'
            msg.innerText = 'Player O turns Now...'
        }
        else{
            inputs[i].value = 'O';
            player ='X'
            msg.innerText = 'Player X turns Now...'  
        }
    })

    let cells = [...inputs ];
    function checkWinner(currentPlayer){
        let combo = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,]]
    }
}
