const basePath = `${window.location.origin}/app/pages/`;
function navigateToPage(fileName) {
    const fullPath = `${basePath}${fileName}`;
    window.location.href = fullPath;
}