// @ts-check

/**
 * Extracts the YouTube video ID from a given URL.
 * @param {string} url - The URL to extract the YouTube ID from.
 * @param {{ fuzzy?: boolean }} [opts={ fuzzy: true }] - Options for extraction.
 * @returns {string|null} The extracted YouTube ID, or null if not found.
 */
export const toYoutubeVideoId = (url, opts = { fuzzy: true }) => {
  if (/youtu\.?be/.test(url)) {
    // Look first for known patterns
    const patterns = [
      /youtu\.be\/([^#&?]{11})/, // youtu.be/<id>
      /\?v=([^#&?]{11})/, // ?v=<id>
      /&v=([^#&?]{11})/, // &v=<id>
      /embed\/([^#&?]{11})/, // embed/<id>
      /\/v\/([^#&?]{11})/, // /v/<id>
    ];

    // If any pattern matches, return the ID
    // eslint-disable-next-line no-restricted-syntax
    for (const pattern of patterns) {
      if (pattern.test(url)) {
        // @ts-ignore
        return pattern.exec(url)[1];
      }
    }

    if (opts.fuzzy) {
      // If that fails, break it apart by certain characters and look
      // for the 11 character key
      const tokens = url.split(/[/&?=#.\s]/g);
      // eslint-disable-next-line no-restricted-syntax
      for (const token of tokens) {
        if (/^[^#&?]{11}$/.test(token)) {
          return token;
        }
      }
    }
  }

  return null;
};
