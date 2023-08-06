  // Initialize Masonry after the content has loaded
  document.addEventListener("DOMContentLoaded", function () {
    var masonryGallery = new Masonry("#masonry-gallery", {
      itemSelector: ".masonry-item",
      columnWidth: ".col-md-6",
    });
  });

//<!-- JavaScript code to handle the button click and copy the link -->
  // Replace this with the actual JavaScript code to fetch the recipe ID from your data
  const recipeId = "<%= recipe.id %>";

  // Get the share button and add a click event listener
  const shareButton = document.getElementById("shareButton");
  shareButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default behavior (opening email client)

    // Create the share link dynamically
    const shareLink = `https://childhood-recipes.cyclic.app/recipe/${recipeId}`;

    // Create a temporary input element to copy the link to the clipboard
    const tempInput = document.createElement("input");
    tempInput.value = shareLink;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    // Notify the user that the link has been copied
    alert("Link copied to clipboard!");
  });

