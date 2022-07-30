import { Row } from "@phobase/client-core";
import Post from "~/core/Post";
import {
  Column,
  getSelect,
  getStore,
  getValue,
} from "@phobase/site-config-core";
import {
  CATEGORY,
  IMAGE_URL,
  NAME,
  POSTED_AT,
  POSTER_IMAGE_URL,
  POSTER_NAME,
} from "./constant";

export const toPost = (columns: Column[], row: Row): Post => {
  let name = getValue<string>(columns, row, NAME) ?? "";
  let imageUrl = getStore(columns, row, IMAGE_URL)?.files[0].url;
  let category = getSelect(columns, row, CATEGORY)?.selectOptions[0].name;
  let posterName = getValue<string>(columns, row, POSTER_NAME) ?? "";
  let posterImageUrl = getStore(columns, row, POSTER_IMAGE_URL)?.files[0].url;
  let postedAt = getValue<Date>(columns, row, POSTED_AT);

  return {
    name,
    imageUrl,
    category,
    posterName,
    posterImageUrl,
    postedAt,
  };
};
