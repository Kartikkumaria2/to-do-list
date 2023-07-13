import _, { create, size } from 'lodash';
import './styles.css';
import createSide from './side-bar';
import createAll from './All';

let projects = [];
let tasks =[];
if("projects" in localStorage == false){
 projects = ['Project1','Project2'];
localStorage.setItem("projects",JSON.stringify(projects));

}
else{
     projects = JSON.parse(localStorage.getItem("projects"));
}

console.log(projects);
class card_obj{
    constructor(title,date,notes,project,priority,tasks){
        this.title=title;
        this.date =date;
        this.notes= notes;
        this.checklist = false;
        this.project = project;
        this.priority =priority;
        this.id = size(tasks);
        
    }
}


 
if("tasks" in localStorage==false){
let obj1 = new card_obj("new","28/02/03","not urgent","Project1","Low",tasks);
tasks.push(obj1);
let obj2  =new card_obj("new","2/2/22","wefjewlfnwlenf","Project2","High",tasks);
tasks.push(obj2);
localStorage.setItem("tasks",JSON.stringify(tasks));

}
else{
    tasks = JSON.parse(localStorage.getItem("tasks"));
    
}

const container = document.querySelector('#container');
const addButton = document.querySelector('#add_but');
const form1 = document.querySelector('.form1')

let side = createSide(JSON.parse(localStorage.getItem("projects"))); 
let right = createAll(tasks);

container.appendChild(side);

container.appendChild(right);

side.addEventListener('click',(e)=>{
    let ele = e.target.innerHTML;
    let tasks2 = [];
    console.log('here');
    
    
    if(ele == "All"){
        container.removeChild(right);
    right = createAll(tasks);

    container.appendChild(right);
    return;
        
    }else{
        tasks.forEach((element)=>{
            if(element.project==ele){
                tasks2.push(element);
            }
        })
    }
    
    container.removeChild(right);
    right = createAll(tasks2);
    container.appendChild(right);
    let checkBox = document.querySelectorAll("input[type=checkbox]");
 checkBox.forEach((element)=>{
    element.addEventListener('change',(event)=>{
        
    let parent = event.target.parentNode;
    
    tasks.forEach((ele)=>{
        {   
            if(ele.id == parseInt(parent.getAttribute("id"))){
                ele.checklist =true;
                
            }
        }
    })
    localStorage.setItem("tasks",JSON.stringify(tasks));
    })
 })
    
});
addButton.addEventListener('click',()=>{
    form1.style.visibility = "visible";
    console.log('here');
    
})

form1.addEventListener('submit',(event)=>{
    event.preventDefault();
    form1.style.visibility = "hidden";

    let title2  = document.getElementById('title').value;
    let date2= document.getElementById('date').value;
    let notes2 = document.getElementById('notes').value;
    let project2 = document.getElementById('Project').value;
    let priority2 = document.getElementById('priority').value;

    let new_obj = new card_obj(title2,date2,notes2,project2,priority2,tasks);
    
    tasks.push(new_obj);

    if(projects.includes(project2)==false){
        projects.push(project2);
    }
    localStorage.setItem("projects",JSON.stringify(projects))
    localStorage.setItem("tasks",JSON.stringify(tasks));
    container.removeChild(right);
    
    right = createAll(tasks);
    container.appendChild(right);

    container.removeChild(side);
    side = createSide(projects);
    container.appendChild(side);
    side.addEventListener('click',(e)=>{
        let ele = e.target.innerHTML;
        let tasks2 = [];
        console.log('here');
        
        
        if(ele == "All"){
            container.removeChild(right);
        right = createAll(tasks);
    
        container.appendChild(right);
        return;
            
        }else{
            tasks.forEach((element)=>{
                if(element.project==ele){
                    tasks2.push(element);
                }
            })
        }
        
        container.removeChild(right);
        right = createAll(tasks2);
        container.appendChild(right);
        let checkBox = document.querySelectorAll("input[type=checkbox]");
 checkBox.forEach((element)=>{
    element.addEventListener('change',(event)=>{
        
    let parent = event.target.parentNode;
    
    tasks.forEach((ele)=>{
        {   
            if(ele.id == parseInt(parent.getAttribute("id"))){
                ele.checklist =true;
                
            }
        }
    })
    localStorage.setItem("tasks",JSON.stringify(tasks));
    })
 })
        
    });
    

 })
 

 let checkBox = document.querySelectorAll("input[type=checkbox]");
 checkBox.forEach((element)=>{
    element.addEventListener('change',(event)=>{
        
    let parent = event.target.parentNode;
    
    tasks.forEach((ele)=>{
        {   
            if(ele.id == parseInt(parent.getAttribute("id"))){
                ele.checklist =true;
                
            }
        }
    })
    localStorage.setItem("tasks",JSON.stringify(tasks));
    })
 })



