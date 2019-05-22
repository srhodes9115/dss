console.log( 'fetching' )

async function request () {
  try {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    const response = await fetch(`https://statsapi.mlb.com/api/v1/schedule?hydrate=game(content(editorial(recap))),decisions&date=${formattedDate}&sportId=1`, {
  method: 'GET'
} )
  const text = await response.text()
  const json = await JSON.parse( text )
  console.log( json )
  //do everything here... 
  } catch ( err ) {
      console.error( err )
  }
}

request()