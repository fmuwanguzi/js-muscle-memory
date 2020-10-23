const exercises = [
    { 
        exercise: 'pushups',
        bodyType: 'pecs',
        bodyPart:  'chest',
    }, // you separate arrays with commas
    {
        exercise: 'running',
        bodyType: 'quads',
        bodyPart: 'legs',
    },
    {
        exercise: 'situps',
        bodyType: 'abs',
        bodyPart: 'stomach',
    }
];

const container = document.querySelector('.container');

function addExercisesToContainer(array){
    //iterate through the array
    for(let i = 0; i < array.length; i++){
//set each element to a variable 
        let exerciseVariable = array[i].exercise;
        let newElement = document.createElement('p');
        newElement.textContent = exerciseVariable
        container.appendChild(newElement);
        
}
    //create a new element
    //access "exercise" key to get value
    //add the value text to element (textContent)
    //append new element to the container
}

 addExercisesToContainer(exercises);

// function addBodyTypeToContainer(array){
//     for(let i = 0; i < array.length; i++){
//     let bodyType = array[i].bodyType;
//     let newElement = document.createElement('p');
//     newElement.textContent = bodyType;
//     container.appendChild(newElement);
//     }
// }

//addBodyTypeToContainer(bodyType);

// function addBodyTypeToContainer(array){
//     for(let i = 0; i < array.length; i++){
//         let bodyType = array[i].bodyType;
//         let newElement = document.createElement('p');
//         newElement.textContent = bodyType
//         container.appendChild(newElement);
        
// }  
// }
// addBodyTypeToContainer(bodyType);


// function addBodyTypeToContainer(array){
//     for(let i = 0; i < array.length; i++){
//         if(array[i].bodyType){
//             let bodyType = arryay[i].bodyType
//             newElement.textContent = bodyType
//         container.appendChild(newElement);    
//     }else {
//         continue;
//     }
// }

// addBodyTypeToContainer(exercises);