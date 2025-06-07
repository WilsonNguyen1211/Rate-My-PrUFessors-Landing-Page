document.querySelector('.video-placeholder')
  .addEventListener('click', function () {
    const embed = document.createElement('div');
    embed.className = 'video-wrapper';
    embed.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/Dk8zgM7oKh0?autoplay=1"
        title="Demo of RateMyPrUFessor"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
    this.replaceWith(embed);
  });
