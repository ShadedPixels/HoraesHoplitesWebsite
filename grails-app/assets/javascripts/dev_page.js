(function () {
  var DevSection = document.getElementsByClassName('dev_area')[0];

  /** @const */
  var isShownRegex = /(^|\s)hidden(\s|$)/;

  /** @param {ELement} elem */
  window.ToggleDev = function(elem) {
	console.log(DevSection);
    if (!DevSection) return;

    if (isShownRegex.test(DevSection.className)) {
      DevSection.className = DevSection.className.replace(isShownRegex, ' ');
    } else {
      DevSection.className += ' hidden';
    }
    DevSection.className = DevSection.className.trim();
  }
})()
