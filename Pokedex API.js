const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200"){
            console.log(res);
            pokeImage("./pichu-pokemon.gif")
        }
        else{
            return res.json();
        }
        
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
        let pokeId = data.id; 
        const num = document.getElementById("id");
        num.textContent=pokeId;
        var stat2 = data.stats;
        var type = data.types;
        const pokeStats = () =>{
        document.getElementById("body").innerHTML = "";
        for(var i=0; i<stat2.length; i++){
            var stat = data.stats[i];
            var stat3 = stat.base_stat;
            var stat4 = stat.stat.name;
            document.getElementById("body").innerHTML += `<tr><th>` + stat4+":" + `</th><td>` + stat3 + `</td></tr>`;
        }
        }
        pokeStats();
        const pokeType = () =>{
            document.getElementById("type2").innerHTML = "";
            for(var c=0; c<type.length; c++){
                var type2 = type[c];
            }
            if (type.length<2){
                const type3 = document.getElementById("type");
                type3.textContent=type2.type.name;
                console.log(type2.type.name);
            }
            else{
                var types5 = data.types[0];
                const type4 = document.getElementById("type");
                type4.textContent=types5.type.name;
                console.log(type4)
                var types6 = data.types[1];
                const type7 = document.getElementById("type2");
                type7.textContent=types6.type.name;

            }
        }
        pokeType();
       
        
    })
}

const pokeImage = (url) =>{
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}
