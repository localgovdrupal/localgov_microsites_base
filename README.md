# LocalGov Microsites Base

A child theme of LocalGov Base. Please read the README there also. 

## Customising the appearance through the UI

A _Microsite Admin_ has the permission to set a number of css variables through the UI. These override the default variables set in /css/variables.css 

## Creating a child theme of LocalGov Microsites Base

We recommend creating a child theme of LocalGov Microsites base in order to create a custom theme for one or more of your microsites. A _Microsite controller_ is able to install and set a new theme for a microsite. 

### Examples

#### To create a base theme with your councils branding.

1. Create a new child theme of LocalGov Microsite Base
2. Define the same regions in the .info.yml
3. Create (and reference in the libraries.yml) a new /css/variables.css file
4. Copy the variables you need from localgov_microsites_base/css/variables.css and set the default branding colours, fonts etc
5. Enable this theme, using the "Enable" button only, <strong>not</strong> the "Enable and set as default" button. After this, you can then hit the "Set as default" button. This 2-step process is needed to ensure all the blocks from the default theme get transition to the same block regions in your new theme.

