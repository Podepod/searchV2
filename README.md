# SearchV2

## Features

## TODO's
- [ ] redo all icons change base color to black → use css filters to change color
- [ ] make it calculate if there is a calculation in the smart search
  - [ ] regex to detect math expressions
  - [ ] a way to calculate the output
  - [ ] a way to display the output (should be able to copy answer) → temp isn't good → redo!!!
    ```regex
    ^[0-9()+\-*.\/]*$
    ^([-+]? ?(\d+(\.\d{0,4})?|\(\g<1>\))( ?[-+*\/] ?\g<1>)?)$
    ```

- [ ] make a dark mode switch & a podepod theme
  - [ ] maak icons nieuwe kleuren → gewoon alle icons zwart maken en filters gebruiken!
  - [x] maak 2 knopjes, system / no system & light / dark (als system aan staat, wordt de light / dark mode knop disabled) 
  - [x] maak thema's (light, dark, night-blue)
    --> kan ook select input zijn?
- [ ] add more search engines, shortcuts
- [ ] use a database for shortcuts, search engines, icons, faces, ...
- [ ] remove dumb search bar? → room for more shortcuts? → yes please! → searchbars don't need config file anymore
- [ ] make version number kind of interactive (hover over for more info or something?)