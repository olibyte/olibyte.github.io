import * as React from 'react';
import styled from 'styled-components';
import { ShareButtons } from '../../../components/ShareButtons';
import Giscus from '@giscus/react';

type PostFooterProps = {
  url: string;
  title: string;
  description: string;
};

const PostFooter = ({ url, title, description }: PostFooterProps) => (
  <>
  <Giscus
        id="comments"
          repo="olibyte/olibyte.github.io"
          repoId="R_kgDOG78Vcw"
          category="General"
          categoryId="DIC_kwDOG78Vc84CXH8q"
          mapping="title"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          theme="preferred_color_scheme"
          lang="en"
          loading="lazy"
        />
    <ShareTitle>Share this post!</ShareTitle>
    <ShareDescription>
      Thanks for reading! Don't forget to smash that share button and subscribe.
    </ShareDescription>
    <ShareButtons url={url} title={title} description={description} />
  </>
);

export default PostFooter;

const ShareTitle = styled.h2`
  margin-bottom: 4px;
`;

const ShareDescription = styled.p`
  margin-top: 0px;
`;