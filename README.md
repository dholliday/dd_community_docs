# Don't Die Community Documentation Site

This site is hosted on GitHub Pages and built with Docusaurus framework/tooling. Get stuck in, make changes and raise pull requests!

To run and test changes locally: `npm run start`

To deploy to github pages: `yarn deploy` (Only Dave can do this at the moment)

## Colorbox Config

```json
[
  {
    "properties": {
      "steps": 11,
      "hue": {
        "start": 258,
        "end": 258,
        "curve": "easeOutQuad"
      },
      "saturation": {
        "start": 0.07,
        "end": 0.72,
        "rate": 1,
        "curve": "easeOutQuad"
      },
      "brightness": {
        "start": 1,
        "end": 0.05,
        "curve": "linear"
      }
    },
    "options": {
      "minorSteps": [0, 1],
      "name": "New Color",
      "provideInverted": false,
      "rotation": "clockwise"
    }
  }
]
```
