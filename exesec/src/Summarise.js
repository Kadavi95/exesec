import React from 'react';


// function createInnerElements(names){
//     let arrayElems = []
//     for (let i = 0; i < names.length; i++){
//         arrayElems.push(
//             <div key={[i]}>
//                 {`${names[i]} składa się z ${names[i].length} znaków`}
//             </div>
//         )
//     }
//     console.log(arrayElems);
//     return arrayElems;
// }



function createInnerElements(names){
    return names.map(name => 
        <div >
                  {`${name} składa się z ${name.length} znaków`}
        </div>
        )
    


}



const divoza = (names) => {
    const table = names;
    return (
        table.map((item) => (
            <>
                <div key={item}>{item}</div>
            </>
        ))
    )
}



export  function Summarise (props){
    
    return (
    <>
        <h4 className="bg-info text-white text-center p-2">
            {createInnerElements(props.names)}
            {divoza(props.names)}
            {props.names.map((item) => (
                <>
                <div key={item}>Name: {item}</div>
                </>
            ))
            }
        </h4>
    </>
    )

}


