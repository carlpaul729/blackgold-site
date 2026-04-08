function copyContract() {
    const contractText = document.getElementById("contract-address").innerText.replace("Contract Address: ", "");
    navigator.clipboard.writeText(contractText);

    const message = document.getElementById("copy-message");
    message.innerText = "Copied";

    setTimeout(() => {
        message.innerText = "";
    }, 2000);
}