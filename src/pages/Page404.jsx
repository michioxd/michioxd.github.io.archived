import Image from './../assets/notfound.png';

export default function Page404() {
    return (
        <div style={{ textAlign: 'center', width: '100%', marginTop: '3rem', marginBottom: '3rem' }}>
            <img srcSet={Image} style={{ width: 200 }} />
            <br />
            <br />
            <h2>content not found</h2>
            <p>check ur typo and try again nyan~</p>
        </div>
    )
}