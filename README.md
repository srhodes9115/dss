# dss

Running project: 
###### http://fiddle.jshell.net/shan9115/kxrwoepf/519/show/light/

You must click on the screen to let your computer know that is your active panel. The arrows/enter key control the rest.

I chose to include the source code in github to make it more readable.


###### Commentary:

Implemented all features fully except the *Support loading and displaying the master_scoreboard.json for adjacent days*
- this will load and display, but the moving panels does not work. Would need to keep track of which item was selected between the two game lists. I ran out of the time I specified to implement this feature. 
- here is an example of the separate: - http://fiddle.jshell.net/shan9115/kxrwoepf/520/show/light/ 

There were no images for the current date, I used a div with a background color instead. My function would have been better suited to display a stock image if one didn't exist. The functionality would have been similar though. Pull the image from the api and insert that image as the src.

Similarly I used fields for the popup box that were available for the current date. It's not the most relevant information, but that can easily be changed to point to other fields from the api.

###### Improvements:

- Better error handling ( there is pretty much none right now ). I'm catching any error within the promise and console.logging it. 
- Visual improvements. I focused on getting all the functionality in place in the time I specified, but the text could be display better especially for the popup. I wish there was an easier way in javascript to implement a slider. jQuery's slick seemed like the best example out there.
-Code could be more modular. I think there's a lot of room for improvement on the selection piece. Currently, its very long winded and complicated. 

###### Questions for the future:
-Is there a better way to dynamically insert html?
