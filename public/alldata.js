function AllData(){
    const ctx = React.useContext(UserContext);
    return(
        <>
        <h1>All data Component</h1>
        {JSON.stringify(ctx)}
        </>
    )
}