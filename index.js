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
  const games = json.dates[0].games
  console.log( games )
  const ul = document.getElementById("list")
  const detail = document.getElementById("detail")
  games.forEach ( ( game ) => {
  	const li = document.createElement("li")
    li.setAttribute('id',game.gamePk);
    ul.appendChild(li)
    
    const headline = document.createElement("p")
    headline.setAttribute('className', 'headline')
    headline.setAttribute('style','display:flex;flex-direction:column-reverse;')
    headline.innerHTML=game.venue.name
    li.appendChild(headline)
    
    const box = document.createElement("div")
    box.setAttribute("className", "box")
		box.setAttribute( "style","width:100px;height:50px;background-color:#FBFBFB")
    li.appendChild(box)
    
    const metaData = document.createElement("p")
    const awayTeam = game.teams.away.team.name
    const homeTeam = game.teams.home.team.name
		metaData.innerHTML = `${homeTeam} vs. ${awayTeam}`
    li.appendChild( metaData )
    
    let liSelected
    let index = -1
    
    window.onkeyup = function(e) {
       const key = e.keyCode ? e.keyCode : e.which;
       const list = document.getElementsByTagName("li")
       let len = list.length-1

       if ( key == 13 ) { //enter key
       		console.log( 'enter key')
          const headline = document.createElement("")
           //do something
       } else if ( key == 37 ) { //left arrow key
       		index--;
          if ( liSelected ) {
            liSelected.className = ''
            liSelected.firstElementChild.className = ''
            liSelected.children[1].className = ''
            liSelected.children[2].className = ''
            prev = ul.getElementsByTagName('li').item( index );
            
            if ( typeof prev !== undefined && index >= 0 ) {
            	liSelected = prev;
            }
            else {
            	index = len;
              liSelected = ul.getElementsByTagName('li')[len];
            }
            
            liSelected.className += 'selected'
            liSelected.firstElementChild.className += 'selected'
            liSelected.children[1].className = 'selected'
            liSelected.children[2].className = 'selected'
          }
          else {
          	index = 0;
            liSelected = ul.getElementsByTagName('li')[0];
            liSelected.className += 'selected'
            liSelected.firstElementChild.className += 'selected'
            liSelected.children[1].className = 'selected'
            liSelected.children[2].className = 'selected'
          }
       } else if ( key == 39 ) { //right arrow key
       		if (liSelected) {
            index++;
            liSelected.className = ''
            liSelected.firstElementChild.className = ''
            liSelected.children[1].className = ''
            liSelected.children[2].className = ''
            next = ul.getElementsByTagName('li').item(index);
            if(typeof next !== undefined && index >= 0) {
                      liSelected = next;
                  } else {
                      index = len;
                      liSelected = ul.getElementsByTagName('li').item(len);
                  }
                  liSelected.className += 'selected'
                  liSelected.firstElementChild.className += 'selected'
                  liSelected.children[1].className = 'selected'
                  liSelected.children[2].className = 'selected'
          }
          else {
          	index = 0;
           	liSelected = ul.getElementsByTagName('li')[len];
            liSelected.className += 'selected'
            liSelected.firstElementChild.className += 'selected'
            liSelected.children[1].className = 'selected'
            liSelected.children[2].className = 'selected'
          }
       }
    }
    
  } )
  } catch ( err ) {
      console.error( err )
  }
}

request()