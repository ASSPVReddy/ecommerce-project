"use client"
export default function ProductsPage({value}){
    let output=value; 
    console.log(output)   
    return(
        <>
        <h1>hello this is products page</h1>
        <h1>{output}</h1>
        </>  
    )
}