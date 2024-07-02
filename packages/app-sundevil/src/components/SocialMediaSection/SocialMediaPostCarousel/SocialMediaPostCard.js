import PropTypes from "prop-types";
import React from "react";

import * as SocialMediaPost from "./social-media-post";
import { SocialMediaPostCardSquare } from "./SocialMediaPostCardSquare";
import { SocialMediaPostCardTall } from "./SocialMediaPostCardTall";

/** @typedef {React.FC<{socialMediaPost: SocialMediaPost.SocialMediaPost }>} */
export const SocialMediaPostCard = ({ socialMediaPost, variant }) => {
  switch (variant) {
    case "tall": {
      return <SocialMediaPostCardTall socialMediaPost={socialMediaPost} />;
    }
    case "square": {
      return <SocialMediaPostCardSquare socialMediaPost={socialMediaPost} />;
    }
    default: {
      return <SocialMediaPostCardTall socialMediaPost={socialMediaPost} />;
    }
  }
};

SocialMediaPostCard.propTypes = {
  socialMediaPost: SocialMediaPost.socialMediaPostSchema.isRequired,
  variant: PropTypes.oneOf(["tall", "square"]).isRequired,
};
