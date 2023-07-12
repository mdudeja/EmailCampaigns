import VariantPage from './variant_page'

export async function generateMetadata({
    params,
}: {
    params: { variant: string }
}) {
    const variant = params.variant

    if (variant === 'feminists') {
        return {
            title: 'Feminists Response to 22nd Law Commission',
            description: 'About UCC Recommendations',
            icon: '/feminists_icon.jpg',
        }
    }

    return {
        title: 'Response to 22nd Law Commission',
        description: 'About UCC Recommendations',
    }
}

export default function Page({ params }: { params: { variant: string } }) {
    return <VariantPage params={{ variant: params.variant }} />
}
