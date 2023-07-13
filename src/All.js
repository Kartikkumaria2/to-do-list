import cardCreator from "./cards";

export default function createAll(tasks){
    const right = document.createElement('div');
    right.classList.add('right');

    cardCreator(tasks,right);

    return right;
    
}