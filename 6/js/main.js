import { createdPosts } from './create-posts.js';
import { drawMiniatures } from './draw-miniatures.js';

const posts = createdPosts();
drawMiniatures(posts);

