### Functionality & MVP


In Drinkly, users will be able to:

[ ] go to a 3D, interactive landing page. 
[ ] see a map of cafes and boba shops in NYC 
[ ] click into the pin to view the cafe's menu items. 
[ ] be able to add menu items to a cart 

In addition, this project will include:

[ ] real GPS coordinates of shops/locations. 
[ ] actual menu items of the various cafes. 
[ ] search for cafes closest to a specific location. 

### Wireframes

1. https://lucid.app/lucidchart/invitations/accept/inv_d835445b-423b-4f05-bb56-6e6535a0c2fc?viewport_loc=-7%2C31%2C1579%2C911%2C0_0

### File Structure
/dist
    /assets
        - menuItems.jpg
    index.html
    main.css
    main.js
/src
    index.js
    index.scss
    /js
        -Restaurant.js
        -Menu.js
        -Cart.js
    /scss
        -base.scss
node_modules/
.gitignore
babel.config.json
index.html
package.json
package-lock.json
README.md
webpack.config.js

### Architecture and Technology

Drinkly's map feature will be made from the Google Maps Javascript API, and the interactive landing page will be made using three.js. There will be three js files - one for restaurants (GPS location and name), one for menu items (listing items and prices) and one for the current cart (items and prices). 

### Implementation Timeline

Day 1 - getting familiar with technology (three.js + google maps API). Start implementing landing page. Gathering data points (GPS coordinates, menu items)

Day 2 - Finish up landing page. Input data points into website, should have map + coordinates running

Day 3 - make sure menus for each restaurant are up. Finishing touches on graphics/UI.




