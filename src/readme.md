# Project Overview

## Project Links

- [https://github.com/CodingStephy/Project2]()
- [https://project2-git-master-codingstephy.vercel.app/]()

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.
relevant site: https://www.artic.edu/exhibitions
For this project, I plan to make a website for exhibition-lovers to keep track of the exhibition they plan to go . I will use API call to fetch the data of the exhibitions and to update the list . There will also be a separate web-page that contains buttons to sort and filter the event dates to help the users to pick the right exhibitions for them. 



## API

Use this section to include info about the API you have chosen and a code snippet of the data that it returns and is required for your project. 
https://cdn.contentful.com//spaces/nbe8tmkxy59u/environments/master/entries?access_token=ynfiaMt1N5Skp8U-uq7Z49Xc9OSl6g-je6-cEcapCqU&content_type=exhibition

```
data: 
{
        "exhibition": "Adornment: Jewelry of South Asia’s Nomadic Cultures",
        "date": "2019-11-02",
        "endDate": "2021-10-05",
        "exhibitionImage": 
        "exhibitionLink":
},   

```


## Wireframes

Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Also, define the the React components and the architectural design of your app.

- [https://res.cloudinary.com/dt5zbnwvr/image/upload/v1627657840/M523ba0d9c3b3a47da438f1599d2883d21627612747104_jpflw4.png]()
- [https://res.cloudinary.com/dt5zbnwvr/image/upload/v1627660005/Me2d4dc0f8d0814a74b1c5ec44bce0ee41627659888551_jlzdts.png]()


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 
Fully functional, interactive, exhibitions lists
populate the exhibition information by API call
Add favorites to the exhibitions 
Create a fav exhibitions list 
Navbar with options that link to the to-go page 
Options that filters the exhibition 
Button that re-arrange the exhibition dates
#### PostMVP 

Carousel that displays the exhibitions
Videos and Location 
Filter the Exhibition by Exact Dates 

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 
| Main | Contains Switch/Routes for content| 
| AllExhibitions | Renders the list of exhibitions, including Onclicks to add the exhibitions to my list | 
| AExhibition | Renders single exhibition via API call | 
| MyList  | Renders the list received through props| 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and files for all components | H |  1 | 0.5 | 0.5 |
| Basic Navbar & Footer | H | 1 | 1.5 | 1.5 |
| Set up basic React routing| H |  1 | 2 | 2 |
| Make exhibitions API call, parse important data| H | 1 | 4 | 4 |
| Display Lists of Exhibition using Card | H | 5 | 2 | 2 |
| Add love button to Exhibition Sections | H | 2 | 1 | 1 |
| Add the Exhibition to My List | H | 1 | 1 | 1 |
| Delete the Exhibition from My List | H | 1 | 4 | 4 |
| Display the My List Page  | H |  3 | 2 | 2 |
| My List Buttons to filter  | H |  2 | 2 | 2 |
| re-organize Exhibition by Date | H |  2 | 1 | 1 |
| Incorporate the date sort | M |  4 | 5 | 5 |
| Additional styling for Navbar, Footer | L |  3 | 3 | 3 |
| Additional styling for main (to mimic the actual wesbite) | L | 4 | 2 | 2 |
| Total | H | 31hrs| 31hrs | 31hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

Reactstrap-Cards
icons 
## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
   function filterTogos(condition) {
        if(condition ==='upcoming') {
           const filtered = togos.filter((item) => moment(item.startDate) >= Date.now());
           setFilteredTogos(filtered)
        } else if(condition === 'current') {
          const currentEx = togos.filter((item) => moment(item.endDate) >= Date.now() && moment(item.startDate) <= Date.now());
          setFilteredTogos(currentEx)
        } else if(condition = 'sorted') {
          //sorted by date
          const sorted = togos.sort(function (x, y) {
            let a = new Date(x.endDate),
              b = new Date(y.endDate);
```