
- [Developer Reference](#developer-reference)
  - [Reusable components](#reusable-components)
    - [Section](#section)
    - [Card](#card)
    - [Drawer](#drawer)
    - [Accordion](#accordion)
    - [Modal Dialog](#modal-dialog)
  - [Utility classes](#utility-classes)
    - [Flex](#flex)
    - [Grid](#grid)
    - [Spacers](#spacers)
      - [Gap](#gap)
      - [Padding](#padding)
      - [Margin](#margin)
  - [Colors](#colors)

---

# Developer Reference

This is a brief guide to some of the resources in this app. It is meant primarily to serve as a quick lookup for me as I build and maintain this, my latest portfolio. But it doesn't hurt that a second use is to demo my attention to good documentation. 😉

## Reusable components
These reusable Vue components use slots for content injection and props/attributes for a variety of built in style customizations.

### Section
Large reusable responsive section to break up content on a page/view.

`theme` props: 
* 'light' - `BOOLEAN`

Child props: 
* 'hero' - `BOOLEAN`
* 'heading' - `BOOLEAN`
* 'subheading' - `BOOLEAN`
* 'text' - `BOOLEAN`
* 'footer' - `BOOLEAN`

File name: `ASection.vue`

### Card
Responsive reusable component to break up content in a section.

`theme` props:
Defaults to 'dk'
* 'red' - `STRING`
* 'green' - `STRING`
* 'blue' - `STRING`
* 'yellow' - `STRING`
* 'lt' - `STRING`
* 'clr' - `STRING`
* 'dk' - `STRING`

Child props: 
* 'heading' - `BOOLEAN`
* 'text' - `BOOLEAN`
* 'footer' - `BOOLEAN`
* 'drawer' - `BOOLEAN`

File name: `ACard.vue`

### Drawer
Better responsive reusable expanding component to contain click-through/supplemental content in a section or a card.

`theme` props:
Defaults to 'clr'
* 'clr' - `STRING`
* 'lt' - `STRING`
* 'dk' - `STRING`

File name: `ADrawer.vue`

### Accordion
Responsive reusable expanding component to contain click-through/supplemental content in a section or a card.

`theme` props:
Defaults to 'clr'
* 'clr' - `STRING`
* 'lt' - `STRING`
* 'dk' - `STRING`

`btn-theme` props:
Defaults to ''
* 'lt' - `STRING`
* 'dk' - `STRING`

Type props:
* 'borderless' - `BOOLEAN`

Child props: 
* 'heading' - `BOOLEAN`
* 'text' - `BOOLEAN`
* 'footer' - `BOOLEAN`

File name: `AnAccordion.vue`

### Modal Dialog
Reusable responsive element that traps focus and requires user interaction.

Behavior props: 
* 'display' - `BOOLEAN`

Text props: 
* 'heading-text' - `STRING`
* 'btn-text' - `STRING`

File name: `AModal.vue`

## Utility classes

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

Color variables start with 'color'. 

Then two dashes ( -- ) followed by 'bg' for background colors, 'text' for typography color, or the color's name or purpose. 

light and dark theme colors follow the convention of using 'lt' for light and 'dk' for dark.

Translucent colors use the term 'glass'. The level of opacity is marked by the following terms from lightest to darkest: thinner, thin, no-term-form-mid-level-opacity, thick, and thicker.

Main color is blue - deep sky, dodger, standard, and midnight.

Warning color is yellow/gold.

Alert and error are reds.

Success is green - lime, standard and forest

Special is purple/pink.

Disabled is grey, light and dark.
