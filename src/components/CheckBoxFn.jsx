function CheckBoxFn(state2,action){
    
    switch(action.type){
        case "toggle-task":
            if (action.name)
            console.log('check'+action.name);
            console.log('state2:' +state2);
    }
}
export default CheckBoxFn;