
class Player 
{
    constructor()
    {


    }

    getcount()
    {
        var playerCountRef= database.ref('playercount');
        playerCountRef.on("value",(data)=>{

            playerCount=data.val()

        })


    }

    updateCount(count)
    {
        database.ref('/').update({

            playerCount:count
        })
    }



}