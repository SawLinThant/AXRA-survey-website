const CustomSquare = ({count,userType}) => {
    return(
        <div className="rounded-xl border-gray-300 border-4 bg-white shadow">
            <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium">{userType}</h3>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-4 w-4 text-muted-foreground"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
            </div>
            <div className="p-6 pt-0">
                <div className="text-2xl font-bold">{count}</div>
                <p className="text-xs">+1% from last month</p>
            </div>
        </div>
    )
}
export default CustomSquare;