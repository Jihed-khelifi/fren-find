import { useEffect, useState } from "react"

const LeaderBoard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getLeaderBoardInfos = async () => {
            const result = await fetch(`${import.meta.env.VITE_API_URL}/api/leaderboard-by-score`)
            const { data } = await result.json()
            setUsers(data)
            console.log(users);
        }
        getLeaderBoardInfos()
    }, [users])

    return (
        <>
            <div className='relative bg-no-repeat leaderboard-container border border-black w-24 h-44 p-0 rounded-lg'>

            </div>
        </>
    )
}

export default LeaderBoard