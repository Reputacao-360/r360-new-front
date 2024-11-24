import React from 'react';
import { useRouter } from 'next/navigation';

const NotFoundPage: React.FC = () => {
	const router = useRouter();

	const goHome = () => {
		router.push('/');
	};

	return (
		<div style={{ textAlign: 'center', marginTop: '50px' }}>
			<h1>404 - Página Não Encontrada</h1>
			<p>A página que você está procurando não existe.</p>
			<button onClick={goHome}>Voltar para a Página Inicial</button>
		</div>
	);
};

export default NotFoundPage;
