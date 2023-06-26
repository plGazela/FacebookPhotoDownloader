// Download photo
async function downloadPhoto(photoSource) {
    const photo = await fetch(photoSource);
    const photoBlob = await photo.blob();
    const photoDownloadURL = URL.createObjectURL(photoBlob);

    const downloadEl = document.createElement("a");
    downloadEl.href = photoDownloadURL;
    downloadEl.download = "photo.jpg";

    // Download photo
    downloadEl.click();
    downloadEl.remove();

    // Go to next photo
    let nextBtn = document.getElementsByClassName("x1i10hfl x1qjc9v5 xjbqb8w xjqpnuy xa49m3k xqeqjp1 x2hbi6w x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x972fbf xcfux6l x1qhh985 xm0m39n x9f619 x1ypdohk xdl72j9 x2lah0s xe8uvvx xdj266r x11i5rnm xat24cr x1mh8g0r x2lwn1j xeuugli xexx8yu x4uap5 x18d9i69 xkhd6sd x1n2onr6 x16tdsg8 x1hl2dhg xggy1nq x1ja2u2z x1t137rt x1o1ewxj x3x9cwd x1e5q0jg x13rtm0m x3nfvp2 x1q0g3np x87ps6o x1lku1pv x1a2a7pz x5yr21d")[1];
    nextBtn.click();
}

let i=0;
function myLoop() {
    setTimeout(function() {
        i++;
        if(i < 72) {
            let photoSource = document.getElementsByClassName("x4fas0m")[0].src;
            downloadPhoto(photoSource);
            myLoop();
        }
    }, 1500)
}

myLoop();