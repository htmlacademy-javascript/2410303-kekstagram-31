import { createdPosts } from './create-posts.js';
import { drawMiniatures } from './draw-miniatures.js';
import './picture-popup.js';

const posts = createdPosts();
drawMiniatures(posts);

export {posts};

