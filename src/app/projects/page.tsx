import type { Metadata } from "next";
import Image, {StaticImageData} from 'next/image';
import Image1 from '/public/images/project1.png';
import Image2 from '/public/images/project2.png';

type ProjectItemProps ={
    name: string;
    url: string;
    urlDisplay: string;
    imageSrc: StaticImageData;
}

function ProjectItem({name, url, urlDisplay, imageSrc}: ProjectItemProps) {
    return (
        <li>
            <a href={url}>
                <div className="max-w-sm rounded overflow-hidden mb-2">
                    <Image className="w-full" src={imageSrc} alt={name} />
                    <div className="px-6 py-4">
                        <div className="font-bold text-x1 mb-2">{name}</div>
                    </div>
                    <div className="px-6 pb-4">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                            {urlDisplay}
                        </span>
                    </div>
                </div>
            </a>
        </li>
    )
}

export const metadata: Metadata={
    title: 'Projek',
    description: 'Halaman Projek',
    openGraph: {
        images: "https://examlple.com/default-image.jpg",
        url: "https://example.com",
      },
  }

export default function Projets(){
    return (
        // <div className="mt-16 px-8">
        //     <header>
        //         <h1 className="font-blod text-4xl text-zinc-800">Projek Saya</h1>
        //         <p className="text-base mt-6 text-zinc-600"> Beikut adalah beberapa proyek yang telah saya kerjakan.</p>
        //     </header>
        //     <div className="mt-16">
        //         <h2 className="text-2xl">Aplikasi</h2>
        //         <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mt-8">
        //             <ProjectItem name="Aplikasi 1" url="https://example.com" urlDisplay="App Store" imageSrc={Image1} />
        //             <ProjectItem name="Aplikasi 2" url="https://example.com" urlDisplay="Google Paly" imageSrc={Image2} />

        //         </ul>
        //     </div>
        // </div>

        <div className="mt-16 px-8">
            <header>
                <h1 className="font-bold ext-4xl text-zinc-800"> Tentang Saya</h1>
            </header>
        </div>
    )
}