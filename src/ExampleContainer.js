import react from 'react'


function ExampleContainer(props){
    return (
        <div className='example-container'>
            {props.children}
        </div>
    )
}

export default ExampleContainer