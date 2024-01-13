const rockets = [
    {country: "Russia", Launches: 32 },
    {country: "USA", Launches: 23 },
    {country: "China", Launches: 16 },
    {country: "Europe", Launches: 7 },
    {country: "India", Launches: 4 },
    {country: "Japan", Launches: 3  },
]

const totalLaunches = rockets.reduce((preVal,elem) =>{
    return preVal + elem.Launches
}, 0)
console.log(totalLaunches)