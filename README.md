# dss

Running project: 
###### http://fiddle.jshell.net/shan9115/kxrwoepf/519/show/light/

Intended for Google Chrome

You must click on the browser screen to let your computer know that is your active screen. The arrows/enter key control the rest.

I chose to include the source code in github to make it more readable.


###### Commentary:

Implemented all features fully except the *Support loading and displaying the master_scoreboard.json for adjacent days*
- this will load and display, but the moving panels do not work. I would need to better keep track of which item was selected between the two game lists. I ran out of the time I specified to implement this feature. 
- here is an example of the display with yesterday's date: - http://fiddle.jshell.net/shan9115/kxrwoepf/520/show/light/ 

There are no images for games on the current date until the game is played, I used a div with a background color instead. My function would have been better suited to display a stock image if one didn't exist. The functionality would have been similar though. Pull the image from the api and insert that image as the src.

Similarly I used fields for the popup box that are available for the current date. It's not the most relevant information, but that can easily be changed to point to other fields from the api.

###### Improvements:

- Better error handling ( there is pretty much none right now ). I'm currently catching any error within the promise and console.logging it. 
- Visual improvements. I focused on getting all the functionality in place in the time I specified, but the text could be displayed better especially for the popup. I wish there was an easier way in javascript to implement a slider. jQuery's slick seemed like the best example out there.
-Code could be more modular. I think there's a lot of room for improvement on the selection piece. Currently, its very long winded and complicated. 

###### Questions for the future:
-Is there a better way to dynamically insert html?
