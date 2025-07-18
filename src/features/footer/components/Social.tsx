import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
    instaUrl:string,
    youtubeUrl:string
};

function Social({instaUrl,youtubeUrl}: Props) {
  return (
    <ul className="flex gap-5 flex-1 justify-center">
      <li>
        <Link
          href={instaUrl ??""}
          className="flex justify-center items-center size-5"
          title="yekzan instagram"
        >
          <Image
            className="max-w-5 max-h-5"
            src="/social/instagram2.png"
            alt="yekzan instagram"
            width={20}
            height={20}
          />
        </Link>
      </li>
      <li>
        <Link
          href={youtubeUrl ??""}
          className="flex justify-center items-center size-5"
          title="yekzan youtube"
        >
          <Image
            className="max-w-5 max-h-5"
            src="/social/youtube2.png"
            alt="yekzan youtube"
            width={20}
            height={20}
          />
        </Link>
      </li>
    </ul>
  );
}

export default Social;
