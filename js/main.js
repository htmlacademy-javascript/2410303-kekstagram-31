import { createdPosts } from './create-posts.js';
import { drawMiniatures } from './draw-miniatures.js';
import './picture-popup.js';
import './picture-form-popup.js';
import './form-validation.js';

const posts = createdPosts();
drawMiniatures(posts);

