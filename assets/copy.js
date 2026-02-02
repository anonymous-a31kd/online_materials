document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll("pre");

  blocks.forEach((block) => {
    // Create button
    const button = document.createElement("button");
    button.innerText = "Copy";
    button.style.position = "absolute";
    button.style.top = "6px";
    button.style.right = "6px";
    button.style.padding = "4px 8px";
    button.style.fontSize = "12px";
    button.style.cursor = "pointer";

    // Style container
    block.style.position = "relative";

    button.addEventListener("click", async () => {
      const code = block.innerText;
      try {
        await navigator.clipboard.writeText(code);
        button.innerText = "Copied!";
        setTimeout(() => (button.innerText = "Copy"), 1500);
      } catch (err) {
        button.innerText = "Failed";
      }
    });

    block.appendChild(button);
  });
});
