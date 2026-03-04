export default async function Trial () {
    // fetch my api for months - api/month
    // this works locally, look up how to do it for deployed thangs, nextjs or env boi
  const data = await fetch('http://localhost:3000/api/month')
  const posts = await data.json()
  console.log('data', data)
  console.log('posts', posts)
    return (
        <>
            <div>
                <h1>What to do this month </h1>
                <h2>We shall see, first choose a month</h2>
                {/* <form>
                    <label htmlFor="month">Choose a month:</label>
                    <select id="month" name="month">
                    <option value="Jan">January</option>
                    <option value="Feb">Feb</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    </select>
                </form> */}
            </div>
        </>
    )
}