# This is a security test for browser.
## Download spoofing:
1. Open stri.html
2. Click on `Download chrome` button.
3. Notice you get redirected to google.com and a download begins showing origin as google.com even though it was created by the previous tab.

## Spoofing contents of view-source:
### Steps to reproduce:

1. Open the 404spoof.html
2. Hit ctrl+u
3. Notice there's a change in view-source code than the original code that is served on the page [confirm this through inspect elements]. 
