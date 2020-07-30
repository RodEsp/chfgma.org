# TODO

## MVP

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
- [ ] Security
  - [ ] CORS
  - [ ] TLS

## Next Version

- [ ] SEO
  - [ ] Add Microdata to phone numbers: http://thenewcode.com/536/Adding-Phone-Numbers-To-Web-Pages-With-HTML5-and-Microdata
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
  - Home/About Page
    - Where we act
      - "Mutual Aid NYC"
    - Stay up to date
      - "Subscribe to our weekly newsletter"
      - "Join the conversation on Slack"
      - "Follow us on Instagram for updates"
  - Footer
    - "Subscribe to our weekly newsletter"
    - "Join us on Slack"
- What should the content be for these sections?
  - Home/About Page
    - Our Principles
      - Lorem Ipsum
  - 