
import Image from 'next/image';
import roadmap from '@/app/assets/roadmap.svg';
export default function FourthPage(){
    return (
        <div>
            <Image
                src={roadmap}
                alt="Roadmap"
                width={1500}
                height={400}
            />
        </div>
    )
}