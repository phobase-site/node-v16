import HeroPost from "~/components/HeroPost";
import StandardPost from "~/components/StandardPost";
import Post from "~/core/Post";
import { HOME, POSTS, SITE_CONFIG } from "~/phobase/constant";
import { getView } from "@phobase/site-config-core";
import { RemoteViewRowResolver } from "@phobase/client-core";
import { getUrqlClient } from "~/phobase/getUrqlClient";
import { createEffect, createMemo, For } from "solid-js";
import { toPost } from "~/phobase/toPost";
import { createStore } from "solid-js/store";

const Home = () => {
  let [store, setStore] = createStore<{ posts: Post[] }>({ posts: [] });

  let viewRowResolver = new RemoteViewRowResolver(
    getUrqlClient("https://www.phobase.com/api/view/query")
  );

  createEffect(async () => {
    let view = getView(SITE_CONFIG, HOME, POSTS, POSTS);

    if (view) {
      view.viewId;
      let { data } = await viewRowResolver.readViewRows({
        viewId: view.viewId,
      });

      if (!data) {
        return;
      }

      let posts = data.readViewRows.map((row) => toPost(view.columns, row));

      setStore({ posts });
    }
  });

  const getHeroPosts = createMemo((): Post[] => store.posts.slice(0, 2));

  const getStandardPosts = createMemo((): Post[] => store.posts.slice(0, 2));

  return (
    <div class="antialiased text-gray-800 dark:bg-black dark:text-gray-400">
      <main class="container px-8 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg">
        <div class="grid gap-10 lg:gap-10 md:grid-cols-2 ">
          <For each={getHeroPosts()}>{(post) => <HeroPost post={post} />}</For>
        </div>

        <div class="grid gap-10 mt-10 lg:gap-10 md:grid-cols-2 xl:grid-cols-3 ">
          <For each={getStandardPosts()}>
            {(post) => <StandardPost post={post} />}
          </For>
        </div>
      </main>
    </div>
  );
};

export default Home;
