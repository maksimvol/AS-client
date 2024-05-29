const multipleFields: React.FC = (data:any, setvalue:any) => {

    const getFieldValue = (e:any)=>{
        setvalue(e.target.value)
    }

    return(<>
        <label>Choose game: &nbsp;</label>
        <select name="selectitems" onChange={(e)=>getFieldValue(e)}>
            {data.map((item:any, index:number)=><option value={item} key={item+index}>item</option>)}
        </select>
    </>);
}

export default multipleFields;