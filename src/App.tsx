import { useState } from "react";

function PageWrapper( props : { children: React.ReactNode } ) {
    return <div className="page-wrapper">
        <div> Welcome to HELLPful react tutorial</div>
        {props.children}
    </div>
}

function InputBox() {
    const [inputState, setInputState] = useState('')
    return <div>
        <div>{inputState}</div>
        <input 
            type="text"
            value={inputState}
            onChange={e => setInputState(e.target.value)}
        />
    </div>
}

export default function App()  {

    // Create button to increment state2
    const [state2, setState2] = useState(213);

    let myValues = []

    for (let i = 0; i < state2; i++) {
        myValues.push(
            <div> {i} </div>
        )
    }

    const button = <div>
        <div>{state2}</div>
        <button onClick={() => setState2(state2 + 1)}>Increment</button>
        {  myValues.reverse() }
    </div>

    return <PageWrapper>
        <div className="test-class">
            <InputBox />
            {button}
        </div>
    </PageWrapper>
}
