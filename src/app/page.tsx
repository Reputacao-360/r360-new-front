import { images } from '@/assets';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<h1 className="text-4xl font-bold text-center">Reputação 360 new FrontOffice</h1>
			<Image src={images.logos.logo_new} alt="Reputação 360" width={200} height={200} className="rounded-full" />
			<p className="text-lg text-center">Avalie e seja avaliado por empresas e pessoas.</p>
		</div>
	);
}
