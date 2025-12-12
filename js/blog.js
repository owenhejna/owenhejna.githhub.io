// BLOG POST TOGGLE ONLY
document.addEventListener("DOMContentLoaded", () => {
    const blogItems = document.querySelectorAll(".blog-item h3");

    blogItems.forEach(item => {
        item.addEventListener("click", () => {
            const postContent = item.parentElement.querySelector(".post-content");
            postContent.classList.toggle("show");
        });
    });
});
