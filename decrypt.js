const ceaserCipher = (str) => {
    let decoded = {
        a: 'n',
        b: 'o',
        c: 'p',
        d: 'q',
        e: 'r',
        f: 's',
        g: 't',
        h: 'u',
        i: 'v',
        j: 'w',
        k: 'x',
        l: 'y',
        m: 'z',
        n: 'a',
        o: 'b',
        p: 'c',
        q: 'd',
        r: 'e',
        s: 'f',
        t: 'g',
        u: 'h',
        v: 'i',
        w: 'j',
        x: 'k',
        y: 'l',
        z: 'm'
    };

    // Convert the string to lowercase
    str = str.toLowerCase();

    // Decipher the code
    let decipher = '';
    for (let i = 0; i < str.length; i++) {
        if (decoded.hasOwnProperty(str[i])) {
            // Replace only if the character is in the decoded object
            decipher += decoded[str[i]];
        } else {
            // Keep spaces and special characters unchanged
            decipher += str[i];
        }
    }

    // Return the output
    return decipher;
};

const form = document.getElementById("myForm");
const output = document.querySelector(".decrypted-text");
const decryptedBox = document.querySelector(".decrypted-box");

form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    const message = document.querySelector("#message").value;
    const opt = ceaserCipher(message);
    output.innerHTML = `${opt}`;

    // Toggle the visibility of the decrypted box
    decryptedBox.style.display = "block"; // Show the decrypted box
});



// Initially hide the decrypted box
decryptedBox.style.display = "none";
// Select the copy button and decrypted text elements
const copyButton = document.getElementById("copy-button");
const decryptedText = document.querySelector(".decrypted-text");

// Add a click event listener to the copy button
copyButton.addEventListener("click", function() {
    // Create a text area element to temporarily hold the encrypted text
    const textArea = document.createElement("textarea");
    textArea.value = decryptedText.innerText;

    // Append the text area to the document
    document.body.appendChild(textArea);

    // Select the text in the text area
    textArea.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Remove the text area from the document
    document.body.removeChild(textArea);

    // Change the button text to indicate that it's copied
    copyButton.innerHTML = '<i class="fas fa-check"></i> Copied';
});

// Initially hide the copy button
copyButton.style.display = "none";

// Show the copy button when encrypted text is generated
form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    const message = document.querySelector("#message").value;
    const opt = ceaserCipher(message);
    output.innerHTML = `${opt}`;

    // Show the copy button
    copyButton.style.display = "block";

    // Toggle the visibility of the decrypted box
    decryptedBox.style.display = "block"; // Show the decrypted box
});