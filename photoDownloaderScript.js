// Facebook Photo Downloader Script
// Made by Gazela
// Inspired by rohitjoshi21 with his Python script (https://github.com/rohitjoshi21/facebook-post-photo-downloader)

console.log("Facebook Photo Downloader Script made by Gazela");

// Script settings

// Album size (a number of photos to download)
let sizeOfAlbum = 4;
// Album name (a name for the downloaded files)
let albumName = "Photo.jpg";

// Run the script
downloadAlbum(sizeOfAlbum);

// A function looping through the album and downloading it
function downloadAlbum(ammountOfPhotos) {
    setTimeout(() => {
        if(ammountOfPhotos--) {
            console.log("Photos to download left: " + ammountOfPhotos);
            let photoSource = document.getElementsByClassName("x4fas0m")[0].src;

            downloadPhoto(photoSource, albumName);
            goToNextPhoto();
            downloadAlbum(ammountOfPhotos);
        } else {
            console.log("Download complete!");
        }
    }, 1500)
}

// A function downloading the photo
async function downloadPhoto(photoSource, fileName) {
    // Create the link to download
    const photo = await fetch(photoSource);
    const photoBlob = await photo.blob();
    const photoDownloadURL = URL.createObjectURL(photoBlob);

    const downloadLink = document.createElement("a");
    downloadLink.href = photoDownloadURL;
    downloadLink.download = fileName;

    // Download the photo
    downloadLink.click();

    // Remove the link to download
    downloadLink.remove();
}

// A function that finds and goes to the next photo
function goToNextPhoto () {
    const nextPhotoBtn = document.getElementsByClassName("x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x1q0g3np x87ps6o x1lku1pv x1a2a7pz x5yr21d")[1];
    nextPhotoBtn.click();
}