

    function weight(diff,name){
        let earth_weight = document.getElementById("woe").value;
        
        console.log(earth_weight*diff);

        document.getElementById("planetname").innerHTML= name;

        document.getElementById("output").innerHTML= earth_weight*diff + " kg";
        // console.log("first")
    }

       