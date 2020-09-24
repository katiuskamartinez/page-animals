export default function filtroBusqueda(input,selector){
    document.addEventListener("keyup",e=>{
        if(e.target.matches(input)){
            //console.log(e.target.value);
            if(e.key==="escape")e.target.value="";
            document.querySelectorAll(selector).forEach((el)=>
                el.textContent.toLowerCase().includes(e.target.value)?el.classList.remove("filtro"):el.classList.add("filtro")
            ); 
        }
    })
}