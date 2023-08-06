// Initialize Masonry after the content has loaded
  document.addEventListener("DOMContentLoaded", function () {
    var masonryGallery = new Masonry("#masonry-gallery", {
      itemSelector: ".masonry-item",
      columnWidth: ".col-md-6",
    });
  });


