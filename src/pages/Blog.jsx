import clsx from 'clsx';
import BlogItem from '../components/BlogItem';
import Style from './Blog.module.css';

export default function Blog() {
    return (
        <div className={clsx(Style.BlogList)}>
            <BlogItem title="hello da world!!" time={9999999} preview={'https://i.imgur.com/IneKC6i.jpeg'} />
            <BlogItem title="hello da world!! hehehehehehehehehe" time={9999999} preview={'https://i.imgur.com/HZpt6BG.jpg'} />
            <BlogItem title="hello da world!!" time={9999999} preview={'https://i.imgur.com/KWmW1bL.jpeg'} />
            <BlogItem title="hello da world!!" time={9999999} preview={'https://i.imgur.com/NrhLo6S.jpeg'} />
            <BlogItem title="shh!!" time={9999999} preview={'https://i.imgur.com/kgLAREw.jpeg'} />
            <BlogItem title="aaaaaaaaaaaa" time={9999999} preview={'https://i.imgur.com/T0alu6m.jpeg'} />
        </div>
    );
}