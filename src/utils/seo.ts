interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function updateMetaTags({
  title = 'Lantech Games - Safe Gaming for All Ages',
  description = 'Discover age-appropriate games on Lantech Games. A safe gaming platform with strict content guidelines and age-specific categories for children and teens.',
  image = 'https://images.unsplash.com/photo-1556438064-2d7646166914',
  url = 'https://lantechgames.org'
}: SEOProps = {}) {
  // Update basic meta tags
  document.title = title;
  
  // Update meta tags
  const metaTags = {
    'description': description,
    'og:title': title,
    'og:description': description,
    'og:image': image,
    'og:url': url,
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': image,
    'twitter:url': url,
  };

  Object.entries(metaTags).forEach(([name, content]) => {
    // Update OpenGraph and name meta tags
    const element = document.querySelector(`meta[property="${name}"], meta[name="${name}"]`);
    if (element) {
      element.setAttribute('content', content);
    }
  });
}
