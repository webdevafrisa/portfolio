import { FC } from 'react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'Ethan Pollack',
    description:
      "I've been using SyntaxUI for a few months now and I'm really impressed with the results. The components are easy to use and the documentation is great.",
    profession: 'Software Developer',
    image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde',
  },
  {
    name: 'Aiko',
    profession: 'Design Engineer',
    description:
      "SyntaxUI is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
    image: 'https://images.unsplash.com/photo-1601455763557-db1bea8a9a5a',
  },
  {
    name: 'Alena Zhukova',
    profession: 'Software Engineer',
    description:
      "SyntaxUI is the perfect tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results. The components are easy to use and the documentation is great.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    name: 'Lisa Kemp',
    profession: 'Frontend Developer',
    description:
      "SyntaxUI is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results. The components are easy to use and the documentation is great.",
    image: 'https://images.unsplash.com/photo-1569913486515-b74bf7751574',
  },
  {
    name: 'Saud',
    profession: 'Game Developer',
    description:
      "SyntaxUI is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
    image: 'https://images.unsplash.com/photo-1645830166230-187caf791b90',
  },
  {
    name: 'Paula Smith',
    profession: 'UX Designer',
    description:
      "SyntaxUI is a great tool for building user interfaces. It's easy to use and has a lot of features. I've been using it for a while now and I'm really happy with the results.",
    image: 'https://images.unsplash.com/photo-1586297135537-94bc9ba060aa',
  },
]
interface TestimonalCardProps {
  name: string
  description: string
  image: string
  profession: string
}

const TestimonialCard: FC<TestimonalCardProps> = ({
  name,
  description,
  image,
  profession,
}) => {
  return (
    <div
      className={`card-shadow dark:border-neutral-90 relative flex h-auto max-w-[22rem] select-none flex-col items-start justify-center overflow-hidden rounded-2xl border border-neutral-100 p-5 shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-sm dark:border-neutral-800 dark:hover:shadow-white/10`}
    >
      <div className="absolute right-0 top-0 h-24 w-24 rounded-2xl bg-gradient-to-r from-[#fb3a5d]  to-[#fb3a5d] opacity-20 blur-3xl"></div>
      <div className="mb-0 flex h-fit flex-row items-center gap-3">
        <Image
          className="m-0 block h-11 w-11 rounded-full object-cover"
          src={image}
          alt={image}
          width={120}
          height={80}
        />
        <div className="mb-0 flex h-fit flex-col items-start">
          <h3 className="m-0 text-base font-medium text-gray-900 dark:text-gray-100">
            {name}
          </h3>
          <p className="font-regular m-0 text-center text-sm text-gray-600 dark:text-gray-400">
            {profession}
          </p>
        </div>
      </div>
      <p className="mb-0 mt-3 text-left text-sm font-light text-gray-600 md:text-base dark:text-gray-400">
        {description}
      </p>
    </div>
  )
}

const Testimonals = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-12">
      <h1 className="mb-1 max-w-2xl text-center text-2xl font-semibold tracking-tighter text-gray-900 md:text-4xl dark:text-gray-100">
        Why people love SyntaxUI
      </h1>
      <p className="max-w-2xl text-center text-sm font-light text-gray-600 md:text-base dark:text-gray-400">
        SyntaxUI is loved by the community and is used by many companies. It is
        a great tool for rapid development and launching projects.
      </p>
      <div className="relative mt-12 flex h-full w-full flex-col items-center justify-center gap-5 md:flex-row">
        {[0, 1, 2].map((colIndex) => (
          <div key={colIndex} className="flex flex-col justify-center gap-4">
            {testimonials
              .slice(colIndex * 2, colIndex * 2 + 2)
              .map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonals
