let _state : any = undefined

export let setState = (new_state:any) => {
    if (new_state === _state) {
        return
    } else {
        _state = new_state
        // render()
    }
}


setState(1) // state: 1

setState(2) // state: 2


/// Objects

let my_obj : any = {}

setState(my_obj) // state: {}

my_obj['a'] = 1

setState(my_obj) // state: {a: 1} but is not rendered


/*

    OBJ -> data

    my_obj -> OBJ

    state -> OBJ

    OBJ -> data -> a

    setState(my_obj) 
    state.a = 1 

*/
