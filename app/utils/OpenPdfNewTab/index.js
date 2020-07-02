const openPdfNewTab = (url, name) => {
  const windowFeatures =
    'menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes';
  const blank = '_blank';
  window.open(url, name, blank, windowFeatures);
};

export default { openPdfNewTab };
