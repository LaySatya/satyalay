import { useState } from "react";

function SearchFilter() {
    const [players, setPlayers] = useState([
        {
            id: 1,
            name: "Lionel Messi",
            club: "Paris Saint-Germain",
            country: "Argentina",
        },
        {
            id: 2,
            name: "Cristiano Ronaldo",
            club: "Manchester United",
            country: "Portugal",
        },
        {
            id: 3,
            name: "Neymar Jr.",
            club: "Paris Saint-Germain",
            country: "Brazil",
        },
        {
            id: 4,
            name: "Kylian Mbappé",
            club: "Paris Saint-Germain",
            country: "France",
        },
        { id: 5, name: "Mohamed Salah", club: "Liverpool", country: "Egypt" },
        {
            id: 6,
            name: "Nick Talor",
            club: "Preah Khan Reach SvayRieng",
            country: "Cambodia",
        },
    ]);
    function filter(e){
        const search  = e.target.value;
        if(search === ""){
            return players;
        }
        else{
            setPlayers(players.filter((player) => player.name.toLowerCase().includes(search.toLowerCase())));
        }
    }

    return (
        <div className="mt-12 w-[95%] rounded-lg bg-slate-50 mx-auto">
            <h1 className="text-[45px] font-medium text-center">Search Filter</h1>
            <div>
                <div className="flex justify-center">
                    <input onChange={(e) => filter(e)}
                        type="text"
                        className="h-12 p-3 w-96 m-3 outline-none bg-slate-200 rounded-md"
                        placeholder="Search players by name"
                    />
                </div>
                <div className="flex justify-center">
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Club
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Country
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {   

                                    players.map((player , index) => (
                                        <tr key={player.id} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <td class="px-6 py-4 text-md">{player.id}</td>
                                            <td class="px-6 py-4 text-md">{player.name}</td>
                                            <td class="px-6 py-4 text-md">{player.club}</td>
                                            <td class="px-6 py-4 text-md">{player.country}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
               <br/>
            </div>
        </div>
    );
}
export default SearchFilter;
