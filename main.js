

let deckID = ''

let url = "https://deckofcardsapi.com/api/deck/kshfyt1xpdcm/draw/?count=2"
fetch(url) 
    .then(res => res.json())
    .then(data =>{

      


       let val1 = (data.cards[0].value)
         document.querySelector('#player1_image').src = (data.cards[0].image)

      let val2 = (data.cards[1].value)

        document.querySelector('#player2_image').src = (data.cards[1].image)

       
        
       
        function cardValue (vall) {
            
            if (vall === "ACE") {
                return 14
            } else if(vall === "KING") {
                return 13
            } else if (vall === "QUEEN"){
                return 12
            }else if(vall === "JACK"){
                return 11
            }else {
                return vall;
            }


        }
       
       
        let a = Number(cardValue(val1))
        let b = Number(cardValue(val2))

       
        function val(x,y){
           
            if( x < y ){
                document.querySelector('h3').innerText = "Player 2 Won !"
            }else if( y < x) {
             document.querySelector('h3').innerText = "Player 1 Won !"
            } else{
                document.querySelector('h3').innerText = "WAR !"
            }
        }
    
        
        
        
        
        val(a,b)
        
        

       








       
    });


    
