XeroReconciliationOK
====================

A Safari browser extension to automatically click OK buttons for rule matches in Xero bank reconciliations.

Installation
------------

### Safari

Install the extension in Safari by downloading the [XeroReconciliationOK.safariextz](https://raw.github.com/karlvr/XeroReconciliationOK/blob/master/Safari/XeroReconciliationOK.safariextz) file and opening it.
You can uninstall it at any time by going to the Preferences in Safari, to the Extensions tab, 
find and click the *XeroReconciliationOK* extension and click the Uninstall button.

### Chrome

Download this repository. Navigate to <a href="chrome://extensions">chrome://extensions</a>, enable <em>Developer mode</em>, click the "Load unpacked"
button, open the <code>Chrome</code> folder from this repository and choose the <code>XeroReconciliationOK</code> folder.

Usage
-----

Once the extension is installed, go to your reconciliation page in Xero. You will see a small
"Reconile Rules" button near the top of the screen, next to the Statement Balance.

Click the button to activate the extension and it will start automatically clicking OK buttons on rules. 
It should not click OK buttons on other types of matches, such as previous matches, or anything 
that you enter manually. It will periodically reload the page, and may go to the next page. Sometimes 
it might miss some pages, near the end of a big set, so just find the page where it hasn’t finished 
and repeat the activation step above.

Please watch it in action until you’re confident that it is behaving as you expect. You can stop it
at any time by closing your browser window. 

There is no undo! Except to go through your bank transactions choosing transactions and unreconciling them. 
So please be careful!

Obviously I accept no responsibility for the correct functioning of this extension, including where
it doesn’t behave in the way that I describe, so you use it at your own risk!

I’d love to hear how it works for you. I’ve personally used it to reconcile 1000s and 1000s of rule-based 
transactions and continue to use it every day.

Building
--------

### Safari

In the Develop menu in Safari, open the Extension Builder. Add the `.safariextension` folder to it and then
click the _Install_ or _Reload_ buttons to test in Safari or the _Build Package..._ button to create the
`.safariextz` file.
