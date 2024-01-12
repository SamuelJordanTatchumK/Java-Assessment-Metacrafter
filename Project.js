/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

// Step 1: Create a variable to hold your NFT's:
// This line declares a variable named nfts using the let keyword. It's an array that will hold the NFT objects.
let nfts = [];

// Step 2: Create an object inside your mintNFT function to hold the metadata for your NFTs
function mintNFT(name, eyeColor, shirtType, bling) {
    // Create an NFT object with the provided metadata
    const newNFT = {
        "name": name,
        "eyeColor": eyeColor,
        "shirtType": shirtType,
        "bling": bling
    };

    // Store the NFT in the variable created in Step 1
    nfts.push(newNFT);
    console.log("NFT_Minted: " + name);
}

// create a "loop" that will go through an "array" of NFT's

// Step 3: Create a function to list all NFTs' metadata

function listNFTs() {
    // Iterate through the array of NFTs and print their metadata
    for (const nft of nfts) {
        console.log(" \nName: " + nft.name); 
        console.log("Eye Color: " + nft.eyeColor); 
        console.log( "Shirt Type: " + nft.shirtType); 
        console.log("Bling: " + nft.bling);
    }
}

// Step 4: Create a function to get the total supply of NFTs

function getTotalSupply() {
    // Return the length of the NFTs array
    return nfts.length;
}

// Step 5: Call your functions below this line

// Mint some NFTs
mintNFT("Sam", "Blue", "T-Shirt", "Gold Chain");

mintNFT("Keem", "Green", "Hoodie", "Diamond Ring");

mintNFT("Ziggy", "Black", "V-Neck Shirt", "Rhinestone Chain");


// List all NFTs
listNFTs();

// Get the total supply
console.log("\nTotal NFTs Minted: " + getTotalSupply());

