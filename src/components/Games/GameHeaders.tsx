const GameHeaders = ({headerValues}: any): JSX.Element => {
    return(
        <tr className="table">
            {
                Object.values(headerValues).map((headerValue: any, index)=>{
                    return (
                        <th key={'hVal'+index}>{headerValue}</th> 
                    )
                })
            }
        </tr>
    )
}
export default GameHeaders;