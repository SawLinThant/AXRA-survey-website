import CustomTable from "@/components/customtable";
import CustomSquare from "@/components/square";

const Survey = () => {
    const dummyUsers = [
        {
            userType: "Partner",
            count: "1"
        },
        {
            userType: "Job",
            count: "2"
        },
        {
            userType: "Service",
            count: "4"
        },
    ]
    return(
        <div className="w-full h-screen flex flex-col p-10">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {dummyUsers.map((user) => (
                    <CustomSquare count={user.count} userType={user.userType}/>
                ))}
            </div>
            <CustomTable/>
        </div>
    )
}
export default Survey;