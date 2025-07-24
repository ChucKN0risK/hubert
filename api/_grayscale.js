const sharp = require("sharp");
const exifr = require("exifr");

async function getMetadata() {
  try {
    // Option 1: Parse directly from file using exifr
    const exifData = await exifr.parse("cline2.jpg");
    console.log(exifData);

    // // Option 2: If you need to use sharp's pipeline
    // const buffer = await sharp("sammy-resized.png").toBuffer();
    // const metadata = await exifr.parse(buffer);
    // console.log(metadata);
  } catch (error) {
    console.log(`An error occurred during processing: ${error}`);
  }
}

getMetadata();

async function addExifData() {
  try {
    const img = await sharp("cline.jpg")
      .withExifMerge({
        IFD0: {
          UserComment: "OKtrolour",
        },
      })
      .toFile("cline2.jpg");
    console.log(img);
  } catch (error) {
    console.log(error);
  }
}

addExifData();
