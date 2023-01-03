// function AllData(){
//     const ctx = React.useContext(UserContext);
//     return(
//         <>
//         <h1>All data Component</h1>
//         {JSON.stringify(ctx)}
//         </>
//     )
// }

function AllData(){
    const [data, setData] = React.useState('');

    React.useEffect(() => {
        //fetch al accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(JSON.stringify(data));
            });
    }, []);

    return(
        <>
            <h3>All data in DB: </h3>
            {data}
        </>
    );
}