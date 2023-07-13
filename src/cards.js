import edit from './edit.jpeg'
export default function cardCreator(tasks,right){
    tasks.forEach((element)=>{

        let card = document.createElement('div');
        card.classList.add('card');

        let title_card = document.createElement('p');
        title_card.innerHTML = element.title;

        let date_card = document.createElement('p');
        date_card.innerHTML = element.date;

        let notes_card = document.createElement('p');
        notes_card.innerHTML = element.notes;

        let checklist_card= document.createElement('input');
        checklist_card.setAttribute("type","checkbox");
        
        card.appendChild(title_card);
        card.appendChild(date_card);
        card.appendChild(notes_card);
        
        card.setAttribute("id",element.id);
        let imgEdit = document.createElement('img');
        imgEdit.src = edit;
        card.appendChild(imgEdit);
        if(element.priority == "High"){
            card.style.backgroundColor = "red";
            card.style.color = "white";
        }
        else if(element.priority == "medium"){
            card.style.backgroundColor = "yellow";
            card.style.color = "brown";
        }
        else{
            card.style.backgroundColor = "green";
            card.style.color = "black";
        }
        if(element.checklist ==true){
            checklist_card.checked =true;
        }
        card.append(checklist_card);
        right.appendChild(card);
        
        
    })
}