const pinnedRestaurants = [
    {
        name: "Foster Hollywood",
        address: [40.4178269, -3.7098678]
    },
    {
        name: "La Lonja del Mar",
        address: [40.41857, -3.71114]
    },
    {
        name: "Ginos Ristorante",
        address: [40.42058, -3.70691]
    },
    {
        name: "MIZUKI Japanese",
        address: [40.40325, -3.70301]
    },
    {
        name: "Brasa y Leña",
        address: [40.4162327, -3.7088498]
    }
]

//Sets up the GET method (http) to serve the stringified JSON
export function GET() {
    return new Response(JSON.stringify(pinnedRestaurants))
}