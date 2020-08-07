# TODO

## MVP

- [ ] Feedback
  - [ ] Fix line heights
  - [ ] Fix paddings
  - [ ] Add custom map link
  - [ ] Our Principles
    - [ ] In Mobile: Title should be on top, Description should be on bottom
  - [ ] Fonts
    - [ ] Medium should be the base font
  - [ ] Stay up to date Tiles are links: found in the design document
  - [ ] Instagram Updates
    - [ ] Photo should actually be images from Instagram: Use Pwr
  - [ ] Footer
    - [ ] Col1 and Col2 should become Row1 and Row2
  - [ ] Header
    - [ ] Should read "CHFG Mutual Aid" on Mobile and fix font size so it doesn't overlap the hamburger
  - [ ] /get-help
    - [ ] Local Organizations section, comment it out until we have more info.
  - [ ] /give-help
    - [ ] Colors are slightly different from the figma
    - [ ] "Help Us Spread the Word" comment out links for now
    - [ ] "Helpful Resources" Section
      - [ ] Put in the links (they can be found on the website)
      - [ ] Comment out section until we have new links. We might take the entire section away.
  - [ ] /donate
    - [ ] Fix, padding, text size, all sorts of stuff
    - [ ] Links should be black with no underlines
  - [ ] Jumbo Titles
    - [ ] Adding right and left padding
    - [ ] Put the fancy bottom borders on there
- [ ] SEO
- [ ] Build Website
  - [ ] Layout
    - [ ] Header
      - [ ] Set background-color based on react-router route
      - [ ] For the links, the line under them should be rounded and further down *(see mockups)*
      - [ ] Link Animations
        - [ ] Hover
          - [ ] Before
          - [ ] After
          - [ ] Transition
        - [ ] Click
          - [ ] Transition
    - [ ] Footer
  - [ ] Pages
    - [X] Home/About Page
      - [ ] MVP
        - [ ] Stay up to date - Tile Buttons
      - [ ] Cleanup
        - [ ] Stay up to date buttons look weird when width <= 421px
        - [ ] Top/Bottom padding/margin on all components needs to match the design mockups
    - [ ] Get Help
    - [ ] Give Help
    - [ ] Donate
    - [ ] Search
  - [ ] Accessibility
    - [ ] Links
    - [ ] Images
- [ ] Deploy Website
  - [ ] CICD Pipeline
- [ ] Security
  - [ ] CORS
  - [ ] TLS
  - [ ] Github Secrets
  - [ ] Github Config


## Next Version

- [ ] SEO
  - [ ] Add Microdata to phone numbers: http://thenewcode.com/536/Adding-Phone-Numbers-To-Web-Pages-With-HTML5-and-Microdata
- [ ] Google Analytics
- [ ] Style Guide
  - [ ] Use Responsive Font-Size Function

    ```{css
      /* === Dynamic Font Size ===
      Min Viewport: 300px
      Max Viewport: 1600px
      Min FontSize: 15px
      Max FontSize: 26px
      font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));
      */
    ```

  - [ ] Link Hover Animation
  - [ ] Button Hover Animation
  - [ ] Tile Hover Animation
- [ ] CI/CD Pipeline
- [ ] Tests


## Questions

- What does the search icon do?
- What are the links for these anchors?
  - ALL THE UNDERLINED STUFF IS LINKS
  <!-- - Home/About Page
    - Where we act
      - "Mutual Aid NYC"
    - Stay up to date
      - "Subscribe to our weekly newsletter"
      - "Join the conversation on Slack"
      - "Follow us on Instagram for updates"
  - Footer
    - "Subscribe to our weekly newsletter"
    - "Join us on Slack" -->
- What should the content be for these sections?
  - Home/About Page
    - Our Principles
      - Lorem Ipsum. My partner is works in the public equity space. She would love to facilitate a brain storming session to flush out Mutual Aid's principles.
- Tech Questions
  - How will these be update? Do we need a CMS?


# Comments from Lawrence

## About
### Desktop

Use original image quality (I know that this is a question you had for @Katy Ma on the figma)
The mission statement is title case when it should be sentence case. Also, the kerning and spacing is off compared to the wireframes
Can we move the pixels around on the Help CTAs so they match the wireframes as well?
Looks like the fonts don’t match, is this a web font issue?
Generally text kerning and spacing is a bit tight, closer we can match it to the wireframes, the better
Mobile

[GLOBAL] The header in all pages just says Mutual Aid, can we change this to Clinton Hill Fort Greene Mutual Aid?
Can we introduce more spacing for the mission statement? As it is now, it’s very tightly sandwiched by the images
The image in the ‘Since March 2020’ section is cut off
With the Instagram updates panes here, could we do a carousel instead? Not sure if there is functionality to have panes in desktop and a carousel in mobile

## Get Help
Desktop

[GLOBAL] Match typeface, kerning, and spacing with wireframe
Headline doesn’t match dimensions from wireframes; also, can we make the type bold
‘Submit a request’ dimensions should match wireframes as well, feels a little squashed at the moment
Same with  ‘Other Resources’ section
Mobile
Can we have ‘Request Aid’ CTA after the ‘Some ways we can help’ box?

## Give Help
Desktop & Mobile
[GLOBAL] Match typeface, kerning, and spacing with wireframe
Missing the image here

## Donate
Desktop & Mobile
[GLOBAL] Match typeface, kerning, and spacing with wireframe