


## Approach: React Thinking
1. Mocked up application
  - Decided to refactor SBA 407 (HTML & CSS), which made mockups very fast

2. Identified necessary components
  - Was unsure how granular to get when figuring out how many components were needed, especially with the tables/sections.

  - Created basic file structure in order to:
    - Break down each component by what information it would need to contain 
    - Assess necessary data flow between components
    - Assess where states might be needed & located

3. Created a static layout
  -  Found that I was a bit unsure about what all needed dedicated components, and what would be overkill. I found the advice of the 1st resource listed under the **Components** section below to be helpful.

4. Determined minimal state representation
  - Was able to get the API working faster than expected; the main thing that slowed me down was the documentation and figuring out how the site's query syntax translated into URL query strings.

    - Cleaned up the CSS slightly so it was easier to see all the components that were rendering.

5. Determined which components should own what state
  - At this point I wasn't sure what task to start on next because I had failed to priotize these later tasks. I refactored the Packs component, and then realized I wasn't prioritzing the assignment requirements. I then tried to add some additional functionality to useEffect and refactor it into useReducer.   

6. Added Inverse Data Flow?






## Sources & Resources
### * = most utilized resources

**React - All Topics**
- * https://react.dev/reference

**Components**
- * https://www.reddit.com/r/reactjs/comments/ny2msc/when_should_you_make_a_separate_component/

- https://marcoghiani.com/blog/how-to-use-component-composition-in-react
- https://marvelapp.com/blog/making-good-component-design-decisions-in-react/
- https://medium.com/@karnikagupta1830/mastering-component-composition-in-react-a-comprehensive-guide-eb1ef8a740a3

**Props**
- https://www.geeksforgeeks.org/what-are-props-in-react/
- https://www.freecodecamp.org/news/react-props-cheatsheet/
- https://www.freecodecamp.org/news/how-to-use-props-in-react/

**Router**
- https://reactrouter.com/tutorials/address-book & https://www.youtube.com/watch?v=pw8FAg07kdo
  - Had implemented the changes to `main.jsx` and before I realized this was a remix specific resource. Left it to experiemnt with the change.


**State**
- https://react.dev/learn/state-a-components-memory
- https://dev.to/clickpesa/react-manage-state-using-context-api-with-usestate-or-usereducer-hooks-d5l
- https://www.w3schools.com/react/react_state.asp


**Scryfall API**
- * https://scryfall.com/docs/api
- https://www.reddit.com/r/magicTCG/comments/rg0v4p/scryfall_api_question/
- https://stackoverflow.com/questions/74738673/take-selected-text-send-it-over-to-scryfall-api-then-take-the-link-and-put-it
- https://www.reddit.com/r/magicTCG/comments/j51maa/help_with_simple_scryfall_api_call/
- https://www.reddit.com/r/magicTCG/comments/vzqd3o/scryfall_api_help/

**Organization**
- * https://dev.to/itswillt/folder-structures-in-react-projects-3dp8
- * https://www.geeksforgeeks.org/folder-structure-for-a-react-js-project/
- https://stackoverflow.com/questions/62277013/fetch-data-from-an-api-in-useeffect-or-in-event-handler-directly-in-react
- https://dev.to/kachiic/the-right-way-structure-your-react-router-1i3l

**useEffect, useReducer, & Custom Hook for API**
- * https://react.dev/learn/extracting-state-logic-into-a-reducer
- * https://dev.to/hey_yogini/usereducer-instead-of-usestate-while-calling-apis-3e1l
- * https://medium.com/@nishchay.bhatta/so-you-use-useeffect-for-your-api-calls-68d956f0ecf3
- https://dev.to/roy_kibata/fetching-api-data-in-react-evolving-beyond-useeffect-32m3
- * https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal



## Future
1. Would like to try the Scryfall API wrapper
  - https://www.npmjs.com/package/scryfall-client

2. Find a better way to organically limit the number of objects retrieved. The list object I was retrieving was [already paginated and returned 175 entries](https://scryfall.com/docs/api/cards/search) at a time. I didn't understand the documentation well enough to see how that could be alterted with the properties provided.

3. Retrieve random cards from each set on click. The `total_cards` per set property was provided for the list objects I was retrieving, but there were no `limit` queries. The API did provide `next_page` and `has_more` for pagination through. 

4. Better plan out the project-hopefully to integrate more than basic assignment requirements.