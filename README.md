# Web Dev Portfolio — 2024

<br />

<div align="center">
  <img src="src/assets/img/logos/rpm-logos/vectors/rpm-logo-fill-sunset.svg" width="200px" height="200px" style="margin: 32px 16px 32px auto;" />
  <img src="src/assets/img/logos/rpm-logos/vectors/rpm-logo-stroke-sunset.svg" width="200px" height="200px" style="margin: 32px auto 32px 16px;" />
</div>

<br />

**Priorities: responsive, mobile-first, modular, accessible, maintainable, scalable, and custom**

Reusable Vue components, custom utility classes, and nested Sass and BEM selectors make this project modular, scalable and a breeze to maintain, update, and customize.

The design is original, unique and perhaps even a bit unconventional overall, but still adheres to the fundamental principles and conventions of modern web development, typography, and accessibility.

Powered by: 
<img src="src/assets/img/logos/vectors/vue-logo.svg" width="25px" />
<img src="src/assets/img/logos/rasters/pinia.png" width="17px" />
<img src="src/assets/img/logos/rasters/sass.png" width="27px" />
<img src="src/assets/img/logos/rasters/js2.png" width="25px" />
<img src="src/assets/img/logos/rasters/css2.png" width="25px" />
<img src="src/assets/img/logos/rasters/html2.png" width="25px" />
<img src="src/assets/img/logos/rasters/vscode.png" width="25px" />
<img src="src/assets/img/logos/rasters/vite.png" width="27px" />
<img src="src/assets/img/logos/rasters/affinity-designer.png" width="25px" />
<img src="src/assets/img/logos/rasters/yySmiley.png" width="30px" />

---

<br />

# Developer Reference

The following is a brief guide to some of the resources in this app. It is meant primarily to serve as a quick lookup for me as I build and maintain this, my latest portfolio. But it doesn't hurt that a second use is to demo my attention to writing documentation. 😉

<div align="center">
  <img src="src/assets/img/icons/vectors/impossible-triangle.svg" width="200px" height="200px" />
</div>

- [Web Dev Portfolio — 2024](#web-dev-portfolio--2024)
- [Developer Reference](#developer-reference)
  - [Reusable Components](#reusable-components)
    - [Section](#section)
    - [Card](#card)
    - [Drawer](#drawer)
    - [Modal Dialog](#modal-dialog)
    - [Expanding Element](#expanding-element)
  - [Utility Classes](#utility-classes)
    - [Flex](#flex)
    - [Grid](#grid)
    - [Spacers](#spacers)
      - [Gap](#gap)
      - [Padding](#padding)
      - [Margin](#margin)
  - [Colors](#colors)

---

<br />

## Reusable Components
These reusable Vue components use slots for content injection and props/attributes for a variety of built in style customizations.

### Section
Large reusable responsive section to break up content on a page/view.

Theme props:  
* `light` - BOOLEAN

Child props: 
* `hero` - BOOLEAN
* `heading` - BOOLEAN
* `subheading` - BOOLEAN
* `text` - BOOLEAN
* `footer` - BOOLEAN

File name: `ASection.vue`

### Card
Responsive reusable component to break up content in a section.

Theme props:
`theme`: STRING
* Accepts:
  * 'red'
  * 'green'
  * 'blue'
  * 'yellow'
  * 'lt'
  * 'clr'
  * 'dk'
* Defaults to 'dk'

Child props: 
* `heading` - BOOLEAN
* `text` - BOOLEAN
* `footer` - BOOLEAN
* `drawer` - BOOLEAN

File name: `ACard.vue`

### Drawer
Better responsive reusable expanding component to contain click-through/supplemental content in a section or a card.

Function props:
* `grounded`: BOOLEAN,
* `hasDrawerKids`: BOOLEAN,
* `hasDrawerKidsHeight`: NUMBER,

Theme props:
`theme`: STRING
* Accepts:
  * 'clr'
  * 'lt'
  * 'dk'
* Defaults to 'clr'

Emits custom click event on expand

File name: `ADrawer.vue`

### Modal Dialog
Reusable responsive element that traps focus and requires user interaction.

Behavior props: 
* `display` - BOOLEAN

Text props: 
* `heading-text` - STRING
* `btn-text` - STRING

Emits custom click/close event

File name: `AModal.vue`

### Expanding Element
Responsive reusable expanding component to contain click-through/supplemental content in a section or a card.

Theme props:
`theme`: STRING
* Accepts:
  * 'clr'
  * 'lt'
  * 'dk'
* Defaults to 'clr'

Button theme props:
`btn-theme`: STRING
* Accepts:
  * 'lt'
  * 'dk'
* Defaults to ''

Type props:
* `borderless` - BOOLEAN

Child props: 
* `heading` - BOOLEAN
* `text` - BOOLEAN
* `footer` - BOOLEAN

Emits custom click event

File name: `OldAccordion.vue`

## Utility Classes

This section details helpful predefined classes that can be added to HTML blocks and elements for easy layout and spacing solutions.

### Flex
Syntax: flex--`direction`--`justification`--`alignment*`--`wrap*`

The table below defines the class name modifiers and their respective flex values. Modifiers must be added in the order demonstrated above and separated by the double dash: `--`. 

**NOTE:** The `*` indicates optional modifiers. If both optional modifiers are used, `alignment` must come first.


| **Class Name Modifier**  | **Flex Value**  |
|---|---|
| **1. Direction → ↓** |
| --row  | row  |
| --row-rev  | row-reverse  |
| --col  | column  |
| --col-rev  | column-reverse  |
| **2. Justification ← →** |
| --start  | start  |
| --end  | end  |
| --fs  | flex-start  |
| --fe  | flex-end  |
| --cent  | center  |
| --left  | left  |
| --right  | right  |
| --norm  | normal  |
| --sb  | space-between  |
| --sa  | space-around  |
| --se  | space-evenly  |
| **3. \*Alignment ↑ ↓** |
| --fs  | flex-start  |
| --fe  | lex-end  |
| --cent  | center  |
| --stretch  | stretch  |
| **4. \*Wrap ↻** |
| --wrap  | wrap  |

### Grid
Syntax: grid--`#`

Replace the `#` with the number of columns needed - Limit 12.

### Spacers
The modifiers for the following class names, `m` for measure, = 1/10 of rem - e.g. `5` = 0.5rem, `10` = 1rem, `21` = 2.1rem, up to `50` = 5rem;

The 'x', 'y', and 'xy' in the following class names refers to the X axis ( ← → ) and the Y axis ( ↑ ↓ ). i.e. 'x' refers to the top and bottom padding or margin, 'y' refers to left and right padding or margin, and 'xy' refers to all four paddings or margins. 

#### Gap
Syntax: 
* gap--`m`
* row-gap--`m`
* col-gap--`m`

#### Padding
Syntax: 
* pad-x--`m`
* pad-y--`m`
* pad-xy--`m`

#### Margin
Syntax: 
* mar-x--`m`
* mar-y--`m`
* mar-xy--`m`

## Colors

Color variables start with 'color', hen two dashes ( -- ) followed by 'bg' for background colors, 'text' for typography color, or the color's name or purpose. 

light and dark theme colors follow the convention of using 'lt' for light and 'dk' for dark.

Translucent colors use the term 'glass'. The level of opacity is marked by the following terms from lightest to darkest: thinner, thin, no-term-form-mid-level-opacity, thick, and thicker.

Primary:

![#00bfff](https://placehold.co/15x15/00bfff/00bfff.png) Deep Sky

![#1e90ff](https://placehold.co/15x15/1e90ff/1e90ff.png) Dodger

![#0707db](https://placehold.co/15x15/0707db/0707db.png) Blue

![#020224](https://placehold.co/15x15/020224/020224.png) Midnight

Warning - <span style="color: rgb(255, 255, 125)">yellow</span>, <span style="color: rgb(255, 215, 0)">gold</span>, <span style="color: rgb(255, 165, 0)">orange</span>

Alert - <span style="color: rgb(255, 50, 14)">red-orange</span> 

Error - <span style="color: rgb(199, 19, 19)">dark red</span>

Success - <span style="color: rgb(0, 212, 0)">lime</span>, <span style="color: rgb(0, 187, 0)">green</span>, <span style="color: rgb(0, 77, 0)">forest</span>

Special - <span style="color: rgb(255, 155, 255)">pink</span>, <span style="color: rgb(255, 0, 235)">hot-pink</span>, <span style="color: rgb(74, 6, 184)">purple</span>

Disabled - <span style="color: rgb(150, 150, 150)">light grey</span> and <span style="color: rgb(29, 28, 31)">dark grey</span>

<div align="center">
  <img src="src/assets/img/logos/rpm-logos/vectors/rpm-logo-stroke-sunset.svg" width="200px" height="200px" style="margin: 32px auto 32px 16px;" />
  <img src="src/assets/img/logos/rpm-logos/vectors/rpm-logo-fill-sunset.svg" width="200px" height="200px" style="margin: 32px 16px 32px auto;" />
</div>
