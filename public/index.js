function Spa(){
    return (
    <HashRouter>
        <div>
            <NavBar/>
            <UserContext.Provider value={{users:[{name:'abe', email:'abe@gmail.com',
            password:'12345678', balance:1000}]}}>
                <div className="container" style={{padding: "20px"}}>
                    <Route path="/" exact component={Home} />
                    <Route path="/CreateAccount" component={CreateAccount} />
                    <Route path="/login/" component={Login} />
                    <Route path="/deposit/" component={Deposit} />
                    <Route path="/withdraw/" component={Withdraw} />
                    {/* <Route path="/transactions/" component={Transactions} /> */}
                    <Route path="/balance/" component={Balance} />
                    <Route path="/allData" component={AllData} />
                </div>
            </UserContext.Provider>
        </div>
    </HashRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Spa/>
)