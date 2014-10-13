function xk72_clickOks(aggressive) {
	console.log("xk72_clickOks: ", aggressive);

	var allOkayButtons = document.querySelectorAll("div.ok a.okayButton");
	var okayButtonsToClick = document.querySelectorAll("div.ok a.okayButton:not(.disabled):not(.reconciled)");
	var loadings = document.querySelectorAll('div.statement.load');

	allOkayButtons = xk72_removeHiddenButtons(allOkayButtons);
	okayButtonsToClick = xk72_removeHiddenButtons(okayButtonsToClick);

	if (okayButtonsToClick.length > 0) {
		console.log("To click", okayButtonsToClick.length, "Loading", loadings.length);
		if (okayButtonsToClick.length < 5 && loadings.length > 0) {
			console.log("Reloading due to too many hung lines");
			setTimeout(function() {
				location.reload();
			}, 3000);
			return;
		}

		for (var i = 0; i < okayButtonsToClick.length; i++) {
			okayButtonsToClick[i].click();
		}

		setTimeout(function() {
			xk72_clickOks(true);
		}, 1000);

		setTimeout(function() {
			xk72_loadPage(1);
		}, 1000 * 30);
	} else if (allOkayButtons.length > 0) {
		/* Waiting for some to complete */
		console.log("Waiting for " + allOkayButtons.length + " buttons to complete");
		setTimeout(function() {
			xk72_clickOks(true);
		}, 1000);
	} else if (aggressive) {
		console.log("Going to the next page");
		xk72_loadPage(1);
	} else {
		console.log("Complete");
	}
}

function xk72_removeHiddenButtons(buttons) {
	var result = [];
	for (var i = 0; i < buttons.length; i++) {
		if (buttons[i].style.visibility !== "hidden") {
			if (buttons[i].parentNode.parentNode.querySelector("div.statement.ruled") !== null) {
				result.push(buttons[i]);
			}
		}
	}
	return result;
}

function xk72_page() {
	var search = location.search;
	var pageIndex = search.indexOf('page=');
	if (pageIndex !== -1) {
		var afterPageIndex = search.indexOf('&', pageIndex);
		if (afterPageIndex === -1) {
			afterPageIndex = search.length;
		}

		return parseInt(search.substring(pageIndex + 5, afterPageIndex));
	} else {
		return 1;
	}
}

function xk72_loadPage(delta) {
	var page = xk72_page();
	if (page > 1) {
		newPage = page + delta;

		var search = location.search;
		var pageIndex = search.indexOf('page=');
		if (pageIndex !== -1) {
			var afterPageIndex = search.indexOf('&', pageIndex);
			if (afterPageIndex === -1) {
				afterPageIndex = search.length;
			}

			search = search.substring(0, pageIndex + 5) + newPage + search.substring(afterPageIndex);
		} else {
			search = search + "&page=" + newPage;
		}

		location.search = search;
	} else {
		location.reload();
	}
}

function xk72_activate() {
	// return true;
	return location.search.indexOf("pageSize=1337") !== -1;
}

if (xk72_activate()) {
	setTimeout(function() {
		xk72_clickOks(false);
	}, 100);
}
