const sign=document.querySelector('.sign-in');

document.addEventListener("DOMContentLoaded", () => {
    // FAQ functionality
    const faqButtons = document.querySelectorAll(".faq .row button");
    faqButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Check if the content is already visible
            let content = button.nextElementSibling;
            if (content && content.classList.contains("faq-content")) {
                content.classList.toggle("active");
                content.style.display = content.style.display === "block" ? "none" : "block";
            } else {
                // Create and show new FAQ content if it doesn't exist
                let newContent = document.createElement("div");
                newContent.className = "faq-content active";
                newContent.style.display = "block";
                newContent.innerHTML = `<p>This is the content for: ${button.textContent}</p>`;
                button.parentNode.insertBefore(newContent, button.nextSibling);
            }
        });
    });

    // Placeholder animation for email input
    const emailInputs = document.querySelectorAll("input[type='email']");
    emailInputs.forEach((input) => {
        const placeholder = input.placeholder;
        input.addEventListener("focus", () => {
            if (!input.value) {
                input.placeholder = "";
                input.parentNode.classList.add("placeholder-up");
            }
        });
        input.addEventListener("blur", () => {
            if (!input.value) {
                input.placeholder = placeholder;
                input.parentNode.classList.remove("placeholder-up");
            }
        });
    });
});
