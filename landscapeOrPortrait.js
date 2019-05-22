let isLandscape = (width, height) => {
    return width > height;
}

isLandscape(2,500) ? console.log("Yes, is landscape") : console.log("No, is not landscape");
