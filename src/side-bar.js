
export default function createSide(projects){
    
    const side = document.createElement('div');
    side.classList.add('side');
    console.log(side);
    const al = document.createElement('h3');
    al.classList.add('side-text');
    al.innerHTML = "All"

    side.appendChild(al);
    
    side.appendChild(document.createElement('hr'));

    projects.forEach((element)=>{
        let comp = document.createElement('h3');
        comp.classList.add('side-text');
        
        comp.innerHTML = element;
        side.appendChild(comp);

        

    })

    return side;

}