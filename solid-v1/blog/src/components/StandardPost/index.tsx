import Post from "~/core/Post";
import {Component} from "solid-js";

type Props = {
  post: Post;
};

const StandardPost: Component<Props> = ({ post }) => {
  return (
    <div class="cursor-pointer group">
      <div class="relative overflow-hidden transition-all bg-gray-100 rounded-md dark:bg-gray-800 aspect-square">
        <a href="/post/10-simple-practices-that-will-help-you-get-1-better-every-day">
          <span style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0">
            <img
              alt="Thumbnail"
              src={post.imageUrl}
              class="transition-all"
              style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"
            />
          </span>
        </a>
      </div>
      <div>
        <a href="#">
          <span class="inline-block mt-5 text-xs font-medium tracking-wider uppercase text-emerald-700">
            {post.category}
          </span>
        </a>
      </div>
      <h2 class="mt-2 text-lg font-semibold tracking-normal text-brand-primary dark:text-white">
        <span class=" bg-gradient-to-r from-green-200 to-green-100 dark:from-purple-800 dark:to-purple-900 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
          {post.name}
        </span>
      </h2>
      <div class="flex items-center mt-3 space-x-3 text-gray-500 dark:text-gray-400">
        <div class="flex items-center gap-3">
          <div class="relative flex-shrink-0 w-5 h-5">
            <span style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0">
              <img
                alt={post.posterName}
                src={post.posterImageUrl}
                class="rounded-full"
                style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover;"
                sizes="30px"
              />
            </span>
          </div>
          <span class="text-sm">{post.posterName}</span>
        </div>
        <span class="text-xs text-gray-300 dark:text-gray-600">•</span>
        <time class="text-sm" dateTime="2022-05-20T09:33:00Z">
          May 20, 2022
        </time>
      </div>
    </div>
  );
};

export default StandardPost;
