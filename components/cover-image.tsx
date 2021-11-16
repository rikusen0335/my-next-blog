import cx from 'classnames'
import Link from 'next/link'
import Image from "next/image";

type Props = {
  title: string
  src: string
  slug?: string
  className?: string
}

const CoverImage = ({ title, src, slug, className = '' }: Props) => {
  const image = (
    <div className={cx('shadow-small imageContainer',
      className, {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    >
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        layout='fill'
        className="image"
      />
    </div>
  )
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  )
}

export default CoverImage
