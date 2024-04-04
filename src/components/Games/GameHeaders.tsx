const GameHeaders = (headerValues: any) => {
    console.log(Object.values(headerValues)[0]);
    return(
        <tr className="table">
            {
                // Object.values(headerValues).map((headerValue, index)=>{
                //     <th key={'hVal'+index}>{headerValue}</th>   
                //     })
            }
        </tr>
    )
}
export default GameHeaders;