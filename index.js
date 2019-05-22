console.log( 'fetching' )

fetch('https://statsapi.mlb.com/api/v1/schedule?hydrate=game(content(editorial(recap))),decisions&date=2018-06-10&sportId=1', {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
  method: 'GET',
  mode: 'cors',
  referrer: '*'
} )
  .then( ( response ) => {
    console.log( response )
    console.log( response.json() )
    return JSON.stringify( response.json() ) 
  } )
  .then(function(myJson) {
    console.log( 'i am inside second fcn' )
    console.log(JSON.stringify(myJson));
  })
  .catch( ( err ) => {
    console.log( err.message )
    console.log( err.name )
  } );